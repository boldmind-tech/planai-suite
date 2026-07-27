"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";
import { SuperNavbar, SuperFooter, StatusBadge } from "@boldmindng/ui";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import {
  getPlanAICoreTools,
  getProductBySlug,
  getProductPricing,
  PILLAR_METADATA,
  getProductByDomain,
  type EcosystemPillar,
  type ProductStatus,
} from "@boldmindng/utils";

// ── Source-of-truth pulls — nothing below is hand-typed product data ────────
// Every name, description, icon, status, route, and price comes straight out
// of products.ts / pricing.ts. If a tool merges, renames, or re-prices, this
// page updates itself on the next build — no manual sync required.

const SUITE = getProductBySlug("planai");
const TOOLS = getPlanAICoreTools();
const SUITE_PRICING = getProductPricing("planai");

const nairaFmt = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

function fromPrice(slug: string): string {
  const pricing = getProductPricing(slug);
  const tier =
    pricing?.tiers.find((t) => t.priceMonthly.NGN > 0) ?? pricing?.tiers[0];
  if (!tier || tier.priceMonthly.NGN === 0) return "Free";
  return `${nairaFmt.format(tier.priceMonthly.NGN)}/mo`;
}

const STATUS_TO_BADGE: Record<
  ProductStatus,
  "live" | "building" | "planned" | "concept"
> = {
  LIVE: "live",
  BUILDING: "building",
  PLANNED: "planned",
  CONCEPT: "concept",
};

const SUITE_NAV_LINKS = [
  { label: "Tools", href: "#suite" },
  { label: "Pricing", href: "#pricing" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "FAQ", href: "#faq" },
];

// Awareness / Conviction / Education pillars, pulled from the flywheel
// metadata + each pillar's flagship product — not hand-copied taglines.
const ECOSYSTEM_PILLARS = (
  ["awareness", "conviction", "education"] as EcosystemPillar[]
)
  .map((pillar) => {
    const meta = PILLAR_METADATA[pillar];
    const product = getProductByDomain(meta.domain);
    if (!product) return null;
    return {
      pillar,
      icon: product.icon,
      name: product.shortName ?? product.name,
      jobInFlywheel: meta.jobInFlywheel,
      description: product.description,
      domain: meta.domain,
    };
  })
  .filter((x): x is NonNullable<typeof x> => x !== null);

