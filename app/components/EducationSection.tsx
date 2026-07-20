"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education, type Education } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const accentMap = {
  cyan: {
    dot: "bg-cyan-300",
    code: "text-cyan-300",
    line: "from-cyan-400/70 to-cyan-300/30",
    mono: "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200",
  },
  violet: {
    dot: "bg-violet-300",
    code: "text-violet-300",
    line: "from-violet-400/70 to-violet-300/30",
    mono: "border-violet-300/20 bg-violet-300/[0.06] text-violet-200",
  },
  emerald: {
    dot: "bg-emerald-300",
    code: "text-emerald-300",
    line: "from-emerald-400/70 to-emerald-300/30",
    mono: "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-200",
  },
};

const statusLabel: Record<Education["status"], string> = {
  concluído: "concluído",
  transferência: "transferência",
  "em andamento": "em andamento",
};

function EducationCard({ item }: { item: Education }) {
  const accent = accentMap[item.accent];
  const isCurrent = item.status === "em andamento";
  const initials = item.institution
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={
        "group relative h-full overflow-hidden rounded-2xl border bg-slate-950/35 p-5 transition-colors sm:p-6 " +
        (isCurrent
          ? "border-emerald-300/20 hover:border-emerald-300/35"
          : "border-white/[0.07] hover:border-white/[0.14]")
      }
    >
      <div
        aria-hidden="true"
        className={"absolute inset-x-0 top-0 h-px bg-gradient-to-r " + accent.line}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={"size-1.5 rounded-full " + accent.dot} />
          <span
            className={
              "font-mono text-[9px] uppercase tracking-[0.18em] " + accent.code
            }
          >
            {item.code}
          </span>
        </div>
        <span
          className={
            "rounded-full border px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] " +
            (isCurrent
              ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-300"
              : "border-white/[0.08] text-slate-500")
          }
        >
          {isCurrent && (
            <span className="mr-1.5 inline-flex size-1.5 translate-y-px rounded-full bg-emerald-300 align-middle" />
          )}
          {statusLabel[item.status]}
        </span>
      </div>

      <div className="mt-5 flex items-start gap-3.5">
        <span
          className={
            "grid size-10 shrink-0 place-items-center rounded-xl border font-mono text-[10px] " +
            accent.mono
          }
        >
          {initials}
        </span>
        <div>
          <h3 className="text-base font-medium leading-6 tracking-[-0.02em] text-slate-100">
            {item.course}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{item.institution}</p>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-6 text-slate-400">{item.detail}</p>

      <p className="mt-5 border-t border-white/[0.06] pt-4 font-mono text-[8px] uppercase tracking-[0.13em] text-slate-600">
        {item.period}
      </p>
    </div>
  );
}

export function EducationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="formacao"
      aria-labelledby="education-heading"
      className="relative scroll-mt-24 py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div id="education-heading">
            <SectionHeading
              eyebrow="04 / EDUCATION"
              title="Uma trajetória construída dentro da computação."
              description="Da base teórica em Ciência da Computação ao desenvolvimento de sistemas — uma progressão contínua em direção à prática de software e dados."
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {education.map((item) => (
            <motion.div
              key={item.code}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduceMotion ? 0.01 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <EducationCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
