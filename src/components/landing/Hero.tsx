import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { ChatToOrder } from "./ChatToOrder";
import { Logo } from "./Logo";

export function Hero() {
  const { user } = useAuth();

  return (
    <section className="relative overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-sunset opacity-25 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-mustard/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 lg:pt-8 lg:pb-32">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-2xl text-800 tracking-normal font-black!">OrderBase</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#who" className="transition-colors hover:text-foreground">
              Who it's for
            </a>
          </div>
          <Link
            to={user ? "/dashboard" : "/login"}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-transform hover:scale-105"
          >
            {user ? "Dashboard" : "Sign in"}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-paper/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3 w-3 text-terracotta" />
              For sellers who run their business in DMs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            >
              Turn{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">conversations</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-mustard/60 lg:h-4" />
              </span>{" "}
              into orders.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Orderbase is the operational layer for Instagram-first sellers. Track orders, send
              payment links, and manage customers — without forcing your business into a traditional
              ecommerce store.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-paper/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-paper"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/64?img=5",
                  "https://i.pravatar.cc/64?img=49",
                  "https://i.pravatar.cc/64?img=16",
                  "https://i.pravatar.cc/64?img=44",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <span>
                {/* TODO: Replace with actual waitlist count from backend */}
                <span className="font-semibold text-foreground">200+ sellers</span> already on the
                waitlist
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <ChatToOrder />
            <div className="pointer-events-none absolute -top-4 -right-4 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-cream shadow-lift animate-float">
              <MessageCircle className="h-3.5 w-3.5" />
              Live from DMs
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
