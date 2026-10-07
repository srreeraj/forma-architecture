import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function FinalReveal() {
  return (
    <section id="final" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-muted">
                THE RESULT
              </p>
              <h2 className="mt-6 font-serif text-display-lg text-foreground">
                An idea becomes a place.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
                The completed architectural space stands as the final expression
                of the original idea.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-12">
                <Link
                  href="mailto:hello@forma.example"
                  className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent-soft"
                >
                  Start a project
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.2} y={40}>
              <div className="aspect-[3/4] w-full border border-border bg-[#111]">
                <div className="flex h-full items-end justify-center p-10">
                  <div className="flex items-end gap-2">
                    <div className="h-32 w-12 bg-accent/15" />
                    <div className="h-48 w-16 bg-accent/25" />
                    <div className="h-40 w-10 bg-accent/20" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}