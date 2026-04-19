import { motion } from "framer-motion";
import { Check } from "lucide-react";

// DEMO DATA: Example chat conversation for landing page demo
const messages = [
  { from: "her", text: "Hi! Is the cream linen co-ord still available in M? 🤍", delay: 0 },
  { from: "you", text: "Yes! ₹1,490 + ₹80 shipping. Want me to confirm?", delay: 0.5 },
  { from: "her", text: "Yes please, ship to Bangalore 🙏", delay: 1 },
];

export function ChatToOrder() {
  return (
    <div className="relative">
      {/* phone mock */}
      <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-border bg-paper p-3 shadow-lift">
        <div className="rounded-[1.5rem] bg-cream p-4">
          <div className="flex items-center gap-3 border-b border-border/60 pb-3">
            <div className="h-9 w-9 rounded-full bg-gradient-sunset" />
            <div>
              <div className="text-sm font-semibold">@maya.thrifts</div>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse-dot" />
                Active now
              </div>
            </div>
          </div>

          <div className="space-y-2 py-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: m.delay }}
                className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                    m.from === "you"
                      ? "rounded-br-sm bg-ink text-cream"
                      : "rounded-bl-sm bg-secondary text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* arrow + order card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute -bottom-8 -right-2 w-[280px] rotate-2 rounded-2xl border border-border bg-paper p-4 shadow-lift sm:-right-8 sm:w-[320px]"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Order #1042
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-status-paid/15 px-2 py-0.5 text-[10px] font-semibold text-status-paid">
            <Check className="h-2.5 w-2.5" />
            Payment received
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-clay to-mustard" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">Cream linen co-ord · M</div>
            <div className="text-xs text-muted-foreground">Aanya · Bangalore</div>
          </div>
          <div className="text-right">
            <div className="font-display text-lg font-semibold">₹1,570</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 border-t border-border/60 pt-3">
          {["Pending", "Paid", "Packed", "Shipped"].map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-1">
              <div
                className={`h-1.5 flex-1 rounded-full ${i <= 1 ? "bg-status-paid" : "bg-border"}`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
