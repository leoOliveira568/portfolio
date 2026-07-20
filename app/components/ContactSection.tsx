"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const EMAIL = "leonardofelipe422@gmail.com";
const GITHUB = "https://github.com/leoOliveira568";
const LINKEDIN =
  "https://www.linkedin.com/in/leonardo-felipe-de-oliveira-b088201a7/";
const WHATSAPP = "https://wa.me/5564984050580";
const CV_PATH = "/cv-leonardo-felipe-de-oliveira.pdf";

const channels = [
  {
    label: "E-mail",
    value: EMAIL,
    href: "mailto:" + EMAIL,
    external: false,
    icon: (
      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "(64) 98405-0580",
    href: WHATSAPP,
    external: true,
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/leonardo-felipe-de-oliveira",
    href: LINKEDIN,
    external: true,
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "leoOliveira568",
    href: GITHUB,
    external: true,
    icon: (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
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
          <div id="contact-heading">
            <SectionHeading
              eyebrow="07 / CONTACT"
              title="Vamos conversar sobre dados."
              description="Estou aberto a oportunidades, projetos e trocas na área de dados e desenvolvimento. O caminho mais rápido até mim está aqui."
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
          className="glass-card mt-14 grid gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-10"
        >
          {/* ── Left: status + CTA ── */}
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              disponível para oportunidades
            </span>

            <p className="mt-6 text-xl font-medium leading-8 tracking-[-0.02em] text-slate-100 sm:text-2xl">
              Estágio, projetos ou uma boa conversa sobre dados?
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Respondo pessoalmente cada mensagem. Se preferir, baixe meu
              currículo para ter o panorama completo da minha trajetória.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={"mailto:" + EMAIL}
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-cyan-300 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_30px_-12px_rgba(34,211,238,.85)] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              >
                Enviar e-mail
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={CV_PATH}
                download
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/[0.12] bg-white/[0.035] px-5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-200 transition hover:border-cyan-300/25 hover:bg-white/[0.055] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              >
                <svg className="size-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                  <path d="M5 21h14" />
                </svg>
                Baixar CV
              </a>
            </div>
          </div>

          {/* ── Right: channels ── */}
          <div className="lg:border-l lg:border-white/[0.07] lg:pl-12">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                contact.channels
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
                {channels.length} canais
              </span>
            </div>

            <div className="grid gap-2.5">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-slate-950/35 p-4 transition-colors hover:border-cyan-300/20 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-colors group-hover:text-cyan-200">
                    {channel.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-slate-300 transition-colors group-hover:text-slate-100">
                      {channel.value}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
