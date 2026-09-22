import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel, TextReveal } from "./primitives";

const SERVICES = [
  {
    n: "01",
    title: "SEO & SEO Local",
    text: "Faça sua empresa aparecer quando seus clientes estiverem procurando.",
    meta: "Pesquisa · Conteúdo · Autoridade",
  },
  {
    n: "02",
    title: "Sites & Experiências Digitais",
    text: "Sites rápidos, estratégicos e construídos para transformar visitas em oportunidades.",
    meta: "UX · Desenvolvimento · Performance",
  },
  {
    n: "03",
    title: "Google",
    text: "Posicionamento estratégico no Google e Google Maps.",
    meta: "Perfil da empresa · Mapas · Anúncios",
  },
  {
    n: "04",
    title: "Redes Sociais",
    text: "Conteúdo e posicionamento para fortalecer sua marca.",
    meta: "Direção · Conteúdo · Consistência",
  },
  {
    n: "05",
    title: "Design & Identidade",
    text: "Uma presença visual que comunica o valor do seu negócio.",
    meta: "Marca · Sistema visual · Aplicações",
  },
  {
    n: "06",
    title: "Estratégia Digital",
    text: "Dados, tecnologia e estratégia trabalhando juntos.",
    meta: "Diagnóstico · Plano · Medição",
  },
];

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="solucoes" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
        <Reveal>
          <SectionLabel index="02">Soluções</SectionLabel>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="display text-[2.1rem] sm:text-[3rem] lg:col-span-8 lg:text-[3.9rem]">
            <TextReveal lines={["Um ecossistema digital", "pensado para crescimento."]} />
          </h2>
          <Reveal className="lg:col-span-3 lg:col-start-10 lg:pt-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Seis frentes que operam como um sistema único — não como serviços avulsos.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 lg:mt-28" onMouseLeave={() => setActive(null)}>
          {SERVICES.map((s) => {
            const isActive = active === s.n;
            const dimmed = active !== null && !isActive;
            return (
              <Reveal as="li" key={s.n} className="border-t border-border last:border-b">
                <motion.div
                  data-cursor="link"
                  tabIndex={0}
                  onMouseEnter={() => setActive(s.n)}
                  onFocus={() => setActive(s.n)}
                  onBlur={() => setActive(null)}
                  animate={{ opacity: dimmed ? 0.34 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden py-9 lg:py-11"
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-px bg-primary"
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    animate={{ x: isActive ? 24 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-12 lg:items-baseline"
                  >
                    <motion.span
                      animate={{ color: isActive ? "var(--brand-blue)" : "#64748b" }}
                      className="eyebrow lg:col-span-1"
                    >
                      {s.n}
                    </motion.span>
                    <h3 className="display text-[1.75rem] lg:col-span-6 lg:text-[2.6rem]">
                      {s.title}
                    </h3>
                    <div className="lg:col-span-5">
                      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:ml-auto lg:text-right">
                        {s.text}
                      </p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="eyebrow overflow-hidden lg:text-right"
                          >
                            <span className="mt-4 block text-primary">{s.meta}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
