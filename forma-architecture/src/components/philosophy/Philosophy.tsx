import FadeIn from "@/components/animations/FadeIn";

export default function Philosophy() {
  return (
    <section id="philosophy" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-12 text-xs uppercase tracking-widest text-muted">
            OUR PHILOSOPHY
          </p>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <h2 className="max-w-4xl font-serif text-display-lg text-foreground">
            We believe architecture is not simply about constructing buildings.
            It is about shaping how people move, feel, gather and experience
            space.
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}