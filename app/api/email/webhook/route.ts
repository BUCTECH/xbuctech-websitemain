// Compatibility endpoint for the Resend webhook URL configured as
// /api/email/webhook. Keep the implementation in the mail route so both
// URLs share signature verification and event handling.
export { GET, POST } from "../../mail/webhook/route";
