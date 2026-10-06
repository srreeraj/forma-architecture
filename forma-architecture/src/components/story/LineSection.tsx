export default function LineSection() {
  return (
    <section id="line" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-muted">02</p>
            <h2 className="mt-5 font-serif text-display-md text-foreground">
              THE LINE
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              An idea becomes a language of lines.
            </p>

            <div className="mt-16 aspect-[16/10] w-full max-w-2xl border border-border bg-[#111] p-8">
              <div className="h-full w-full border border-dashed border-accent/30">
                <div className="grid h-full grid-cols-3 grid-rows-2 gap-px">
                  <div className="border border-accent/15" />
                  <div className="border border-accent/15" />
                  <div className="border border-accent/15" />
                  <div className="col-span-2 border border-accent/15" />
                  <div className="border border-accent/15" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-xs tracking-wide text-muted">
              2D architectural plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}