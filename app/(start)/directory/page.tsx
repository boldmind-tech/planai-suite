"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SuperNavbar, SuperFooter, Button } from "@boldmindng/ui";
import { SUITE_NAV_LINKS } from "@/lib/nav-links";
import {
  CheckCircle2,
  X,
  ChevronDown,
  ArrowRight,
  Zap,
  Search,
  Globe,
  Download,
  ShieldCheck,
  BarChart2,
  Mail,
  Linkedin,
  Database,
  Chrome,
  Workflow,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";

// ─── Theme tokens (matching emailscraper-pro brand) ───────────────────────────
const T = {
  primary:   "#075985",
  primary2:  "#0369A1",
  amber:     "#B45309",
  amberLt:   "#D97706",
  bg:        "#FAFAFA",
  fg:        "#18181B",
  muted:     "#71717A",
  mutedBg:   "#E4E4E7",
  success:   "#059669",
  border:    "#D4D4D8",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Linkedin,
    label: "LinkedIn Email Extraction",
    desc: "One-click email discovery from any LinkedIn profile. Chrome extension saves leads while you browse — no copy-pasting.",
  },
  {
    icon: Database,
    label: "Nigerian Business Directories",
    desc: "Deep access to CAC registry, VConnect, and ConnectNigeria. Find verified decision-maker emails you won't find anywhere else.",
  },
  {
    icon: ShieldCheck,
    label: "Real-Time Verification",
    desc: "MX record checks + live SMTP handshakes before any email hits your list. Bounce rates stay below 2%.",
  },
  {
    icon: Globe,
    label: "WhatsApp Number Finder",
    desc: "Nigerian B2B runs on WhatsApp. Find verified phone numbers alongside emails — reach prospects on the channel that converts.",
  },
  {
    icon: BarChart2,
    label: "AI Prospect Scoring",
    desc: "Rank every lead by conversion likelihood based on role, company signals, and activity patterns. Work your hottest leads first.",
  },
  {
    icon: TrendingUp,
    label: "Intent Signals",
    desc: "Surface companies that just raised funding or posted key job roles — reach them while they're actively spending.",
  },
  {
    icon: Workflow,
    label: "Outreach Sequence Builder",
    desc: "Build multi-step cold email sequences without leaving the tool. AI writes personalized first lines per lead automatically.",
  },
  {
    icon: Download,
    label: "CRM-Ready Export",
    desc: "One-click export to HubSpot, Google Sheets, or raw CSV. Every field maps cleanly — no cleanup on your end.",
  },
  {
    icon: Chrome,
    label: "Chrome Extension",
    desc: "Save leads with one click while browsing LinkedIn, company websites, or Nigerian trade directories. Full on Pro and above.",
  },
  {
    icon: Users,
    label: "Company Contact Maps",
    desc: "Find 5+ decision-makers per company at once. Map entire procurement, C-suite, or hiring teams before your first call.",
  },
  {
    icon: Mail,
    label: "Email Warm-Up Module",
    desc: "Improve sender reputation before you blast. Automated warm-up sequences protect your domain from spam filters.",
  },
  {
    icon: Zap,
    label: "API Access",
    desc: "Pull verified emails directly into your stack. 3,000 calls/month on Pro, unlimited on Enterprise — full docs included.",
  },
];

