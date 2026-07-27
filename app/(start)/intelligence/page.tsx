"use client";

import { LineChart, FileText, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@boldmindng/ui";

export default function BusinessIntelligencePage() {
  return (
    <div data-product="business-intelligence" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <LineChart size={19} className="text-[var(--product-primary)]" />{" "}
            Business Intelligence Suite
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Bank-ready plans, cashflow projections, and unified analytics.
          </p>
        </div>
        <Button variant="primary" className="text-[13px]">
          Generate business plan
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <FileText size={17} className="text-[var(--product-primary)] mb-2" />
          <div className="text-[13.5px] font-semibold">Business plan</div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            10-slide pitch deck, SWOT, and 3-year financials — Nigerian market
            context.
          </p>
          <Button variant="secondary" className="mt-3 text-[12.5px]">
            Start
          </Button>
        </div>
        <div className="card">
          <TrendingUp
            size={17}
            className="text-[var(--product-secondary)] mb-2"
          />
          <div className="text-[13.5px] font-semibold">Cashflow forecast</div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            12-month projection with best/worst/base case scenario planning.
          </p>
          <Button variant="secondary" className="mt-3 text-[12.5px]">
            Model it
          </Button>
        </div>
        <div className="card border-[color-mix(in_srgb,var(--color-warning)_40%,transparent)]">
          <AlertTriangle
            size={17}
            className="text-[var(--color-warning)] mb-2"
          />
          <div className="text-[13.5px] font-semibold">Weekly AI digest</div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            Revenue dipped 8% vs last week — mostly from AmeboGist ad clicks
            slowing down.
          </p>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--product-muted)] text-[13px] font-semibold">
          Revenue this quarter
        </div>
        <div className="p-4 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Jul", value: "₦1.1M" },
            { label: "Aug", value: "₦1.3M" },
            { label: "Sep", value: "₦1.2M" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-[20px] font-bold tabular-nums">
                {m.value}
              </div>
              <div className="text-[12px] text-[var(--product-foreground)]/50">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
