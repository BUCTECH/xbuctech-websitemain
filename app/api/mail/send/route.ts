import { NextResponse } from "next/server";
import { companyEmailPattern, isAuthorized, parseRecipients, resend } from "@/lib/mail";

const maxBodyLength = 10_000;

function isValidText(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(request: Request) {
  const fromName = process.env.RESEND_FROM_NAME || "X-BUC TECH";

  if (!process.env.RESEND_API_KEY || !process.env.MAIL_ACCESS_KEY) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { accessKey, from, subject, message } = body;
  if (!isAuthorized(accessKey)) {
    return NextResponse.json({ error: "Invalid mail access key." }, { status: 401 });
  }
  if (!isValidText(from, 320) || !companyEmailPattern.test(from)) {
    return NextResponse.json({ error: "The sender must use an @xbuctech.com address." }, { status: 400 });
  }

  const to = parseRecipients(body.to);
  const cc = parseRecipients(body.cc ?? []);
  const bcc = parseRecipients(body.bcc ?? []);
  if (!to?.length) {
    return NextResponse.json({ error: "Add at least one valid recipient." }, { status: 400 });
  }
  if (!cc || !bcc) {
    return NextResponse.json({ error: "One of the Cc/Bcc addresses is invalid." }, { status: 400 });
  }
  if (!isValidText(subject, 160) || !isValidText(message, maxBodyLength)) {
    return NextResponse.json({ error: "Subject and message are required." }, { status: 400 });
  }

  const resendResponse = await resend("/emails", {
    method: "POST",
    body: JSON.stringify({
      from: `${fromName} <${from}>`,
      to,
      ...(cc.length ? { cc } : {}),
      ...(bcc.length ? { bcc } : {}),
      subject,
      text: message,
      reply_to: from,
    }),
  });

  const result = await resendResponse.json().catch(() => ({}));
  if (!resendResponse.ok) {
    return NextResponse.json({ error: result.message || "Resend could not deliver the email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: result.id });
}
