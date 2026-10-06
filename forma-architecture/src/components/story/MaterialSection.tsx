export default function MaterialSection() {
  return (
    <section id="material" className="arch-rule section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-muted">04</p>
            <h2 className="mt-5 font-serif text-display-md text-foreground">
              THE MATERIAL
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              Structure gains character through material.
            </p>

            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                { name: "Concrete", tone: "bg-[#3a3a38]" },
                { name: "Glass", tone: "bg-[#141416] border border-accent/25" },
                { name: "Wood", tone: "bg-[#4a3f32]" },
                { name: "Metal", tone: "bg-[#2c2c2e]" },
              ].map((mat) => (
                <div key={mat.name} className="space-y-3">
                  <div className={`aspect-square w-full ${mat.tone}`} />
                  <p className="text-xs uppercase tracking-widest text-muted">
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