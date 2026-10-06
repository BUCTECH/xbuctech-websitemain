import { NextResponse } from "next/server";
import { getSenders, isAuthorized } from "@/lib/mail";

export async function POST(request: Request) {
  if (!process.env.MAIL_ACCESS_KEY) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  let body: { accessKey?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isAuthorized(body.accessKey)) {
    return NextResponse.json({ error: "Incorrect administrator password." }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    senders: getSenders(),
    webhookConfigured: Boolean(process.env.RESEND_WEBHOOK_SECRET),
    forwardTo: process.env.MAIL_FORWARD_TO || null,
  });
}
