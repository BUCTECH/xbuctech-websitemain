import { Capabilities } from "@/components/Capabilities";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { WhyUs } from "@/components/WhyUs";
import { MissionVision } from "@/components/MissionVision";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { HowWeWork } from "@/components/HowWeWork";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="border-b border-white/10 bg-neutral-950" id="about">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              / About us
            </p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart IT and Cyber Defense,<br />
              <em className="not-italic text-white">Tailored for You</em>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-neutral-300 mb-4">
              XBUC TECH provides innovative IT solutions and advanced cybersecurity services designed to help businesses operate efficiently, securely, and confidently in this digital world. We operate on the simple belief that security is not just a feature, but the vital foundation of every successful digital operation.
            </p>
            <p className="max-w-md text-base leading-7 text-neutral-300 mb-6">
              In an era of AI-driven and increasingly sophisticated cyberattacks, reactive security is no longer enough. Businesses face growing challenges from cyber threats, technology complexity, system vulnerabilities, and evolving compliance requirements. That&apos;s where XBUC TECH makes the difference. We combine managed IT, cybersecurity, network infrastructure and cloud solutions expertise to help businesses protect their technology, reduce risk, and maintain reliable operations.
            </p>
            <a className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1" href="#approach">
              See our approach <span className="ml-1">↘</span>
            </a>
          </div>
        </div>
      </section>

      <Approach />
      <WhyUs />
      <MissionVision />
      <ServiceHighlights />
      <HowWeWork />
      <Capabilities />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}