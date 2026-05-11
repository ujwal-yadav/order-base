import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import { LogOut, Package, Users, IndianRupee } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/landing/Logo";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="animate-pulse-dot h-3 w-3 rounded-full bg-terracotta" />
      </div>
    );
  }

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-border/60 bg-paper shadow-soft">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-black tracking-normal">OrderBase</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{user.email}</span>
            <Button onClick={handleSignOut} variant="outline" size="sm" className="rounded-full">
              <LogOut className="mr-1.5 h-3.5 w-3.5" />
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-semibold text-ink">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome back, {user.email?.split("@")[0]}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border/50 bg-paper p-6">
            <Package className="mb-3 h-8 w-8 text-terracotta" />
            <h3 className="text-lg font-semibold">Orders</h3>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">0</p>
            <p className="mt-1 text-sm text-muted-foreground">Coming soon</p>
          </Card>

          <Card className="border-border/50 bg-paper p-6">
            <IndianRupee className="mb-3 h-8 w-8 text-sage" />
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">&#8377;0</p>
            <p className="mt-1 text-sm text-muted-foreground">Coming soon</p>
          </Card>

          <Card className="border-border/50 bg-paper p-6">
            <Users className="mb-3 h-8 w-8 text-mustard" />
            <h3 className="text-lg font-semibold">Customers</h3>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">0</p>
            <p className="mt-1 text-sm text-muted-foreground">Coming soon</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
