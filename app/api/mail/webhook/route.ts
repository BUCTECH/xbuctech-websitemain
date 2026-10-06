import { NextResponse } from "next/server";
import { getSenders, isAuthorized, recordEvent, resend, verifyWebhook, webhookEvents } from "@/lib/mail";

type ResendWebhook = {
  type: string;
  created_at: string;
  data: { email_id?: string; from?: string; to?: string[]; subject?: string };
};

// Resend → POST here. Register https://<your-domain>/api/mail/webhook in the Resend dashboard.
export async function POST(request: Request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret is not configured." }, { status: 503 });
  }

  const raw = await request.text();
  if (!verifyWebhook(raw, request.headers, secret)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let event: ResendWebhook;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  recordEvent({
    id: request.headers.get("svix-id") ?? crypto.randomUUID(),
    type: event.type,
    createdAt: event.created_at,
    emailId: event.data?.email_id,
    from: event.data?.from,
    to: event.data?.to,
    subject: event.data?.subject,
  });

  if (event.type === "email.received" && event.data?.email_id) {
    await forwardInbound(event.data.email_id).catch(() => undefined);
  }

  return NextResponse.json({ received: true });
}

// The mail portal polls this for the live activity feed.
export async function GET(request: Request) {
  if (!isAuthorized(request.headers.get("x-mail-key"))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  return NextResponse.json({ events: webhookEvents });
}

// Copies inbound mail to MAIL_FORWARD_TO so it also lands in a normal mailbox; replies go back to the original sender.
async function forwardInbound(emailId: string) {
  const forwardTo = process.env.MAIL_FORWARD_TO;
  if (!forwardTo || !process.env.RESEND_API_KEY) return;

  const response = await resend(`/emails/receiving/${emailId}`);
  if (!response.ok) return;
  const email: { from?: string; to?: string[]; subject?: string; text?: string; html?: string } = await response.json();

  const fromName = process.env.RESEND_FROM_NAME || "XBUC TECH";
  await resend("/emails", {
    method: "POST",
    body: JSON.stringify({
      from: `${fromName} Inbox <${getSenders()[0].email}>`,
      to: forwardTo.split(",").map((address) => address.trim()),
      reply_to: email.from,
      subject: `Fwd: ${email.subject || "(no subject)"}`,
      text: `From: ${email.from}\nTo: ${email.to?.join(", ")}\n\n${email.text || ""}`,
      ...(email.html ? { html: email.html } : {}),
    }),
  });
}
