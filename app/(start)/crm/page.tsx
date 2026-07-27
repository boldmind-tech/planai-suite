"use client";

import { Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@boldmindng/ui";

const STAGES = [
  { name: "New", deals: [{ client: "Adaeze Okoro", value: "₦120,000" }] },
  { name: "Contacted", deals: [{ client: "Femi Balogun", value: "₦85,000" }] },
  {
    name: "Proposal",
    deals: [{ client: "Zenith Fashion", value: "₦340,000" }],
  },
  { name: "Won", deals: [{ client: "Suya Spot", value: "₦60,000" }] },
];

export default function CrmPage() {
  return (
    <div data-product="crm" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Users size={19} className="text-[var(--product-primary)]" /> CRM &
            Client Management
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            WhatsApp-synced pipeline, built for relationship-led sales.
          </p>
        </div>
        <Button variant="primary" className="text-[13px]">
          + Add contact
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {STAGES.map((s) => (
          <div key={s.name}>
            <div className="text-[12px] font-semibold text-[var(--product-foreground)]/60 uppercase tracking-wide mb-2">
              {s.name}
            </div>
            <div className="space-y-2">
              {s.deals.map((d) => (
                <div key={d.client} className="card p-3">
                  <div className="text-[13px] font-medium">{d.client}</div>
                  <div className="text-[12.5px] tabular-nums text-[var(--product-foreground)]/60 mt-0.5">
                    {d.value}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="btn-icon btn-secondary"
                      aria-label="Call"
                    >
                      <Phone size={13} />
                    </button>
                    <button
                      className="btn-icon btn-secondary"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
