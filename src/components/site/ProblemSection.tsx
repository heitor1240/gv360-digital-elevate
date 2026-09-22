import { Reveal, SectionLabel, TextReveal } from "./primitives";

const POINTS = [
  { n: "01", title: "Baixa visibilidade", text: "A empresa existe, mas não aparece onde a decisão acontece." },
  { n: "02", title: "Presença digital inconsistente", text: "Canais desconectados que enfraquecem a percepção da marca." },
  { n: "03", title: "Pouca autoridade", text: "Sem provas, referências e conteúdo, a confiança não se forma." },
  { n: "04", title: "Tráfego sem conversão", text: "Visitas que chegam, olham e vão embora sem virar oportunidade." },
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
      <Reveal>
        <SectionLabel index="01">O problema</SectionLabel>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 className="display text-[2.1rem] sm:text-[3rem] lg:text-[3.9rem]">
            <TextReveal lines={["Ser bom não basta", "se ninguém encontra você."]} />
          </h2>
        </div>
        <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-4">
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
            Milhares de empresas possuem bons produtos e serviços, mas continuam invisíveis para
            as pessoas que realmente poderiam comprar delas.
          </p>
        </Reveal>
      </div>

      <ul className="mt-20 lg:mt-28">
        {POINTS.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i} className="group border-t border-border last:border-b">
            <div className="grid grid-cols-1 gap-3 py-8 transition-[padding] duration-500 group-hover:lg:pl-6 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-10">
              <span className="eyebrow lg:col-span-1 group-hover:text-primary">{p.n}</span>
              <h3 className="display text-[1.6rem] lg:col-span-6 lg:text-[2.2rem]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-subtle lg:col-span-5 lg:text-right">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
