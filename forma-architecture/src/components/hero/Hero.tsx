import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end section-padding"
    >
      {/* Soft architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 arch-grid opacity-60"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-widest text-muted">
          FORMA ARCHITECTURE STUDIO
        </p>

        <h1 className="max-w-5xl font-serif text-display-xl text-foreground">
          Architecture shaped by ideas.
        </h1>

        <p className="mt-10 max-w-md text-base leading-relaxed text-muted md:text-lg">
          We create spaces where structure, light and human experience become
          one.
        </p>

        <div className="mt-14">
          <Link
            href="#idea"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-foreground"
          >
            <span className="transition-opacity group-hover:opacity-70">
              Enter the story
            </span>
            <span
              aria-hidden="true"
              className="text-muted transition-transform group-hover:translate-y-1"
            >
              ↓
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}