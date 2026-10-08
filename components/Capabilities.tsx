import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    label: "Vulnerability management",
    text: "We help businesses identify security vulnerabilities, prioritize them based on risk, and support remediation through actionable recommendations and technical assistance.",
    href: "/services/cybersecurity",
  },
  {
    label: "SSL/TLS certificates & web encryption",
    text: "We install, configure, and manage certificates so website traffic is encrypted. Encryption protects the connection, so it works best alongside vulnerability management.",
    href: "/services/cybersecurity",
  },
  {
    label: "Cybersecurity awareness training",
    text: "Scenario-based training that helps employees recognize threats and make safer decisions at work, covering phishing, safe AI use, data protection, and other everyday risks.",
    href: "/services/cybersecurity",
  },
  {
    label: "Network traffic visibility",
    text: "Better visibility into network traffic for faster troubleshooting and monitoring, using Gigamon and Keysight/Ixia network packet brokers.",
    href: "/services/network-visibility",
  },
  {
    label: "Backup & disaster recovery",
    text: "Backup protects your data and disaster recovery gets your systems running again. We help plan both, and recommend regular recovery testing.",
    href: "/services/cloud-infrastructure",
  },
  {
    label: "Compliance gap analysis",
    text: "We compare your current practices with the requirement you are working toward, such as HIPAA or PCI DSS, and show what needs attention first.",
    href: "/services/compliance-security",
  },
];

export function Capabilities() {
  return (
    <section className="border-t border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            What we solve
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Confidence in
            <br />
            <em className="not-italic text-indigo-400">every layer.</em>
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {specialties.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex cursor-pointer items-start gap-4 py-6 transition-colors hover:bg-white/[0.02] sm:gap-6"
            >
              <span className="pt-1 text-xs font-semibold tracking-widest text-neutral-600">
                0{index + 1}
              </span>
              <div className="flex-1">
                <strong className="text-base font-medium text-white sm:text-lg">
                  {item.label}
                </strong>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{item.text}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="mt-1.5 shrink-0 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-400"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
