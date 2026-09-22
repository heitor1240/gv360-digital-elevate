import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal, SectionLabel, TextReveal } from "./primitives";

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Entendemos onde sua empresa está e onde existem oportunidades." },
  { n: "02", title: "Estratégia", text: "Criamos um plano direcionado aos objetivos do negócio." },
  { n: "03", title: "Execução", text: "Design, tecnologia, SEO e marketing trabalhando juntos." },
  { n: "04", title: "Evolução", text: "Analisamos dados e refinamos continuamente." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const scaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
      <Reveal>
        <SectionLabel index="03">Como funciona</SectionLabel>
      </Reveal>

      <h2 className="display mt-12 max-w-3xl text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]">
        <TextReveal lines={["Um processo contínuo,", "não um projeto pontual."]} />
      </h2>

      <div ref={ref} className="relative mt-20 lg:mt-32">
        <div className="absolute top-0 left-[7px] h-full w-px bg-border lg:top-[7px] lg:left-0 lg:h-px lg:w-full">
          <motion.div
            className="h-full w-full origin-left bg-primary"
            style={{ scaleX, scaleY: 1 }}
          />
        </div>

        <ol className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i} className="relative pl-10 lg:pt-12 lg:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border border-border-strong bg-background lg:top-0 lg:left-0"
              >
                <span className="absolute inset-[4px] rounded-full bg-primary" />
              </span>
              <span className="eyebrow text-primary">{s.n}</span>
              <h3 className="display mt-4 text-[1.6rem] lg:text-[2rem]">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
