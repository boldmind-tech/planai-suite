"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SuperNavbar, SuperFooter, Button, Input } from "@boldmind-tech/ui";
import {
  Search,
  Filter,
  Download,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TOOL_NAV_LINKS } from "@/lib/nav-links";
import {
  STATIC_VERIFIED_LEADS,
  SOURCES,
  type VerifiedLead,
} from "@/lib/verified-businesses";

// ─── Inline Badge ─────────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-normal text-muted-foreground whitespace-nowrap">
      {children}
    </span>
  );
}

// ─── Inline Checkbox ──────────────────────────────────────────────────────────
function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      whileTap={{ scale: 0.82 }}
      className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors
        ${checked ? "bg-primary border-primary" : "border-border bg-background"}`}
    >
      {checked && (
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          viewBox="0 0 10 8"
          className="w-2.5 h-2 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M1 4l2.5 2.5L9 1" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      )}
    </motion.button>
  );
}

// ─── Inline Select ────────────────────────────────────────────────────────────
function Select({
  value,
  onChange,
  options,
  placeholder,
  icon,
  width = "w-[140px]",
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  icon?: React.ReactNode;
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  const label = options.find((o) => o.value === value)?.label ?? placeholder;

  return (
    <div className={`relative ${width}`}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="h-9 w-full flex items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm text-foreground hover:bg-muted/50 transition-colors"
      >
        {icon}
        <span className="flex-1 text-left truncate">{label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.15 }}
          viewBox="0 0 10 6"
          className="h-3 w-3 text-muted-foreground shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 top-full mt-1 z-20 min-w-full rounded-md border border-border bg-background shadow-md overflow-hidden"
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-muted/60 transition-colors
                    ${value === opt.value ? "font-medium text-primary" : "text-foreground"}`}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function confidenceColor(n: number) {
  if (n >= 90) return "text-emerald-600";
  if (n >= 70) return "text-amber-500";
  return "text-red-500";
}

function sourceKey(s: string) {
  return s.toLowerCase().replace(/[.\s]/g, "");
}

const RESULTS_PER_PAGE = 10;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EmailScraperPage() {
  const leads = STATIC_VERIFIED_LEADS;

  const [searchQuery, setSearchQuery]   = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage]   = useState(1);
  const [selected, setSelected]         = useState<number[]>([]);

  const filtered = leads.filter((r) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.company.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q);
    const matchSource  = sourceFilter === "all" || sourceKey(r.source) === sourceFilter;
    const matchStatus  =
      statusFilter === "all" ||
      (statusFilter === "verified" && r.verified) ||
      (statusFilter === "unverified" && !r.verified);
    return matchSearch && matchSource && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / RESULTS_PER_PAGE));
  const safePage   = Math.min(currentPage, totalPages);
  const paginated  = filtered.slice(
    (safePage - 1) * RESULTS_PER_PAGE,
    safePage * RESULTS_PER_PAGE
  );

  const toggleSelect = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map((r) => r.id));

  const resetFilters = () => {
    setSearchQuery(""); setSourceFilter("all"); setStatusFilter("all"); setCurrentPage(1);
  };

  const sourceOptions = [
    { label: "All Sources", value: "all" },
    ...SOURCES.map((s) => ({ label: s, value: sourceKey(s) })),
  ];

  const statusOptions = [
    { label: "All Status",  value: "all" },
    { label: "Verified",    value: "verified" },
    { label: "Unverified",  value: "unverified" },
  ];

  const hasActiveFilters = !!(searchQuery || sourceFilter !== "all" || statusFilter !== "all");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SuperNavbar logoSrc="/logo.png" links={TOOL_NAV_LINKS} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-4">

        {/* ── Search + Filters ── */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search name, company, or email…"
              className="pl-8 h-9 text-sm"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            />
          </div>

          <div className="flex gap-2 items-center flex-wrap">
            <Select
              value={sourceFilter}
              onChange={(v) => { setSourceFilter(v); setCurrentPage(1); }}
              options={sourceOptions}
              placeholder="Source"
              icon={<Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
              width="w-[150px]"
            />
            <Select
              value={statusFilter}
              onChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}
              options={statusOptions}
              placeholder="Status"
              width="w-[130px]"
            />
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  type="button"
                  onClick={resetFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-1"
                >
                  Clear
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Meta bar ── */}
        <div className="flex items-center justify-between h-7">
          <span className="text-xs text-muted-foreground">
            {selected.length > 0
              ? `${selected.length} of ${filtered.length} selected`
              : `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}
          </span>

          <AnimatePresence>
            {selected.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Link href="/emailscraper/export">
                  <Button size="sm" className="h-7 text-xs gap-1.5">
                    <Download className="h-3 w-3" />
                    Export {selected.length} lead{selected.length !== 1 ? "s" : ""}
                  </Button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Table ── */}
        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="w-10 px-3 py-2.5 text-left">
                    <Checkbox
                      checked={paginated.length > 0 && selected.length === paginated.length}
                      onChange={toggleAll}
                    />
                  </th>
                  {["Name", "Company", "Title", "Email", "Verified", "Confidence", "Source"].map((h) => (
                    <th
                      key={h}
                      className={`px-3 py-2.5 font-medium text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap
                        ${["Verified", "Confidence"].includes(h) ? "text-center" : "text-left"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-3 py-14 text-center text-sm text-muted-foreground">
                      No results match your filters.
                    </td>
                  </tr>
                ) : (
                  paginated.map((row, i) => (
                    <motion.tr
                      key={row.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className={`border-b last:border-0 transition-colors hover:bg-muted/40
                        ${selected.includes(row.id) ? "bg-primary/5" : ""}`}
                    >
                      <td className="px-3 py-2.5">
                        <Checkbox
                          checked={selected.includes(row.id)}
                          onChange={() => toggleSelect(row.id)}
                        />
                      </td>
                      <td className="px-3 py-2.5 font-medium whitespace-nowrap">{row.name}</td>
                      <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">{row.company}</td>
                      <td className="px-3 py-2.5 text-muted-foreground text-xs whitespace-nowrap">{row.title}</td>
                      <td className="px-3 py-2.5">
                        <span className="text-primary font-mono text-xs">{row.email}</span>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        {row.verified ? (
                          <BadgeCheck className="h-4 w-4 text-emerald-500 inline-block" />
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className={`text-xs font-semibold ${confidenceColor(row.confidence)}`}>
                          {row.confidence}%
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <Badge>{row.source}</Badge>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Showing {(safePage - 1) * RESULTS_PER_PAGE + 1}–
              {Math.min(safePage * RESULTS_PER_PAGE, filtered.length)} of {filtered.length}
            </span>

            <div className="flex gap-1 items-center">
              <Button
                variant="outline" size="sm"
                className="h-7 text-xs gap-1 px-2"
                disabled={safePage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                <ChevronLeft className="h-3 w-3" /> Prev
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
                .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("…");
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === "…" ? (
                    <span key={`e-${i}`} className="px-1">…</span>
                  ) : (
                    <Button
                      key={p}
                      variant={safePage === p ? "primary" : "outline"}
                      size="sm"
                      className="h-7 w-7 text-xs p-0"
                      onClick={() => setCurrentPage(p as number)}
                    >
                      {p}
                    </Button>
                  )
                )}

              <Button
                variant="outline" size="sm"
                className="h-7 text-xs gap-1 px-2"
                disabled={safePage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}
      </main>

      <SuperFooter product="emailscraper" />
    </div>
  );
}