const TIERS = [
  {
    name: "Free",
    badge: null,
    monthly: 0,
    yearly: 0,
    accent: false,
    limit: "100 finds/mo",
    cta: "Start Free",
    href: "/emailscraper",
    features: [
      "100 verified email finds/month",
      "Basic SMTP verification",
      "Manual search (name + company)",
      "CSV export (100 rows)",
      "Chrome extension (basic)",
    ],
    missing: [
      "Nigerian directory access",
      "WhatsApp finder",
      "AI prospect scoring",
      "Outreach builder",
      "API access",
    ],
  },
  {
    name: "Prospector",
    badge: "Prospector",
    monthly: 6000,
    yearly: 60000,
    accent: false,
    limit: "1,500 finds/mo",
    cta: "Start Prospecting",
    href: "/signup?plan=basic",
    features: [
      "1,500 verified email finds/month",
      "Real-time SMTP verification",
      "Nigerian directory access (CAC, VConnect)",
      "LinkedIn profile extraction",
      "Lead enrichment (role, company, phone)",
      "Bulk CSV import & export",
      "Saved lead lists & folders",
      "Duplicate detection",
      "Nigeria-specific verticals",
    ],
    missing: [
      "WhatsApp finder",
      "AI prospect scoring",
      "API access",
    ],
  },
  {
    name: "Pro",
    badge: "Most Popular",
    monthly: 18000,
    yearly: 180000,
    accent: true,
    limit: "8,000 finds/mo",
    cta: "Go Pro",
    href: "/signup?plan=pro",
    features: [
      "8,000 verified email finds/month",
      "WhatsApp number finder",
      "Company-wide contact maps",
      "AI prospect scoring",
      "Intent signals (funding, job posts)",
      "Outreach sequence builder",
      "CRM integration (HubSpot, Google Sheets)",
      "Chrome extension (full)",
      "Email warm-up module",
      "Cold email AI writer",
      "API access (3,000 calls/month)",
    ],
    missing: [],
  },
  {
    name: "Enterprise",
    badge: "Agency / Dev",
    monthly: 55000,
    yearly: 550000,
    accent: false,
    limit: "Unlimited",
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
    features: [
      "Unlimited email finds",
      "Full API access (unlimited calls)",
      "White-label option",
      "Team accounts (5 seats)",
      "Custom Nigerian vertical databases",
      "Dedicated support",
      "Weekly list re-verification",
      "Competitor employee targeting",
    ],
    missing: [],
  },
];

const FAQS = [
  {
    q: "How is this different from Apollo or Hunter.io?",
    a: "Those tools are built for US and European markets. EmailScraper Pro scrapes the CAC business registry, VConnect, and ConnectNigeria — databases that Apollo and Hunter simply don't touch. You also get WhatsApp number discovery, which is how Nigerian B2B actually runs.",
  },
  {
    q: "How accurate are the verified emails?",
    a: "We run a two-step check: MX record lookup (does the domain accept email?) followed by a live SMTP handshake (does this mailbox exist?). Emails that pass both are marked verified. In practice, verified emails bounce at under 2%.",
  },
  {
    q: "Will this get me blocked on LinkedIn?",
    a: "The Chrome extension mimics normal browsing behavior and stays within safe rate limits. We don't use LinkedIn's internal API or anything that violates their terms in a way that would flag your account. Thousands of users run it daily without issues.",
  },
  {
    q: "Can I cancel or downgrade anytime?",
    a: "Yes — no contracts, no lock-in. Cancel before your next billing date and you won't be charged. Your saved lists and exports remain accessible for 30 days after cancellation.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you've used fewer than 50 finds in your first 7 days and aren't satisfied, we'll issue a full refund. Beyond that, we're happy to discuss on a case-by-case basis — reach us at support@boldmind.ng.",
  },
];

