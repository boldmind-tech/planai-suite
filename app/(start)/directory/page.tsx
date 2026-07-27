"use client";

import { useState } from "react";
import { Search, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@boldmindng/ui";

const RESULTS = [
  {
    name: "Zenith Fashion House",
    category: "Fashion & Apparel",
    lga: "Ikeja, Lagos",
    verified: true,
  },
  {
    name: "Suya Spot Catering",
    category: "Food & Catering",
    lga: "Surulere, Lagos",
    verified: true,
  },
  {
    name: "Apex Textiles Ltd",
    category: "Wholesale Supplier",
    lga: "Kano",
    verified: false,
  },
];

export default function BusinessDiscoveryPage() {
  const [query, setQuery] = useState("");

  return (
    <div data-product="business-discovery" className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">
          Business Discovery Directory
        </h1>
        <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
          Verified Nigerian businesses, suppliers, and contacts — by category
          and LGA.
        </p>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--product-foreground)]/40"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, category, or LGA..."
            className="input pl-9"
          />
        </div>
        <Button variant="primary" className="text-[13px]">
          Search
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {RESULTS.map((r) => (
          <div key={r.name} className="card">
            <div className="flex items-start justify-between">
              <Building2 size={18} className="text-[var(--product-primary)]" />
              {r.verified && (
                <span className="flex items-center gap-1 text-[11px] font-medium text-[var(--color-success)]">
                  <CheckCircle2 size={12} /> Verified
                </span>
              )}
            </div>
            <div className="text-[13.5px] font-semibold mt-2">{r.name}</div>
            <div className="text-[12px] text-[var(--product-foreground)]/55 mt-0.5">
              {r.category}
            </div>
            <div className="text-[12px] text-[var(--product-foreground)]/45 mt-0.5">
              {r.lga}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[12px] text-[var(--product-foreground)]/45">
        47 of 50 free searches used this month.
      </p>
    </div>
  );
}
