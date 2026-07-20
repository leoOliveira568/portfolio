"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stackDomains, type StackDomain } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const accentMap = {
  cyan: {
    dot: "bg-cyan-300",
    code: "text-cyan-300",
    line: "from-cyan-400/80 to-cyan-300/40",
    coreTag: "border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-100",
    glow: "group-hover:border-cyan-300/25",
  },
  emerald: {
    dot: "bg-emerald-300",
    code: "text-emerald-300",
    line: "from-emerald-400/80 to-emerald-300/40",
    coreTag: "border-emerald-300/25 bg-emerald-300/[0.07] text-emerald-100",
    glow: "group-hover:border-emerald-300/25",
  },
  violet: {
    dot: "bg-violet-300",
    code: "text-violet-300",
    line: "from-violet-400/80 to-violet-300/40",
    coreTag: "border-violet-300/25 bg-violet-300/[0.07] text-violet-100",
    glow: "group-hover:border-violet-300/25",
  },
};

function DomainCard({ domain }: { domain: StackDomain }) {
  const accent = accentMap[domain.accent];

  return (
    <div
      className={
        "group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/35 p-5 transition-colors sm:p-6 " +
        accent.glow
      }
    >
      {/* accent line */}
      <div
        aria-hidden="true"
        className={
          "absolute inset-x-0 top-0 h-px bg-gradient-to-r " + accent.line
        }
      />

      <div className="flex items-center gap-2">
        <span className={"size-1.5 rounded-full " + accent.dot} />
        <span
          className={
            "font-mono text-[9px] uppercase tracking-[0.18em] " + accent.code
          }
        >
          {domain.code}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-slate-100">
        {domain.label}
      </h3>
      <p className="mt-2 text-[13px] leading-6 text-slate-400">
        {domain.summary}
      </p>

      <div className="mt-5 border-t border-white/[0.06] pt-4">
        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
          principais
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {domain.core.map((tool) => (
            <span
              key={tool}
              className={
                "rounded-lg border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] " +
                accent.coreTag
              }
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
            apoio
          </span>
          {domain.supporting.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-white/[0.06] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
          <div id="skills-heading">
            <SectionHeading
              eyebrow="06 / TECH STACK"
              title="A stack por trás de cada etapa do dado."
              description="Em vez de porcentagens, organizo as ferramentas pelo papel que cumprem — da coleta do dado bruto ao produto final que chega ao usuário."
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
          className="glass-card mt-14 rounded-3xl p-4 sm:p-6 lg:p-8"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] px-1 pb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
              stack.manifest
            </span>
            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-cyan-300">
              data <span className="text-slate-600">→</span> product
            </span>
          </div>

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
            className="grid gap-4 sm:grid-cols-2"
          >
            {stackDomains.map((domain) => (
              <motion.div
                key={domain.code}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
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
                <DomainCard domain={domain} />
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-6 border-t border-white/[0.06] px-1 pt-4 font-mono text-[8px] leading-5 uppercase tracking-[0.11em] text-slate-600">
            * Ferramentas presentes nos meus estudos e projetos reais, agrupadas
            por área de aplicação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
