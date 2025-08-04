"use client";

import { motion } from "motion/react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: { label: string; enabled: boolean }[];
}

export function PricingCard({ title, price, description, features }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 border shadow hover:scale-[1.02] transition-transform"
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-2xl font-semibold my-2">{price}</div>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-1 text-sm mb-4">
        {features.map((f, i) => (
          <li key={i} className={f.enabled ? "text-green-600" : "text-muted-foreground"}>
            {f.enabled ? "✅" : "❌"} {f.label}
          </li>
        ))}
      </ul>
      <button
        disabled
        className="w-full bg-muted text-muted-foreground rounded p-2 cursor-not-allowed"
        title="Coming soon"
      >
        Get credits
      </button>
    </motion.div>
  );
}

