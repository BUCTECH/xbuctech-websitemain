"use client";

import { Check, Copy, RefreshCw, Webhook } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type WebhookEvent = { id: string; type: string; createdAt: string; from?: string; to?: string[]; subject?: string };

const eventTone: Record<string, string> = {
  "email.delivered": "bg-[#eaf8ef] text-[#2a9d55]",
  "email.received": "bg-[#eaf1ff] text-[#1E6FFF]",
  "email.opened": "bg-[#f3eeff] text-[#7c4dff]",
  "email.clicked": "bg-[#f3eeff] text-[#7c4dff]",
  "email.bounced": "bg-red-50 text-red-600",
  "email.complained": "bg-red-50 text-red-600",
  "email.failed": "bg-red-50 text-red-600",
};

export default function WebhookPanel({ accessKey, configured, forwardTo }: { accessKey: string; configured: boolean; forwardTo: string | null }) {
  const [endpoint] = useState(() => (typeof window === "undefined" ? "" : window.location.origin) + "/api/mail/webhook");
  const [copied, setCopied] = useState(false);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(
    () =>
      fetch("/api/mail/webhook", { headers: { "x-mail-key": accessKey } })
        .then(async (response) => { if (response.ok) setEvents((await response.json()).events); })
        .catch(() => undefined)
        .finally(() => setLoading(false)),
    [accessKey],
  );

  useEffect(() => {
    load();
    const timer = setInterval(load, 15_000);
    return () => clearInterval(timer);
  }, [load]);

  async function copy() {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const steps = [
    { done: configured, text: "Open resend.com → Webhooks → Add Endpoint and paste the URL above." },
    { done: configured, text: "Select events: email.received, email.delivered, email.bounced, email.opened (or all)." },
    { done: configured, text: "Copy the signing secret (whsec_…) into RESEND_WEBHOOK_SECRET and redeploy." },
    { done: Boolean(forwardTo), text: "Optional: set MAIL_FORWARD_TO to copy inbound mail to a personal inbox." },
  ];

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      <section className="rounded-2xl border border-[#dfe5ed] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf1ff] text-[#1E6FFF]"><Webhook size={20} /></div><div><h2 className="font-semibold text-[#071A3D]">Endpoint</h2><p className="text-xs text-[#8a96a8]">Signed with Svix, verified on every request</p></div></div>
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-[#dfe5ed] bg-[#f7f9fb] p-1.5 pl-4">
          <code className="flex-1 truncate text-sm text-[#071A3D]">{endpoint}</code>
          <button type="button" onClick={copy} className="inline-flex items-center gap-1.5 rounded-md bg-[#071A3D] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0d2a5e]">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied" : "Copy"}</button>
        </div>
        <ol className="mt-6 grid gap-3">
          {steps.map((step, index) => (
            <li key={step.text} className="flex gap-3 text-sm text-[#52627a]">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${step.done ? "bg-[#36C36A] text-[#071A3D]" : "bg-[#eef2f6] text-[#8a96a8]"}`}>{step.done ? <Check size={13} /> : index + 1}</span>
              {step.text}
            </li>
          ))}
        </ol>
      </section>

      <section className="overflow-hidden rounded-2xl border border-[#dfe5ed] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#e8edf2] px-5 py-4">
          <div><h2 className="font-semibold text-[#071A3D]">Live activity</h2><p className="text-xs text-[#8a96a8]">Latest 50 events since the server started</p></div>
          <button type="button" onClick={() => { setLoading(true); load(); }} aria-label="Refresh" className="rounded-lg p-2 text-[#52627a] hover:bg-[#f0f4f8]"><RefreshCw size={15} className={loading ? "animate-spin" : ""} /></button>
        </div>
        {events.length ? (
          <ul className="max-h-[440px] divide-y divide-[#eef2f6] overflow-y-auto">
            {events.map((event) => (
              <li key={event.id} className="grid gap-1 px-5 py-3">
                <span className="flex items-center justify-between gap-3">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${eventTone[event.type] ?? "bg-[#eef2f6] text-[#52627a]"}`}>{event.type}</span>
                  <span className="text-xs text-[#8a96a8]">{new Date(event.createdAt).toLocaleString()}</span>
                </span>
                <span className="truncate text-sm text-[#071A3D]">{event.subject || "(no subject)"}</span>
                <span className="truncate text-xs text-[#8a96a8]">{event.from} → {event.to?.join(", ")}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-5 py-16 text-center text-sm text-[#8a96a8]">{configured ? "Waiting for the first event from Resend…" : "Add RESEND_WEBHOOK_SECRET to start receiving events."}</p>
        )}
      </section>
    </div>
  );
}
