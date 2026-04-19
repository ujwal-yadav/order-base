import { MessageSquare, AlertTriangle, FileSpreadsheet, Receipt } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    title: "Orders lost in chat scrolls",
    text: "Confirmed orders disappear under 40 new DMs by evening.",
  },
  {
    icon: Receipt,
    title: "Fake payment screenshots",
    text: "You ship the order. Then notice the UPI ref doesn't match.",
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheets that nobody updates",
    text: "Half the orders are in Notes app, half in your head.",
  },
  {
    icon: AlertTriangle,
    title: "No idea what to ship today",
    text: "Packed? Paid? Pending? Every status check is a chat dive.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            The mess
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Instagram is great at <em className="text-clay">discovery</em>.
            <br />
            Terrible at <em className="text-clay">operations</em>.
          </h2>
          <p className="mt-6 text-lg text-cream/70">
            Sellers running thrift stores, home bakeries, small fashion labels and creator brands
            all hit the same wall. The intent to buy lives in chat. Everything after it is chaos.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group relative bg-ink p-6 transition-colors hover:bg-cream/5"
            >
              <p.icon className="h-6 w-6 text-mustard" strokeWidth={1.5} />
              <div className="mt-6 font-display text-xl font-medium leading-snug">{p.title}</div>
              <div className="mt-2 text-sm text-cream/60">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
