export default function FormSection() {
  return (
    <section
      id="form"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">03</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE FORM
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Lines become volume. Volume becomes space.
            </p>

            {/* Massing model placeholder */}
            <div className="mt-16 flex aspect-[4/3] w-full max-w-2xl items-end justify-center border border-border bg-[#111] p-12">
              <div className="flex items-end gap-3">
                <div className="h-24 w-16 bg-accent/20" />
                <div className="h-40 w-20 bg-accent/30" />
                <div className="h-32 w-14 bg-accent/25" />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              Visual placeholder — 3D massing volumes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}