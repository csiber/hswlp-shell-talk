import { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Simple, credit-based pricing.</h1>
      <p className="text-muted-foreground mt-2">
        Pay only for what you use. No subscriptions, no surprises.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <PricingCard
          title="Starter"
          price="100 credits / €5"
          description="Ideal for occasional calls."
          features={[
            { label: "No monthly fees", enabled: true },
            { label: "Call history access", enabled: true },
            { label: "Priority support", enabled: false },
          ]}
        />
        <PricingCard
          title="Pro"
          price="500 credits / €20"
          description="Great for regular use."
          features={[
            { label: "Everything in Starter", enabled: true },
            { label: "Early feature access", enabled: true },
            { label: "Dedicated support", enabled: false },
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="2000 credits / €65"
          description="Best for teams and heavy users."
          features={[
            { label: "All features unlocked", enabled: true },
            { label: "Priority support", enabled: true },
            { label: "Usage analytics", enabled: true },
          ]}
        />
      </div>
    </main>
  );
}

