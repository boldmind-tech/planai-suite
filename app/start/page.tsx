'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, MessageSquare, X, Play } from 'lucide-react';

// ── Constants ────────────────────────────────────────────────────────────────

const REG_BASE = 'https://boldmind.ng/register?redirect=https://planai.boldmind.ng';

const PRODUCTS = [
  {
    id: 'digital-storefronts',
    icon: '🛍️',
    name: 'Digital Storefronts',
    accent: '#7C2D12',
    accentBg: '#FFF7ED',
    desc: 'Launch your online store in 5 minutes. Paystack payments. WhatsApp notifications.',
    features: [
      'Store live in 5 minutes — no coding',
      'Paystack payments built in',
      'WhatsApp order alerts to seller',
    ],
    price: '₦2k/month + 1% per transaction',
    cta: 'Try Storefronts →',
    href: '/store?utm_source=planai_start&utm_medium=suite_card&utm_campaign=storefronts&utm_content=suite_card',
    tag: 'LIVE',
  },
  {
    id: 'ai-receptionist',
    icon: '🤖',
    name: 'AI Receptionist',
    accent: '#0C4A6E',
    accentBg: '#F0F9FF',
    desc: 'Your WhatsApp, Instagram DMs, and Facebook — handled 24/7 by AI. Replies in English, Pidgin, Yoruba, Igbo, Hausa.',
    features: [
      '24/7 automated replies across all channels',
      'Lead qualification & appointment booking',
      'Multilingual: Pidgin, Yoruba, Igbo, Hausa',
    ],
    price: '₦20k–₦50k/month per business',
    cta: 'Book AI Receptionist Demo →',
    href: '/receptionist?utm_source=planai_start&utm_medium=suite_card&utm_campaign=receptionist',
    tag: 'LIVE',
  },
  {
    id: 'credibility-hubs',
    icon: '💼',
    name: 'Credibility Hubs',
    accent: '#312E81',
    accentBg: '#EEF2FF',
    desc: 'Portfolio site + LinkedIn optimizer + ATS resume. Built for Nigerian professionals.',
    features: [
      'Portfolio site live in minutes',
      'AI LinkedIn headline & summary optimizer',
      'ATS-friendly resume generator',
    ],
    price: '₦5k once (Starter) | ₦15k (Pro with custom domain)',
    cta: 'Build Your Portfolio →',
    href: '/credibility?utm_source=planai_start&utm_medium=suite_card&utm_campaign=credibility_hubs',
    tag: 'LIVE',
  },
  {
    id: 'branding-design',
    icon: '🎨',
    name: 'Branding & Design',
    accent: '#86198F',
    accentBg: '#FDF4FF',
    desc: 'Logo, brand kit, WhatsApp flyer, social media kit. No designer needed.',
    features: [
      'AI logo generator',
      'Full brand kit + WhatsApp flyers',
      'Social media kit for all platforms',
    ],
    price: '₦3k (Logo) | ₦8k (Full Brand Kit)',
    cta: 'Generate Your Brand →',
    href: '/branding?utm_source=planai_start&utm_medium=suite_card&utm_campaign=branding',
    tag: 'LIVE',
  },
  {
    id: 'emailscraper-pro',
    icon: '🔍',
    name: 'EmailScraper Pro',
    accent: '#075985',
    accentBg: '#F0F9FF',
    desc: 'Find decision-makers at any Nigerian business. Verified emails. Bulk export.',
    features: [
      'Email discovery from LinkedIn & CAC registry',
      'Real-time email verification',
      'Bulk CSV export + Chrome extension',
    ],
    price: 'Free (50 leads) | ₦5k (500/mo) | ₦15k (2000/mo)',
    cta: 'Start Scraping →',
    href: '/emailscraper?utm_source=planai_start&utm_medium=suite_card&utm_campaign=emailscraper',
    tag: 'LIVE',
  },
  {
    id: 'viralkit',
    icon: '📅',
    name: 'ViralKit',
    accent: '#6D28D9',
    accentBg: '#F5F3FF',
    desc: 'AI content calendar. Caption generator. Schedule to 8 platforms in one click.',
    features: [
      'AI content calendar & caption generator',
      'Schedule to Instagram, TikTok, Facebook & more',
      '8 platforms, one click',
    ],
    price: '₦5k–₦25k/month',
    cta: 'Start Creating →',
    href: '/viralkit?utm_source=planai_start&utm_medium=suite_card&utm_campaign=viralkit',
    tag: 'LIVE',
  },
  {
    id: 'financial-forecasting',
    icon: '💰',
    name: 'Financial Forecasting',
    accent: '#064E3B',
    accentBg: '#F0FDF4',
    desc: '12-month cashflow model. Scenario planning. Naira inflation adjustment.',
    features: [
      '12-month cashflow projections',
      'Best/worst/base scenario planning',
      'Connect Paystack for real data',
    ],
    price: '₦8k/month',
    cta: 'Model Your Cashflow →',
    href: '/finance?utm_source=planai_start&utm_medium=suite_card&utm_campaign=financial_forecasting',
    tag: 'BUILDING',
  },
  {
    id: 'analytics-dashboard',
    icon: '📊',
    name: 'Analytics Dashboard',
    accent: '#0F172A',
    accentBg: '#F8FAFC',
    desc: 'Instagram + TikTok + Paystack + website. One Nigerian entrepreneur dashboard.',
    features: [
      'Unified analytics across all channels',
      'Naira revenue dashboard',
      'AI-generated growth recommendations',
    ],
    price: '₦8k/month',
    cta: 'See Your Numbers →',
    href: '/analytics?utm_source=planai_start&utm_medium=suite_card&utm_campaign=analytics',
    tag: 'LIVE',
  },
  {
    id: 'business-planning',
    icon: '📋',
    name: 'AI Business Planning',
    accent: '#1E3A5F',
    accentBg: '#EFF6FF',
    desc: 'Bank-ready Nigerian business plans in under 10 minutes.',
    features: [
      'AI business plan generator (Nigerian market)',
      'Pitch deck + financial projections',
      'Export to PDF & DOCX (bank/investor ready)',
    ],
    price: '₦10k per plan | ₦25k bundle',
    cta: 'Generate Your Plan →',
    href: '/planning?utm_source=planai_start&utm_medium=suite_card&utm_campaign=business_planning',
    tag: 'BUILDING',
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '₦5,000',
    period: '/month',
    desc: 'One powerful tool. Prove ROI fast.',
    features: [
      '1 PlanAI tool of your choice',
      'Up to 3 social accounts',
      'Basic analytics',
      'Email support',
      'BoldMind SSO account',
    ],
    cta: 'Start Free Trial',
    highlight: false,
    plan: 'starter',
  },
  {
    name: 'Pro',
    price: '₦15,000',
    period: '/month',
    desc: 'The full suite. Everything unlocked.',
    features: [
      'All 9 PlanAI tools',
      'Unlimited leads & contacts',
      '10 social accounts',
      'WhatsApp alerts',
      'Team seats (3 members)',
      'Priority support',
      'ViralKit included',
    ],
    cta: 'Get Pro',
    highlight: true,
    plan: 'pro',
  },
  {
    name: 'Agency',
    price: '₦40,000',
    period: '/month',
    desc: 'Resell under your brand to clients.',
    features: [
      'Everything in Pro',
      'White-label option',
      'Unlimited client accounts',
      'API access',
      'Dedicated account manager',
      'Custom onboarding',
    ],
    cta: 'Contact Sales',
    highlight: false,
    plan: 'agency',
  },
];

