export default function LineSection() {
  return (
    <section
      id="line"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">02</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE LINE
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              An idea becomes a language of lines.
            </p>

            {/* Floor-plan style placeholder */}
            <div className="mt-16 aspect-[16/10] w-full max-w-2xl border border-border bg-[#111] p-8">
              <div className="h-full w-full border border-dashed border-accent/40">
                <div className="grid h-full grid-cols-3 grid-rows-2 gap-px">
                  <div className="border border-accent/20" />
                  <div className="border border-accent/20" />
                  <div className="border border-accent/20" />
                  <div className="col-span-2 border border-accent/20" />
                  <div className="border border-accent/20" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              Visual placeholder — 2D architectural plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}