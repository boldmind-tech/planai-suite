
// app/layout.tsx for planai.boldmind.ng  
export const metadata: Metadata = {
  title: 'PlanAI by BoldMind — AI Business Tools for Nigerian Entrepreneurs',
  description: '650+ Nigerian businesses running on PlanAI. Digital Storefronts, AI Receptionist, Branding Tools, ViralKit, Financial Forecasting & more. From ₦5,000/month.',
  keywords: ['AI tools Nigeria', 'Nigerian business tools', 'digital storefronts nigeria', 'AI receptionist nigeria', 'planai', 'whatsapp business automation nigeria'],
  openGraph: {
    title: 'PlanAI — One Suite. Every Tool Your Nigerian Business Needs.',
    description: '650+ businesses running. AI Receptionist, Storefronts, ViralKit & more. Free trial.',
    url: 'https://planai.boldmind.ng',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
  },
  themeColor: '#5B21B6',
};
```

---


## SECTION 6 — QUICK-USE PROMPT (for fast single-component redesigns)

When you just need one component redesigned, use this shorter version:

```
You are redesigning a component for [BRAND NAME] in the BoldMind ecosystem.

Brand colors (from colors.ts):
- Primary: [primary hex]
- Secondary: [secondary hex]  
- Background: [background hex]
- Muted: [muted hex]
- Foreground: [foreground hex]

Brand voice: [one sentence from the voice notes above]
Tagline: [tagline from Section 3]

