import FadeIn from "@/components/animations/FadeIn";

export default function LightSection() {
  return (
    <section id="light" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-muted">06</p>
              <h2 className="mt-5 font-serif text-display-md text-foreground">
                THE LIGHT
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
                Light gives architecture its rhythm.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={40}>
              <div className="mt-16 aspect-[16/10] w-full max-w-2xl overflow-hidden border border-border bg-[#111]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a261f] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-muted">
                    Sunlight moves through the room
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