"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";

const terminalTabs = [
  {
    id: "profile",
    label: "profile.json",
    lines: [
      "{",
      '  "name": "Leonardo",',
      '  "focus": [',
      '    "Data Engineering",',
      '    "Analytics",',
      '    "Data Products"',
      "  ],",
      '  "mode": "learning_by_building",',
      '  "status": "portfolio_in_progress"',
      "}",
    ],
  },
  {
    id: "pipeline",
    label: "journey.py",
    lines: [
      "from portfolio import LearningJourney",
      "",
      'journey = LearningJourney(owner="Leonardo")',
      'journey.learn(["Python", "SQL", "React"])',
      "journey.build(projects=True)",
      "journey.document(decisions=True)",
      "",
      "portfolio = journey.publish()",
      'print(portfolio.status)  # "in_progress"',
    ],
  },
  {
    id: "metrics",
    label: "projects.sql",
    lines: [
      "SELECT",
      "  project_name,",
      "  main_learning,",
      "  stack",
      "FROM portfolio_projects",
      "WHERE owner = 'Leonardo'",
      "  AND status IN ('prototype', 'study')",
      "ORDER BY updated_at DESC;",
    ],
  },
];

function colorize(line: string) {
  if (!line) return "\u00a0";

  const isKeyword = /^(from|SELECT|FROM|WHERE|ORDER BY|journey\.|portfolio =|print)/.test(
    line.trim(),
  );
  const segments = line.split(/("[^"]*"|'[^']*')/g);

  return segments.map((segment, index) => {
    if (/^("[^"]*"|'[^']*')$/.test(segment)) {
      return (
        <span key={segment + index} className="text-emerald-300">
          {segment}
        </span>
      );
    }
    if (segment.includes("#")) {
      const [before, comment] = segment.split("#");
      return (
        <span key={segment + index}>
          {before}
          <span className="text-slate-600">#{comment}</span>
        </span>
      );
    }
    return (
      <span
        key={segment + index}
        className={isKeyword ? "text-cyan-200" : "text-slate-300"}
      >
        {segment}
      </span>
    );
  });
}

export function TerminalPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = terminalTabs[activeTab];

  // Memoize colored lines to avoid regex parsing on every re-render/animation frame
  const coloredLines = useMemo(() => {
    return current.lines.map((line) => colorize(line));
  }, [current]);

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.8,
        delay: reduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[620px] lg:mx-0 will-change-transform"
    >
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-cyan-400/[0.04] blur-3xl" />
      <div className="terminal-shell overflow-hidden rounded-[22px] border border-cyan-200/[0.13] bg-[#060d14]/95 shadow-[0_36px_110px_-42px_rgba(34,211,238,.42)] backdrop-blur-2xl transform-gpu">
        <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rose-400/70" />
            <span className="size-2.5 rounded-full bg-amber-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-300/70" />
          </div>
          <p className="font-mono text-[9px] tracking-[0.12em] text-slate-600 sm:text-[10px]">
            ~/leonardo/workspace
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-emerald-300 sm:text-[9px]">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-40 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-300" />
            </span>
            portfolio online
          </div>
        </div>

        <div
          className="flex gap-1 overflow-x-auto border-b border-white/[0.07] bg-white/[0.015] px-2 pt-2 sm:px-3"
          role="tablist"
          aria-label="Arquivos do perfil"
        >
          {terminalTabs.map((tab, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls="terminal-code"
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={
                "relative min-h-10 shrink-0 rounded-t-lg px-3 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300 sm:text-[11px] " +
                (activeTab === index
                  ? "text-cyan-100"
                  : "text-slate-600 hover:text-slate-300")
              }
            >
              {tab.label}
              {activeTab === index && (
                <motion.span
                  layoutId="terminal-active"
                  className="absolute inset-x-2 bottom-0 h-px bg-cyan-300"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 360, damping: 30 }
                  }
                />
              )}
            </button>
          ))}
        </div>

        <div
          id="terminal-code"
          role="tabpanel"
          className="relative min-h-[330px] overflow-hidden px-3 py-5 sm:min-h-[356px] sm:px-5"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.018)_1px,transparent_1px)] bg-[size:100%_24px]" />
          <AnimatePresence mode="wait">
            <motion.pre
              key={current.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.24 }}
              className="relative overflow-x-auto font-mono text-[10px] leading-7 sm:text-xs"
            >
              <code>
                {current.lines.map((line, index) => (
                  <motion.span
                    key={current.id + index}
                    initial={
                      reduceMotion ? { opacity: 1 } : { opacity: 0, x: -4 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.055,
                      duration: 0.25,
                    }}
                    className="grid min-w-max grid-cols-[24px_1fr] sm:grid-cols-[30px_1fr]"
                  >
                    <span className="select-none pr-3 text-right text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{coloredLines[index]}</span>
                  </motion.span>
                ))}
              </code>
            </motion.pre>
          </AnimatePresence>
          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/[0.06] bg-slate-950/70 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-500">
            <span className="size-1 rounded-full bg-violet-300" />
            ambiente simulado
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07] bg-white/[0.015]">
          {[
            ["03", "focus areas"],
            ["06", "core skills"],
            ["active", "learning mode"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-3.5 text-center sm:px-4">
              <p className="font-mono text-xs font-semibold text-slate-100 sm:text-sm">
                {value}
              </p>
              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] text-slate-600 sm:text-[8px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 -left-3 hidden items-center gap-3 rounded-xl border border-white/[0.09] bg-[#081019]/90 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:flex">
        <span className="grid size-8 place-items-center rounded-lg bg-emerald-300/10 font-mono text-xs text-emerald-200">
          ✓
        </span>
        <span>
          <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
            last execution
          </span>
          <span className="mt-0.5 block font-mono text-[10px] text-slate-300">
            portfolio.updated()
          </span>
        </span>
      </div>
    </motion.div>
  );
}
