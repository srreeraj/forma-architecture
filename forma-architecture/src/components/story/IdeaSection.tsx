export default function IdeaSection() {
  return (
    <section
      id="idea"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Left column – number + title */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">01</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE IDEA
            </h2>
          </div>

          {/* Right column – story + visual placeholder */}
          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Every space begins with an idea.
            </p>

            {/* Placeholder for the future drawing animation */}
            <div className="mt-16 aspect-[4/3] w-full max-w-2xl border border-border bg-[#111]">
              <div className="flex h-full items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent" />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              Visual placeholder — a single point that will become a drawing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}