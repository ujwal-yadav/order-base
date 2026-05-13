import { useState } from "react";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Logo } from "@/components/landing/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { upsertProfile } from "@/lib/supabase/auth.server";

export const Route = createFileRoute("/onboarding")({
  beforeLoad: ({ context }) => {
    const ctx = context as { user: unknown; profile: unknown };
    if (!ctx.user) {
      throw redirect({ to: "/login" });
    }
    if (ctx.profile) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: OnboardingPage,
});

const onboardingSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  instagramHandle: z
    .string()
    .min(1, "Instagram handle is required")
    .regex(/^@?[\w.]{1,30}$/, "Enter a valid Instagram handle"),
});

type OnboardingForm = z.infer<typeof onboardingSchema>;

function OnboardingPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingForm>({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async (data: OnboardingForm) => {
    setServerError("");
    setLoading(true);

    try {
      const result = await upsertProfile({ data });
      if (!result.success) {
        setServerError(result.error);
        return;
      }
      await router.invalidate();
      await router.navigate({ to: "/dashboard" });
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-sunset opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-mustard/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg"
      >
        <div className="mb-8 text-center">
          <Logo className="mx-auto h-10 w-10" />
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Welcome to Orderbase
          </h1>
          <p className="mt-2 text-muted-foreground">
            Tell us a bit about your business to get started.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-border bg-paper p-8 shadow-lift"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-cream/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-terracotta" />
            Step 1 of 1
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business name</Label>
              <Input
                id="businessName"
                placeholder="e.g. Maya's Thrift Store"
                {...register("businessName")}
                disabled={loading}
              />
              {errors.businessName && (
                <p className="text-sm text-destructive">{errors.businessName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagramHandle">Instagram handle</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  @
                </span>
                <Input
                  id="instagramHandle"
                  placeholder="maya.thrifts"
                  className="pl-7"
                  {...register("instagramHandle")}
                  disabled={loading}
                />
              </div>
              {errors.instagramHandle && (
                <p className="text-sm text-destructive">{errors.instagramHandle.message}</p>
              )}
            </div>

            {serverError && <p className="text-sm text-destructive">{serverError}</p>}

            <Button type="submit" className="w-full rounded-full" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
