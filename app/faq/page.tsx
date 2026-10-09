import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT and Cybersecurity FAQs",
  description:
    "Answers about working with X-BUC TECH: engagement types, the first consultation, pricing, remote support, and our IT, cybersecurity, cloud, compliance, and testing services.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Do you work with small and medium-sized businesses?",
    answer:
      "Yes. Our solutions can be tailored to organizations of different sizes and technology environments. We work with clients to identify their specific IT, cybersecurity, and infrastructure requirements and recommend appropriate solutions.",
  },
  {
    question: "Can I choose only the services my business needs?",
    answer:
      "Yes. X-BUC TECH can provide individual services or a combination of solutions based on your organization's needs, objectives, and existing technology environment.",
  },
  {
    question: "Do you offer one-time projects or ongoing support?",
    answer:
      "Both. Some clients need a defined project, such as a vulnerability assessment or a compliance gap analysis. Others need ongoing managed IT support. We agree the scope with you before work begins.",
  },
  {
    question: "What happens during the initial consultation?",
    answer:
      "We learn about your business, your current technology environment, and what you are trying to achieve or fix. Afterward we recommend practical next steps, and where it makes sense, a proposed scope of work.",
  },
  {
    question: "What should I prepare before contacting you?",
    answer:
      "Nothing formal is required. It helps to know roughly how many users and systems you have, what you already use, and what prompted you to reach out. Please do not send passwords or other sensitive credentials through the contact form.",
  },
  {
    question: "Can you work alongside our existing IT team?",
    answer:
      "Yes. We can support an existing team with specialist work, such as security assessments or compliance preparation, or take on specific responsibilities while your team keeps the rest.",
  },
  {
    question: "Do you support remote clients?",
    answer:
      "How we deliver a service depends on the work involved. Tell us your location and setup in your request, and we will confirm whether remote, on-site, or a combination is the right fit.",
  },
  {
    question: "How are services priced?",
    answer:
      "Pricing depends on the scope of the work, the size and complexity of your environment, and whether the engagement is a one-time project or ongoing support. We discuss pricing during your consultation.",
  },
  {
    question: "Can X-BUC TECH help with compliance?",
    answer:
      "Yes. We help organizations strengthen security controls and support compliance efforts aligned with HIPAA, PCI DSS, NIST, FISMA/NIST RMF, and ISO 27001. We support your effort, from gap assessment through audit preparation. We do not guarantee compliance, and certifications such as ISO 27001 are awarded by accredited external auditors.",
  },
  {
    question: "Does X-BUC TECH provide cloud services?",
    answer:
      "Yes. Our cloud and infrastructure services can include cloud administration, infrastructure management, cloud security, and backup and disaster recovery solutions.",
  },
  {
    question: "Do you offer software testing?",
    answer:
      "Yes. Our Software Testing & Quality Assurance services include manual testing, test automation, functional testing, regression testing, and defect reporting. Functional testing is not the same as penetration testing or a security assessment, which fall under our cybersecurity services.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
      <Header />
      <main className="bg-neutral-950 text-white">
        <section className="border-b border-white/10 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              Frequently asked questions
            </p>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Clear answers for your next technology decision.
              </h1>
              <p className="max-w-md text-base leading-7 text-neutral-400">
                See how engagements work, what to expect from a first consultation, and how our services fit different needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-5 py-6 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 text-xs font-semibold tracking-widest text-indigo-400">
                    0{index + 1}
                  </span>
                  <span className="flex-1 text-lg font-medium text-white sm:text-xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={20}
                    className="shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45 group-open:text-indigo-300"
                  />
                </summary>
                <p className="max-w-3xl pb-7 pl-13 text-base leading-7 text-neutral-400 sm:pl-[3.25rem]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-medium text-white sm:text-xl md:whitespace-nowrap">
                Have a question about your specific environment?
              </p>
              <p className="max-w-md text-sm leading-6 text-neutral-400 mt-2">
                We can start with your priorities and recommend the right next step.
              </p>
            </div>
            <Link href="/contact" className="site-button site-button--dark group shrink-0">
              Request a consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
