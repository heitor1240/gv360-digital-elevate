import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./primitives";

/**
 * Depoimentos: conteúdo editável.
 * TODO: substituir nome, empresa e segmento pelos depoimentos reais da GV360.
 */
const TESTIMONIALS = [
  {
    quote:
      "Depois de trabalhar nosso posicionamento digital, conseguimos apresentar nossa empresa de uma forma completamente diferente.",
    name: "Nome do cliente",
    company: "Empresa",
    segment: "Segmento",
  },
  {
    quote:
      "Depoimento a ser cadastrado. Este espaço está reservado para a avaliação real de um cliente da GV360.",
    name: "Nome do cliente",
    company: "Empresa",
    segment: "Segmento",
  },
  {
    quote:
      "Depoimento a ser cadastrado. Este espaço está reservado para a avaliação real de um cliente da GV360.",
    name: "Nome do cliente",
    company: "Empresa",
    segment: "Segmento",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = TESTIMONIALS[index];

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
        <Reveal>
          <SectionLabel index="08">Depoimentos</SectionLabel>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="display max-w-5xl text-[1.65rem] leading-[1.15] sm:text-[2.4rem] lg:text-[3.1rem]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="text-foreground">{item.name}</span>
                  <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
                  <span>{item.company}</span>
                  <span className="text-subtle">· {item.segment}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-end gap-6 lg:col-span-2 lg:col-start-11 lg:justify-end">
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() =>
                  setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
