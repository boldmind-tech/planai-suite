"use client";

import { TrendingUp, FileSignature, FolderLock, Users2 } from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

export default function InvestorReadinessPage() {
  return (
    <div data-product="investor-readiness" className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <TrendingUp size={19} className="text-[var(--product-primary)]" />{" "}
          Investor Readiness Suite
        </h1>
        <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
          SAFE agreements, data rooms, and cap table — pitch-ready in a week.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <FileSignature
            size={17}
            className="text-[var(--product-primary)] mb-2"
          />
          <div className="text-[13.5px] font-semibold">
            SAFE / Convertible note
          </div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            Generate and e-sign via DocuSign in minutes.
          </p>
          <Button variant="secondary" className="mt-3 text-[12.5px]">
            Generate
          </Button>
        </div>
        <div className="card">
          <FolderLock
            size={17}
            className="text-[var(--product-secondary)] mb-2"
          />
          <div className="text-[13.5px] font-semibold">Data room</div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            3 investors currently have shared access.
          </p>
          <Button variant="secondary" className="mt-3 text-[12.5px]">
            Manage access
          </Button>
        </div>
        <div className="card">
          <Users2 size={17} className="text-[var(--product-accent)] mb-2" />
          <div className="text-[13.5px] font-semibold">Cap table</div>
          <p className="text-[12.5px] text-[var(--product-foreground)]/55 mt-1">
            4 shareholders · 100% allocated.
          </p>
          <Button variant="secondary" className="mt-3 text-[12.5px]">
            View table
          </Button>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--product-muted)] text-[13px] font-semibold">
          Active investor VCs tracking your raise
        </div>
        <ul className="divide-y divide-[var(--product-muted)]">
          {[
            {
              name: "Ventures Platform",
              stage: "Seed",
              status: "live" as const,
            },
            {
              name: "Future Africa",
              stage: "Seed",
              status: "building" as const,
            },
          ].map((v) => (
            <li
              key={v.name}
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <div className="text-[13.5px] font-medium">{v.name}</div>
                <div className="text-[12px] text-[var(--product-foreground)]/50">
                  {v.stage} focus
                </div>
              </div>
              <StatusBadge variant={v.status}>{v.status}</StatusBadge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
