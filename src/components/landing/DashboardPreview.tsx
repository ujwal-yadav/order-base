import { motion } from "framer-motion";
import { Search, MoreHorizontal, Plus, Package, IndianRupee, TrendingUp } from "lucide-react";

// DEMO DATA: Replace with actual order data from backend
const orders = [
  {
    id: "1048",
    customer: "Riya M.",
    item: "Vintage denim jacket",
    amt: 2200,
    status: "pending",
    channel: "IG",
  },
  {
    id: "1047",
    customer: "Aanya K.",
    item: "Cream linen co-ord · M",
    amt: 1570,
    status: "paid",
    channel: "IG",
  },
  {
    id: "1046",
    customer: "Tara D.",
    item: "Strawberry bento cake",
    amt: 850,
    status: "packed",
    channel: "WA",
  },
  {
    id: "1045",
    customer: "Neha S.",
    item: "Block-print kurta · L",
    amt: 1340,
    status: "shipped",
    channel: "IG",
  },
  {
    id: "1044",
    customer: "Ishita R.",
    item: "Y2K mesh top × 2",
    amt: 980,
    status: "delivered",
    channel: "WA",
  },
];

const statusStyles: Record<string, string> = {
  pending: "bg-status-pending/15 text-status-pending",
  paid: "bg-status-paid/15 text-status-paid",
  packed: "bg-status-packed/15 text-status-packed",
  shipped: "bg-status-shipped/15 text-status-shipped",
  delivered: "bg-status-delivered/15 text-status-delivered",
};

export function DashboardPreview() {
  return (
    <section id="how" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              The dashboard
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              One view of every <em>order</em>, every <em>customer</em>, every <em>rupee</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether the customer messaged on Instagram or WhatsApp, the order lands in the same
              place. Statuses are clear. Payment is tracked. You always know what to ship today.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Create an order in 10 seconds from any DM",
                "Generate a payment link — no more screenshot guessing",
                "See every customer's full history at a glance",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span className="text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-border bg-paper shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-border bg-cream/50 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-mustard" />
                <span className="h-2.5 w-2.5 rounded-full bg-sage" />
              </div>
              <div className="rounded-full bg-paper px-3 py-1 text-xs text-muted-foreground">
                app.orderbase.in / orders
              </div>
              <div className="w-12" />
            </div>

            <div className="grid grid-cols-3 gap-3 border-b border-border p-5">
              {/* DEMO DATA: Replace with actual stats from backend */}
              {[
                { label: "Today's orders", value: "12", icon: Package, hint: "+3 from yesterday" },
                { label: "Awaiting payment", value: "₹4,890", icon: IndianRupee, hint: "5 orders" },
                { label: "This week", value: "₹38,420", icon: TrendingUp, hint: "↑ 22%" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-cream/40 p-3.5">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-[11px] font-medium uppercase tracking-wider">
                      {s.label}
                    </span>
                    <s.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="mt-1.5 font-display text-2xl font-semibold">{s.value}</div>
                  <div className="text-[11px] text-sage">{s.hint}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-5 pt-5">
              <div className="flex items-center gap-2 rounded-full border border-border bg-cream/50 px-3 py-1.5 text-xs text-muted-foreground">
                <Search className="h-3.5 w-3.5" />
                Search orders, customers…
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                <Plus className="h-3.5 w-3.5" /> New order
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="grid grid-cols-[60px_1.4fr_1fr_90px_110px_24px] items-center gap-3 px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <div>Order</div>
                <div>Item</div>
                <div>Customer</div>
                <div className="text-right">Amount</div>
                <div>Status</div>
                <div />
              </div>

              <div className="space-y-1">
                {orders.map((o, i) => (
                  <motion.div
                    key={o.id}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="grid grid-cols-[60px_1.4fr_1fr_90px_110px_24px] items-center gap-3 rounded-xl border border-transparent px-2 py-3 transition-colors hover:border-border hover:bg-cream/40"
                  >
                    <div className="font-mono text-xs text-muted-foreground">#{o.id}</div>
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="h-7 w-7 shrink-0 rounded-md bg-gradient-to-br from-clay to-mustard" />
                      <div className="truncate text-sm font-medium">{o.item}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="truncate">{o.customer}</span>
                      <span
                        className={`rounded px-1 py-0.5 text-[9px] font-bold ${
                          o.channel === "IG"
                            ? "bg-terracotta/15 text-terracotta"
                            : "bg-sage/20 text-sage"
                        }`}
                      >
                        {o.channel}
                      </span>
                    </div>
                    <div className="text-right font-display text-sm font-semibold">
                      ₹{o.amt.toLocaleString("en-IN")}
                    </div>
                    <div>
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${statusStyles[o.status]}`}
                      >
                        {o.status}
                      </span>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
