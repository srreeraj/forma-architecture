export default function MaterialSection() {
  return (
    <section
      id="material"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted">04</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              THE MATERIAL
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Structure gains character through material.
            </p>

            {/* Material swatches placeholder */}
            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { name: "Concrete", tone: "bg-[#3a3a38]" },
                { name: "Glass", tone: "bg-[#1a1a1c] border border-accent/30" },
                { name: "Wood", tone: "bg-[#4a3f32]" },
                { name: "Metal", tone: "bg-[#2e2e30]" },
              ].map((mat) => (
                <div key={mat.name} className="space-y-3">
                  <div className={`aspect-square w-full ${mat.tone}`} />
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {mat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}