"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { certificates, type Certificate } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const trackIcons: Record<string, string> = {
  "Engenharia de Dados": "⚙",
  "SQL & Modelagem": "⬡",
  "Cloud & Pipelines": "☁",
};

const trackGradients: Record<string, string> = {
  "Engenharia de Dados":
    "from-cyan-400/10 to-cyan-400/[0.02] border-cyan-300/15 hover:border-cyan-300/30",
  "SQL & Modelagem":
    "from-emerald-400/10 to-emerald-400/[0.02] border-emerald-300/15 hover:border-emerald-300/30",
  "Cloud & Pipelines":
    "from-violet-400/10 to-violet-400/[0.02] border-violet-300/15 hover:border-violet-300/30",
};

const trackAccentText: Record<string, string> = {
  "Engenharia de Dados": "text-cyan-300",
  "SQL & Modelagem": "text-emerald-300",
  "Cloud & Pipelines": "text-violet-300",
};

const trackProgress: Record<string, number> = {
  "Engenharia de Dados": 65,
  "SQL & Modelagem": 55,
  "Cloud & Pipelines": 40,
};

const trackBarColor: Record<string, string> = {
  "Engenharia de Dados": "from-cyan-400 to-cyan-300",
  "SQL & Modelagem": "from-emerald-400 to-emerald-300",
  "Cloud & Pipelines": "from-violet-400 to-violet-300",
};

/* ─────────── Image Lightbox ─────────── */
function CertificateLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[85vh] max-w-4xl w-full overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={850}
          unoptimized
          className="h-auto w-full object-contain"
        />
        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/60 text-white/80 transition hover:bg-black/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Fechar"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── Certificate Card (when certificates exist) ─────────── */
function CertificateCard({ certificate }: { certificate: Certificate }) {
  const reduceMotion = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const initials = certificate.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <>
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="shimmer-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.075] bg-slate-950/35 transition-colors hover:bg-slate-900/55"
      >
        {/* ── Certificate image ── */}
        {certificate.image && (
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="relative aspect-[16/11] w-full overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
            aria-label={`Ver certificado ${certificate.title} em tamanho completo`}
          >
            <Image
              src={certificate.image}
              alt={`Certificado: ${certificate.title}`}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-lg bg-black/50 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span>🔍</span> ampliar
            </div>
          </button>
        )}

        <div className="flex flex-1 flex-col p-5">
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
        </div>
      </motion.article>

      {/* ── Lightbox portal ── */}
      <AnimatePresence>
        {lightboxOpen && certificate.image && (
          <CertificateLightbox
            src={certificate.image}
            alt={`Certificado: ${certificate.title}`}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────── Empty State ─────────── */
function EmptyCredentials() {
  const reduceMotion = useReducedMotion();
  const tracks = [
    ["01", "Engenharia de Dados"],
    ["02", "SQL & Modelagem"],
    ["03", "Cloud & Pipelines"],
  ] as const;

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.65,
        delay: reduceMotion ? 0 : 0.1,
      }}
      className="mt-14"
    >
      {/* ── Scanner card ── */}
      <div className="scan-line relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-slate-950/50 backdrop-blur-xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-300 opacity-30 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-violet-300" />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
              credentials.sync()
            </span>
          </div>
          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-600">
            <span className="size-1.5 rounded-full bg-amber-300" />
            syncing registry
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side – message */}
          <div className="border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            {/* Terminal-style code block */}
            <div className="rounded-xl border border-white/[0.06] bg-[#080d14] p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-400/50" />
                <span className="size-2.5 rounded-full bg-amber-400/50" />
                <span className="size-2.5 rounded-full bg-emerald-400/50" />
                <span className="ml-2 font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
                  query.sql
                </span>
              </div>
              <p className="font-mono text-xs leading-7 text-slate-500">
                <span className="text-violet-300">SELECT</span> name, issuer,
                issued_at
                <br />
                <span className="text-violet-300">FROM</span>{" "}
                learning_credentials
                <br />
                <span className="text-violet-300">ORDER BY</span> issued_at DESC;
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="font-mono text-[9px] text-amber-200">
                  → 0 records synced
                </span>
                <span className="inline-block h-3.5 w-px animate-pulse bg-cyan-300/60" />
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Meu registro de certificados está sendo organizado. As credenciais
              reais aparecerão aqui com instituição, data e link de verificação
              — sem selos ou IDs fictícios.
            </p>
          </div>

          {/* Right side – learning tracks */}
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
              current learning tracks
            </p>

            <div className="mt-5 grid gap-3">
              {tracks.map(([index, label], i) => (
                <motion.div
                  key={label}
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, x: 12 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.45,
                    delay: reduceMotion ? 0 : 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    "group/track relative overflow-hidden rounded-xl border bg-gradient-to-r p-4 transition-colors " +
                    (trackGradients[label] ?? "border-white/[0.06]")
                  }
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={
                        "text-lg " + (trackAccentText[label] ?? "text-cyan-300")
                      }
                    >
                      {trackIcons[label] ?? "◆"}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">
                          {label}
                        </span>
                        <span
                          className={
                            "font-mono text-[9px] tabular-nums " +
                            (trackAccentText[label] ?? "text-cyan-300")
                          }
                        >
                          {trackProgress[label] ?? 0}%
                        </span>
                      </div>
                      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-slate-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: (trackProgress[label] ?? 0) + "%",
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.9,
                            delay: reduceMotion ? 0 : 0.3 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={
                            "h-full rounded-full bg-gradient-to-r shadow-[0_0_12px_currentColor] " +
                            (trackBarColor[label] ?? "from-cyan-400 to-cyan-300")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 pl-8 font-mono text-[7px] uppercase tracking-[0.1em] text-slate-600">
                    {index} · em andamento
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── Section ─────────── */
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
          <EmptyCredentials />
        )}
      </div>
    </section>
  );
}
