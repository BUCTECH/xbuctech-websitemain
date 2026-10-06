import { NextRequest, NextResponse } from "next/server";
import { isAuthorized, resend } from "@/lib/mail";

// GET /api/mail/messages?folder=inbox|sent[&id=<email id>]
export async function GET(request: NextRequest) {
  if (!isAuthorized(request.headers.get("x-mail-key"))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  const params = request.nextUrl.searchParams;
  const base = params.get("folder") === "inbox" ? "/emails/receiving" : "/emails";
  const id = params.get("id");
  if (id && !/^[\w-]+$/.test(id)) {
    return NextResponse.json({ error: "Invalid message id." }, { status: 400 });
  }

  const response = await resend(id ? `${base}/${id}` : `${base}?limit=50`);
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return NextResponse.json({ error: result.message || "Could not load messages from Resend." }, { status: 502 });
  }

  return NextResponse.json(id ? { message: result } : { messages: result.data ?? [] });
}
