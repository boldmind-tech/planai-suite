'use client';

import { SuperNavbar, SuperFooter } from '@boldmindng/ui';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { SUITE_NAV_LINKS } from '@/lib/nav-links';

const REG_BASE = 'https://boldmind.ng/register?redirect=https://planai.boldmind.ng';

const TIERS = [
  {
    name:         'Free',
    priceMonthly: 0,
    priceYearly:  0,
    badge:        null,
    desc:         'Try 2 tools. Zero commitment.',
    features: [
      'Access to 2 tools (your choice)',
      'Free tiers of each selected tool',
      'PlanAI dashboard overview',
      'Onboarding wizard',
      'Basic business profile',
    ],
    cta:       'Start Free',
    plan:      'free',
    highlight: false,
  },
  {
    name:         'Starter',
    priceMonthly: 9500,
    priceYearly:  95000,
    badge:        null,
    desc:         'Four tools. Prove ROI fast.',
    features: [
      'Access to 4 tools (your choice)',
      'Basic tier of each selected tool',
      'Unified billing dashboard',
      'PlanAI Score (business health)',
      '1 team seat',
      'Monthly AI business digest',
      '10% off individual tool upgrades',
    ],
    cta:       'Get Starter',
    plan:      'basic',
    highlight: false,
  },
  {
    name:         'Pro',
    priceMonthly: 25000,
    priceYearly:  250000,
    badge:        'Most Popular',
    desc:         'All 12 tools. Everything unlocked.',
    features: [
      'All 12 PlanAI tools (full access)',
      'Pro tier across all tools',
      '3 team seats',
      'PlanAI Advisor (AI business chat)',
      'Cross-tool data sync',
      'Industry bundle packs',
      'Priority onboarding session',
      '20% off Agency tier upgrade',
    ],
    cta:       'Get Pro',
    plan:      'pro',
    highlight: true,
  },
  {
    name:         'Agency',
    priceMonthly: 60000,
    priceYearly:  600000,
    badge:        'Agency',
    desc:         'Resell PlanAI to your clients.',
    features: [
      'All Pro features',
      'White-label PlanAI for your clients',
      'Unlimited team seats',
      'Client workspace management',
      'API access (resell integrations)',
      'Dedicated account manager',
      'SLA support (24h response)',
      'Custom tool bundles per client',
    ],
    cta:       'Contact Sales',
    plan:      'agency',
    highlight: false,
  },
] as const;

