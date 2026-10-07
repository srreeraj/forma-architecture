import FadeIn from "@/components/animations/FadeIn";

export default function SpaceSection() {
  return (
    <section id="space" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-muted">05</p>
              <h2 className="mt-5 font-serif text-display-md text-foreground">
                THE SPACE
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
                Architecture is not only seen. It is experienced.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={40}>
              <div className="mt-16 aspect-[16/10] w-full max-w-2xl border border-border bg-[#111]">
                <div className="relative flex h-full items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-25"
                    style={{
                      background: `
                        linear-gradient(105deg, transparent 45%, #c4b8a5 45%, #c4b8a5 45.4%, transparent 45.4%),
                        linear-gradient(75deg, transparent 45%, #c4b8a5 45%, #c4b8a5 45.4%, transparent 45.4%)
                      `,
                    }}
                  />
                  <p className="relative z-10 text-xs uppercase tracking-widest text-muted">
                    Camera enters the building
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}