"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SuperNavbar, SuperFooter, Button } from "@boldmind-tech/ui";
import { TOOL_NAV_LINKS } from "@/lib/nav-links";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Database,
  PieChart,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Building2,
  Mail,
  BarChart3,
  Star,
  Clock,
  Lock,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FileText,
    label: "SAFE / Convertible Note Generator",
    desc: "Auto-generate SEC Nigeria-compliant SAFE agreements and convertible notes. Fill in your terms — get a ready-to-sign document.",
  },
  {
    icon: Database,
    label: "Data Room Setup & Sharing",
    desc: "Structured data room with a shareable investor link. Includes NDA gating, view tracking, and document expiry.",
  },
  {
    icon: PieChart,
    label: "Cap Table Management",
    desc: "Model your current cap table through Series A. See exactly how each round dilutes founder equity before you sign anything.",
  },
  {
    icon: TrendingUp,
    label: "Equity Dilution Simulator",
    desc: "Run funding scenarios side by side. Pre-seed, seed, bridge round — know your ownership before you're in the room.",
  },
  {
    icon: Users,
    label: "Nigerian VC & Angel Directory",
    desc: "Live-updated directory of VCs actively deploying capital in Nigeria plus diaspora angels — filtered by stage and sector.",
  },
  {
    icon: Shield,
    label: "Due Diligence Checklist",
    desc: "SEC Nigeria-compliant DD checklist. Know what investors will ask before they ask it and fill the gaps early.",
  },
  {
    icon: Mail,
    label: "Investor Update Templates",
    desc: "Monthly and quarterly investor update templates written for Nigerian startup context. Keeps your backers warm between rounds.",
  },
  {
    icon: Building2,
    label: "CAC Incorporation Wizard",
    desc: "Step-by-step incorporation guide tied directly to the CAC online portal. Get your company properly structured for funding.",
  },
  {
    icon: BarChart3,
    label: "Term Sheet Comparison",
    desc: "Drop in multiple term sheets. See valuation, dilution, control provisions, and liquidation preferences side by side.",
  },
  {
    icon: Zap,
    label: "Warm Intro Request Generator",
    desc: "AI drafts a mutual-connection intro request based on the VC's thesis and your traction. No cold outreach needed.",
  },
  {
    icon: Users,
    label: "Investor CRM",
    desc: "Track every VC you've pitched — feedback, follow-up dates, relationship temperature. Never let a warm lead go cold.",
  },
  {
    icon: Star,
    label: "Pitch Deck Templates",
    desc: "Deck templates built for the Nigerian startup context — what Lagos angels and pan-African VCs actually want to see.",
  },
];

const ONE_TIME = [
  {
    name: "Data Room Setup",
    price: "₦50,000",
    tag: "One-time",
    desc: "Data room structure, document templates, SAFE/convertible note generator, due diligence checklist (SEC Nigeria). Shareable investor link included.",
    items: [
      "Data room with shareable investor link",
      "SAFE & convertible note generator",
      "SEC Nigeria DD checklist",
      "Document templates (NDA, term sheet)",
    ],
    cta: "Get Data Room",
    accent: false,
  },
  {
    name: "Full Readiness Pack",
    price: "₦85,000",
    tag: "Best Value",
    desc: "Everything in Data Room + cap table setup, pitch deck, investor update templates, and warm intro request generator.",
    items: [
      "Everything in Data Room Setup",
      "Cap table setup & dilution modelling",
      "Pitch deck (Nigerian startup context)",
      "Investor update email templates",
      "Warm intro request generator",
    ],
    cta: "Get Full Pack",
    accent: true,
  },
];

const MONTHLY = {
  name: "Active Fundraiser",
  monthly: "₦12,000",
  yearly: "₦120,000",
  badge: "For startups actively raising",
  items: [
    "Cap table management (up to Series A)",
    "Investor CRM — track pitches & feedback",
    "Monthly investor update templates",
    "Equity dilution simulator",
    "Term sheet comparison tool",
    "Nigerian VC + angel directory",
    "CAC incorporation wizard",
  ],
};