function formatNaira(n: number) {
  if (n === 0) return '₦0';
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SuperNavbar logoSrc="/logo.png" links={SUITE_NAV_LINKS} />

      <main>
        {/* ── HEADER ── */}
        <section className="pt-32 pb-14 px-6 text-center" style={{ background: '#F5F3FF' }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-[11px] font-black tracking-[0.25em] uppercase mb-3"
              style={{ color: '#5B21B6' }}
            >
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Simple Naira Pricing
            </h1>
            <p className="text-xl text-slate-500 mb-10">
              No hidden fees. No dollar pricing. Cancel anytime.
            </p>

            {/* Monthly / Yearly toggle */}
            <div className="inline-flex items-center gap-1 bg-white border border-violet-200 rounded-2xl p-1.5">
              <button
                onClick={() => setYearly(false)}
                className="px-5 py-2 rounded-xl text-sm font-bold transition-all"
                style={!yearly ? { background: '#5B21B6', color: 'white' } : { color: '#6B7280' }}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className="px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                style={yearly ? { background: '#5B21B6', color: 'white' } : { color: '#6B7280' }}
              >
                Yearly
                <span
                  className="text-[9px] font-black tracking-wide px-1.5 py-0.5 rounded-full"
                  style={{ background: '#059669', color: 'white' }}
                >
                  SAVE 17%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="py-16 px-6" style={{ background: '#F5F3FF' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {TIERS.map((tier, i) => {
                const price  = yearly ? tier.priceYearly  : tier.priceMonthly;
                const period = yearly ? '/year'            : '/month';

                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`relative rounded-2xl p-7 border-2 transition-all ${
                      tier.highlight ? 'shadow-2xl scale-[1.03]' : 'bg-white hover:shadow-md'
                    }`}
                    style={
                      tier.highlight
                        ? {
                            background:   'linear-gradient(135deg, #5B21B6, #3730A3)',
                            borderColor:  '#5B21B6',
                          }
                        : { borderColor: 'rgba(91,33,182,0.15)' }
                    }
                  >
                    {tier.badge && (
                      <div
                        className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[9px] font-black tracking-widest px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ background: tier.highlight ? '#059669' : '#5B21B6' }}
                      >
                        {tier.badge.toUpperCase()}
                      </div>
                    )}

                    <h3
                      className={`text-base font-black mb-1 ${
                        tier.highlight ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-xs mb-5 leading-relaxed ${
                        tier.highlight ? 'text-violet-200' : 'text-slate-400'
                      }`}
                    >
                      {tier.desc}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span
                        className={`text-3xl font-black ${tier.highlight ? 'text-white' : ''}`}
                        style={!tier.highlight ? { color: '#5B21B6' } : {}}
                      >
                        {formatNaira(price)}
                      </span>
                      <span
                        className={`text-sm ${
                          tier.highlight ? 'text-violet-300' : 'text-slate-400'
                        }`}
                      >
                        {period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-7">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                              tier.highlight ? 'text-emerald-300' : ''
                            }`}
                            style={!tier.highlight ? { color: '#059669' } : {}}
                          />
                          <span
                            className={tier.highlight ? 'text-violet-100' : 'text-slate-600'}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={
                        tier.plan === 'agency'
                          ? 'https://wa.me/2349138349271?text=Hi%2C+I%27m+interested+in+the+PlanAI+Agency+plan'
                          : `${REG_BASE}&plan=${tier.plan}&billing=${yearly ? 'yearly' : 'monthly'}&utm_source=pricing_page`
                      }
                      className="flex items-center justify-center w-full py-2.5 rounded-xl font-bold text-sm transition-all gap-2 hover:opacity-90"
                      style={
                        tier.highlight
                          ? { background: 'white', color: '#5B21B6' }
                          : { background: '#5B21B6', color: 'white' }
                      }
                    >
                      {tier.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    {tier.name !== 'Agency' && (
                      <p
                        className={`text-center text-[10px] mt-2.5 ${
                          tier.highlight ? 'text-violet-400' : 'text-slate-400'
                        }`}
                      >
                        {tier.name === 'Free'
                          ? 'No card required · ever'
                          : '7-day free trial · No card required'}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <p className="text-center text-sm text-slate-400 mt-8">
              Want to pay per tool instead?{' '}
              <Link href="/start" className="font-bold underline" style={{ color: '#5B21B6' }}>
                See individual tool pricing →
              </Link>
            </p>
          </div>
        </section>

        {/* ── VALUE PROP NOTE ── */}
        <section className="py-16 px-6 bg-white border-t border-violet-100">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(91,33,182,0.08)' }}
            >
              <Zap className="w-6 h-6" style={{ color: '#5B21B6' }} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3">Pro pays for itself</h2>
            <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
              At ₦25,000/month, Pro replaces: Marketing tool (₦10k) + Analytics (₦8k)
              + Store (₦5k) + Branding (₦3k) ={' '}
              <strong className="text-slate-800">₦26k bought separately.</strong>{' '}
              You save from month one — and still have 8 more tools included.
            </p>
            <a
              href={`${REG_BASE}&plan=pro&utm_source=pricing_value_note`}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: '#5B21B6' }}
            >
              Start Pro — 7 Days Free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <SuperFooter product="planai"           logoSrc='/logo.png'/>
    </div>
  );
}