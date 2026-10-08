export function ServicesHero() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Services
          </p>
          <span className="text-sm leading-snug text-neutral-500">
            Six service areas,
            <br className="hidden sm:block" /> one connected approach
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          IT and cybersecurity services,
          <br />
          <em className="not-italic text-indigo-400">built around your business.</em>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          From cybersecurity and managed IT to cloud infrastructure, network
          visibility, compliance support, and software testing, choose one
          service or combine several. Each page explains the work involved and
          what you receive.
        </p>
      </div>
    </section>
  );
}
