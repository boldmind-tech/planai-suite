// APPS/WEB_APPS/planai/lib/api.ts
import { boldMindAPI, type BusinessPlan, type FinancialForecast, type BrandingJob, type FitnessProfile, type WorkoutPlan, type MealLog, type BodyMetric, type FitnessDashboard } from '@boldmindng/api-client';

export const planaiAPI = {
    /**
     * Business Planning
     */
    planning: {
        /** POST /planai/planning/generate - Generate business plan */
        generate: (data: { 
            businessName: string; 
            industry: string; 
            description: string; 
            goals?: string[];
            templateId?: string;
        }) => boldMindAPI.planai.planning.generate(data),
        
        /** POST /planai/planning/pitch-deck - Generate pitch deck */
        generatePitchDeck: (data: { businessPlanId?: string; slides?: number; theme?: string }) =>
            boldMindAPI.planai.planning.pitchDeck(data),
        
        /** GET /planai/planning/jobs - Get all planning jobs */
        getJobs: () => boldMindAPI.planai.planning.myJobs(),
        
        /** GET /planai/planning/jobs/:id - Get specific job */
        getJob: (jobId: string) => boldMindAPI.planai.planning.getJob(jobId),
        
        /** GET /planai/planning/jobs/:id/download - Download job result */
        getDownloadUrl: (jobId: string) => boldMindAPI.planai.planning.downloadJob(jobId),
        
        /** GET /planai/planning/templates - Get templates */
        getTemplates: () => boldMindAPI.planai.planning.templates(),
    },
    
    /**
     * Financial Tools
     */
    finance: {
        /** POST /planai/finance/forecast - Generate financial forecast */
        forecast: (data: { revenue: number; expenses: number; months: number; currency?: string }) =>
            boldMindAPI.planai.finance.forecast(data),
        
        /** POST /planai/finance/scenario - Run scenario analysis */
        scenario: (data: { baseRevenue: number; scenarios: string[] }) =>
            boldMindAPI.planai.finance.scenario(data),
        
        /** POST /planai/finance/break-even - Calculate break-even point */
        breakEven: (data: { fixedCosts: number; variableCosts: number; pricePerUnit: number }) =>
            boldMindAPI.planai.finance.breakEven(data),
        
        /** GET /planai/finance/forecasts - Get all forecasts */
        getForecasts: () => boldMindAPI.planai.finance.myForecasts(),
        
        /** GET /planai/finance/forecasts/:id - Get specific forecast */
        getForecast: (id: string) => boldMindAPI.planai.finance.getForecast(id),
        
        /** GET /planai/finance/exchange-rate - Get exchange rate */
        getExchangeRate: () => boldMindAPI.planai.finance.exchangeRate(),
    },
    
    /**
     * Branding Tools
     */
    branding: {
        /** POST /planai/branding/logo - Generate logo */
        generateLogo: (data: { businessName: string; industry?: string; style?: string; colors?: string[] }) =>
            boldMindAPI.planai.branding.logo(data),
        
        /** POST /planai/branding/brand-kit - Generate complete brand kit */
        generateBrandKit: (data: { businessName: string; industry?: string; tone?: string }) =>
            boldMindAPI.planai.branding.brandKit(data),
        
        /** POST /planai/branding/flyer - Generate flyer */
        generateFlyer: (data: { title: string; content: string; style?: string; imageUrl?: string }) =>
            boldMindAPI.planai.branding.flyer(data),
        
        /** POST /planai/branding/color-palette - Generate color palette */
        generateColorPalette: (data: { industry?: string; mood?: string; baseColor?: string }) =>
            boldMindAPI.planai.branding.colorPalette(data),
        
        /** GET /planai/branding/jobs - Get all branding jobs */
        getJobs: () => boldMindAPI.planai.branding.myJobs(),
    },
    
    /**
     * Credibility & Professional Profile
     */
    credibility: {
        /** POST /planai/credibility/portfolio - Create portfolio */
        createPortfolio: (data: unknown) => boldMindAPI.planai.credibility.createPortfolio(data),
        
        /** GET /planai/credibility/portfolio/:userId - Get portfolio */
        getPortfolio: (userId: string) => boldMindAPI.planai.credibility.getPortfolio(userId),
        
        /** POST /planai/credibility/linkedin-optimize - Optimize LinkedIn profile */
        optimizeLinkedIn: (data: { headline?: string; summary?: string; industry?: string }) =>
            boldMindAPI.planai.credibility.linkedinOptimize(data),
        
        /** POST /planai/credibility/resume - Generate resume */
        generateResume: (data: unknown) => boldMindAPI.planai.credibility.generateResume(data),
    },
    
    /**
     * Investor Tools
     */
    investor: {
        /** POST /planai/investor/safe-agreement - Generate SAFE agreement */
        generateSafeAgreement: (data: { investorName: string; amount: number; valuation: number }) =>
            boldMindAPI.planai.investor.safeAgreement(data),
        
        /** POST /planai/investor/data-room - Create data room */
        createDataRoom: (data: unknown) => boldMindAPI.planai.investor.dataRoom(data),
        
        /** POST /planai/investor/due-diligence-checklist - Get due diligence checklist */
        getDueDiligenceChecklist: (data?: unknown) => 
            boldMindAPI.planai.investor.dueDiligence(data),
        
        /** POST /planai/investor/investor-update - Generate investor update */
        generateInvestorUpdate: (data: { month: string; highlights: string[]; metrics: Record<string, number> }) =>
            boldMindAPI.planai.investor.investorUpdate(data),
    },
    
    /**
     * Jobs & Tasks
     */
    jobs: {
        /** GET /planai/jobs - List all jobs */
        list: () => boldMindAPI.planai.jobs.list(),
        
        /** GET /planai/jobs/:id - Get specific job */
        get: (id: string) => boldMindAPI.planai.jobs.get(id),
    },
    
    /**
     * HR, Legal & Operations
     */
    hr: (data: unknown) => boldMindAPI.planai.hr(data),
    legal: (data: unknown) => boldMindAPI.planai.legal(data),
    operations: (data: unknown) => boldMindAPI.planai.operations(data),

    /**
     * Marketing Campaigns & AI Copy
     */
    marketing: {
        /** POST /planai/marketing/campaign/email */
        createEmailCampaign: (data: { subject: string; body: string; audienceIds?: string[] }) =>
            boldMindAPI.planai.marketing.createEmailCampaign(data),

        /** POST /planai/marketing/campaign/:id/send */
        sendCampaign: (id: string) => boldMindAPI.planai.marketing.sendCampaign(id),

        /** POST /planai/marketing/generate/subject-lines */
        generateSubjectLines: (data: { topic: string; tone?: string; count?: number }) =>
            boldMindAPI.planai.marketing.generateSubjectLines(data),

        /** POST /planai/marketing/generate/email-copy */
        generateEmailCopy: (data: { purpose: string; tone?: string; productName?: string }) =>
            boldMindAPI.planai.marketing.generateEmailCopy(data),

        /** POST /planai/marketing/whatsapp/broadcast */
        whatsappBroadcast: (data: { message: string; phones: string[] }) =>
            boldMindAPI.planai.marketing.whatsappBroadcast(data),

        /** GET /planai/marketing/analytics/:campaignId */
        getCampaignAnalytics: (campaignId: string) =>
            boldMindAPI.planai.marketing.campaignAnalytics(campaignId),
    },

    /**
     * Email Scraper & Lead Generation
     */
    emailScraper: {
        /** POST /planai/emailscraper/search */
        search: (data: { domain?: string; company?: string; role?: string; limit?: number }) =>
            boldMindAPI.planai.emailScraper.search(data),

        /** POST /planai/emailscraper/verify */
        verify: (email: string) => boldMindAPI.planai.emailScraper.verify(email),

        /** POST /planai/emailscraper/bulk-verify */
        bulkVerify: (emails: string[]) => boldMindAPI.planai.emailScraper.bulkVerify(emails),

        /** GET /planai/emailscraper/leads */
        getLeads: (params?: { page?: number; limit?: number; listId?: string }) =>
            boldMindAPI.planai.emailScraper.leads(params),

        /** GET /planai/emailscraper/leads/export (returns URL) */
        getExportUrl: (params?: { listId?: string; format?: 'csv' | 'json' }) =>
            boldMindAPI.planai.emailScraper.exportLeads(params),

        /** POST /planai/emailscraper/lists */
        createList: (name: string) => boldMindAPI.planai.emailScraper.createList({ name }),

        /** GET /planai/emailscraper/lists */
        getLists: () => boldMindAPI.planai.emailScraper.lists(),

        /** GET /planai/emailscraper/jobs */
        getJobs: () => boldMindAPI.planai.emailScraper.jobs(),
    },

    /**
     * PlanAI Analytics
     */
    analytics: {
        /** GET /planai/analytics/overview */
        overview: () => boldMindAPI.planai.analytics.overview(),

        /** POST /planai/analytics/report */
        generateReport: (data: unknown) => boldMindAPI.planai.analytics.report(data),

        /** GET /planai/analytics/revenue */
        getRevenue: () => boldMindAPI.planai.analytics.revenue(),

        /** GET /planai/analytics/growth-insights */
        getGrowthInsights: () => boldMindAPI.planai.analytics.growthInsights(),
    },
};

