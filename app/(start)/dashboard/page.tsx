import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Card, StatusBadge } from "@boldmindng/ui";
import { getPlanAICoreTools } from "@boldmindng/utils";

// ── KPI card — cockpit rule: the number leads, icon-first is the anti-pattern ──
function Kpi({
  label,
  value,
  delta,
  deltaLabel,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaLabel?: string;
}) {
  return (
    <Card className="panel p-4">
      <div className="text-[12px] font-medium text-[var(--product-foreground)]/60">
        {label}
      </div>
      <div className="mt-1 text-[26px] font-bold tabular leading-none">
        {value}
      </div>
      {delta && (
        <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--product-secondary)]">
          <ArrowUpRight size={13} />
          {delta}{" "}
          <span className="text-[var(--product-foreground)]/45 font-normal">
            {deltaLabel}
          </span>
        </div>
      )}
    </Card>
  );
}

function ToolTile({
  name,
  slug,
  status,
  href,
}: {
  name: string;
  slug: string;
  status: "LIVE" | "BUILDING" | "PLANNED";
  href: string;
}) {
  const statusMap = {
    LIVE: "live",
    BUILDING: "building",
    PLANNED: "planned",
  } as const;
  return (
    <Link
      href={href}
      className="panel group flex items-center justify-between p-3.5 hover:border-[var(--product-primary)]/40 transition-colors duration-150"
    >
      <div className="min-w-0">
        <div className="text-[13.5px] font-semibold truncate">{name}</div>
        <div className="mt-1">
          <StatusBadge variant={statusMap[status]} />
        </div>
      </div>
      <ArrowRight
        size={15}
        className="shrink-0 text-[var(--product-foreground)]/30 group-hover:text-[var(--product-primary)] group-hover:translate-x-0.5 transition-all duration-150"
      />
    </Link>
  );
}

export default function PlanAIDashboardPage() {
  // In production this reads BOLDMIND_PRODUCTS live; shape shown here for the page contract.
  const tools = getPlanAICoreTools();

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Suite dashboard</h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Everything running across your 13 PlanAI tools, in one view.
          </p>
        </div>
        <Link
          href="/marketing"
          className="text-[13px] font-medium rounded-[var(--radius-control)] bg-[var(--product-primary)] text-white px-3.5 py-2 hover:opacity-90 transition-opacity duration-150"
        >
          New campaign
        </Link>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Kpi
          label="Monthly revenue"
          value="₦1,200,000"
          delta="+18%"
          deltaLabel="vs last 30 days"
        />
        <Kpi label="Active tools" value="9 / 13" />
        <Kpi label="Wallet balance" value="₦45,000" />
        <Kpi
          label="PlanAI Score"
          value="74 / 100"
          delta="+6 pts"
          deltaLabel="vs last month"
        />
      </div>

      {/* Tool grid */}
      <div>
        <h2 className="text-[13px] font-semibold text-[var(--product-foreground)]/70 mb-2.5">
          Your tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <ToolTile
            name="Social Media Manager"
            slug="social-media-manager"
            status="LIVE"
            href="/social"
          />
          <ToolTile
            name="Ads Center"
            slug="ads-center"
            status="LIVE"
            href="/ads"
          />
          <ToolTile
            name="Brand & Digital Home"
            slug="brand-digital-home"
            status="LIVE"
            href="/brand"
          />
          <ToolTile
            name="Business Intelligence"
            slug="business-intelligence"
            status="LIVE"
            href="/intelligence"
          />
          <ToolTile
            name="Investor Readiness"
            slug="investor-readiness"
            status="LIVE"
            href="/investor"
          />
          <ToolTile
            name="Marketing Automation"
            slug="marketing-automation"
            status="LIVE"
            href="/marketing"
          />
          <ToolTile
            name="Business Discovery"
            slug="business-discovery"
            status="LIVE"
            href="/directory"
          />
          <ToolTile
            name="AI Business Agent"
            slug="ai-business-agent"
            status="LIVE"
            href="/agent"
          />
          <ToolTile
            name="Project Manager"
            slug="project-manager"
            status="LIVE"
            href="/projects"
          />
          <ToolTile name="CRM & Clients" slug="crm" status="LIVE" href="/crm" />
          <ToolTile
            name="HR & Payroll"
            slug="hr-payroll"
            status="LIVE"
            href="/hr"
          />
          <ToolTile
            name="Fitness Center"
            slug="boldmind-fitness"
            status="LIVE"
            href="/fitness"
          />
          <ToolTile
            name="Marketplace"
            slug="boldmind-marketplace"
            status="LIVE"
            href="/marketplace"
          />
        </div>
      </div>

      {/* Recent jobs table */}
      <div>
        <h2 className="text-[13px] font-semibold text-[var(--product-foreground)]/70 mb-2.5">
          Recent activity
        </h2>
        <div className="panel overflow-hidden">
          <table className="data-table w-full text-[13px]">
            <thead>
              <tr className="text-left text-[12px] text-[var(--product-foreground)]/55">
                <th className="px-4 py-2.5 font-medium">Job</th>
                <th className="px-4 py-2.5 font-medium">Tool</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium num">Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  job: "Pidgin caption batch (12 posts)",
                  tool: "Social Media Manager",
                  status: "live" as const,
                  time: "2m ago",
                },
                {
                  job: "Logo kit — Zenith Fashion",
                  tool: "Brand & Digital Home",
                  status: "building" as const,
                  time: "18m ago",
                },
                {
                  job: "WhatsApp broadcast — 340 leads",
                  tool: "Marketing Automation",
                  status: "live" as const,
                  time: "1h ago",
                },
              ].map((r) => (
                <tr
                  key={r.job}
                  className="border-t border-[var(--panel-border)]"
                >
                  <td className="px-4 py-2.5">{r.job}</td>
                  <td className="px-4 py-2.5 text-[var(--product-foreground)]/60">
                    {r.tool}
                  </td>
                  <td className="px-4 py-2.5">
                    <StatusBadge variant={r.status} />
                  </td>
                  <td className="px-4 py-2.5 num text-[var(--product-foreground)]/55">
                    {r.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