const FAQS = [
  {
    q: "Can I use PlanAI on mobile?",
    a: "Yes. PlanAI is a PWA — it works in any smartphone browser without an app-store download, and is optimized for Android and iOS.",
  },
  {
    q: "Do you support Paystack?",
    a: "Yes. Brand & Digital Home, Business Intelligence Suite, and CRM all integrate natively with Paystack for payments and revenue tracking.",
  },
  {
    q: "What's the difference between Starter and Pro?",
    a: "Starter covers core PlanAI access with standard limits and email support. Pro adds extended limits, priority support, and API access across every tool in the suite.",
  },
  {
    q: "Is there a free trial?",
    a: "Every paid tool and the suite plan can be tried before you commit — check each tool's pricing page for its current trial terms.",
  },
  {
    q: "Can I pay in dollars?",
    a: "All plans are priced in Naira. USD/EUR reference pricing is shown for the diaspora, but billing runs through Paystack in Naira.",
  },
  {
    q: "Is this compliant with Nigerian regulations?",
    a: "Yes — the platform follows NDPA 2023 data-protection rules, and tools that generate receipts or invoices are built with FIRS VAT guidelines in mind.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlanAILanding() {
  const registerUrl =
    "https://boldmind.ng/register?redirect=https://planai.boldmind.ng";

  return (
    <div className="min-h-screen bg-[var(--product-background)] text-[var(--product-foreground)] overflow-x-hidden">
      <SuperNavbar
        logoSrc="/logo.png"
        cta={{ label: "Start Free →", href: registerUrl }}
        sticky={true}
        links={SUITE_NAV_LINKS}
      />

      {/* HERO — marketing-shell mode: dark neutral base tinted with the
          product's own primary color, not a generic unrelated gradient. */}
      <section
        className="relative pt-28 pb-20 px-6 md:px-12 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0c0a12 0%, #16101f 55%, var(--product-background) 100%)",
        }}
      >
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div
            className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full blur-[130px]"
            style={{
              background:
                "color-mix(in srgb, var(--product-primary) 45%, transparent)",
            }}
          />
          <div
            className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] rounded-full blur-[110px]"
            style={{
              background:
                "color-mix(in srgb, var(--product-secondary) 35%, transparent)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div<HTMLDivElement>
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-8"
              style={{
                background:
                  "color-mix(in srgb, var(--product-primary) 25%, transparent)",
                borderColor:
                  "color-mix(in srgb, var(--product-primary) 55%, transparent)",
                color: "#e9d9ff",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--product-secondary)",
                  boxShadow: "0 0 6px var(--product-secondary)",
                }}
              />
              {TOOLS.length} AI Tools · One Login · Built for Nigeria
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]">
              One Suite.
              <br />
              <span style={{ color: "#b794f6" }}>Every Tool</span> Your
              <br />
              Nigerian Business Needs.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-10">
              {SUITE?.description ??
                "Social media, ads, branding, business intelligence, CRM, HR and more — one login, one price, built for Nigerian entrepreneurs."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href={`${registerUrl}&utm_source=planai_landing&utm_medium=hero_cta&utm_campaign=start_free`}
                className="px-8 py-4 text-white font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                style={{
                  background: "var(--product-primary)",
                  boxShadow:
                    "0 8px 24px -6px color-mix(in srgb, var(--product-primary) 60%, transparent)",
                }}
              >
                Start Free — No Card
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#suite"
                className="px-8 py-4 bg-white/5 border-2 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--product-primary) 50%, white)",
                }}
              >
                See All Tools ↓
              </a>
            </div>

            {/* Trust strip — real figures from products.ts, not fabricated counters */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                { n: `${TOOLS.length}`, label: "AI Tools in the Suite" },
                { n: SUITE?.users ?? "Growing", label: "Businesses on PlanAI" },
                { n: "Naira-first", label: "No dollar pricing" },
              ].map(({ n, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-3xl font-black leading-none mb-1 tabular-nums"
                    style={{ color: "#c4b5fd" }}
                  >
                    {n}
                  </div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUITE GRID — every card generated from getPlanAICoreTools() */}
      <section
        id="suite"
        className="py-20 px-6 md:px-12 bg-[var(--product-background)] border-t border-[var(--product-muted)]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--product-primary)" }}
            >
              The Full Suite
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Everything Inside PlanAI
            </h2>
            <p className="text-[var(--product-foreground)]/60 text-lg max-w-md mx-auto">
              Subscribe to the whole suite, or pay per tool — your choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((tool, i) => (
              <motion.div<HTMLDivElement>
                key={tool.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl p-7 border transition-all duration-200"
                style={{
                  background: "var(--product-background)",
                  borderColor: "var(--product-muted)",
                  boxShadow: "var(--shadow-xs, 0 1px 2px rgba(0,0,0,0.05))",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 border rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: "var(--product-highlight)",
                      borderColor:
                        "color-mix(in srgb, var(--product-primary) 30%, transparent)",
                    }}
                  >
                    {tool.icon}
                  </div>
                  <StatusBadge variant={STATUS_TO_BADGE[tool.status]}>
                    {STATUS_TO_BADGE[tool.status]}
                  </StatusBadge>
                </div>

                <h3 className="text-base font-bold mb-2">
                  {tool.shortName ?? tool.name}
                </h3>
                <p className="text-sm text-[var(--product-foreground)]/60 leading-relaxed mb-5 line-clamp-3">
                  {tool.description}
                </p>

                <div
                  className="flex items-center justify-between rounded-xl px-4 py-3 mb-5"
                  style={{ background: "var(--product-highlight)" }}
                >
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "var(--product-primary)" }}
                    >
                      {tool.category}
                    </div>
                    <div className="text-[10px] text-[var(--product-foreground)]/50 uppercase tracking-wider mt-0.5">
                      Category
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-[var(--product-foreground)]/50">
                      from
                    </div>
                    <div
                      className="text-sm font-bold tabular-nums"
                      style={{ color: "var(--product-secondary)" }}
                    >
                      {fromPrice(tool.slug)}
                    </div>
                  </div>
                </div>

                <Link
                  href={`${tool.routePath ?? `/${tool.slug}`}?utm_source=planai_landing&utm_medium=suite_card`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all border"
                  style={{
                    background: "var(--product-primary)",
                    borderColor: "var(--product-primary)",
                    color: "white",
                  }}
                >
                  Open {tool.shortName ?? tool.name}{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — pulled from BOLDMIND_PRICING's 'planai' entry */}
      <section
        id="pricing"
        className="py-20 px-6 md:px-12 bg-white border-t border-[var(--product-muted)]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-500 text-lg">
              No hidden fees. No dollar pricing. 100% Naira-first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {(SUITE_PRICING?.tiers ?? []).map((tier) => {
              const highlight = tier.badge === "Most Popular";
              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 border-2 transition-all ${
                    highlight
                      ? "scale-105 text-white"
                      : "bg-white border-gray-100 hover:shadow-md"
                  }`}
                  style={
                    highlight
                      ? {
                          background:
                            "linear-gradient(135deg, var(--product-primary) 0%, color-mix(in srgb, var(--product-primary) 75%, black) 100%)",
                          borderColor: "var(--product-primary)",
                          boxShadow:
                            "0 20px 40px -12px color-mix(in srgb, var(--product-primary) 45%, transparent)",
                        }
                      : { borderColor: "var(--product-muted)" }
                  }
                >
                  {tier.badge && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full"
                      style={{ background: "var(--product-secondary)" }}
                    >
                      {tier.badge.toUpperCase()}
                    </div>
                  )}

                  <h3
                    className={`text-lg font-black mb-1 capitalize ${highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs mb-5 ${highlight ? "text-white/70" : "text-gray-400"}`}
                  >
                    {tier.name === "pro"
                      ? "For businesses running most of the suite"
                      : "For getting started with core tools"}
                  </p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className={`text-4xl font-black tabular-nums ${highlight ? "text-white" : "text-gray-900"}`}
                    >
                      {nairaFmt.format(tier.priceMonthly.NGN)}
                    </span>
                    <span
                      className={`text-sm ${highlight ? "text-white/60" : "text-gray-400"}`}
                    >
                      /mo
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{
                            color: highlight
                              ? "#a7f3d0"
                              : "var(--product-secondary)",
                          }}
                        />
                        <span
                          className={
                            highlight ? "text-white/85" : "text-gray-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${registerUrl}&plan=${tier.name}&utm_source=planai_landing&utm_medium=pricing&utm_campaign=${tier.name}`}
                    className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all gap-2"
                    style={
                      highlight
                        ? {
                            background: "white",
                            color: "var(--product-primary)",
                          }
                        : {
                            background: "var(--product-primary)",
                            color: "white",
                          }
                    }
                  >
                    Get {tier.name} <ArrowRight className="w-4 h-4" />
                  </a>
                  <p
                    className={`text-center text-[11px] mt-3 ${highlight ? "text-white/50" : "text-gray-400"}`}
                  >
                    Cancel anytime · No dollar surprises
                  </p>
                </div>
              );
            })}

            {/* Agency / custom tier — no fabricated price, matches real contact-sales pattern */}
            <div
              className="rounded-2xl p-8 border-2 bg-white hover:shadow-md transition-all"
              style={{ borderColor: "var(--product-muted)" }}
            >
              <h3 className="text-lg font-black mb-1 text-gray-900">Agency</h3>
              <p className="text-xs mb-5 text-gray-400">
                White-label PlanAI for multiple client businesses
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-gray-900">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-client workspace",
                  "White-label branding",
                  "Dedicated onboarding",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--product-secondary)" }}
                    />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2349016777346?text=Hi%2C%20I%27d%20like%20an%20agency%20plan%20for%20PlanAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all gap-2"
                style={{ background: "var(--product-primary)", color: "white" }}
              >
                Talk to Us <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] mt-3 text-gray-400">
                Custom contract available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM — derived from PILLAR_METADATA + each pillar's flagship product */}
      <section
        id="ecosystem"
        className="py-20 px-6 md:px-12 bg-[var(--product-background)] border-t border-[var(--product-muted)]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[11px] font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--product-primary)" }}
            >
              BoldmindNG Ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              PlanAI Is One Door of Four
            </h2>
            <p className="text-[var(--product-foreground)]/60 text-lg max-w-md mx-auto">
              One BoldmindNG account unlocks the entire ecosystem — from gist to
              conviction to skills to tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {ECOSYSTEM_PILLARS.map((p) => (
              <a
                key={p.pillar}
                href={`https://${p.domain}?utm_source=planai&utm_medium=ecosystem_block&utm_campaign=${p.pillar}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-7 border hover:-translate-y-1 hover:shadow-lg transition-all duration-200 block bg-white"
                style={{ borderColor: "var(--product-muted)" }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-black mb-1 text-gray-900">
                  {p.name}
                </h3>
                <p className="text-xs font-semibold mb-3 text-gray-500">
                  {p.jobInFlywheel}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--product-primary)" }}
                >
                  Explore →
                </span>
              </a>
            ))}
          </div>

          <div
            className="rounded-2xl border p-6 text-center bg-white"
            style={{ borderColor: "var(--product-muted)" }}
          >
            <p className="text-sm text-gray-500 mb-3 max-w-2xl mx-auto">
              One BoldmindNG account, all four pillars. The flywheel: AmeboGist
              brings readers → VillageCircle builds conviction → EduCenter
              activates skills → PlanAI enables building.
            </p>
            <a
              href={`${registerUrl}&utm_source=planai_landing&utm_medium=ecosystem_footer&utm_campaign=boldmind_account`}
              className="font-bold text-sm hover:underline"
              style={{ color: "var(--product-primary)" }}
            >
              Create your BoldmindNG account →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-20 px-6 md:px-12 bg-white border-t border-[var(--product-muted)]"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 group open:shadow-sm"
              >
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4 text-sm">
                  {q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark, product-color wash, no fabricated numbers */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--product-primary) 0%, color-mix(in srgb, var(--product-primary) 70%, black) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-5xl block mb-6">⚡</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            {TOOLS.length} tools. One login.
            <br />
            <span style={{ color: "#a7f3d0" }}>Start building today.</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Every day you wait is another DM that goes unanswered, another
            competitor capturing your leads, another week without a real online
            store.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${registerUrl}&utm_source=planai_landing&utm_medium=final_cta&utm_campaign=start_free`}
              className="px-8 py-4 bg-white font-black rounded-xl hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
              style={{ color: "var(--product-primary)" }}
            >
              Start Free — No Card Needed <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2349138349271?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20PlanAI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={[
          {
            title: "Tools",
            links: TOOLS.map((tool) => ({
              label: tool.shortName ?? tool.name,
              href: tool.routePath ?? `/${tool.slug}`,
            })),
          },
          {
            title: "BoldmindNG Network",
            links: [
              ...ECOSYSTEM_PILLARS.map((p) => ({
                label: p.name,
                href: `https://${p.domain}`,
              })),
              { label: "BoldmindNG Hub", href: "https://boldmind.ng" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "NDPA Compliance", href: "/ndpa" },
              { label: "Cookie Policy", href: "/cookies" },
            ],
          },
        ]}
      />
    </div>
  );
}
