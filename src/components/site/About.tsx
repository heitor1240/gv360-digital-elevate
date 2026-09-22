import { Reveal, SectionLabel, TextReveal } from "./primitives";

const PILLARS = [
  { title: "Missão", text: "Tornar empresas mais visíveis, mais desejadas e mais competitivas no digital." },
  { title: "Visão", text: "Ser a referência em posicionamento digital para negócios que querem crescer com consistência." },
  { title: "Valores", text: "Clareza, responsabilidade sobre resultado, cuidado com a marca do cliente e melhoria contínua." },
  { title: "Localização", text: "Campo Mourão — Paraná — Brasil. Atendimento remoto para todo o país." },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
        <Reveal>
          <SectionLabel index="06">Sobre a GV360</SectionLabel>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <h2 className="display text-[2.1rem] sm:text-[3rem] lg:col-span-7 lg:text-[3.9rem]">
            <TextReveal
              lines={[
                "Marketing não é",
                "sobre aparecer.",
                <span key="b" className="text-muted-foreground">
                  É sobre ser lembrado.
                </span>,
              ]}
            />
          </h2>

          <div className="space-y-6 lg:col-span-4 lg:col-start-9 lg:pt-3">
            <Reveal>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                A Agência GV360 nasceu com uma missão simples: transformar negócios em marcas
                mais fortes, mais visíveis e mais competitivas no ambiente digital.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Acreditamos que estratégia, tecnologia, design e posicionamento precisam
                trabalhar juntos. Desde 2022, é assim que conduzimos cada projeto.
              </p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-24 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i} className="border-t border-border pt-7">
              <dt className="display text-[1.35rem]">{p.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-subtle">{p.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