export default planaiAPI;

// ─── Fitness API ──────────────────────────────────────────────────────────────

export const fitnessAPI = {
    /** GET /planai/fitness/profile */
    getProfile: () => boldMindAPI.fitness.getProfile(),

    /** PATCH /planai/fitness/profile */
    updateProfile: (data: Partial<FitnessProfile>) => boldMindAPI.fitness.updateProfile(data),

    plans: {
        /** POST /planai/fitness/plans/generate */
        generate: (data: { goal: string; level?: string; daysPerWeek?: number }) =>
            boldMindAPI.fitness.plans.generate(data),

        /** GET /planai/fitness/plans */
        list: () => boldMindAPI.fitness.plans.list(),

        /** GET /planai/fitness/plans/:id */
        get: (id: string) => boldMindAPI.fitness.plans.get(id),
    },

    workouts: {
        /** POST /planai/fitness/workouts */
        log: (data: { planId?: string; exercises: unknown[]; duration?: number }) =>
            boldMindAPI.fitness.workouts.log(data),

        /** GET /planai/fitness/workouts */
        list: () => boldMindAPI.fitness.workouts.list(),
    },

    meals: {
        /** POST /planai/fitness/meals */
        log: (data: { meal: string; calories?: number; mealTime?: string }) =>
            boldMindAPI.fitness.meals.log(data),

        /** GET /planai/fitness/meals */
        list: () => boldMindAPI.fitness.meals.list(),

        /** POST /planai/fitness/meals/analyze */
        analyze: (data: { meal: string; quantity?: string }) =>
            boldMindAPI.fitness.meals.analyze(data),
    },

    metrics: {
        /** POST /planai/fitness/metrics */
        log: (data: Partial<BodyMetric>) => boldMindAPI.fitness.metrics.log(data),

        /** GET /planai/fitness/metrics */
        list: () => boldMindAPI.fitness.metrics.list(),
    },

    /** GET /planai/fitness/dashboard */
    dashboard: () => boldMindAPI.fitness.dashboard(),
};