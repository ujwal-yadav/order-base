import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "./Logo";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      // if (!response.ok) throw new Error('Failed to join waitlist');

      // Simulated success for now
      await new Promise(resolve => setTimeout(resolve, 500));
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-terracotta/30 blur-3xl" />
      <div className="absolute -right-20 top-0 h-[300px] w-[300px] rounded-full bg-mustard/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
          Early access
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Stop running your shop
          <br />
          out of <em className="text-clay">three different chats</em>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/70">
          Orderbase is launching soon for Indian Instagram sellers. Drop your email — we'll let you
          in early with founding-seller pricing.
        </p>

        {!submitted ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={loading}
                className="flex-1 rounded-full border border-cream/15 bg-cream/5 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-mustard focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Joining..." : "Join waitlist"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            {error && (
              <p className="mt-3 text-sm text-destructive">{error}</p>
            )}
          </>
        ) : (
          <div className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-sage/20 px-5 py-3 text-sm text-cream">
            <Check className="h-4 w-4 text-sage" />
            You're on the list. We'll be in touch soon.
          </div>
        )}

        <p className="mt-5 text-xs text-cream/50">No spam. Just one email when we open access.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="font-display text-base font-semibold">Orderbase</span>
          <span className="ml-2 text-xs text-muted-foreground">
            · Conversational commerce, structured.
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Orderbase. Made in India.
        </div>
      </div>
    </footer>
  );
}
