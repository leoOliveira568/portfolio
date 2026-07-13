"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function chartPath(values: number[]) {
  const width = 500;
  const height = 130;
  const step = width / (values.length - 1);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / range) * 92 - 18;
      return (index === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
    })
    .join(" ");
}

function ProjectChart({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const path = chartPath(project.chart);
  const gradientId = "chart-gradient-" + project.id;

  return (
    <div className="relative min-h-44 overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-950/45 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
          project signal / sample
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-emerald-300">
          <span className="size-1 rounded-full bg-emerald-300" />
          sample dataset
        </span>
      </div>
      <svg
        viewBox="0 0 500 150"
        aria-hidden="true"
        className="absolute inset-x-4 bottom-3 h-32 w-[calc(100%-2rem)] overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity=".18" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 70, 110].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="500"
            y2={y}
            stroke="rgba(148,163,184,.08)"
            strokeDasharray="4 8"
          />
        ))}
        <path
          d={path + " L 500 145 L 0 145 Z"}
          fill={"url(#" + gradientId + ")"}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#67e8f9"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0.01 : 1.15,
            ease: "easeOut",
          }}
          className="will-change-transform transform-gpu"
        />
      </svg>
    </div>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={
        "glass-card group relative overflow-hidden rounded-3xl p-5 sm:p-6 transform-gpu will-change-transform " +
        (featured ? "lg:col-span-2 lg:p-8" : "")
      }
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-cyan-300/[0.035] blur-3xl transition-colors group-hover:bg-cyan-300/[0.07]" />
      <div
        className={
          featured
            ? "relative grid gap-7 lg:grid-cols-[1.02fr_.98fr] lg:items-center"
            : "relative"
        }
      >
        <div>
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-cyan-300">
                {project.index}
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-slate-600">
                {project.category}
              </span>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-emerald-300 sm:text-[8px]">
              <span className="size-1 rounded-full bg-emerald-300" />
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-slate-100 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 rounded-xl border border-cyan-300/[0.08] bg-cyan-300/[0.025] p-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-cyan-300">
              o que aprendi
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              {project.learning}
            </p>
          </div>

          <div
            className={
              "mt-7 grid gap-2 " +
              (project.metrics.length === 3
                ? "grid-cols-2 sm:grid-cols-3"
                : "grid-cols-2")
            }
            aria-label={"Destaques técnicos do projeto " + project.title}
          >
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/[0.06] bg-slate-950/40 p-3"
              >
                <p className="font-mono text-xl font-semibold tracking-[-0.04em] text-emerald-300 sm:text-2xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-1.5 font-mono text-[7px] uppercase tracking-[0.08em] text-slate-700">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={featured ? "" : "mt-7"}>
          <ProjectChart project={project} />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-violet-300/10 bg-violet-300/[0.04] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-violet-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-6 border-t border-white/[0.07] pt-5">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={"flow-" + project.id}
          className="group/button flex min-h-11 w-full items-center justify-between rounded-xl font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <span>{expanded ? "Ocultar fluxo" : "Ver fluxo do projeto"}</span>
          <span
            aria-hidden="true"
            className={
              "text-cyan-300 transition-transform " +
              (expanded
                ? "rotate-45"
                : "group-hover/button:translate-x-1")
            }
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={"flow-" + project.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-2 flex flex-wrap items-center gap-2 rounded-2xl border border-white/[0.06] bg-slate-950/45 p-4">
                {project.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-cyan-300/10 bg-cyan-300/[0.04] px-2.5 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-slate-300">
                      {step}
                    </span>
                    {index < project.flow.length - 1 && (
                      <span className="text-cyan-300/40" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-24 sm:py-32 lg:py-36"
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
          <div id="projects-heading">
            <SectionHeading
              eyebrow="02 / PROJECT LAB"
              title="Projetos onde estudo, construo e registro aprendizados."
              description="Cada projeto mostra uma pergunta que explorei, as decisões técnicas que tomei, a stack utilizada e o que aprendi no processo."
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduceMotion ? 0.01 : 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
