export default function SpaceSection() {
  return (
    <section
      id="space"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">05</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE SPACE
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Architecture is not only seen. It is experienced.
            </p>

            {/* Interior perspective placeholder */}
            <div className="mt-16 aspect-[16/10] w-full max-w-2xl border border-border bg-[#111]">
              <div className="relative flex h-full items-center justify-center">
                {/* Simple vanishing-point lines */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `
                      linear-gradient(105deg, transparent 45%, #c4b8a5 45%, #c4b8a5 45.5%, transparent 45.5%),
                      linear-gradient(75deg, transparent 45%, #c4b8a5 45%, #c4b8a5 45.5%, transparent 45.5%)
                    `,
                  }}
                />
                <p className="relative z-10 text-xs uppercase tracking-wider text-muted">
                  Camera enters the building
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}