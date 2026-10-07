import FadeIn from "@/components/animations/FadeIn";

export default function FormSection() {
  return (
    <section id="form" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-muted">03</p>
              <h2 className="mt-5 font-serif text-display-md text-foreground">
                THE FORM
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
                Lines become volume. Volume becomes space.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={40}>
              <div className="mt-16 flex aspect-[4/3] w-full max-w-2xl items-end justify-center border border-border bg-[#111] p-12">
                <div className="flex items-end gap-3">
                  <div className="h-24 w-16 bg-accent/15" />
                  <div className="h-40 w-20 bg-accent/25" />
                  <div className="h-32 w-14 bg-accent/20" />
                </div>
              </div>
              <p className="mt-5 text-xs tracking-wide text-muted">
                3D massing volumes
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}