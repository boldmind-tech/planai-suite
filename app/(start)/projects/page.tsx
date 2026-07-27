"use client";

import { ListTodo, Plus, Timer } from "lucide-react";
import { Button } from "@boldmindng/ui";

const COLUMNS = [
  {
    title: "To do",
    tasks: ["Finalize Q3 pricing page copy", "Record onboarding demo video"],
  },
  {
    title: "In progress",
    tasks: ["Wallet top-up flow — Paystack", "Fix Google OAuth relay bug"],
  },
  {
    title: "Done",
    tasks: ["Ship social media Pidgin mode", "CRM pipeline stage colors"],
  },
];

export default function ProjectManagerPage() {
  return (
    <div data-product="project-manager" className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <ListTodo size={19} className="text-[var(--product-primary)]" />{" "}
            Project Manager
          </h1>
          <p className="text-[13px] text-[var(--product-foreground)]/55 mt-0.5">
            Kanban boards, Pomodoro focus, and voice capture.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="text-[13px] gap-1.5">
            <Timer size={14} /> Focus session
          </Button>
          <Button variant="primary" className="text-[13px] gap-1.5">
            <Plus size={14} /> New task
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="text-[12px] font-semibold text-[var(--product-foreground)]/60 uppercase tracking-wide mb-2 flex items-center justify-between">
              {col.title}{" "}
              <span className="tabular-nums">{col.tasks.length}</span>
            </div>
            <div className="space-y-2">
              {col.tasks.map((t) => (
                <div key={t} className="card card-interactive p-3 text-[13px]">
                  {t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
