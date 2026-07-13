"use client";

import { motion, useReducedMotion } from "framer-motion";
import { learningSteps } from "../data/portfolio";

export function SystemFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="flow-title" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6 }}
          className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-400/[0.06] blur-3xl" />
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                LEARNING LOOP
              </p>
              <h3
                id="flow-title"
                className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-slate-100 sm:text-3xl"
              >
                Meu processo é aprender construindo.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Cada projeto começa com curiosidade e termina com um novo ponto
              de partida.
            </p>
          </div>

          <div className="relative mt-10 grid gap-3 md:grid-cols-5 md:gap-0">
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[9%] right-[9%] top-[19px] hidden h-px origin-left bg-gradient-to-r from-cyan-300/60 via-emerald-300/60 to-violet-300/60 md:block"
            />
            {learningSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.45,
                  delay: reduceMotion ? 0 : 0.15 + index * 0.1,
                }}
                className="group relative grid grid-cols-[44px_1fr] items-center gap-3 rounded-2xl border border-white/[0.06] bg-slate-950/35 p-3 md:block md:border-0 md:bg-transparent md:p-0 md:text-center"
              >
                <span className="relative z-10 grid size-10 place-items-center rounded-xl border border-white/[0.1] bg-[#09121b] font-mono text-[9px] text-cyan-200 transition group-hover:border-cyan-300/30 group-hover:shadow-[0_0_20px_-8px_rgba(34,211,238,.8)] md:mx-auto">
                  {step.index}
                </span>
                <div className="md:mt-4">
                  <p className="text-sm font-medium text-slate-200">
                    {step.label}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.08em] text-slate-600">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
