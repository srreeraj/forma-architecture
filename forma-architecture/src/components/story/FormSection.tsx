import FadeIn from "@/components/animations/FadeIn";
import ArchitectureScene from "@/components/3d/ArchitectureScene";

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
              <div className="mt-16 w-full overflow-hidden border border-border">
                {/* 3D Scene lives here for now */}
                <ArchitectureScene />
              </div>
              <p className="mt-5 text-xs tracking-wide text-muted">
                Procedural architectural massing (drag to rotate)
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}