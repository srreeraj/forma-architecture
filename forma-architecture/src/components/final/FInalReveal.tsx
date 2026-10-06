import Link from "next/link";

export default function FinalReveal() {
  return (
    <section
      id="final"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-wider text-muted">
              THE RESULT
            </p>
            <h2 className="mt-6 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
              An idea becomes a place.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
              The completed architectural space stands as the final expression
              of the original idea.
            </p>

            <div className="mt-12">
              <Link
                href="mailto:hello@forma.example"
                className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:bg-accent/5"
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* Final building silhouette placeholder */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] w-full border border-border bg-[#111]">
              <div className="flex h-full items-end justify-center p-10">
                <div className="flex items-end gap-2">
                  <div className="h-32 w-12 bg-accent/20" />
                  <div className="h-48 w-16 bg-accent/30" />
                  <div className="h-40 w-10 bg-accent/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}