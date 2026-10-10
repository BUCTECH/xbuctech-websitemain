import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How X-BUC TECH collects, uses, and protects the information you submit through this website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you submit the contact form, we collect the details you provide: your name, email address, company, job title, phone number, inquiry type, and message.",
      "If you email or call us, we collect the information you share in that communication.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use this information to respond to your request, discuss our services, and prepare proposals. We do not sell your personal information.",
    ],
  },
  {
    title: "Service providers",
    body: [
      "Contact form submissions are delivered through a third-party form service (ProForms). The contact page also embeds a Google Maps view of our office, and Google may collect information according to its own privacy policy when that map loads.",
    ],
  },
  {
    title: "What not to send us",
    body: [
      "Please do not include passwords, account numbers, health information, or other highly sensitive data in the contact form or in an initial email. If we need to exchange sensitive information, we will agree on an appropriate method first.",
    ],
  },
  {
    title: "Retention and your choices",
    body: [
      "We keep inquiry information for as long as needed to respond to you and manage any resulting business relationship. To ask us to access, correct, or delete information you have sent us, contact info@xbuctech.com.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date below shows when it was last revised.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Legal
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-400">
            This policy explains how X-BUC TECH handles the information you
            share with us through this website.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-base leading-7 text-neutral-400">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-500">
            Questions? Email{" "}
            <a className="text-indigo-300 hover:text-white" href="mailto:info@xbuctech.com">
              info@xbuctech.com
            </a>
            . Last updated October 8, 2026.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