Component to redesign: [COMPONENT NAME]
Current problem: [what's broken / inconsistent]
Required elements: [list what must appear]
Platform: Next.js 15 + Tailwind CSS, mobile-first, 375px viewport minimum

Output: Single TSX component, all styles inline via Tailwind arbitrary values 
using exact hex codes provided. No Tailwind defaults for brand colors.
```

---



### PROMPT D — PLANAI PUBLIC ON-RAMP PAGE (/start)
*(Primary: #5B21B6, Secondary: #059669, Background: #F5F3FF)*

```
Build planai.boldmind.ng/start as a public-facing product overview page 
that receives traffic from all other BoldMind pillars and converts to free trial signup.
This page must work WITHOUT login — it's the top of the PlanAI funnel.

BRAND IDENTITY:
- Name: PlanAI by BoldMind  
- Tagline: "One suite. Every tool your Nigerian business needs."
- Sub-tagline: "650+ businesses running on PlanAI. AI tools built for Nigerian entrepreneurs."
- Voice: Direct, outcome-specific, SME-fluent. No jargon.
- Colors: Primary #5B21B6 (deep purple), Secondary #059669 (green), Background #F5F3FF
- Trust: "650+ Paying Businesses" · "₦1M+ Monthly Revenue Processed" · "Built for Nigeria"

PAGE STRUCTURE:

1. MINIMAL HEADER
   - "PlanAI by BoldMind" wordmark
   - Right: "Sign In" (ghost) + "Start Free" (bg-[#5B21B6] text-white)

2. HERO
   - H1: "One suite. Every tool your Nigerian business needs."
   - Sub: "AI Receptionist, Digital Storefront, Branding Tools, Financial Forecasting, 
     ViralKit, and more — one login, one price."
   - Trust strip: "650+ Nigerian businesses running | ₦5k/month | Free trial"
   - Primary CTA: "Start Free Trial (no card)" → registration
   - Secondary: "Watch 2-min demo →" (video modal)
   - Background: subtle gradient #F5F3FF → #EDE9FE

3. PRODUCT SUITE GRID (anchor links per product)
   - Headline: "Everything inside PlanAI"
   - 3-column grid (2 on tablet, 1 on mobile)
   - Each product card has its own color scheme from colors.ts:

   🛍️ Digital Storefronts (#7C2D12 accent)
   "Launch your online store in 5 minutes. Paystack payments. WhatsApp notifications."
   Key features: 3 bullet points
   Price note: "₦2k/month + 1% per transaction"
   CTA: "Try Storefronts →" with anchor #storefronts
   UTM: utm_source=[source]&utm_medium=[medium]&utm_campaign=storefronts&utm_content=suite_card

   🤖 AI Receptionist (#0C4A6E accent)
   "Your WhatsApp, Instagram DMs, and Facebook — handled 24/7 by AI."
   "Replies in English, Pidgin, Yoruba, Igbo, Hausa."
   Price note: "₦20k–₦50k/month per business"
   CTA: "Book AI Receptionist Demo →"
   UTM: utm_campaign=receptionist

   💼 Credibility Hubs (#312E81 accent)
   "Portfolio site + LinkedIn optimizer + ATS resume. Built for Nigerian professionals."
   Price note: "₦5k once (Starter) | ₦15k (Pro with custom domain)"
   CTA: "Build Your Portfolio →"
   UTM: utm_campaign=credibility_hubs

   🎨 Branding & Design (#86198F accent)
   "Logo, brand kit, WhatsApp flyer, social media kit. No designer needed."
   Price note: "₦3k (Logo) | ₦8k (Full Brand Kit)"
   CTA: "Generate Your Brand →"
   UTM: utm_campaign=branding

   🔍 EmailScraper Pro (#075985 accent)
   "Find decision-makers at any Nigerian business. Verified emails. Bulk export."
   Price note: "Free (50 leads) | ₦5k (500/mo) | ₦15k (2000/mo)"
   CTA: "Start Scraping →"
   UTM: utm_campaign=emailscraper

   📅 ViralKit (#6D28D9 accent)
   "AI content calendar. Caption generator. Schedule to 8 platforms in one click."
   Price note: "₦5k–₦25k/month"
   CTA: "Start Creating →"
   UTM: utm_campaign=viralkit

   💰 Financial Forecasting (#064E3B accent)
   "12-month cashflow model. Scenario planning. Naira inflation adjustment."
   Price note: "₦8k/month"
   CTA: "Model Your Cashflow →"
   UTM: utm_campaign=financial_forecasting

   📊 Analytics Dashboard (#0F172A accent)
   "Instagram + TikTok + Paystack + website. One Nigerian entrepreneur dashboard."
   Price note: "₦8k/month"
   CTA: "See Your Numbers →"
   UTM: utm_campaign=analytics

   📋 AI Business Planning (#1E3A5F accent)
   "Bank-ready Nigerian business plans in under 10 minutes."
   Price note: "₦10k per plan | ₦25k bundle"
   CTA: "Generate Your Plan →"
   UTM: utm_campaign=business_planning

4. PRICING TABLE
   - 3 tiers: Starter ₦5k | Pro ₦15k | Agency ₦40k
   - Feature comparison: checkmarks per tier
   - Most popular badge on Pro
   - "Or pay per tool" toggle option

5. SOCIAL PROOF WALL
   - 6 customer cards: business name + owner photo + one-line testimonial + product used
   - All Nigerian businesses, real names, real products

6. FAQ (6 questions)
   - "Can I use on mobile?" → PWA answer
   - "Is this compliant with FIRS e-invoicing?" → yes answer for ReceiptGenius
   - "Do you support Paystack?" → yes
   - "What's the difference between Starter and Pro?" → feature diff
   - "Can I pay in dollars?" → ₦ only for now, diaspora section coming
   - "Is there a free trial?" → yes, no card required

7. FINAL CTA
   - bg-[#5B21B6]
   - "650 businesses started free. Yours is next."
   - "Start Free Trial →" button in #059669
   - WhatsApp: "Questions? Chat us on WhatsApp →"

8. FOOTER
   - "PlanAI by BoldMind" + full pillar ecosystem links
   - NDPA compliant footer with DPO contact
```

---

## SECTION 1 — MASTER DESIGN SYSTEM PROMPT
### Use this as the SYSTEM PROMPT or prepend to every page-specific prompt

```
You are a senior product designer and frontend engineer working on the BoldMind ecosystem — 
a Nigerian-built four-pillar digital platform. Your job is to design and code production-ready 
Next.js 15 + Tailwind CSS pages that are:

DESIGN PRINCIPLES (non-negotiable):
1. Mobile-first. 95% of Nigerian users are on phone. Design for 375px first, scale up.
2. Fast. No heavy animations on load. Framer Motion only for micro-interactions after 
   first contentful paint.
3. WhatsApp-native CTAs. Primary CTA always has a WhatsApp fallback below it.
4. Brand color fidelity. Every component uses the exact color scheme provided — no 
   Tailwind defaults, always arbitrary values like bg-[#065F46].
5. Nigerian context. Use ₦ not $. Use Nigerian names in testimonials. 
   Reference Lagos, Abuja, PH in location copy.
6. Trust signals above the fold. User count, revenue, or social proof visible 
   without scrolling on mobile.
7. Accessibility. WCAG AA contrast ratios. OpenDyslexic font option flag in globals.
8. NDPA compliant. Cookie consent banner on first load. Privacy policy linked in footer.

TECH STACK:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS (arbitrary values for brand colors)
- Framer Motion (micro-interactions only)
- Paystack for payment CTAs
- shadcn/ui components as base

COMPONENT RULES:
- Use getColorScheme(slug) from colors.ts to pull brand colors
- Apply generateCSSVariables(scheme) to root wrapper div
- Shadows always from buildShadows(primary) — never hardcoded
- Gradients from scheme.gradients.primary for hero backgrounds
- Error states use scheme.error, success use scheme.success
- Muted backgrounds for secondary sections use scheme.muted
- All buttons: primary variant uses scheme.primary bg + getContrastColor() text
- Cards: white background + scheme.shadows.md on hover

TYPOGRAPHY SYSTEM (consistent across all brands):
- Display: Cal Sans or Geist (weight 700-900)
- Heading: Geist (weight 600-700)  
- Body: Geist (weight 400-500)
- Pidgin / cultural text: add font-feature-settings for Nigerian diacritic support
- Dyslexia mode: swap to OpenDyslexic via CSS class .dyslexia-mode on html element

SPACING SYSTEM:
- Section padding: py-16 md:py-24
- Container: max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- CTA buttons: px-6 py-3 md:px-8 md:py-4 text-base md:text-lg

OUTPUT FORMAT:
Return a single complete .tsx file. Include all subcomponents inline unless 
instructed otherwise. Include Tailwind classes. No placeholder colors.
```

---