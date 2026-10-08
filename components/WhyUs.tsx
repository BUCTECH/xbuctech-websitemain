import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Why XBUC TECH?
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Built with
            <br />
            <em className="not-italic text-indigo-400">context.</em>
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-start gap-6">
          <p className="text-lg leading-relaxed text-neutral-200 sm:text-xl">
            We combine hands-on IT experience with cybersecurity knowledge to
            provide solutions that are technically sound and
            business-focused.
          </p>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            Every environment is different, so we start by understanding
            yours before recommending anything.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
          >
            More about our background and approach
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
