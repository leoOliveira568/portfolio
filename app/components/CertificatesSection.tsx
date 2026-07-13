"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certificates, type Certificate } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const reduceMotion = useReducedMotion();
  const initials = certificate.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.075] bg-slate-950/35 p-5 transition-colors hover:border-violet-300/20 hover:bg-slate-900/55"
    >
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-violet-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-xl border border-violet-300/15 bg-violet-300/[0.05] font-mono text-[10px] text-violet-200">
          {initials}
        </span>
        <span className="rounded-full border border-emerald-300/12 bg-emerald-300/[0.04] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-300">
          {certificate.status === "completed" ? "concluído" : "em andamento"}
        </span>
      </div>

      <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
        {certificate.id}
      </p>
      <h3 className="mt-2 text-lg font-medium leading-7 text-slate-100">
        {certificate.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500">
        {certificate.issuer} · {certificate.issuedAt}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {certificate.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.09em] text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {certificate.credentialId && (
        <p className="mt-5 break-all border-t border-white/[0.06] pt-4 font-mono text-[8px] leading-5 text-slate-600">
          credential_id: {certificate.credentialId}
        </p>
      )}

      {certificate.credentialUrl && (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex min-h-11 items-end pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-cyan-300 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Ver credencial <span aria-hidden="true">↗</span>
        </a>
      )}
    </motion.article>
  );
}

export function CertificatesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certificados"
      aria-labelledby="certificates-heading"
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
          <div id="certificates-heading">
            <SectionHeading
              eyebrow="03 / LEARNING LOG"
              title="Aprendizado em modo contínuo."
              description="Este registro reúne cursos e certificações que fazem parte da minha formação — sempre com emissor, data e credencial real quando disponível."
            />
          </div>
        </motion.div>

        {certificates.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.07 },
              },
            }}
            className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="glass-card mt-14 overflow-hidden rounded-3xl"
          >
            <div className="flex min-h-14 items-center justify-between border-b border-white/[0.07] px-5 sm:px-7">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
                credentials.query()
              </span>
              <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-600">
                <span className="size-1.5 rounded-full bg-amber-300" />
                registry updating
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="font-mono text-xs leading-7 text-slate-500">
                  <span className="text-violet-300">SELECT</span> name, issuer,
                  issued_at
                  <br />
                  <span className="text-violet-300">FROM</span>{" "}
                  learning_credentials
                  <br />
                  <span className="text-violet-300">ORDER BY</span> issued_at
                  DESC;
                </p>

                <div className="mt-7 rounded-2xl border border-white/[0.06] bg-slate-950/45 p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-amber-200">
                    0 records synced
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                    Meu registro de certificados está sendo organizado. As
                    credenciais reais aparecerão aqui com instituição, data e
                    link de verificação — sem selos ou IDs fictícios.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                  current learning tracks
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    ["01", "Engenharia de Dados"],
                    ["02", "SQL & Modelagem"],
                    ["03", "Cloud & Pipelines"],
                  ].map(([index, label]) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.018] p-4"
                    >
                      <span className="font-mono text-[8px] text-cyan-300">
                        {index}
                      </span>
                      <span className="text-sm text-slate-300">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