const SOCIAL_PROOF = [
  { name: "Tunde A.", role: "Sales Lead, Fintech startup", quote: "We hit our Q1 pipeline target in 6 weeks using EmailScraper Pro. The CAC directory alone was a goldmine." },
  { name: "Ngozi O.", role: "Founder, B2B SaaS", quote: "Finally a Nigerian lead gen tool that actually knows our market. The WhatsApp finder is something else entirely." },
  { name: "Emeka K.", role: "Agency Owner", quote: "Running 4 client campaigns simultaneously on the Enterprise plan. The white-label feature sold it for us." },
];

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: T.border }}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium pr-4 group-hover:opacity-80 transition-opacity" style={{ color: T.fg }}>
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
          <ChevronDown className="h-4 w-4 shrink-0" style={{ color: T.muted }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: T.muted }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EmailScraperProPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.48, delay },
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ background: T.bg, color: T.fg }}>
      <SuperNavbar logoSrc="/logo.png" links={SUITE_NAV_LINKS} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.primary} 0%, ${T.primary2} 100%)` }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Amber diagonal accent bar */}
        <div
          className="absolute -right-20 top-0 h-full w-64 opacity-10"
          style={{
            background: `linear-gradient(160deg, ${T.amberLt}, transparent)`,
            transform: "skewX(-8deg)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-8 border"
              style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/80">Live · v1.0.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.06] tracking-tight mb-5"
            >
              Find any Nigerian<br />
              decision-maker's{" "}
              <span style={{ color: "#FCD34D" }}>verified email</span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              B2B email discovery built for the Nigerian market — CAC registry, LinkedIn, VConnect, and WhatsApp numbers. Real-time verification. Bulk export. Chrome extension.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/emailscraper">
                <button
                  className="h-11 px-6 rounded-lg font-bold text-sm flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: "#FCD34D", color: T.primary }}
                >
                  Start Free — 100 leads <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="#pricing">
                <button
                  className="h-11 px-6 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}
                >
                  See Pricing
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Terminal-style mock panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-16 rounded-xl overflow-hidden border shadow-2xl max-w-2xl"
            style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(2,26,44,0.85)", backdropFilter: "blur(12px)" }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>emailscraper — results</span>
            </div>
            {/* Mock results */}
            <div className="p-4 font-mono text-xs space-y-2">
              {[
                { name: "Chidi Okeke",    company: "Paystack",     email: "c.okeke@paystack.com",     conf: 98, v: true },
                { name: "Ngozi Adeyemi",  company: "Andela",       email: "n.adeyemi@andela.com",     conf: 99, v: true },
                { name: "Fatima Aliyu",   company: "Mono HQ",      email: "f.aliyu@mono.co",          conf: 94, v: true },
                { name: "Yinka Adewale",  company: "Piggyvest",    email: "y.adewale@piggyvest.com",  conf: 97, v: true },
              ].map((r, i) => (
                <motion.div
                  key={r.email}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-3 rounded-md px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <span className="text-white/80 w-32 truncate">{r.name}</span>
                  <span className="text-white/40 w-24 truncate hidden sm:block">{r.company}</span>
                  <span className="flex-1 truncate" style={{ color: "#93C5FD" }}>{r.email}</span>
                  <span className="text-emerald-400 shrink-0">{r.conf}%</span>
                </motion.div>
              ))}
              <div className="pt-1 text-white/30">
                <span className="text-amber-400">›</span> 4 of 8,000 monthly finds used
              </div>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-14 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-6"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            {[
              { val: "8,000+", label: "Verified finds/month on Pro" },
              { val: "CAC + VConnect", label: "Nigerian directory access" },
              { val: "<2%", label: "Average bounce rate" },
              { val: "WhatsApp", label: "Phone discovery included" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-black text-white">{s.val}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SOCIAL PROOF ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#F0F9FF", borderBottom: `1px solid ${T.border}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-6">
          {SOCIAL_PROOF.map((s, i) => (
            <motion.div key={s.name} {...fadeUp(i * 0.07)} className="bg-white rounded-xl p-5 border" style={{ borderColor: T.border }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: T.fg }}>&ldquo;{s.quote}&rdquo;</p>
              <div>
                <div className="text-xs font-semibold" style={{ color: T.fg }}>{s.name}</div>
                <div className="text-xs" style={{ color: T.muted }}>{s.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div {...fadeUp()} className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.amber }}>
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: T.fg }}>
            Every tool Nigerian sales teams<br className="hidden sm:block" /> need to fill the pipeline.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(i * 0.04)}
              className="group rounded-xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: T.border, background: "#fff" }}
            >
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center mb-4 transition-colors"
                style={{ background: "#EFF6FF" }}
              >
                <f.icon className="h-4.5 w-4.5" style={{ color: T.primary }} />
              </div>
              <h3 className="text-sm font-bold mb-1.5" style={{ color: T.fg }}>{f.label}</h3>
              <p className="text-xs leading-relaxed" style={{ color: T.muted }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section style={{ background: T.fg }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#FCD34D" }}>How It Works</p>
            <h2 className="text-3xl font-black text-white">From search to signed deal in four steps.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", icon: Search, title: "Search", body: "Enter a name + company, or let the Chrome extension capture as you browse LinkedIn and Nigerian directories." },
              { n: "02", icon: ShieldCheck, title: "Verify", body: "Every result passes MX + SMTP verification in real-time. Only bounced emails never make it to your list." },
              { n: "03", icon: BarChart2, title: "Score", body: "AI ranks leads by conversion likelihood. Your hottest prospects surface first — no manual triage." },
              { n: "04", icon: Mail, title: "Outreach", body: "Send cold email sequences directly from the tool or push to HubSpot, Sheets, or any CRM in one click." },
            ].map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.08)}>
                <div className="text-4xl font-black mb-4" style={{ color: "rgba(255,255,255,0.1)" }}>{step.n}</div>
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(252,211,77,0.12)" }}
                >
                  <step.icon className="h-4 w-4" style={{ color: "#FCD34D" }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div {...fadeUp()} className="mb-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.amber }}>Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: T.fg }}>Start free. Scale when you need to.</h2>
        </motion.div>

        {/* Billing toggle */}
        <motion.div {...fadeUp(0.06)} className="flex items-center gap-3 mb-10">
          <div
            className="inline-flex items-center rounded-full p-1 gap-1"
            style={{ background: T.mutedBg }}
          >
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBilling(b)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={
                  billing === b
                    ? { background: "#fff", color: T.fg, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }
                    : { color: T.muted }
                }
              >
                {b === "monthly" ? "Monthly" : "Yearly · save 17%"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              {...fadeUp(i * 0.07)}
              className="relative rounded-2xl border flex flex-col"
              style={{
                borderColor: tier.accent ? T.primary : T.border,
                background: tier.accent ? T.primary : "#fff",
                boxShadow: tier.accent ? `0 8px 32px rgba(7,89,133,0.25)` : undefined,
              }}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-5">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold"
                    style={
                      tier.accent
                        ? { background: "#FCD34D", color: T.primary }
                        : { background: T.primary, color: "#fff" }
                    }
                  >
                    {tier.badge === "Most Popular" && <Star className="h-3 w-3" />}
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: tier.accent ? "#fff" : T.fg }}
                >
                  {tier.name}
                </h3>

                <div className="mb-1">
                  <span
                    className="text-3xl font-black"
                    style={{ color: tier.accent ? "#FCD34D" : T.fg }}
                  >
                    {tier.monthly === 0
                      ? "Free"
                      : `₦${(billing === "monthly" ? tier.monthly : tier.yearly).toLocaleString()}`}
                  </span>
                  {tier.monthly > 0 && (
                    <span className="text-xs ml-1" style={{ color: tier.accent ? "rgba(255,255,255,0.5)" : T.muted }}>
                      /{billing === "monthly" ? "mo" : "yr"}
                    </span>
                  )}
                </div>

                <div
                  className="text-xs font-medium mb-5 pb-5 border-b"
                  style={{
                    color: tier.accent ? "rgba(255,255,255,0.6)" : T.muted,
                    borderColor: tier.accent ? "rgba(255,255,255,0.15)" : T.border,
                  }}
                >
                  {tier.limit}
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 mt-0.5"
                        style={{ color: tier.accent ? "#86EFAC" : T.success }}
                      />
                      <span style={{ color: tier.accent ? "rgba(255,255,255,0.85)" : T.fg }}>{f}</span>
                    </li>
                  ))}
                  {tier.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <X
                        className="h-3.5 w-3.5 shrink-0 mt-0.5"
                        style={{ color: tier.accent ? "rgba(255,255,255,0.2)" : T.mutedBg }}
                      />
                      <span style={{ color: tier.accent ? "rgba(255,255,255,0.25)" : "#A1A1AA" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.href}>
                  <button
                    className="w-full h-10 rounded-lg text-sm font-bold transition-all hover:opacity-90"
                    style={
                      tier.accent
                        ? { background: "#FCD34D", color: T.primary }
                        : tier.monthly === 0
                        ? { background: T.mutedBg, color: T.fg }
                        : { background: T.primary, color: "#fff" }
                    }
                  >
                    {tier.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section
        className="border-t"
        style={{ borderColor: T.border, background: "#fff" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <motion.div {...fadeUp()} className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.amber }}>FAQ</p>
            <h2 className="text-3xl font-black" style={{ color: T.fg }}>Common questions.</h2>
          </motion.div>
          {FAQS.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      {/* ══ CTA STRIP ═════════════════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg, ${T.primary} 0%, ${T.primary2} 100%)` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-1">Ready to fill your pipeline?</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Start free — 100 verified leads, no credit card.
            </p>
          </div>
          <Link href="/emailscraper">
            <button
              className="h-11 px-7 rounded-lg font-bold text-sm flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#FCD34D", color: T.primary }}
            >
              Start for Free <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      <SuperFooter product="emailscraper-pro" logoSrc="/logo.png" />
    </div>
  );
}