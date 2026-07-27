"use client";

import { Users2, PlayCircle, FileText } from "lucide-react";
import { Button, StatusBadge } from "@boldmindng/ui";

const STAFF = [
  {
    name: "Chidinma Eze",
    role: "Sales Associate",
    salary: "₦85,000",
    status: "live" as const,
  },
  {
    name: "Tunde Alabi",
    role: "Delivery Rider",
    salary: "₦65,000",
    status: "live" as const,
  },
];

export default function HrPayrollPage() {
  return (
    <div data-product="hr-payroll" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Users2 size={19} className="text-[var(--product-primary)]" /> HR &
            Payroll
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            PAYE-compliant payroll, leave, and payslips.
          </p>
        </div>
        <Button variant="primary" className="text-[13px] gap-1.5">
          <PlayCircle size={14} /> Run July payroll
        </Button>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="data-table w-full text-[13px]">
          <thead>
            <tr className="text-left text-[12px] text-[var(--product-foreground)]/55">
              <th className="px-4 py-2.5 font-medium">Staff</th>
              <th className="px-4 py-2.5 font-medium">Role</th>
              <th className="px-4 py-2.5 font-medium num">Monthly salary</th>
              <th className="px-4 py-2.5 font-medium">Status</th>
              <th className="px-4 py-2.5 font-medium" />
            </tr>
          </thead>
          <tbody>
            {STAFF.map((s) => (
              <tr
                key={s.name}
                className="border-t border-[var(--product-muted)]"
              >
                <td className="px-4 py-2.5 font-medium">{s.name}</td>
                <td className="px-4 py-2.5 text-[var(--product-foreground)]/60">
                  {s.role}
                </td>
                <td className="px-4 py-2.5 num tabular-nums">{s.salary}</td>
                <td className="px-4 py-2.5">
                  <StatusBadge variant={s.status}>{s.status}</StatusBadge>
                </td>
                <td className="px-4 py-2.5">
                  <button
                    className="btn-icon btn-secondary"
                    aria-label="View payslip"
                  >
                    <FileText size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
