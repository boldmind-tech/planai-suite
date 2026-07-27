"use client";

import { ShoppingBag, Star, ShieldCheck } from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

const LISTINGS = [
  {
    title: "Wedding photography — full day",
    seller: "Lens & Light Studio",
    price: "₦150,000",
    rating: 4.9,
    verified: true,
  },
  {
    title: "Logo + brand kit template pack",
    seller: "AfroDesigns",
    price: "₦8,000",
    rating: 4.7,
    verified: true,
  },
  {
    title: "Native attire tailoring",
    seller: "Adire Threads",
    price: "₦45,000",
    rating: 4.6,
    verified: false,
  },
];

export default function MarketplacePage() {
  return (
    <div data-product="boldmind-marketplace" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <ShoppingBag size={19} className="text-[var(--product-primary)]" />{" "}
            Boldmind Marketplace
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Services and digital products — escrow-protected.
          </p>
        </div>
        <Button variant="primary" className="text-[13px]">
          List something
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {LISTINGS.map((l) => (
          <div key={l.title} className="card card-interactive">
            <div className="flex items-start justify-between">
              <div className="text-[13.5px] font-semibold leading-snug">
                {l.title}
              </div>
              {l.verified && (
                <ShieldCheck
                  size={15}
                  className="text-[var(--color-success)] shrink-0 ml-2"
                />
              )}
            </div>
            <div className="text-[12px] text-[var(--product-foreground)]/55 mt-1">
              {l.seller}
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[14px] font-bold tabular-nums">
                {l.price}
              </span>
              <span className="flex items-center gap-1 text-[12px] text-[var(--product-foreground)]/60">
                <Star
                  size={12}
                  className="fill-[var(--product-secondary)] text-[var(--product-secondary)]"
                />{" "}
                {l.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
