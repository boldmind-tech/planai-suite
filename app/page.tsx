"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SuperNavbar, SuperFooter } from "@boldmindng/ui";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, MessageSquare } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Adaeze O.",
    role: "Fashion boutique, Lagos Island",
    quote:
      "My WhatsApp DMs used to pile up overnight. AI Receptionist now replies before I wake up. I've captured 3x more leads this month.",
    product: "AI Receptionist",
    revenue: "₦280k added MRR",
  },
  {
    name: "Emeka T.",
    role: "Digital agency, Abuja",
    quote:
      "ViralKit schedules content for all my clients in one session. What used to take me 8 hours every week now takes 45 minutes.",
    product: "ViralKit",
    revenue: "8 hrs → 45 min",
  },
  {
    name: "Fatima B.",
    role: "Halal food brand, Kano",
    quote:
      "Credibility Hubs built me a portfolio that got me into a corporate supplier conversation. Worth every kobo of the ₦5k.",
    product: "Credibility Hubs",
    revenue: "1st corporate deal",
  },
];

const ECOSYSTEM_PILLARS = [
  {
    icon: "📰",
    name: "AmeboGist",
    tagline: "Amebo Wey Make Sense!",
    desc: "Nigeria's #1 Pidgin English gist platform. 12k+ readers. The awareness door.",
    href: "https://amebogist.ng",
    colorClass: "text-emerald-900",
    bgClass: "bg-amber-50",
    borderClass: "border-emerald-200",
    utm: "utm_source=planai&utm_medium=ecosystem_block&utm_campaign=amebogist",
  },
  {
    icon: "🌱",
    name: "VillageCircle",
    tagline: "Where Conviction Becomes Code",
    desc: "12 concepts in motion. Vibe Coders Cohort 1 open. The conviction layer.",
    href: "https://villagecircle.ng",
    colorClass: "text-amber-950",
    bgClass: "bg-stone-50",
    borderClass: "border-amber-200",
    utm: "utm_source=planai&utm_medium=ecosystem_block&utm_campaign=villagecircle",
  },
  {
    icon: "📚",
    name: "EduCenter",
    tagline: "Pass Exams. Build Business. Master AI.",
    desc: "JAMB/WAEC prep, business mastery & AI skills. 3 tracks. ₦3k/month.",
    href: "https://educenter.com.ng",
    colorClass: "text-blue-900",
    bgClass: "bg-slate-50",
    borderClass: "border-blue-200",
    utm: "utm_source=planai&utm_medium=ecosystem_block&utm_campaign=educenter",
  },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function TagBadge({ tag }: { tag: "LIVE" | "BUILDING" | "PLANNED" }) {
  const classes = {
    LIVE: "bg-emerald-100 text-emerald-700 border border-emerald-300",
    BUILDING: "bg-violet-100 text-violet-700 border border-violet-300",
    PLANNED: "bg-slate-100 text-slate-500 border border-slate-200",
  };
  return (
    <span
      className={`text-[9px] font-black tracking-[0.18em] px-2 py-0.5 rounded-full ${classes[tag]}`}
    >
      {tag}
    </span>
  );
}

function useCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration]);
  return count;
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlanAILanding() {
  const businesses = useCounter(650);
  const revenue = useCounter(1);

  return (
    <div className="min-h-screen bg-violet-50 text-gray-900 font-sans overflow-x-hidden">
      {/* NAV */}
      <SuperNavbar
        logoSrc="/logo.png"
        cta={{
          label: "Start Free →",
          href: "https://boldmind.ng/register?redirect=https://planai.boldmind.ng",
        }}
        sticky={true}
        links={SUITE_NAV_LINKS}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 text-center">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-300 text-violet-700 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
              AI Tools Suite · Made for Nigerian Entrepreneurs
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.05]">
              One Suite.
              <br />
              <span className="text-violet-700">Every Tool</span> Your
              <br />
              Nigerian Business Needs.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
              AI Receptionist, Digital Storefronts, Branding, ViralKit,
              Financial Forecasting & more — one login, one price, built for
              Nigeria.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href="https://boldmind.ng/register?redirect=https://planai.boldmind.ng&utm_source=planai_landing&utm_medium=hero_cta&utm_campaign=start_free"
                className="px-8 py-4 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-violet-500/25 flex items-center gap-2"
              >
                Start Free Trial — No Card
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("suite")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white border-2 border-violet-300 text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-all"
              >
                See All Tools ↓
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                {
                  n: `${businesses}+`,
                  label: "Businesses Running",
                  color: "text-violet-700",
                },
                {
                  n: `₦${revenue}M+`,
                  label: "Monthly Revenue Processed",
                  color: "text-emerald-600",
                },
                {
                  n: "Built",
                  label: "in Lagos, Nigeria",
                  color: "text-sky-700",
                },
              ].map(({ n, label, color }) => (
                <div key={label} className="text-center">
                  <div
                    className={`text-3xl font-black leading-none mb-1 ${color}`}
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

      {/* SUITE GRID */}
      <section
        id="suite"
        className="py-20 px-6 md:px-12 bg-white border-t border-violet-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-600 text-[11px] font-black tracking-[0.25em] uppercase mb-3">
              The Full Suite
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Everything Inside PlanAI
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              One subscription unlocks them all. Or pay per tool — your choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUITE_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-violet-100 rounded-2xl p-7 hover:border-violet-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${p.accentBg} ${p.accentBorder} border rounded-2xl flex items-center justify-center text-2xl`}
                  >
                    {p.icon}
                  </div>
                  <TagBadge tag={p.tag} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 font-light">
                  {p.desc}
                </p>

                {/* Stat pill */}
                <div
                  className={`flex items-center justify-between ${p.accentBg} rounded-xl px-4 py-3 mb-5`}
                >
                  <div>
                    <div
                      className={`text-xl font-black leading-none ${p.accent}`}
                    >
                      {p.stat}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                      {p.statLabel}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-gray-400">from</div>
                    <div className={`text-sm font-bold ${p.accent}`}>
                      {p.price}
                    </div>
                  </div>
                </div>

                <Link
                  href={`${p.href}?utm_source=planai_landing&utm_medium=suite_card`}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all border ${
                    p.tag === "LIVE"
                      ? p.accentBtn
                      : `bg-transparent ${p.accentBtnOutline}`
                  }`}
                >
                  {p.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 bg-violet-50 border-t border-violet-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Real Businesses. Real Results.
            </h2>
            <p className="text-gray-400 text-lg">
              650+ Nigerian businesses already running on PlanAI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 border border-violet-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-violet-600 font-bold uppercase tracking-wider">
                      {t.product}
                    </div>
                    <div className="text-sm text-emerald-600 font-black mt-0.5">
                      {t.revenue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-20 px-6 md:px-12 bg-white border-t border-violet-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-400 text-lg">
              No hidden fees. No dollar pricing. 100% Naira-first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 border-2 ${
                  tier.highlight
                    ? "bg-gradient-to-br from-violet-700 to-violet-900 border-violet-600 shadow-2xl shadow-violet-500/25 scale-105"
                    : "bg-white border-violet-100 hover:border-violet-300 hover:shadow-md transition-all"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3
                  className={`text-lg font-black mb-1 ${tier.highlight ? "text-white" : "text-gray-900"}`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-xs mb-5 ${tier.highlight ? "text-violet-200" : "text-gray-400"}`}
                >
                  {tier.desc}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-4xl font-black ${tier.highlight ? "text-white" : "text-violet-700"}`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${tier.highlight ? "text-violet-300" : "text-gray-400"}`}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-emerald-300" : "text-emerald-500"}`}
                      />
                      <span
                        className={
                          tier.highlight ? "text-violet-100" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://boldmind.ng/register?redirect=https://planai.boldmind.ng&plan=${tier.plan}&utm_source=planai_landing&utm_medium=pricing&utm_campaign=${tier.plan}`}
                  className={`flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all gap-2 ${
                    tier.highlight
                      ? "bg-white text-violet-700 hover:bg-violet-50"
                      : "bg-violet-700 text-white hover:bg-violet-800"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <p
                  className={`text-center text-[11px] mt-3 ${tier.highlight ? "text-violet-400" : "text-gray-400"}`}
                >
                  {tier.name === "Agency"
                    ? "Custom contract available"
                    : "7-day free trial · No card required"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section
        id="ecosystem"
        className="py-20 px-6 md:px-12 bg-violet-50 border-t border-violet-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-600 text-[11px] font-black tracking-[0.25em] uppercase mb-3">
              BoldMind Ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              PlanAI Is One Door of Four
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              One BoldMind account unlocks the entire ecosystem. From gist to
              conviction to skills to tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {ECOSYSTEM_PILLARS.map((p) => (
              <a
                key={p.name}
                href={`${p.href}?${p.utm}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${p.bgClass} border ${p.borderClass} rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 block`}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className={`text-lg font-black mb-1 ${p.colorClass}`}>
                  {p.name}
                </h3>
                <p
                  className={`text-xs font-semibold mb-3 opacity-70 ${p.colorClass}`}
                >
                  {p.tagline}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">
                  {p.desc}
                </p>
                <span className={`text-sm font-bold ${p.colorClass}`}>
                  Explore →
                </span>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-violet-100 p-6 text-center">
            <p className="text-sm text-gray-500 mb-3 max-w-2xl mx-auto">
              One BoldMind account. All four pillars. The flywheel: AmeboGist
              brings readers → VillageCircle builds conviction → EduCenter
              activates skills → PlanAI enables building.
            </p>
            <a
              href="https://boldmind.ng/register?utm_source=planai_landing&utm_medium=ecosystem_footer&utm_campaign=boldmind_account"
              className="text-violet-700 font-bold text-sm hover:underline"
            >
              Create your BoldMind account →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-violet-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Can I use PlanAI on mobile?",
                a: "Yes. PlanAI is a PWA — works on any smartphone browser without downloading an app. Optimised for Android and iOS.",
              },
              {
                q: "Do you support Paystack?",
                a: "Yes. Digital Storefronts, Financial Forecasting, and Analytics Dashboard all integrate natively with Paystack.",
              },
              {
                q: "What's the difference between Starter and Pro?",
                a: "Starter gives you 1 tool. Pro unlocks the full suite — all 10 tools, unlimited contacts, team seats, and priority support.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes — 7 days free, no credit card required. Every plan starts with a free trial.",
              },
              {
                q: "Can I pay in dollars?",
                a: "All plans are priced in Naira for now. A diaspora tier is coming soon.",
              },
              {
                q: "Is this compliant with Nigerian regulations?",
                a: "Yes. We comply with NDPA data rules, and our e-invoicing module is built with FIRS guidelines in mind.",
              },
            ].map(({ q, a }, i) => (
              <details
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 group open:shadow-sm"
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

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-800 via-violet-700 to-violet-900 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-5xl block mb-6">⚡</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            650 businesses started free.
            <br />
            <span className="text-emerald-300">Yours is next.</span>
          </h2>
          <p className="text-violet-200 text-lg mb-10 leading-relaxed">
            Every day you wait is another DM that goes unanswered, another
            competitor capturing your leads, another week without a real online
            store.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://boldmind.ng/register?redirect=https://planai.boldmind.ng&utm_source=planai_landing&utm_medium=final_cta&utm_campaign=start_free"
              className="px-8 py-4 bg-white text-violet-700 font-black rounded-xl hover:bg-violet-50 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Start Free — No Card Needed <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2349138349271?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20PlanAI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all flex items-center gap-2"
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
            links: [
              { label: "AI Receptionist", href: "/receptionist" },
              { label: "Digital Storefronts", href: "/store" },
              { label: "Emailscraper Pro", href: "/emailscraper" },
              { label: "Credibility Hubs", href: "/credibility" },
              { label: "Investor Readiness", href: "/investor" },
              { label: "ViralKit", href: "/viralkit" },
              { label: "NaijaFit", href: "/fit" },
              { label: "Marketing Automation", href: "/marketing" },
              { label: "Branding & Design", href: "/branding" },
              { label: "Analytics Dashboard", href: "/analytics" },
              { label: "Financial Forecasting", href: "/finance" },
              { label: "AI Business Planning", href: "/planning" },
            ],
          },
          {
            title: "BoldMind Network",
            links: [
              { label: "AmeboGist", href: "https://amebogist.ng" },
              { label: "VillageCircle", href: "https://villagecircle.ng" },
              { label: "EduCenter", href: "https://educenter.com.ng" },
              { label: "BoldMind", href: "https://boldmind.ng" },
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
