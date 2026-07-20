"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experiences, type Experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ExperienceCard({ item }: { item: Experience }) {
  const monogram = item.company.slice(0, 2).toUpperCase();
  const isCurrent = item.status === "atual";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/35 p-6 transition-colors hover:border-cyan-300/20 sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-300/25 to-transparent"
      />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-[13px] font-semibold text-cyan-200">
            {monogram}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300">
                {item.code}
              </span>
              <span
                className={
                  "rounded-full border px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.12em] " +
                  (isCurrent
                    ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-300"
                    : "border-white/[0.08] text-slate-500")
                }
              >
                {isCurrent ? "atual" : "concluído"}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-slate-100">
              {item.role}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {item.company} <span className="text-slate-600">·</span>{" "}
              <span className="text-slate-500">{item.type}</span>
            </p>
          </div>
        </div>
        <span className="w-fit shrink-0 rounded-lg border border-white/[0.07] bg-slate-950/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-slate-400">
          {item.period}
        </span>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
        {item.summary}
      </p>

      <ul className="mt-5 grid gap-2.5 border-t border-white/[0.06] pt-5">
        {item.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-[13px] leading-6 text-slate-300">
            <span
              aria-hidden="true"
              className="mt-2 inline-flex size-1.5 shrink-0 rounded-full bg-cyan-300/70"
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-violet-300/10 bg-violet-300/[0.05] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-violet-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
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
          <div id="experience-heading">
            <SectionHeading
              eyebrow="03 / EXPERIENCE"
              title="Experiência profissional."
              description="Onde apliquei dados e desenvolvimento em um contexto real de produto e negócio."
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
          className="mt-14 grid gap-4"
        >
          {experiences.map((item) => (
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
              <ExperienceCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
