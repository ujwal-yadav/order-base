import { createFileRoute, Link, redirect, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LogOut, Loader2 } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/landing/Logo";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/supabase/auth";
import type { Profile } from "@/lib/supabase/types";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    const ctx = context as { user: unknown; profile: unknown };
    if (!ctx.user) {
      throw redirect({ to: "/login" });
    }
    if (!ctx.profile) {
      throw redirect({ to: "/onboarding" });
    }
  },
  component: DashboardPage,
});

function DashboardPage() {
  const router = useRouter();
  const { profile } = Route.useRouteContext() as { profile: Profile };
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    await router.invalidate();
    await router.navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-border bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="text-lg font-black tracking-normal">OrderBase</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{profile.business_name}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout} disabled={loggingOut}>
              {loggingOut ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4" />
              )}
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Welcome, {profile.business_name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Your dashboard is coming soon. We&apos;re building the tools to help you manage orders,
          track payments, and grow your business.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Orders", value: "—", hint: "Coming soon" },
            { label: "Customers", value: "—", hint: "Coming soon" },
            { label: "Revenue", value: "—", hint: "Coming soon" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-paper p-6 shadow-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
              <div className="mt-2 font-display text-3xl font-semibold text-ink">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.hint}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
