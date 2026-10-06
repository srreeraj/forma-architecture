export default function LightSection() {
  return (
    <section
      id="light"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">06</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE LIGHT
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Light gives architecture its rhythm.
            </p>

            {/* Light & shadow placeholder */}
            <div className="mt-16 aspect-[16/10] w-full max-w-2xl overflow-hidden border border-border bg-[#111]">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a261f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-xs uppercase tracking-wider text-muted">
                  Sunlight moves through the room
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}