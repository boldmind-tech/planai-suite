"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Send,
  Megaphone,
  Palette,
  LineChart,
  TrendingUp,
  Mail,
  Search,
  Bot,
  ListTodo,
  Users,
  Wallet as WalletIcon,
  Dumbbell,
  ShoppingBag,
  ChevronsLeft,
  Wallet,
  Bell,
  Menu,
} from "lucide-react";
import { ThemeToggle, DyslexiaToggle } from "@boldmindng/ui";

// One nav entry per PlanAI tool slug — icon + route + colors.ts slug so
// each link can resolve its own --product-* wash on hover without a
// hardcoded hex (see NAV_ITEMS[i].slug usage in the <Link> below).
const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    slug: "planai",
  },
  {
    label: "Social Media",
    href: "/social",
    icon: Send,
    slug: "social-media-manager",
  },
  { label: "Ads Center", href: "/ads", icon: Megaphone, slug: "ads-center" },
  {
    label: "Brand & Home",
    href: "/brand",
    icon: Palette,
    slug: "brand-digital-home",
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    icon: LineChart,
    slug: "business-intelligence",
  },
  {
    label: "Investor Kit",
    href: "/investor",
    icon: TrendingUp,
    slug: "investor-readiness",
  },
  {
    label: "Marketing",
    href: "/marketing",
    icon: Mail,
    slug: "marketing-automation",
  },
  {
    label: "Directory",
    href: "/directory",
    icon: Search,
    slug: "business-discovery",
  },
  { label: "AI Agent", href: "/agent", icon: Bot, slug: "ai-business-agent" },
  {
    label: "Projects",
    href: "/projects",
    icon: ListTodo,
    slug: "project-manager",
  },
  { label: "CRM", href: "/crm", icon: Users, slug: "crm" },
  { label: "HR & Payroll", href: "/hr", icon: WalletIcon, slug: "hr-payroll" },
  {
    label: "Fitness",
    href: "/fitness",
    icon: Dumbbell,
    slug: "boldmind-fitness",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    icon: ShoppingBag,
    slug: "boldmind-marketplace",
  },
] as const;

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    // data-product defaults to the suite shell's own scheme; each tool route
    // below re-declares its own data-product wrapper (see /ads, /crm, etc.)
    // which cascades new --product-* values per the real @boldmindng/ui
    // globals.css — no per-app CSS variable duplication needed.
    <div
      data-product="planai"
      className="flex min-h-screen bg-[var(--product-background)] text-[var(--product-foreground)]"
    >
      {/* ── Sidebar — cockpit density, lucide icons only, no emoji ────────── */}
      <aside
        className={`hidden md:flex flex-col shrink-0 border-r border-[var(--panel-border)] bg-[var(--panel-bg)] transition-[width] duration-200 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex items-center gap-2 h-14 px-3 border-b border-[var(--panel-border)]">
          <div
            className="h-7 w-7 rounded-md shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--product-primary), var(--product-dark))",
            }}
          />
          {!collapsed && (
            <span className="font-semibold text-sm tracking-tight truncate">
              PlanAI Suite
            </span>
          )}
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="ml-auto p-1 rounded-md hover:bg-[var(--row-hover)] transition-colors duration-150"
            aria-label="Toggle sidebar"
          >
            <ChevronsLeft
              size={16}
              className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-2.5 rounded-[var(--radius-control)] px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 ${
                  active
                    ? "bg-[var(--product-primary)] text-white"
                    : "text-[var(--product-foreground)] hover:bg-[var(--row-hover)]"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {!collapsed && <span className="truncate">{label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--panel-border)] p-2 flex items-center gap-1">
          <DyslexiaToggle variant="compact" />
          <ThemeToggle />
        </div>
      </aside>

      {/* ── Main column ────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 flex items-center gap-3 px-4 md:px-6 border-b border-[var(--panel-border)] bg-[var(--panel-bg)]/80 backdrop-blur sticky top-0 z-10">
          <button
            className="md:hidden p-1.5 rounded-md hover:bg-[var(--row-hover)]"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
          <div className="flex-1" />
          <Link
            href="/dashboard/wallet"
            className="flex items-center gap-1.5 rounded-[var(--radius-control)] border border-[var(--panel-border)] px-2.5 py-1.5 text-[13px] font-medium tabular hover:bg-[var(--row-hover)] transition-colors duration-150"
          >
            <Wallet size={14} className="text-[var(--product-secondary)]" />
            ₦45,000
          </Link>
          <button
            className="relative p-1.5 rounded-md hover:bg-[var(--row-hover)]"
            aria-label="Notifications"
          >
            <Bell size={17} />
            <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[var(--product-secondary)]" />
          </button>
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-semibold text-white"
            style={{ background: "var(--product-primary)" }}
          >
            CO
          </div>
        </header>

        <main className="flex-1 px-4 md:px-6 py-5 md:py-6">{children}</main>
      </div>
    </div>
  );
}
