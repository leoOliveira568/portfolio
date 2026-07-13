"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skills, type Skill } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const colorMap = {
  cyan: {
    text: "text-cyan-200",
    dot: "bg-cyan-300",
    bar: "from-cyan-400 to-cyan-200",
  },
  emerald: {
    text: "text-emerald-200",
    dot: "bg-emerald-300",
    bar: "from-emerald-400 to-emerald-200",
  },
  violet: {
    text: "text-violet-200",
    dot: "bg-violet-300",
    bar: "from-violet-400 to-violet-200",
  },
};

function getPoint(index: number, value: number, radius = 130) {
  const angle = -Math.PI / 2 + index * ((Math.PI * 2) / skills.length);
  const scaledRadius = radius * value;
  return {
    x: 210 + Math.cos(angle) * scaledRadius,
    y: 210 + Math.sin(angle) * scaledRadius,
  };
}

function pointsFor(values: number[], radius = 130) {
  return values
    .map((value, index) => {
      const point = getPoint(index, value, radius);
      return point.x.toFixed(1) + "," + point.y.toFixed(1);
    })
    .join(" ");
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const colors = colorMap[skill.color];

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, skill.value, {
      duration: reduceMotion ? 0 : 1,
      delay: reduceMotion ? 0 : index * 0.06,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [inView, index, reduceMotion, skill.value]);

  return (
    <div
      ref={ref}
      className="group rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-white/[0.07] hover:bg-white/[0.025]"
    >
      <div className="mb-2.5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className={"size-1.5 rounded-full " + colors.dot} />
            <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-slate-200 sm:text-[11px]">
              {skill.label}
            </span>
          </div>
          <p className="mt-1.5 pl-3.5 text-xs leading-5 text-slate-600 transition-colors group-hover:text-slate-400">
            {skill.context}
          </p>
        </div>
        <span className={"font-mono text-sm tabular-nums " + colors.text}>
          {display}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? skill.value + "%" : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            delay: reduceMotion ? 0 : index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={
            "h-full rounded-full bg-gradient-to-r shadow-[0_0_12px_currentColor] " +
            colors.bar
          }
        />
      </div>
    </div>
  );
}

function RadarChart() {
  const reduceMotion = useReducedMotion();
  const values = skills.map((skill) => skill.value / 100);
  const labelPoints = skills.map((_, index) => getPoint(index, 1, 172));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[430px]">
      <div className="absolute inset-[16%] rounded-full bg-cyan-400/[0.04] blur-3xl" />
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-labelledby="radar-title radar-description"
        className="relative h-full w-full overflow-visible"
      >
        <title id="radar-title">Radar de ênfase técnica</title>
        <desc id="radar-description">
          Visualização de Python, SQL, Data Pipelines, Analytics e BI, React e
          Node.js. Os valores também estão disponíveis como barras ao lado.
        </desc>

        {[0.25, 0.5, 0.75, 1].map((ring) => (
          <polygon
            key={ring}
            points={pointsFor(skills.map(() => ring))}
            fill={ring === 1 ? "rgba(15,23,42,.18)" : "none"}
            stroke="rgba(148,163,184,.13)"
            strokeWidth="1"
          />
        ))}

        {skills.map((skill, index) => {
          const edge = getPoint(index, 1);
          return (
            <line
              key={skill.label}
              x1="210"
              y1="210"
              x2={edge.x}
              y2={edge.y}
              stroke="rgba(148,163,184,.11)"
              strokeWidth="1"
            />
          );
        })}

        <motion.polygon
          points={pointsFor(values)}
          fill="rgba(34,211,238,.11)"
          stroke="rgba(103,232,249,.82)"
          strokeWidth="1.5"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "210px 210px" }}
        />

        {skills.map((skill, index) => {
          const point = getPoint(index, skill.value / 100);
          const colors = ["#67e8f9", "#6ee7b7", "#c4b5fd"];
          return (
            <motion.circle
              key={skill.label}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={colors[index % colors.length]}
              stroke="#071019"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : 0.45 + index * 0.07 }}
            />
          );
        })}

        {skills.map((skill, index) => {
          const point = labelPoints[index];
          const anchor =
            point.x < 185 ? "end" : point.x > 235 ? "start" : "middle";
          return (
            <text
              key={skill.short}
              x={point.x}
              y={point.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="rgba(203,213,225,.78)"
              fontSize="10"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              letterSpacing="1"
            >
              {skill.short}
            </text>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
          core
        </p>
        <p className="mt-1 text-xs font-medium text-slate-300">DATA × PRODUCT</p>
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
              eyebrow="04 / TECH STACK"
              title="Tecnologias que fazem parte da minha jornada."
              description="Um retrato visual das ferramentas que mais aparecem nos meus estudos e projetos, com ênfase prática em dados e desenvolvimento."
            />
          </div>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
            className="glass-card rounded-3xl p-5 sm:p-8"
          >
            <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
              <span>skill topology</span>
              <span className="text-cyan-300">live map</span>
            </div>
            <RadarChart />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
              },
            }}
            className="glass-card rounded-3xl p-3 sm:p-5"
          >
            <div className="mb-2 flex items-center justify-between px-3 py-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                proficiency.load()
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-700">
                frequency × depth
              </p>
            </div>
            <div className="grid gap-1">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  variants={{
                    hidden: { opacity: 0, x: reduceMotion ? 0 : 12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <SkillBar skill={skill} index={index} />
                </motion.div>
              ))}
            </div>
            <p className="mx-3 mt-4 border-t border-white/[0.06] pt-4 font-mono text-[8px] leading-5 uppercase tracking-[0.11em] text-slate-600">
              * Ênfase atual baseada em frequência de uso e profundidade
              prática — não representa certificação.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
