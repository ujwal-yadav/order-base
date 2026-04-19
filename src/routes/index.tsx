import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Features } from "@/components/landing/Features";
import { Audience } from "@/components/landing/Audience";
import { Waitlist, Footer } from "@/components/landing/Waitlist";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orderbase — Turn Instagram DMs into structured orders" },
      {
        name: "description",
        content:
          "Orderbase is the lightweight operational backend for Instagram-first sellers. Track orders, send payment links, and manage customers — all from your DMs.",
      },
      { property: "og:title", content: "Orderbase — Conversational commerce, structured." },
      {
        property: "og:description",
        content:
          "The operational layer for sellers who run their business through Instagram and WhatsApp DMs.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Problem />
      <DashboardPreview />
      <Features />
      <Audience />
      <Waitlist />
      <Footer />
    </main>
  );
}
