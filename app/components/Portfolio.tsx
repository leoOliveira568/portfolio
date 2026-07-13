import { AboutSection } from "./AboutSection";
import { CertificatesSection } from "./CertificatesSection";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ParticleNetwork } from "./ParticleNetwork";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { SystemFlow } from "./SystemFlow";

export function Portfolio() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-200 px-4 py-2 font-mono text-xs font-semibold text-slate-950 transition focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <div className="fixed inset-0 -z-30 bg-[#05070b]" />
      <ParticleNetwork />
      <div aria-hidden="true" className="data-ambient fixed inset-0 -z-20" />
      <div aria-hidden="true" className="data-grid fixed inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-[#05070b] via-[#05070b]/75 to-transparent"
      />

      <Header />

      <main id="conteudo">
        <Hero />
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[min(80vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
          />
          <AboutSection />
          <SystemFlow />
          <ProjectsSection />
          <CertificatesSection />
          <SkillsSection />
        </div>
      </main>

      <footer className="border-t border-white/[0.07] bg-[#05090e]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] font-mono text-[10px] text-cyan-200">
              L
            </span>
            <div>
              <p className="text-sm font-medium text-slate-300">
                Leonardo
              </p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-700">
                dados · código · aprendizado
              </p>
            </div>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600"
          >
            <a href="#inicio" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              início
            </a>
            <a href="#sobre" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              sobre
            </a>
            <a href="#projetos" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              projetos
            </a>
            <a href="#certificados" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              certificados
            </a>
            <a href="#skills" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              stack
            </a>
          </nav>

          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
            © {new Date().getFullYear()} · React, dados e curiosidade
          </p>
        </div>
      </footer>
    </>
  );
}
