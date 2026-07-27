"use client";

import { useState } from "react";
import { Bot, Power, Calendar, Receipt, MessageCircle } from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

const LOG = [
  {
    action: "Booked appointment for Mrs. Adaeze — Thursday 2pm",
    icon: Calendar,
    time: "4m ago",
  },
  {
    action: "Followed up on invoice #1042 (₦85,000 overdue)",
    icon: Receipt,
    time: "22m ago",
  },
  {
    action: "Answered WhatsApp inquiry about delivery time",
    icon: MessageCircle,
    time: "1h ago",
  },
];

export default function AiBusinessAgentPage() {
  const [active, setActive] = useState(true);

  return (
    <div data-product="ai-business-agent" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Bot size={19} className="text-[var(--product-primary)]" /> AI
            Business Agent
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Runs bookings, invoice follow-ups, and inquiries — escalates only
            what matters.
          </p>
        </div>
        <Button
          variant={active ? "secondary" : "primary"}
          onClick={() => setActive((a) => !a)}
          className="text-[13px] gap-1.5"
        >
          <Power size={14} /> {active ? "Pause agent" : "Resume agent"}
        </Button>
      </div>

      <div className="card flex items-center gap-3">
        <StatusBadge variant={active ? "live" : "building"}>
          {active ? "Live" : "Paused"}
        </StatusBadge>
        <span className="text-[13px] text-[var(--product-foreground)]/70">
          {active
            ? "Agent is active and monitoring WhatsApp, email, and Instagram DMs."
            : "Agent is paused — nothing is being automated right now."}
        </span>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--product-muted)] text-[13px] font-semibold">
          Action log
        </div>
        <ul className="divide-y divide-[var(--product-muted)]">
          {LOG.map((l) => (
            <li key={l.action} className="flex items-center gap-3 px-4 py-3">
              <l.icon
                size={15}
                className="text-[var(--product-foreground)]/40 shrink-0"
              />
              <span className="text-[13.5px] flex-1">{l.action}</span>
              <span className="text-[12px] text-[var(--product-foreground)]/45">
                {l.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
