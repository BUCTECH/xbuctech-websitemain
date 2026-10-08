import { CONSULTATION_CTA, type Service } from "@/lib/services";
import Link from "next/link";
import { ServiceLink } from "./ServiceLink";
import { ArrowUpRight, ArrowRight, Check, Info, Sparkles } from "lucide-react";

export function ServiceDetail({ service }: { service: Service }) {
  const accentStyle = { "--service-accent": service.accent } as React.CSSProperties;

  return (
    <main className="bg-neutral-950" style={accentStyle}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-300">{service.shortTitle}</span>
        </div>
      </div>

      {/* Header layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--service-accent)" }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: "var(--service-accent)" }}
            />
            {service.eyebrow}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>

          <p
            className="mt-4 max-w-lg text-xl font-medium leading-relaxed sm:text-2xl"
            style={{ color: "var(--service-accent)" }}
          >
            {service.tagline}
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-300 sm:text-lg">
            {service.description}
          </p>

          <ServiceLink
            href={`/contact?service=${service.slug}`}
            className="site-button group mt-9"
            style={{ backgroundColor: "var(--service-accent)" }}
          >
            {CONSULTATION_CTA}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </ServiceLink>
        </div>

        {/* What you receive */}
        <div
          className="relative flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-white/10 p-6"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--service-accent) 18%, transparent), transparent 60%)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--service-accent)" }}
          >
            What you receive
          </p>
          <ul className="flex flex-col gap-3">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-neutral-200"
              >
                <Check
                  size={16}
                  className="mt-1 shrink-0"
                  style={{ color: "var(--service-accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-t border-white/10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8 lg:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--service-accent)" }}
          >
            <Sparkles size={13} />
            The work
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {service.workHeading[0]}
            <br />
            <em className="not-italic text-neutral-500">{service.workHeading[1]}</em>
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-neutral-400">
            {service.detail}
          </p>

          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {service.workstreams.map((workstream, index) => (
              <div key={workstream.name} className="flex items-start gap-4 py-5">
                <span
                  className="pt-0.5 text-xs font-semibold tabular-nums"
                  style={{ color: "var(--service-accent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white">
                    {workstream.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {workstream.description}
                  </p>
                  <Link
                    href={`/contact?service=${service.slug}&focus=${encodeURIComponent(workstream.name)}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-300 transition-colors hover:text-white"
                  >
                    Ask about this
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <Info
              size={18}
              className="mt-0.5 shrink-0"
              style={{ color: "var(--service-accent)" }}
            />
            <div>
              <p className="text-sm font-semibold text-white">Good to know</p>
              <p className="mt-1 text-sm leading-6 text-neutral-400">
                {service.scopeNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-6 lg:px-8">
        <p
          className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--service-accent)" }}
        >
          <span
            className="h-px w-6"
            style={{ backgroundColor: "var(--service-accent)" }}
          />
          Next step
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {service.closing[0]}
          <br />
          <em className="not-italic" style={{ color: "var(--service-accent)" }}>
            {service.closing[1]}
          </em>
        </h2>

        <ServiceLink
          href={`/contact?service=${service.slug}`}
          className="site-button group mx-auto mt-9"
          style={{ backgroundColor: "var(--service-accent)" }}
        >
          {CONSULTATION_CTA}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </ServiceLink>
      </section>
    </main>
  );
}
