'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, MessageSquare, X, Play } from 'lucide-react';
import { SuperNavbar, SuperFooter } from '@boldmindng/ui';
import { TOOL_NAV_LINKS } from '@/lib/nav-links';
import { SUITE_PRODUCTS } from '@/lib/suite-products';
import { PRICING_TIERS } from '@/lib/suite-products';

const REG_BASE = 'https://boldmind.ng/register?redirect=https://planai.boldmind.ng';


const FAQS = [
  {
    q: 'Can I use PlanAI on mobile?',
    a: 'Yes. PlanAI is a PWA (Progressive Web App) — works on any smartphone browser without downloading an app. Add it to your home screen on Android or iOS for a native app experience.',
  },
  {
    q: 'Is this compliant with FIRS e-invoicing requirements?',
    a: 'Yes. Our ReceiptGenius module (included in the suite) is built with FIRS e-invoicing guidelines in mind. We\'ll keep it updated as regulations evolve.',
  },
  {
    q: 'Do you support Paystack?',
    a: 'Yes — natively. Digital Storefronts collects payments via Paystack. Financial Forecasting pulls your real Paystack revenue data automatically. Analytics Dashboard shows Paystack transactions alongside social metrics.',
  },
  {
    q: 'What\'s the difference between Starter and Pro?',
    a: 'Starter gives you access to 1 PlanAI tool of your choice. Pro unlocks all 9 tools, unlimited contacts and leads, team seats (3 members), WhatsApp alerts, and priority support — for ₦15k/month instead of paying per-tool.',
  },
  {
    q: 'Can I pay in dollars?',
    a: 'All plans are priced in Naira only for now. A diaspora/dollar tier is on the roadmap — join the waitlist to be notified when it launches.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — 7 days free on every plan, no credit card required. Start using your tools immediately and only pay if you see value. No gotchas.',
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function TagBadge({ tag }: { tag: 'LIVE' | 'BUILDING' | 'PLANNED' }) {
  if (tag === 'LIVE') return (
    <span className="text-[9px] font-black tracking-[0.18em] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
      LIVE
    </span>
  );
  return (
    <span className="text-[9px] font-black tracking-[0.18em] px-2 py-0.5 rounded-full bg-violet-100 text-violet-600 border border-violet-300">
      BUILDING
    </span>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #5B21B6, #7C3AED)' }}
    >
      {initials}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StartPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-gray-900 font-sans overflow-x-hidden" style={{ background: '#F5F3FF' }}>

      {/* ── MINIMAL HEADER ── */}
    <SuperNavbar logoSrc='/logo.png' links={TOOL_NAV_LINKS} cta={{ label: 'Start Free →', href: 'https://boldmind.ng/register?redirect=https://planai.boldmind.ng' }} />

   <section id="suite" className="py-20 px-6 md:px-12 bg-white border-t border-violet-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-violet-600 text-[11px] font-black tracking-[0.25em] uppercase mb-3">The Full Suite</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Everything Inside PlanAI</h2>
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
                  <div className={`w-12 h-12 ${p.accentBg} ${p.accentBorder} border rounded-2xl flex items-center justify-center text-2xl`}>
                    {p.icon}
                  </div>
                  <TagBadge tag={p.tag} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 font-light">{p.desc}</p>

                {/* Stat pill */}
                <div className={`flex items-center justify-between ${p.accentBg} rounded-xl px-4 py-3 mb-5`}>
                  <div>
                    <div className={`text-xl font-black leading-none ${p.accent}`}>{p.stat}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{p.statLabel}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-gray-400">from</div>
                    <div className={`text-sm font-bold ${p.accent}`}>{p.price}</div>
                  </div>
                </div>

                <Link
                  href={`${p.href}?utm_source=planai_start&utm_medium=suite_card`}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all border ${
                    p.tag === 'LIVE' ? p.accentBtn : `bg-transparent ${p.accentBtnOutline}`
                  }`}
                >
                  {p.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PRICING TABLE ── */}
      <section id="pricing" className="py-20 px-5 md:px-12 border-t border-violet-100" style={{ background: '#F5F3FF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-black tracking-[0.25em] uppercase mb-3" style={{ color: '#5B21B6' }}>
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">Simple Naira Pricing</h2>
            <p className="text-gray-400 text-lg">No hidden fees. No dollar pricing. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 border-2 transition-all ${
                  tier.highlight ? 'scale-105 shadow-2xl' : 'bg-white hover:shadow-md'
                }`}
                style={
                  tier.highlight
                    ? { background: 'linear-gradient(135deg, #5B21B6, #3730A3)', borderColor: '#5B21B6' }
                    : { borderColor: 'rgba(91,33,182,0.15)' }
                }
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full"
                    style={{ background: '#059669' }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`text-lg font-black mb-1 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-xs mb-5 ${tier.highlight ? 'text-violet-200' : 'text-gray-400'}`}>
                  {tier.desc}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-black ${tier.highlight ? 'text-white' : ''}`} style={!tier.highlight ? { color: '#5B21B6' } : {}}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.highlight ? 'text-violet-300' : 'text-gray-400'}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-emerald-300' : ''}`} style={!tier.highlight ? { color: '#059669' } : {}} />
                      <span className={tier.highlight ? 'text-violet-100' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${REG_BASE}&plan=${tier.plan}&utm_source=planai_start&utm_medium=pricing&utm_campaign=${tier.plan}`}
                  className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all gap-2 hover:opacity-90"
                  style={
                    tier.highlight
                      ? { background: 'white', color: '#5B21B6' }
                      : { background: '#5B21B6', color: 'white' }
                  }
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <p className={`text-center text-[11px] mt-3 ${tier.highlight ? 'text-violet-400' : 'text-gray-400'}`}>
                  {tier.name === 'Agency' ? 'Custom contract available' : '7-day free trial · No card required'}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Or{' '}
            <a href="#suite" className="font-bold underline" style={{ color: '#5B21B6' }}>
              pay per tool
            </a>
            {' '}— each product has individual pricing above.
          </p>
        </div>
      </section>

  
      {/* ── FAQ ── */}
      <section className="py-20 px-5 md:px-12 border-t border-violet-100" style={{ background: '#F5F3FF' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl overflow-hidden"
                style={{ borderColor: openFaq === i ? 'rgba(91,33,182,0.3)' : 'rgba(91,33,182,0.1)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-bold text-sm text-gray-900">{q}</span>
                  <span
                    className="flex-shrink-0 text-lg transition-transform duration-200"
                    style={{
                      color: '#5B21B6',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SuperFooter              
       logoSrc='/logo.png'
        sections={[
          {
            title: 'Tools',
            links: [
              { label: 'AI Receptionist', href: '/receptionist' },
              { label: 'Digital Storefronts', href: '/store' },
              { label: 'Emailscraper Pro', href: '/emailscraper' },
              { label: 'Credibility Hubs', href: '/credibility'},
              { label: 'Investor Readiness', href: '/investor' },
              { label: 'ViralKit', href: '/viralkit' },
              { label: 'NaijaFit', href: '/fit' },
              { label: 'Marketing Automation', href: '/marketing' },
              { label: 'Branding & Design', href: '/branding' },
              { label: 'Analytics Dashboard', href: '/analytics' },
              { label: 'Financial Forecasting', href: '/finance' },
              { label: 'AI Business Planning', href: '/planning' },
            ],
          },
          {
            title: 'BoldMind Network',
            links: [
              { label: 'AmeboGist', href: 'https://amebogist.ng' },
              { label: 'VillageCircle', href: 'https://villagecircle.ng' },
              { label: 'EduCenter', href: 'https://educenter.com.ng' },
              { label: 'BoldMind', href: 'https://boldmind.ng' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'NDPA Compliance', href: '/ndpa' },
              { label: 'Cookie Policy', href: '/cookies' },
            ],
          },
        ]}
      />
    </div>
  );
}
