"use client";

import { Mail, MessageCircle, MessageSquareText, Plus } from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

const CAMPAIGNS = [
  {
    name: "Ramadan flash offer",
    channel: "WhatsApp",
    icon: MessageCircle,
    sent: "1,204",
    opened: "61%",
    status: "live" as const,
  },
  {
    name: "Winback — dormant 30d",
    channel: "Email",
    icon: Mail,
    sent: "340",
    opened: "22%",
    status: "live" as const,
  },
  {
    name: "Birthday discount",
    channel: "SMS",
    icon: MessageSquareText,
    sent: "—",
    opened: "—",
    status: "planned" as const,
  },
];

export default function MarketingAutomationPage() {
  return (
    <div data-product="marketing-automation" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Marketing Automation
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Email, WhatsApp, and SMS sequences with Nigerian festive templates
            built in.
          </p>
        </div>
        <Button variant="primary" className="text-[13px] gap-1.5">
          <Plus size={14} /> New campaign
        </Button>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="data-table w-full text-[13px]">
          <thead>
            <tr className="text-left text-[12px] text-[var(--product-foreground)]/55">
              <th className="px-4 py-2.5 font-medium">Campaign</th>
              <th className="px-4 py-2.5 font-medium">Channel</th>
              <th className="px-4 py-2.5 font-medium num">Sent</th>
              <th className="px-4 py-2.5 font-medium num">Opened</th>
              <th className="px-4 py-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {CAMPAIGNS.map((c) => (
              <tr
                key={c.name}
                className="border-t border-[var(--product-muted)]"
              >
                <td className="px-4 py-2.5 flex items-center gap-2">
                  <c.icon
                    size={14}
                    className="text-[var(--product-foreground)]/45"
                  />{" "}
                  {c.name}
                </td>
                <td className="px-4 py-2.5 text-[var(--product-foreground)]/60">
                  {c.channel}
                </td>
                <td className="px-4 py-2.5 num tabular-nums">{c.sent}</td>
                <td className="px-4 py-2.5 num tabular-nums">{c.opened}</td>
                <td className="px-4 py-2.5">
                  <StatusBadge variant={c.status}>{c.status}</StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
