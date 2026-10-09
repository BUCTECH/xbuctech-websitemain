import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/services";
import { Reveal } from "./Reveal";

export function ServiceHighlights() {
  return (
    <section className="border-t border-white/10 bg-neutral-900/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            What we do
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Smart IT &amp; cybersecurity solutions, <em className="not-italic text-indigo-400">tailored for you.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} as="article" delay={index * 70} className="group flex flex-col bg-neutral-950 p-7 transition-colors hover:bg-[#071A3D]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-indigo-300">{String(index + 1).padStart(2, "0")}</span>
                <ArrowUpRight size={18} className="text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
              </div>
              <h3 className="mt-10 text-xl font-semibold text-white">{service.shortTitle}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-indigo-200">{service.homeHeadline}</p>
              <p className="mt-4 flex-1 text-base leading-7 text-neutral-400">{service.homeText}</p>
              <Link href={`/services/${service.slug}`} className="mt-7 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white">
                Explore service
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
