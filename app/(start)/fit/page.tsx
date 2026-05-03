'use client';

import { SuperNavbar, SuperFooter } from '@boldmind-tech/ui';
import { motion } from 'framer-motion';
import {
  Activity, Apple, Users, ArrowRight, CheckCircle2, Zap, Scale, Flame,
} from 'lucide-react';
import Link from 'next/link';
import { TOOL_NAV_LINKS } from '@/lib/nav-links';

const PRIMARY   = '#065F46';
const PRIMARY_BG = '#F0FFF4';
const ACCENT    = '#10B981';

const FEATURES = [
  {
    icon: <Apple   className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: '500+ Nigerian Meal Database',
    desc:  'Jollof, egusi, suya, puff-puff, amala — every popular dish with accurate calories and macros. Budget-aware meal plans from as little as ₦500/day.',
  },
  {
    icon: <Activity className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: 'Home & Outdoor Workouts',
    desc:  'No gym needed. Bodyweight plans for your bedroom, outdoor cardio routes, and strength programs using everyday items — built for Nigerian lifestyles.',
  },
  {
    icon: <Zap     className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: 'AI Wellness Coach',
    desc:  'Set your goals, schedule, and dietary preferences. The AI builds a personalized daily plan — workouts, meals, recovery — updated weekly as you progress.',
  },
  {
    icon: <Scale   className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: 'Body Measurement Tracker',
    desc:  'Log weight, waist, BMI, and progress photos side-by-side. See your transformation week by week with visual before/after comparison.',
  },
  {
    icon: <Users   className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: 'Community Challenges',
    desc:  '30-day Naija fit challenges with leaderboards, WhatsApp accountability groups, and milestone prizes. Fitness is better together.',
  },
  {
    icon: <Flame   className="w-6 h-6" style={{ color: PRIMARY }} />,
    title: 'Ramadan & Festive Modes',
    desc:  'Workout plans adapted for Ramadan fasting, Ileya celebrations, and other Nigerian occasions when your routine naturally shifts.',
  },
];

const MEALS = [
  { name: 'Jollof Rice',        cal: '390 kcal', portion: '1 medium plate',    macro: '68g carbs · 9g protein' },
  { name: 'Egusi Soup + Eba',   cal: '520 kcal', portion: '1 bowl + 2 wraps',  macro: '42g carbs · 22g protein' },
  { name: 'Suya (beef)',        cal: '280 kcal', portion: '200g skewer',        macro: '2g carbs · 38g protein' },
  { name: 'Pepper Soup',        cal: '210 kcal', portion: '1 bowl',             macro: '4g carbs · 32g protein' },
  { name: 'Moi Moi',            cal: '185 kcal', portion: '1 piece',            macro: '22g carbs · 14g protein' },
  { name: 'Puff-Puff',          cal: '130 kcal', portion: '3 pieces',           macro: '18g carbs · 2g protein' },
];

const PRICING = [
  {
    name:     'Free',
    price:    '₦0',
    period:   '/forever',
    desc:     'Start your fitness journey today',
    features: [
      '50 meals from the database',
      '5 starter workout plans',
      'Basic calorie tracking',
      'Community access',
      'Progress photos (30-day log)',
    ],
    cta:      'Start Free',
    featured: false,
    href:     '/register?plan=free&utm_campaign=naija-fit',
  },
  {
    name:     'Pro',
    price:    '₦3,000',
    period:   '/month',
    desc:     'Full access for serious results',
    features: [
      'Full 500+ meal database',
      'Unlimited workout plans',
      'AI wellness coach',
      'Body measurement tracker',
      'All community challenges',
      'Trainer video library',
      'Budget meal plan generator (₦500–₦2k/day)',
      'WhatsApp accountability group',
    ],
    cta:      'Go Pro',
    featured: true,
    href:     '/register?plan=pro&utm_campaign=naija-fit',
  },
  {
    name:     'Coaching',
    price:    '₦8,000',
    period:   '/month',
    desc:     '1-on-1 with a certified Nigerian trainer',
    features: [
      'Everything in Pro',
      'Matched to a certified local trainer',
      'Weekly 1:1 check-in (WhatsApp or call)',
      'Custom meal + workout plans',
      'Form correction via AI video analysis',
      'Monthly progress review',
    ],
    cta:      'Book a Trainer',
    featured: false,
    href:     '/register?plan=coaching&utm_campaign=naija-fit',
  },
];

