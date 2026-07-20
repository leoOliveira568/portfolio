import { AboutSection } from "./AboutSection";
import { CertificatesSection } from "./CertificatesSection";
import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
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
          <ExperienceSection />
          <EducationSection />
          <CertificatesSection />
          <SkillsSection />
          <ContactSection />
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

          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav
              aria-label="Links do rodapé"
              className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600"
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
              <a href="#experiencia" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                experiência
              </a>
              <a href="#formacao" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                formação
              </a>
              <a href="#certificados" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                certificados
              </a>
              <a href="#skills" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                stack
              </a>
              <a href="#contato" className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                contato
              </a>
            </nav>

            <div className="flex items-center gap-4 text-slate-500">
              <a 
                href="https://github.com/leoOliveira568" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/leonardo-felipe-de-oliveira-b088201a7/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn" 
                className="transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-slate-700">
            © {new Date().getFullYear()} · React, dados e curiosidade
          </p>
        </div>
      </footer>
    </>
  );
}
