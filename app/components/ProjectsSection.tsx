"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const categoryGlow: Record<string, string> = {
  "DATA SCIENCE": "glow-cyan",
  "DATA ANALYTICS": "glow-emerald",
  PRODUÇÃO: "glow-violet",
};

const categoryAccent: Record<string, string> = {
  "DATA SCIENCE": "from-cyan-400/80 to-cyan-300/60",
  "DATA ANALYTICS": "from-emerald-400/80 to-emerald-300/60",
  PRODUÇÃO: "from-violet-400/80 to-violet-300/60",
};

/* ─────────── Featured (first) project ─────────── */
function FeaturedProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={
        "group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/40 " +
        (categoryGlow[project.category] ?? "")
      }
    >
      {/* ── Hero image ── */}
      <div className="card-image-overlay relative aspect-[21/9] w-full overflow-hidden sm:aspect-[2.4/1]">
        <Image
          src={project.image}
          alt={`Demonstração do projeto ${project.title}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient accent line at top */}
        <div
          className={
            "absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r " +
            (categoryAccent[project.category] ?? "from-cyan-400/80 to-cyan-300/60")
          }
        />
      </div>

      {/* ── Content over image ── */}
      <div className="relative z-10 -mt-20 px-6 pb-6 sm:-mt-28 sm:px-8 sm:pb-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-cyan-300">
            {project.index}
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-slate-500">
            {project.category}
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.06] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-emerald-300 sm:text-[8px]">
            <span className="relative flex size-1.5">
              {project.status === "em produção" && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-40 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-300" />
            </span>
            {project.status}
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-300 transition hover:bg-white/[0.07] hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Repositório
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-300/[0.1] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan-300 transition hover:bg-cyan-300/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Ver Projeto
                <span aria-hidden="true" className="text-cyan-300">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Metrics row ── */}
        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 backdrop-blur-sm"
            >
              <p className="font-mono text-lg font-semibold tracking-[-0.04em] text-emerald-300 sm:text-xl">
                {metric.value}
              </p>
              <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
                {metric.label}
              </p>
              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.08em] text-slate-600">
                {metric.note}
              </p>
            </div>
          ))}
        </div>

        {/* ── Learning + Stack + Flow ── */}
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-violet-300/10 bg-violet-300/[0.05] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-violet-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Expandable flow + learning ── */}
        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={"flow-" + project.id}
            className="group/btn flex min-h-10 w-full items-center justify-between rounded-xl font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span>{expanded ? "Ocultar detalhes" : "Ver fluxo e aprendizado"}</span>
            <span
              aria-hidden="true"
              className={
                "text-cyan-300 transition-transform " +
                (expanded ? "rotate-45" : "group-hover/btn:translate-x-1")
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
                {/* Learning box */}
                <div className="mb-4 rounded-xl border border-cyan-300/[0.08] bg-cyan-300/[0.025] p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-cyan-300">
                    o que aprendi
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {project.learning}
                  </p>
                </div>
                {/* Flow timeline */}
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/[0.06] bg-slate-950/45 p-4">
                  {project.flow.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="relative flex items-center gap-2 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.04] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-slate-300">
                        <span className="size-1 rounded-full bg-cyan-300/50" />
                        {step}
                      </span>
                      {i < project.flow.length - 1 && (
                        <span className="text-cyan-300/30" aria-hidden="true">
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
      </div>
    </motion.article>
  );
}

/* ─────────── Regular project card ─────────── */
function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-slate-950/40 transform-gpu will-change-transform " +
        (categoryGlow[project.category] ?? "")
      }
    >
      {/* ── Accent line ── */}
      <div
        className={
          "absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r " +
          (categoryAccent[project.category] ?? "from-cyan-400/80 to-cyan-300/60")
        }
      />

      {/* ── Image section ── */}
      <div className="card-image-overlay relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Demonstração do projeto ${project.title}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* ── Hover overlay with description ── */}
        <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <div className="p-5">
            <p className="text-sm leading-6 text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-1 flex-col -mt-8 px-5 pb-5">
        {/* Status + category */}
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-cyan-300">
            {project.index}
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-slate-600">
            {project.category}
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.06] px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-emerald-300">
            <span className="relative flex size-1.5">
              {project.status === "em produção" && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-40 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-300" />
            </span>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-[-0.035em] text-slate-100 sm:text-2xl">
          {project.title}
        </h3>

        {/* Metrics compact */}
        <div className="mt-4 grid grid-cols-2 gap-1.5">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2.5"
            >
              <p className="font-mono text-base font-semibold tracking-[-0.04em] text-emerald-300">
                {metric.value}
              </p>
              <p className="mt-0.5 text-[9px] leading-4 text-slate-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-violet-300/10 bg-violet-300/[0.04] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-400 transition hover:bg-white/[0.06] hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Repositório
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-300/[0.08] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-cyan-300 transition hover:bg-cyan-300/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Ver Projeto <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        {/* ── Expandable flow ── */}
        <div className="mt-4 border-t border-white/[0.06] pt-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={"flow-" + project.id}
            className="group/btn flex min-h-9 w-full items-center justify-between rounded-lg font-mono text-[8px] uppercase tracking-[0.14em] text-slate-500 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span>{expanded ? "Ocultar" : "Ver fluxo"}</span>
            <span
              aria-hidden="true"
              className={
                "text-cyan-300 transition-transform " +
                (expanded ? "rotate-45" : "group-hover/btn:translate-x-1")
              }
            >
              +
            </span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={"flow-" + project.id}
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
                }
                animate={{ opacity: 1, height: "auto" }}
                exit={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }
                }
                transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
                className="overflow-hidden"
              >
                {/* Learning */}
                <div className="mb-3 rounded-lg border border-cyan-300/[0.08] bg-cyan-300/[0.02] p-3">
                  <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-cyan-300">
                    o que aprendi
                  </p>
                  <p className="mt-1.5 text-[11px] leading-5 text-slate-400">
                    {project.learning}
                  </p>
                </div>
                {/* Flow */}
                <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-white/[0.05] bg-slate-950/45 p-3">
                  {project.flow.map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <span className="flex items-center gap-1.5 rounded-md border border-cyan-300/10 bg-cyan-300/[0.04] px-2 py-1.5 font-mono text-[7px] uppercase tracking-[0.1em] text-slate-400">
                        <span className="size-1 rounded-full bg-cyan-300/50" />
                        {step}
                      </span>
                      {i < project.flow.length - 1 && (
                        <span className="text-[8px] text-cyan-300/30" aria-hidden="true">
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
      </div>
    </motion.article>
  );
}

/* ─────────── Section ─────────── */
export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = projects;

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

        {/* Featured project */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14"
        >
          <FeaturedProjectCard project={featured} />
        </motion.div>

        {/* Rest in bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((project) => (
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
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
