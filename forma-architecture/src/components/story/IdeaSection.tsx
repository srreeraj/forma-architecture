export default function IdeaSection() {
  return (
    <section id="idea" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-muted">01</p>
            <h2 className="mt-5 font-serif text-display-md text-foreground">
              THE IDEA
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Every space begins with an idea.
            </p>

            <div className="mt-16 aspect-[4/3] w-full max-w-2xl border border-border bg-[#111]">
              <div className="flex h-full items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            </div>
            <p className="mt-5 text-xs tracking-wide text-muted">
              A single point that will become a drawing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}