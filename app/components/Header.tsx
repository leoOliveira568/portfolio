"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#certificados", label: "Certificados" },
  { href: "#skills", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#071019]/75 px-4 shadow-[0_16px_50px_-28px_rgba(0,0,0,.9)] backdrop-blur-xl sm:px-5">
        <a
          href="#inicio"
          className="group flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Leonardo — início"
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-[11px] font-semibold text-cyan-200">
            L
            <span className="absolute inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight text-slate-100">Leonardo</span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500 transition-colors group-hover:text-cyan-300">
              Personal / Portfolio
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  isActive ? "text-cyan-200" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-[11px] h-px bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]"
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden min-h-11 items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 xl:flex"
          >
            contato()
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 xl:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação móvel"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
            className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-white/10 bg-[#071019]/95 p-3 shadow-2xl backdrop-blur-xl xl:hidden"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-xl px-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-300 transition hover:bg-white/[0.04] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-slate-600">0{index + 1}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
