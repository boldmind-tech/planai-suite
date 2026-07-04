

export type VerifiedLead = {
  id: number;
  name: string;
  company: string;
  title: string;
  email: string;
  verified: boolean;
  source: "LinkedIn" | "Company Site" | "Hunter.io" | "Apollo" | "CAC Registry" | "VConnect";
  confidence: number;
  date: string;
};

// ─── Static mock data (unauthenticated) ───────────────────────────────────────
export const STATIC_VERIFIED_LEADS: VerifiedLead[] = [
  { id: 1,  name: "Chidi Okeke",        company: "Paystack",      title: "VP Engineering",         email: "c.okeke@paystack.com",      verified: true,  source: "LinkedIn",      confidence: 98, date: "2026-03-01" },
  { id: 2,  name: "Amaka Nwosu",        company: "Flutterwave",   title: "Head of Growth",         email: "a.nwosu@flutterwave.com",   verified: true,  source: "Company Site",  confidence: 95, date: "2026-03-01" },
  { id: 3,  name: "Tunde Balogun",      company: "Kuda Bank",     title: "Product Lead",           email: "t.balogun@kuda.com",        verified: false, source: "LinkedIn",      confidence: 72, date: "2026-02-28" },
  { id: 4,  name: "Ngozi Adeyemi",      company: "Andela",        title: "CTO",                    email: "n.adeyemi@andela.com",      verified: true,  source: "Hunter.io",     confidence: 99, date: "2026-02-28" },
  { id: 5,  name: "Emeka Eze",          company: "Interswitch",   title: "Design Director",        email: "e.eze@interswitch.com",     verified: true,  source: "LinkedIn",      confidence: 96, date: "2026-02-27" },
  { id: 6,  name: "Bola Olanrewaju",    company: "Cowrywise",     title: "Marketing Manager",      email: "b.olanrewaju@cowrywise.com",verified: false, source: "Apollo",        confidence: 68, date: "2026-02-27" },
  { id: 7,  name: "Fatima Aliyu",       company: "Mono HQ",       title: "Sales Director",         email: "f.aliyu@mono.co",           verified: true,  source: "Company Site",  confidence: 94, date: "2026-02-26" },
  { id: 8,  name: "Yinka Adewale",      company: "Piggyvest",     title: "Engineering Manager",    email: "y.adewale@piggyvest.com",   verified: true,  source: "LinkedIn",      confidence: 97, date: "2026-02-26" },
  { id: 9,  name: "Chisom Obi",         company: "Risevest",      title: "Product Manager",        email: "c.obi@rise.capital",        verified: true,  source: "Hunter.io",     confidence: 93, date: "2026-02-25" },
  { id: 10, name: "Seun Falade",        company: "Bumpa",         title: "Account Executive",      email: "s.falade@bumpa.shop",       verified: false, source: "Apollo",        confidence: 61, date: "2026-02-25" },
  { id: 11, name: "Adaeze Okonkwo",     company: "TeamApt",       title: "Head of Partnerships",   email: "a.okonkwo@teamapt.com",     verified: true,  source: "LinkedIn",      confidence: 91, date: "2026-02-24" },
  { id: 12, name: "Gbenga Afolabi",     company: "Carbon",        title: "Sr. Developer Advocate", email: "g.afolabi@getcarbon.co",    verified: true,  source: "CAC Registry",  confidence: 96, date: "2026-02-24" },
  { id: 13, name: "Hauwa Musa",         company: "Stears",        title: "Data Analyst",           email: "h.musa@stears.co",          verified: true,  source: "VConnect",      confidence: 89, date: "2026-02-23" },
  { id: 14, name: "Damilola Adewusi",   company: "Softcom",       title: "CEO",                    email: "d.adewusi@softcom.ng",      verified: true,  source: "CAC Registry",  confidence: 97, date: "2026-02-23" },
  { id: 15, name: "Onyeka Nwelue",      company: "Curacel",       title: "Growth Lead",            email: "o.nwelue@curacel.co",       verified: false, source: "LinkedIn",      confidence: 65, date: "2026-02-22" },
];

// ─── Auth-aware fetcher ────────────────────────────────────────────────────────
// Replace the fetch URL with your actual endpoint.
// Throw or return null to fall back to static data in the UI.
export async function fetchVerifiedLeads(token: string): Promise<VerifiedLead[]> {
  const res = await fetch("/api/emailscraper/leads", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const SOURCES = ["LinkedIn", "Hunter.io", "Company Site", "Apollo", "CAC Registry", "VConnect"] as const;

export function getLeads(isAuthed: boolean, liveData?: VerifiedLead[]): VerifiedLead[] {
  if (isAuthed && liveData) return liveData;
  return STATIC_VERIFIED_LEADS;
}