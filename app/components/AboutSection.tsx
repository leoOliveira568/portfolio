"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const journey = [
  {
    code: "BASE",
    title: "Curiosidade por sistemas",
    description:
      "Entender como as partes se conectam: lógica, desenvolvimento e a estrutura por trás de uma aplicação.",
    tags: ["Lógica", "Código", "Web"],
    color: "cyan",
  },
  {
    code: "DATA",
    title: "Dados como direção",
    description:
      "Python e SQL passaram a fazer parte do meu jeito de investigar problemas, organizar informação e testar ideias.",
    tags: ["Python", "SQL", "Analytics"],
    color: "violet",
  },
  {
    code: "NOW",
    title: "Aprender construindo",
    description:
      "Hoje transformo estudo em projetos: pipelines, dashboards e interfaces que registram cada novo aprendizado.",
    tags: ["Pipelines", "React", "Data Products"],
    color: "emerald",
  },
];

const colorMap = {
  cyan: "border-cyan-300/30 bg-cyan-300 text-cyan-200",
  violet: "border-violet-300/30 bg-violet-300 text-violet-200",
  emerald: "border-emerald-300/30 bg-emerald-300 text-emerald-200",
};

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
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
          <div id="about-heading">
            <SectionHeading
              eyebrow="01 / ABOUT ME"
              title="O humano por trás do dataset."
              description="Antes das ferramentas e dos gráficos, existe curiosidade. Este é o ponto de partida da minha trajetória entre dados, desenvolvimento e aprendizado contínuo."
            />
          </div>
        </motion.div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-14">
          <motion.article
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card rounded-3xl p-6 sm:p-8 lg:sticky lg:top-28"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300">
                README.md
              </span>
              <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                always learning
              </span>
            </div>

            <div className="mt-7">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/20 sm:size-20">
                  <Image
                    src="/leo.png"
                    alt="Leonardo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
                <p className="text-xl font-medium leading-8 tracking-[-0.02em] text-slate-100 sm:text-2xl">
                  Eu sou Leonardo.
                </p>
              </div>
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                Meu interesse está no ponto em que dados deixam de ser apenas
                tabelas e passam a contar uma história. Gosto de entender o
                problema, organizar o fluxo e construir uma forma clara de
                explorar o resultado.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Este portfólio é meu registro público de estudos, experimentos e
                projetos em evolução — incluindo as decisões, ferramentas e
                aprendizados de cada etapa.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/leoOliveira568"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.08] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <svg className="size-4.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-felipe-de-oliveira-b088201a7/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.08] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <svg className="size-4.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
              {[
                ["foco", "Dados + desenvolvimento"],
                ["método", "Learning by building"],
                ["idiomas", "PT nativo · EN intermediário"],
                ["status", "Portfolio in progress"],
              ].map(([term, value]) => (
                <div
                  key={term}
                  className="rounded-xl border border-white/[0.055] bg-slate-950/35 p-3"
                >
                  <dt className="font-mono text-[8px] uppercase tracking-[0.13em] text-slate-600">
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-xs text-slate-300">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.article>

          <div className="relative pl-9 sm:pl-12">
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-5 left-[14px] top-5 w-px origin-top bg-gradient-to-b from-cyan-300/50 via-violet-300/30 to-emerald-300/20 sm:left-[18px]"
            />

            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                journey.log
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
                3 checkpoints
              </p>
            </div>

            <div className="space-y-4">
              {journey.map((item, index) => (
                <motion.article
                  key={item.code}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={reduceMotion ? undefined : { x: 3 }}
                  className="group relative rounded-2xl border border-white/[0.065] bg-white/[0.018] p-5 transition-colors hover:border-cyan-300/15 hover:bg-white/[0.028] sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className={
                      "absolute -left-[31px] top-7 size-3 rounded-full border-[3px] border-[#05070b] shadow-[0_0_0_1px_rgba(148,163,184,.18)] sm:-left-[37px] " +
                      colorMap[item.color as keyof typeof colorMap].split(" ")[1]
                    }
                  />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p
                        className={
                          "font-mono text-[9px] uppercase tracking-[0.16em] " +
                          colorMap[item.color as keyof typeof colorMap].split(" ")[2]
                        }
                      >
                        {item.code}
                      </p>
                      <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] text-slate-100">
                        {item.title}
                      </h3>
                    </div>
                    {item.code === "NOW" && (
                      <span className="w-fit rounded-full border border-emerald-300/15 bg-emerald-300/[0.045] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-300">
                        current
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.06] bg-slate-950/35 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-slate-500 transition-colors group-hover:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
