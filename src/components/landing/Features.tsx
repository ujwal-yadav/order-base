import { Link2, ListChecks, Users, Layers, Zap, MessageCircleHeart } from "lucide-react";

const features = [
  {
    icon: ListChecks,
    title: "Orders from conversations",
    text: "Spin up an order in seconds — product, qty, price, customer, delivery. No catalogs, no themes.",
  },
  {
    icon: Link2,
    title: "Payment links, not screenshots",
    text: "Send a real link. Status updates automatically when the customer pays. Goodbye fake refs.",
  },
  {
    icon: Layers,
    title: "Clear order states",
    text: "Pending → Paid → Packed → Shipped → Delivered. You always know what's next.",
  },
  {
    icon: Users,
    title: "Customer history",
    text: "Each buyer has a profile with past orders, preferences and chat context.",
  },
  {
    icon: MessageCircleHeart,
    title: "Unified inbox",
    text: "Instagram DMs, WhatsApp, even bio-link forms — one place to see them all.",
  },
  {
    icon: Zap,
    title: "Lightweight on purpose",
    text: "No catalog builder. No store theme. Just operational clarity for chat-first sellers.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            What it does
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built for the way you <em>actually</em> sell.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Not another Shopify. Not another POS. Orderbase structures everything that happens after
            a customer says “I'll take it.”
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-cream/40 p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-cream">
                <f.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              <div className="absolute right-4 top-4 font-display text-xs text-muted-foreground/50">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