const TESTIMONIALS = [
  {
    name: 'Adaeze O.',
    role: 'Fashion boutique · Lagos Island',
    quote: 'My WhatsApp DMs used to pile up overnight. AI Receptionist now replies before I wake up. I\'ve captured 3x more leads this month.',
    product: 'AI Receptionist',
    result: '₦280k added MRR',
    initials: 'AO',
  },
  {
    name: 'Emeka T.',
    role: 'Digital agency · Abuja',
    quote: 'ViralKit schedules content for all my clients in one session. What took 8 hours now takes 45 minutes.',
    product: 'ViralKit',
    result: '8 hrs → 45 min',
    initials: 'ET',
  },
  {
    name: 'Fatima B.',
    role: 'Halal food brand · Kano',
    quote: 'Credibility Hubs built me a portfolio that got me into a corporate supplier conversation. Worth every kobo.',
    product: 'Credibility Hubs',
    result: '1st corporate deal',
    initials: 'FB',
  },
  {
    name: 'Tunde A.',
    role: 'Electronics retailer · Ikeja',
    quote: 'Digital Storefronts got my products online in a day. Paystack integration means customers pay instantly — no more chasing bank transfers.',
    product: 'Digital Storefronts',
    result: '₦500k first month online',
    initials: 'TA',
  },
  {
    name: 'Ngozi K.',
    role: 'HR consultant · Port Harcourt',
    quote: 'EmailScraper Pro found 200 verified HR manager emails in Lagos in under an hour. My pipeline went from empty to full.',
    product: 'EmailScraper Pro',
    result: '₦180k in new contracts',
    initials: 'NK',
  },
  {
    name: 'Ibrahim M.',
    role: 'Food delivery startup · Kaduna',
    quote: 'The Financial Forecasting tool showed me I was burning cash on the wrong channel. Pivoted early. Still alive.',
    product: 'Financial Forecasting',
    result: 'Caught a runway crisis',
    initials: 'IM',
  },
];

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
      <header className="sticky top-0 z-50 border-b border-violet-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-black" style={{ color: '#5B21B6' }}>PlanAI</span>
            <span className="hidden sm:inline text-xs text-gray-400 font-medium">by BoldMind</span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://boldmind.ng/login?redirect=https://planai.boldmind.ng"
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-violet-300 text-violet-700 hover:bg-violet-50 transition-colors"
            >
              Sign In
            </a>
            <a
              href={`${REG_BASE}&utm_source=planai_start&utm_medium=header_cta&utm_campaign=start_free`}
              className="px-4 py-2 text-sm font-bold rounded-lg text-white transition-all hover:opacity-90"
              style={{ background: '#5B21B6' }}
            >
              Start Free
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-20 px-5 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(91,33,182,0.12)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(5,150,105,0.10)' }} />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-8"
              style={{ background: 'rgba(91,33,182,0.08)', borderColor: 'rgba(91,33,182,0.25)', color: '#5B21B6' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669', boxShadow: '0 0 6px #059669' }} />
              650+ Nigerian Businesses Running on PlanAI
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.05]">
              One suite.<br />
              <span style={{ color: '#5B21B6' }}>Every tool</span> your<br />
              Nigerian business needs.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
              AI Receptionist, Digital Storefront, Branding Tools, Financial Forecasting, ViralKit, and more — one login, one price.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500 mb-10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#059669' }} />
                650+ Nigerian businesses running
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#5B21B6' }} />
                From ₦5k/month
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Free trial — no card
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`${REG_BASE}&utm_source=planai_start&utm_medium=hero_cta&utm_campaign=start_free`}
                className="px-8 py-4 rounded-xl text-white font-bold flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{ background: '#5B21B6', boxShadow: '0 8px 24px rgba(91,33,182,0.30)' }}
              >
                Start Free Trial (no card)
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setDemoOpen(true)}
                className="px-8 py-4 rounded-xl font-bold border-2 flex items-center gap-2 transition-all hover:opacity-80"
                style={{ borderColor: '#5B21B6', color: '#5B21B6', background: 'transparent' }}
              >
                <Play className="w-4 h-4" />
                Watch 2-min demo →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT SUITE GRID ── */}
      <section id="suite" className="py-20 px-5 md:px-12 bg-white border-t border-violet-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-black tracking-[0.25em] uppercase mb-3" style={{ color: '#5B21B6' }}>
              The Full Suite
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">Everything Inside PlanAI</h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              One subscription unlocks them all. Or pay per tool — your choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl p-6 border hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ borderColor: `${p.accent}20`, background: p.accentBg }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border"
                    style={{ background: 'white', borderColor: `${p.accent}30` }}
                  >
                    {p.icon}
                  </div>
                  <TagBadge tag={p.tag as 'LIVE' | 'BUILDING'} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 font-light">{p.desc}</p>

                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: p.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4 px-3 py-2 bg-white rounded-xl border" style={{ borderColor: `${p.accent}20` }}>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">From</span>
                  <span className="text-xs font-bold" style={{ color: p.accent }}>{p.price}</span>
                </div>

                <a
                  href={p.href}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: p.accent }}
                >
                  {p.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
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

      {/* ── SOCIAL PROOF WALL ── */}
      <section className="py-20 px-5 md:px-12 bg-white border-t border-violet-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">Real Businesses. Real Results.</h2>
            <p className="text-gray-400 text-lg">650+ Nigerian businesses already running on PlanAI.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-violet-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar initials={t.initials} />
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400 truncate">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-violet-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#5B21B6' }}>
                    {t.product}
                  </span>
                  <span className="text-sm font-black" style={{ color: '#059669' }}>{t.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* ── FINAL CTA ── */}
      <section
        className="py-24 px-5 text-center"
        style={{ background: 'linear-gradient(135deg, #5B21B6 0%, #3730A3 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <span className="text-5xl block mb-6">⚡</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            650 businesses started free.<br />
            <span style={{ color: '#6EE7B7' }}>Yours is next.</span>
          </h2>
          <p className="text-violet-200 text-lg mb-10 leading-relaxed">
            Every day you wait is another DM unanswered, another competitor capturing your leads, another week without a real online store.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${REG_BASE}&utm_source=planai_start&utm_medium=final_cta&utm_campaign=start_free`}
              className="px-8 py-4 rounded-xl font-black text-white flex items-center gap-2 transition-all hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ background: '#059669', boxShadow: '0 8px 24px rgba(5,150,105,0.4)' }}
            >
              Start Free Trial → <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2349138349271?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20PlanAI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 flex items-center gap-2 transition-all hover:border-white/60"
            >
              <MessageSquare className="w-4 h-4" />
              Questions? Chat us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-white font-black text-lg mb-3">PlanAI <span className="text-violet-400">by BoldMind</span></div>
              <p className="text-xs leading-relaxed mb-4">
                AI business tools for Nigerian entrepreneurs. One suite. Every tool you need.
              </p>
              <a
                href="https://boldmind.ng"
                className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
              >
                boldmind.ng →
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Tools</h4>
              <ul className="space-y-2 text-xs">
                {['AI Receptionist', 'Digital Storefronts', 'ViralKit', 'Branding & Design', 'Analytics Dashboard'].map((l) => (
                  <li key={l}><a href="#suite" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">BoldMind Network</h4>
              <ul className="space-y-2 text-xs">
                {[
                  { label: 'AmeboGist', href: 'https://amebogist.ng' },
                  { label: 'VillageCircle', href: 'https://villagecircle.ng' },
                  { label: 'EduCenter', href: 'https://educenter.com.ng' },
                  { label: 'BoldMind Hub', href: 'https://boldmind.ng' },
                ].map(({ label, href }) => (
                  <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-xs">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'NDPA Compliance', href: '/ndpa' },
                  { label: 'Cookie Policy', href: '/cookies' },
                ].map(({ label, href }) => (
                  <li key={label}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
              <p className="text-xs mt-5 leading-relaxed">
                DPO Contact:<br />
                <a href="mailto:dpo@boldmind.ng" className="text-violet-400 hover:text-violet-300">dpo@boldmind.ng</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} BoldMind Technology Solution Enterprise · Lagos, Nigeria · NDPA Compliant</p>
            <p className="text-gray-600">RC: [pending registration] · DPO: dpo@boldmind.ng</p>
          </div>
        </div>
      </footer>

      {/* ── VIDEO DEMO MODAL ── */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-5 backdrop-blur-sm"
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                <span className="text-white font-bold text-sm">PlanAI — 2 Minute Overview</span>
                <button onClick={() => setDemoOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Play className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p className="text-sm">Demo video coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
