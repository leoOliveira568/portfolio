"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { TerminalPanel } from "./TerminalPanel";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen scroll-mt-24 items-center pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:px-10 xl:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.085,
            delayChildren: 0.06,
          }}
          className="relative z-10"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.045] py-1.5 pl-1.5 pr-4 font-mono text-[9px] tracking-[0.08em] text-cyan-200 sm:text-[10px]"
          >
            <div className="relative size-6 overflow-hidden rounded-full border border-cyan-300/30 sm:size-7">
              <Image
                src="/leo.png"
                alt="Leonardo"
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-600">&gt;</span>
              <span>
                profile.load(
                <span className="text-emerald-300">
                  &quot;Leonardo&quot;
                </span>
                )
              </span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={reveal}
            transition={{
              duration: 0.68,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl text-balance text-[clamp(2.75rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-slate-50"
          >
            Resolvendo problemas com{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
              dados e código.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.62 }}
            className="mt-7 max-w-xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            Sou desenvolvedor web e analista de dados. Este portfólio é meu laboratório: o lugar onde guardo meus projetos, testes e tudo o que aprendo no dia a dia.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.55 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#sobre"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-300 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_30px_-12px_rgba(34,211,238,.85)] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Conhecer minha história
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
            <a
              href="#projetos"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.035] px-5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-200 transition hover:border-emerald-300/25 hover:bg-white/[0.055] hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Ver projetos
              <span
                className="text-emerald-300 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-35 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              portfólio em evolução contínua
            </div>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600 sm:text-[10px]">
              learning by building
            </span>
          </motion.div>
        </motion.div>

        <TerminalPanel />
      </div>

      <motion.a
        href="#sobre"
        aria-label="Ir para a seção sobre mim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.15 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:flex"
      >
        scroll to inspect
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-7 w-px bg-gradient-to-b from-cyan-300/70 to-transparent"
        />
      </motion.a>
    </section>
  );
}
