import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PlanaiLandingLayout } from './planai-landingLayout'
import { ErrorBoundary, CookieConsent } from "@boldmind-tech/ui";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL('https://planai.boldmind.ng'),
  title: {
    default: 'PlanAI by BoldMind',
    template: `%s | PlanAI by BoldMind`,
  },
  description: 'AI business tools for Nigerian entrepreneurs',
  applicationName: 'PlanAI by BoldMind',
  keywords: ['Nigeria', 'planai', 'BoldMind', 'Nigerian entrepreneur'],
  authors: [{ name: 'Boldmind Technology Solution Enterprise', url: 'https://boldmind.ng' }],
  creator: 'BoldMind Technology',
  publisher: 'BoldMind Technology',
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/icons/apple/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/icons/apple/apple-touch-icon-167x167.png', sizes: '167x167' },
      { url: '/icons/apple/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icons/favicon-96x96.png' },
    ],
  },

  openGraph: {
    type: 'website',
    url: 'https://planai.boldmind.ng',
    siteName: 'PlanAI by BoldMind',
    title: 'PlanAI by BoldMind',
    description: 'AI business tools for Nigerian entrepreneurs',
    locale: 'en_NG',
    images: [
      {
        url: '/social/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PlanAI by BoldMind',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@planaiNG',
    creator: '@boldmindindng',
    title: 'PlanAI by BoldMind',
    description: 'AI business tools for Nigerian entrepreneurs',
    images: ['/social/twitter-card.jpg'],
  },

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00143C" },
    { media: "(prefers-color-scheme: dark)", color: "#000814" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoldMind Technology Solution Enterprise",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description: "Complete AI business stack for Nigerian entrepreneurs",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Charles Uche Chijuka",
      sameAs: [
        "https://facebook.com/charleschijukaui",
        "https://linkedin.com/in/charliedotcom",
        "https://x.com/CharlesChijukaU",
        "https://instagram.com/charleschijuka",
      ],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
    addressLocality: "Lagos",
    streetAddress: "No 5 Olusoji Imole Street, Ikosi Ketu",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@boldmind.ng",
    telephone: "+2349138349271",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://x.com/villagecircleng",
    "https://facebook.com/planaiAI",
    "https://facebook.com/boldmindng",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://github.com/boldmind-tech",
    "https://tiktok.com/@villagecircle",
    "https://youtube.com/@BoldMindTech",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Education Technology",
    "Digital Media",
    "Business Automation",
    "Software Development",
    "Entrepreneurship",
  ],
};

const productEcosystemSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PlanAI Suite Products",
  description: "Complete AI business stack for Nigerian entrepreneurs",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "AI Receptionist",
        description: "24/7 AI-powered customer service receptionist for your business",
        url: `${canonicalUrl}/receptionist`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Digital Storefront",
        description: "Build and manage your digital storefront with AI assistance",
        url: `${canonicalUrl}/store`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Marketing Automation",
        description: "AI-powered marketing automation for Nigerian businesses",
        url: `${canonicalUrl}/marketing`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Financial Planning",
        description: "AI-assisted financial planning and business forecasting",
        url: `${canonicalUrl}/finance`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Investor Readiness",
        description: "Prepare your business for investor presentations and funding rounds",
        url: `${canonicalUrl}/investor-readiness`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Branding & Design",
        description: "AI-powered branding and visual identity for your business",
        url: `${canonicalUrl}/branding`,
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Product",
        name: "Analytics Dashboard",
        description: "Comprehensive business analytics and performance insights",
        url: `${canonicalUrl}/analytics`,
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Product",
        name: "Credibility Hub",
        description: "Build business credibility and trust signals with customers",
        url: `${canonicalUrl}/credibility`,
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Product",
        name: "Business Planning",
        description: "AI-assisted business plan creation and growth strategy",
        url: `${canonicalUrl}/planning`,
      },
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Product",
        name: "Naija Fit",
        description: "Nigerian fitness platform with meal database, workout plans, and AI wellness coach",
        url: `${canonicalUrl}/fit`,
      },
    },
    {
      "@type": "ListItem",
      position: 11,
      item: {
        "@type": "Product",
        name: " ViralKit",
        description: "AI-powered social media content creation and growth tools for Nigerian businesses",
        url: `${canonicalUrl}/viralkit`,
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PlanAI Suite",
  url: canonicalUrl,
  inLanguage: "en-NG",
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.boldmind.ng" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
        <meta name="mobile-web-app-capable" content="yes" />


        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="application-name" content="PlanAI by BoldMind" />
        <meta name="description" content="AI business tools for Nigerian entrepreneurs" />
        <meta name="theme-color" content="#5B21B6" />
        <meta name="msapplication-TileColor" content="#5B21B6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple/apple-touch-icon-180x180.png" />

        <link rel="manifest" href="/manifest.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://planai.boldmind.ng" />
        <meta property="og:site_name" content="PlanAI by BoldMind" />
        <meta property="og:title" content="PlanAI by BoldMind" />
        <meta property="og:description" content="AI business tools for Nigerian entrepreneurs" />
        <meta property="og:image" content="https://planai.boldmind.ng/social/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PlanAI by BoldMind — AI business tools for Nigerian entrepreneurs" />
        <meta property="og:locale" content="en_NG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@planaiNG" />
        <meta name="twitter:creator" content="@BoldMindNG" />
        <meta name="twitter:title" content="PlanAI by BoldMind" />
        <meta name="twitter:description" content="AI business tools for Nigerian entrepreneurs" />
        <meta name="twitter:image" content="https://planai.boldmind.ng/social/twitter-card.jpg" />


        <meta name="msapplication-square70x70logo" content="/icons/windows/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/icons/windows/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/icons/windows/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/icons/windows/mstile-310x310.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productEcosystemSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
        <ErrorBoundary>
          <PlanaiLandingLayout>{children}</PlanaiLandingLayout>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