const FAQS = [
  {
    q: "Is this legally binding in Nigeria?",
    a: "The SAFE and convertible note templates are drafted with SEC Nigeria guidelines in mind, but we strongly recommend having a local startup lawyer review before signing. We partner with vetted Lagos-based startup attorneys for review packages.",
  },
  {
    q: "Do I need to already have a company registered?",
    a: "No. The CAC incorporation wizard walks you through registration from scratch. You can set up your company and your data room in the same session.",
  },
  {
    q: "Is my data room secure?",
    a: "Files are stored on Cloudflare R2 with AES-256 encryption. Investor links are NDA-gated and you can revoke access anytime. View analytics show you who opened what.",
  },
  {
    q: "How current is the VC directory?",
    a: "The directory is updated monthly. It tracks publicly announced deals, fund closings, and portfolio updates from Nigerian and pan-African VCs actively deploying capital.",
  },
  {
    q: "Can I upgrade from a one-time pack to monthly?",
    a: "Yes. If you purchase a one-time pack, the cost is credited toward your first two months of the Active Fundraiser plan.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors pr-4">
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestorReadinessPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <SuperNavbar logoSrc="/logo.png" links={TOOL_NAV_LINKS} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1E293B]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#CA8A04 1px, transparent 1px), linear-gradient(90deg, #CA8A04 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <motion.div {...fadeUp(0)} className="max-w-3xl">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 mb-8">
              <Clock className="h-3 w-3 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400 tracking-wide uppercase">
                Launching Q3 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Raise funding with{" "}
              <span className="text-yellow-400">documents investors</span>{" "}
              actually trust.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              SAFE agreements, data room setup, cap table modelling, and SEC Nigeria due diligence — automated for Nigerian startup founders. From pre-seed to Series A.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="#pricing">
                <Button className="h-11 px-6 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold gap-2 transition-colors">
                  See Pricing <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  className="h-11 px-6 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-16 pt-8 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { val: "12+", label: "Document templates" },
              { val: "50+", label: "Nigerian VCs tracked" },
              { val: "SEC NG", label: "Compliant checklists" },
              { val: "₦0", label: "Legal bill to get started" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-yellow-400">{s.val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PLANNED BANNER ════════════════════════════════════════════════════ */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <Lock className="h-4 w-4 text-yellow-600 shrink-0" />
          <p className="text-sm text-yellow-800">
            <strong>Early access:</strong> Join the waitlist and lock in launch pricing.
            {" "}<Link href="/waitlist?product=investor-readiness" className="underline underline-offset-2 font-medium">Join waitlist →</Link>
          </p>
        </div>
      </div>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div {...fadeUp()} className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">
            What's Included
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Every tool a Nigerian founder needs<br className="hidden sm:block" /> to walk into a room ready.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              {...fadeUp(i * 0.04)}
              className="bg-white p-6 hover:bg-slate-50 transition-colors group"
            >
              <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-yellow-50 transition-colors">
                <f.icon className="h-4 w-4 text-slate-600 group-hover:text-yellow-600 transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">{f.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section className="bg-[#1E293B] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp()} className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-widest text-yellow-500 uppercase mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-white">From zero to investor-ready in a day.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Incorporate", body: "Use the CAC wizard to structure your company correctly before raising a single naira." },
              { n: "02", title: "Build Your Data Room", body: "Upload financials, upload docs, generate your SAFE — all structured the way VCs expect." },
              { n: "03", title: "Model Your Cap Table", body: "Know your dilution before you sign. Run scenarios across pre-seed, seed, and Series A." },
              { n: "04", title: "Track & Close", body: "Log every pitch, manage follow-ups, compare term sheets, and send investor updates." },
            ].map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.08)} className="relative">
                <div className="text-5xl font-black text-slate-700/40 leading-none mb-4">{step.n}</div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-slate-600">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div {...fadeUp()} className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-500 mt-3 text-sm">No retainer. No hourly lawyer. Just tools that work.</p>
        </motion.div>

        {/* One-time packs */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {ONE_TIME.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(i * 0.08)}
              className={`relative rounded-2xl p-7 border transition-shadow hover:shadow-lg
                ${plan.accent
                  ? "bg-[#1E293B] border-slate-700 text-white"
                  : "bg-white border-slate-200 text-slate-900"
                }`}
            >
              {plan.accent && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                    <Star className="h-3 w-3" /> {plan.tag}
                  </span>
                </div>
              )}
              {!plan.accent && (
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-500 mb-4">
                  {plan.tag}
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${plan.accent ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <div className={`text-3xl font-black mb-4 ${plan.accent ? "text-yellow-400" : "text-slate-900"}`}>
                {plan.price}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${plan.accent ? "text-slate-400" : "text-slate-500"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2.5 mb-8">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.accent ? "text-yellow-400" : "text-emerald-500"}`} />
                    <span className={plan.accent ? "text-slate-300" : "text-slate-700"}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/waitlist?product=investor-readiness">
                <button
                  className={`w-full h-10 rounded-lg text-sm font-semibold transition-colors
                    ${plan.accent
                      ? "bg-yellow-400 hover:bg-yellow-300 text-slate-900"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                >
                  {plan.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Monthly plan */}
        <motion.div
          {...fadeUp(0.16)}
          className="rounded-2xl border border-slate-200 bg-white p-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-slate-900">{MONTHLY.name}</h3>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs text-blue-700 font-medium">
                  {MONTHLY.badge}
                </span>
              </div>

              {/* Billing toggle */}
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center rounded-full bg-slate-100 p-1 gap-1">
                  {(["monthly", "yearly"] as const).map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBilling(b)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all
                        ${billing === b ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
                    >
                      {b === "monthly" ? "Monthly" : "Yearly (save 17%)"}
                    </button>
                  ))}
                </div>
                <span className="text-2xl font-black text-slate-900">
                  {billing === "monthly" ? MONTHLY.monthly : MONTHLY.yearly}
                  <span className="text-sm font-normal text-slate-400 ml-1">
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {MONTHLY.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:w-40 shrink-0">
              <Link href="/waitlist?product=investor-readiness">
                <button className="w-full h-10 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors">
                  Join Waitlist
                </button>
              </Link>
              <p className="text-xs text-slate-400 text-center mt-2">Cancel anytime</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div {...fadeUp()} className="mb-10">
          <p className="text-xs font-semibold tracking-widest text-yellow-600 uppercase mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-slate-900">Common questions.</h2>
        </motion.div>
        <div>
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ══ CTA STRIP ═════════════════════════════════════════════════════════ */}
      <section className="bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to raise?</h2>
            <p className="text-slate-400 text-sm">Join the waitlist. We'll notify you the day we launch.</p>
          </div>
          <Link href="/waitlist?product=investor-readiness">
            <Button className="h-11 px-7 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold gap-2 whitespace-nowrap transition-colors">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <SuperFooter product="investor-readiness" />
    </div>
  );
}