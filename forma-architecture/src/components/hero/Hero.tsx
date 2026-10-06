import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-32"
    >
      {/* Subtle architectural grid lines (pure CSS placeholder) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c4b8a5 1px, transparent 1px),
            linear-gradient(to bottom, #c4b8a5 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-wider text-muted">
          FORMA ARCHITECTURE STUDIO
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Architecture shaped by ideas.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          We create spaces where structure, light and human experience become
          one.
        </p>

        <div className="mt-12">
          <Link
            href="#idea"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-wider text-foreground transition-opacity hover:opacity-70"
          >
            <span>Enter the story</span>
            <span aria-hidden="true" className="text-muted">
              ↓
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}