export default function NaijaFitPage() {
  return (
    <div
      className="min-h-screen font-sans text-slate-900 selection:bg-emerald-500/30"
      style={{ background: PRIMARY_BG }}
    >
      <SuperNavbar logoSrc="/logo.png" links={TOOL_NAV_LINKS} />

      <main>
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
              style={{ background: 'rgba(6,95,70,0.12)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
              style={{ background: 'rgba(16,185,129,0.10)' }}
            />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6"
                  style={{ background: 'rgba(6,95,70,0.10)', color: PRIMARY }}
                >
                  <Activity className="w-4 h-4" />
                  <span>Nigeria's Fitness & Wellness Platform</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Fit the{' '}
                  <span style={{ color: PRIMARY }}>Nigerian way.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-4 leading-relaxed max-w-2xl mx-auto">
                  Workout plans, Nigerian meal tracking (jollof to suya), AI wellness coach,
                  and community challenges — built for how Nigerians actually eat and live.
                </p>

                <p className="text-sm mb-10 font-medium" style={{ color: PRIMARY }}>
                  Free to start · No gym needed · Works as a PWA on any phone
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/register?utm_source=planai&utm_campaign=naija-fit"
                    className="px-8 py-4 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
                    style={{ background: PRIMARY, boxShadow: '0 8px 24px rgba(6,95,70,0.30)' }}
                  >
                    Start Free <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#pricing"
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
                {[
                  { value: '500+', label: 'Nigerian dishes tracked' },
                  { value: '30+',  label: 'Workout plans' },
                  { value: '₦500', label: 'Min. daily meal budget' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm text-center"
                  >
                    <div className="text-3xl font-black mb-1" style={{ color: PRIMARY }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Built for{' '}
                <span style={{ color: PRIMARY }}>Nigerian bodies</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                No more tracking "chicken breast and brown rice." NaijaFit understands your diet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(6,95,70,0.08)' }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEAL DATABASE PREVIEW ── */}
        <section className="py-24 px-6" style={{ background: PRIMARY_BG }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6"
                  style={{ background: 'rgba(6,95,70,0.10)', color: PRIMARY }}
                >
                  <Apple className="w-4 h-4" />
                  <span>Nigerian Meal Database</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Finally — calories for real Nigerian food.
                </h2>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Log your jollof, your pepper soup, your mama's stew. 500+ dishes with
                  accurate macros, portions calibrated to how Nigerians actually serve food.
                </p>
                <ul className="space-y-3">
                  {[
                    'Roadside suya calculated per stick',
                    'Eba and swallow portion sizes',
                    'Local market fruits and vegetables',
                    'Ramadan-friendly meal plans',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meal list card */}
              <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Today's meals</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: 'rgba(6,95,70,0.10)', color: PRIMARY }}
                  >
                    1,715 kcal logged
                  </span>
                </div>
                <div className="divide-y divide-slate-50">
                  {MEALS.map((meal) => (
                    <div
                      key={meal.name}
                      className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-sm text-slate-900">{meal.name}</div>
                        <div className="text-xs text-slate-400">{meal.portion} · {meal.macro}</div>
                      </div>
                      <div className="text-sm font-bold" style={{ color: PRIMARY }}>{meal.cal}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Simple pricing
              </h2>
              <p className="text-xl text-slate-500">
                Start free. Upgrade when you're ready to level up.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {PRICING.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                    plan.featured ? 'shadow-xl scale-105' : 'border-slate-100 shadow-sm hover:shadow-md'
                  }`}
                  style={
                    plan.featured
                      ? { borderColor: PRIMARY, boxShadow: '0 20px 40px rgba(6,95,70,0.15)' }
                      : {}
                  }
                >
                  {plan.featured && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
                      style={{ background: PRIMARY }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className="text-4xl font-black"
                      style={{ color: plan.featured ? PRIMARY : 'inherit' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: ACCENT }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={
                      plan.featured
                        ? { background: PRIMARY, color: 'white' }
                        : { background: '#F0FFF4', color: PRIMARY, border: `1.5px solid ${PRIMARY}30` }
                    }
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Link>

                  {plan.name !== 'Coaching' && (
                    <p className="text-center text-[11px] mt-3 text-slate-400">
                      {plan.name === 'Free' ? 'No card required · ever' : '7-day free trial · No card required'}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="py-24 px-6"
          style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #047857 100%)` }}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-5xl block mb-6">💪</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your body understands Naija food.
            </h2>
            <p className="text-emerald-100 text-xl mb-10">
              Now your fitness app does too. Start tracking today — it's free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register?utm_campaign=naija-fit&utm_content=footer_cta"
                className="px-8 py-4 bg-white font-bold rounded-xl hover:bg-emerald-50 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                style={{ color: PRIMARY }}
              >
                Start Free <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2349138349271?text=Hi%2C%20I%27m%20interested%20in%20NaijaFit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
              >
                Chat Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="naija-fit" />
    </div>
  );
}