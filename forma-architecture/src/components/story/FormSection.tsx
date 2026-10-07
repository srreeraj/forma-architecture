"use client";

import FadeIn from "@/components/animations/FadeIn";
import ArchitectureScene from "@/components/3d/ArchitectureScene";
import ScrollStory from "@/components/animations/ScrollStory";

export default function FormSection() {
  return (
    <section id="form" className="arch-rule">
      {/* This tall container creates the scroll distance */}
      <div id="story-scroll" className="relative h-[300vh]">
        {/* Sticky viewport that stays fixed while we scroll */}
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:px-10">
            
            {/* Left text column */}
            <div className="flex flex-col justify-center md:col-span-4">
              <FadeIn>
                <p className="text-xs uppercase tracking-widest text-muted">03</p>
                <h2 className="mt-5 font-serif text-display-md text-foreground">
                  THE FORM
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mt-8 max-w-sm text-base leading-relaxed text-muted md:text-lg">
                  Lines become volume. Volume becomes space.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-6 text-xs tracking-wide text-muted">
                  Scroll to move through the architecture
                </p>
              </FadeIn>
            </div>

            {/* Right side – 3D scene controlled by scroll */}
            <div className="md:col-span-8">
              <div className="h-[55vh] w-full overflow-hidden border border-border md:h-[70vh]">
                <ScrollStory>
                  {(progress) => <ArchitectureScene progress={progress} />}
                </ScrollStory>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}