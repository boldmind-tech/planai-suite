'use client';

import { SuperNavbar, SuperFooter } from '@boldmind-tech/ui';
import { motion } from 'framer-motion';
import {
  Calendar, Sparkles, Share2, Clock, TrendingUp, Instagram,
  Twitter, Youtube, ArrowRight, CheckCircle2, Zap
} from 'lucide-react';
import Link from 'next/link';
import { TOOL_NAV_LINKS } from '@/lib/nav-links';


const platforms = [
  { name: 'Instagram', color: 'bg-gradient-to-br from-pink-500 to-orange-400', icon: <Instagram className="w-5 h-5 text-white" /> },
  { name: 'TikTok', color: 'bg-black', icon: <span className="text-white text-xs font-black">TT</span> },
  { name: 'Twitter / X', color: 'bg-slate-900', icon: <Twitter className="w-5 h-5 text-white" /> },
  { name: 'YouTube', color: 'bg-red-600', icon: <Youtube className="w-5 h-5 text-white" /> },
  { name: 'Facebook', color: 'bg-blue-600', icon: <span className="text-white text-xs font-black">f</span> },
  { name: 'LinkedIn', color: 'bg-blue-700', icon: <span className="text-white text-xs font-black">in</span> },
  { name: 'WhatsApp', color: 'bg-green-500', icon: <span className="text-white text-xs font-black">W</span> },
  { name: 'Threads', color: 'bg-slate-800', icon: <span className="text-white text-xs font-black">@</span> },
];

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-violet-500" />,
    title: 'AI Caption Generator',
    desc: 'Type your idea in plain English, get 5 caption variations — hooks, CTAs, hashtags included. Works in English and Pidgin.',
  },
  {
    icon: <Calendar className="w-6 h-6 text-violet-500" />,
    title: '30-Day Content Calendar',
    desc: 'Tell ViralKit your niche and audience. It generates a full month of content ideas, mapped to trending formats and Nigerian occasions.',
  },
  {
    icon: <Share2 className="w-6 h-6 text-violet-500" />,
    title: 'One-Click Publishing',
    desc: 'Schedule and publish to all 8 platforms simultaneously. Set a time, hit publish, walk away.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
    title: 'Viral Format Library',
    desc: 'Access proven content templates sorted by format — Reels, Carousels, Stories, Threads — with fill-in-the-blank structures.',
  },
  {
    icon: <Clock className="w-6 h-6 text-violet-500" />,
    title: 'Best-Time Posting',
    desc: 'ViralKit analyses your audience activity and schedules posts for maximum reach on each platform.',
  },
  {
    icon: <Zap className="w-6 h-6 text-violet-500" />,
    title: 'Trend Alerts',
    desc: 'Get notified when a trending topic or audio clip matches your niche — act before your competitors.',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '₦5,000',
    period: '/month',
    desc: '1 brand · 30 posts/month · 3 platforms',
    items: ['AI caption generator', '30 posts/month', '3 platforms', 'Content calendar', 'Email support'],
  },
  {
    name: 'Growth',
    price: '₦15,000',
    period: '/month',
    featured: true,
    desc: '3 brands · Unlimited posts · All 8 platforms',
    items: ['Everything in Starter', 'Unlimited posts', 'All 8 platforms', 'Viral format library', 'Trend alerts', 'Analytics'],
  },
  {
    name: 'Agency',
    price: '₦25,000',
    period: '/month',
    desc: 'Unlimited brands · White-label · Team access',
    items: ['Everything in Growth', 'Unlimited brands', 'Team seats (5)', 'White-label reports', 'Priority support', 'API access'],
  },
];

