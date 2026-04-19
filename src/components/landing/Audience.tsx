const audience = [
  { emoji: "👗", label: "Instagram thrift stores" },
  { emoji: "🧁", label: "Home bakers" },
  { emoji: "🪡", label: "Small fashion brands" },
  { emoji: "📿", label: "Jewellery resellers" },
  { emoji: "🌿", label: "Skincare creators" },
  { emoji: "📷", label: "Creators selling via DMs" },
];

export function Audience() {
  return (
    <section id="who" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Who it's for
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Small sellers, big chats.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              If most of your customers find you on Instagram and your day is spent juggling DMs,
              UPI screenshots and a notebook — you're exactly who Orderbase is built for.
            </p>
            {/* DEMO DATA: Example testimonial for landing page */}
            <blockquote className="mt-8 border-l-2 border-terracotta pl-5 font-display text-xl italic leading-snug text-ink">
              "I went from missing 2-3 orders a week to zero. My DMs feel like a real shop now."
              <footer className="mt-3 text-sm not-italic text-muted-foreground">
                — Maya, @maya.thrifts (early user)
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {audience.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-border bg-paper/80 p-5 backdrop-blur transition-transform hover:-rotate-1 hover:scale-[1.02]"
              >
                <div className="text-3xl">{a.emoji}</div>
                <div className="mt-3 font-display text-base font-medium leading-tight">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
