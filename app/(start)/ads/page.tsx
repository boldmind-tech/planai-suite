"use client";

import { useState } from "react";
import {
  Megaphone,
  Facebook,
  Chrome as ChromeIcon,
  Music2,
  Pause,
  Play,
} from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

const CAMPAIGNS = [
  {
    name: "Zenith Fashion — Sallah Push",
    platform: "Meta",
    spend: "₦42,000",
    roas: "3.2x",
    status: "live" as const,
  },
  {
    name: "PlanAI — SME Awareness",
    platform: "Google",
    spend: "₦18,500",
    roas: "2.1x",
    status: "live" as const,
  },
  {
    name: "Suya Spot — TikTok Boost",
    platform: "TikTok",
    spend: "₦6,000",
    roas: "—",
    status: "building" as const,
  },
];

const PLATFORM_ICON = {
  Meta: Facebook,
  Google: ChromeIcon,
  TikTok: Music2,
} as const;

export default function AdsCenterPage() {
  const [running, setRunning] = useState<Record<string, boolean>>({
    "Zenith Fashion — Sallah Push": true,
    "PlanAI — SME Awareness": true,
  });

  return (
    <div data-product="ads-center" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Megaphone size={19} className="text-[var(--product-primary)]" />{" "}
            Ads Center
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Meta, Google, and TikTok campaigns — one dashboard, Naira billing.
          </p>
        </div>
        <Button variant="primary" className="text-[13px]">
          New campaign
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Total spend (30d)", value: "₦66,500" },
          { label: "Avg. ROAS", value: "2.7x" },
          { label: "Active campaigns", value: "2" },
          { label: "Leads captured", value: "184" },
        ].map((k) => (
          <div key={k.label} className="card">
            <div className="text-[12px] text-[var(--product-foreground)]/55">
              {k.label}
            </div>
            <div className="text-[22px] font-bold mt-1 tabular-nums">
              {k.value}
            </div>
          </div>
        ))}
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--product-muted)] text-[13px] font-semibold">
          Campaigns
        </div>
        <ul className="divide-y divide-[var(--product-muted)]">
          {CAMPAIGNS.map((c) => {
            const Icon =
              PLATFORM_ICON[c.platform as keyof typeof PLATFORM_ICON];
            const isRunning = running[c.name];
            return (
              <li key={c.name} className="flex items-center gap-3 px-4 py-3">
                <Icon
                  size={16}
                  className="text-[var(--product-foreground)]/50 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-medium truncate">
                    {c.name}
                  </div>
                  <div className="text-[12px] text-[var(--product-foreground)]/50">
                    {c.platform} · Spend {c.spend} · ROAS {c.roas}
                  </div>
                </div>
                <StatusBadge variant={c.status}>{c.status}</StatusBadge>
                <button
                  onClick={() =>
                    setRunning((r) => ({ ...r, [c.name]: !r[c.name] }))
                  }
                  className="btn-icon btn-secondary"
                  aria-label={isRunning ? "Pause campaign" : "Resume campaign"}
                >
                  {isRunning ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