export default function ViralKitPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-violet-500/30">
<SuperNavbar logoSrc="/logo.png" links={TOOL_NAV_LINKS} />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/60 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/60 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Content Engine for Nigerian Brands</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Go viral without <br />
                  <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                    burning out.
                  </span>
                </h1>

                <p className="text-xl text-slate-600 mb-4 leading-relaxed max-w-2xl mx-auto">
                  AI content calendar. Caption generator. Schedule to 8 platforms in one click.
                  Built for Nigerian entrepreneurs who post consistently and still run a business.
                </p>

                <p className="text-sm text-slate-400 mb-10">
                  From ₦5,000/month · No designer needed · Works in English & Pidgin
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/register?utm_source=planai&utm_campaign=viralkit"
                    className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-violet-500/25"
                  >
                    Start Creating Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#pricing"
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </motion.div>

              {/* Platform badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16"
              >
                <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-wider">
                  Publish to all 8 platforms at once
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {platforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700">
                      <div className={`w-6 h-6 rounded-full ${p.color} flex items-center justify-center flex-shrink-0`}>
                        {p.icon}
                      </div>
                      {p.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Content Calendar Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-20 max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-violet-600" />
                    <span className="font-bold text-slate-900">May 2025 Content Calendar</span>
                  </div>
                  <span className="text-xs bg-violet-100 text-violet-700 font-semibold px-2 py-1 rounded-full">AI Generated</span>
                </div>
                <div className="grid grid-cols-7 gap-px bg-slate-100">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                    <div key={d} className="bg-white text-center text-xs font-semibold text-slate-400 py-3">{d}</div>
                  ))}
                  {[
                    { day: 1, type: 'Reel', label: 'Morning routine', color: 'bg-pink-100 text-pink-700' },
                    { day: 2, type: 'Carousel', label: '5 business tips', color: 'bg-blue-100 text-blue-700' },
                    { day: 3, type: 'Story', label: 'Behind the scenes', color: 'bg-amber-100 text-amber-700' },
                    { day: 4, type: 'Thread', label: 'Customer win', color: 'bg-violet-100 text-violet-700' },
                    { day: 5, type: 'Reel', label: 'Product demo', color: 'bg-pink-100 text-pink-700' },
                    { day: 6, type: null, label: '', color: '' },
                    { day: 7, type: null, label: '', color: '' },
                    { day: 8, type: 'Carousel', label: 'Market update', color: 'bg-blue-100 text-blue-700' },
                    { day: 9, type: 'Reel', label: 'Trending audio', color: 'bg-pink-100 text-pink-700' },
                    { day: 10, type: 'Story', label: 'Poll: your pick', color: 'bg-amber-100 text-amber-700' },
                    { day: 11, type: 'Thread', label: 'Entrepreneur tip', color: 'bg-violet-100 text-violet-700' },
                    { day: 12, type: 'Reel', label: 'Transformation', color: 'bg-pink-100 text-pink-700' },
                    { day: 13, type: null, label: '', color: '' },
                    { day: 14, type: null, label: '', color: '' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-2 min-h-[80px]">
                      <div className="text-xs text-slate-400 mb-1">{item.day}</div>
                      {item.type && (
                        <div className={`text-xs font-semibold px-1.5 py-0.5 rounded mb-1 ${item.color}`}>{item.type}</div>
                      )}
                      {item.label && (
                        <div className="text-xs text-slate-600 leading-tight">{item.label}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Everything you need to <span className="text-violet-600">stay consistent</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                No more staring at a blank screen. ViralKit turns your business into a content machine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPTION DEMO */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Caption Generator</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Describe your post. <br />Get 5 captions instantly.
                </h2>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Just tell ViralKit what you're selling, what happened, or what you want people to do.
                  It writes captions that sound like you — hooks, body, CTA, and hashtags.
                </p>
                <ul className="space-y-3">
                  {['Works in English and Nigerian Pidgin', 'Industry-specific tone matching', 'Hashtag bundles per platform', '5 variations per prompt'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm shadow-xl">
                <div className="text-slate-400 mb-4 text-xs">// Your prompt</div>
                <div className="text-violet-300 mb-6 bg-slate-800 p-3 rounded-lg">
                  "Photo of my new ankara fabric collection just arrived. I sell women's fashion in Lagos."
                </div>
                <div className="text-slate-400 mb-3 text-xs">// AI generated caption #1</div>
                <div className="text-white leading-relaxed text-xs">
                  <span className="text-amber-300">New stock just landed! 🔥</span><br /><br />
                  Our latest ankara collection is HERE and she's everything. Vibrant, bold, Lagos-ready.<br /><br />
                  DM "FABRIC" to see full catalogue 👗<br /><br />
                  <span className="text-slate-400">#AnkaraFashion #LagosStyle #AfricanFashion #WomenFashionNG #NewCollection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Simple pricing
              </h2>
              <p className="text-xl text-slate-500">
                Start free. Upgrade when you're ready to scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                    plan.featured
                      ? 'border-violet-500 shadow-xl shadow-violet-500/10 scale-105'
                      : 'border-slate-100 shadow-sm hover:shadow-md'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/register?plan=${plan.name.toLowerCase()}&utm_campaign=viralkit`}
                    className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.featured
                        ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-500/25'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-violet-600">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your competitors are posting every day.
            </h2>
            <p className="text-violet-100 text-xl mb-10">
              Stop falling behind. ViralKit gives you a full month of content in 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register?utm_campaign=viralkit&utm_content=footer_cta"
                className="px-8 py-4 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-all hover:scale-105 shadow-lg"
              >
                Start Free — No Card Required
              </Link>
              <a
                href="https://wa.me/2349138349271?text=Hi%2C%20I%27m%20interested%20in%20ViralKit"
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

      <SuperFooter product="viralkit" />
    </div>
  );
}
