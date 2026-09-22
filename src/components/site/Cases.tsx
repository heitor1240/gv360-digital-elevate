import { Reveal, SectionLabel, TextReveal } from "./primitives";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/gv360";
import tuia from "@/assets/case-tuia.jpg";
import noxamag from "@/assets/case-noxamag.jpg";
import gabriella from "@/assets/case-gabriella.jpg";
import luza from "@/assets/case-luza.jpg";

type CaseItem = {
  name: string;
  segment: string;
  service: string;
  outcome: string;
  image: string;
  alt: string;
  w: number;
  h: number;
  span: string;
  offset?: string;
};

const CASES: CaseItem[] = [
  {
    name: "Tuia Agrícola",
    segment: "Agronegócio",
    service: "Website + SEO + posicionamento digital",
    outcome: "Presença sólida para um mercado que pesquisa antes de negociar.",
    image: tuia,
    alt: "Lavoura ao amanhecer representando o projeto da Tuia Agrícola",
    w: 1200,
    h: 1504,
    span: "lg:col-span-6",
  },
  {
    name: "NoxaMag",
    segment: "Conteúdo / negócios",
    service: "Plataforma + experiência digital",
    outcome: "Publicação organizada para leitura, retenção e crescimento orgânico.",
    image: noxamag,
    alt: "Estação de trabalho escura representando a plataforma editorial NoxaMag",
    w: 1200,
    h: 912,
    span: "lg:col-span-5 lg:col-start-8",
    offset: "lg:mt-40",
  },
  {
    name: "Gabriella Decorações",
    segment: "Decoração",
    service: "Landing page + conversão",
    outcome: "Uma página construída para transformar interesse em contato.",
    image: gabriella,
    alt: "Ambiente decorado com iluminação quente representando o projeto Gabriella Decorações",
    w: 1200,
    h: 1504,
    span: "lg:col-span-5 lg:col-start-2",
  },
  {
    name: "Luzá",
    segment: "Beleza",
    service: "Website + experiência de marca",
    outcome: "Identidade digital à altura do posicionamento da marca.",
    image: luza,
    alt: "Frasco de cosmético sobre pedra escura representando o projeto Luzá",
    w: 1200,
    h: 912,
    span: "lg:col-span-5 lg:col-start-8",
    offset: "lg:mt-24",
  },
];

function CaseCard({ item, index }: { item: CaseItem; index: number }) {
  return (
    <Reveal className={cn(item.span, item.offset)}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="media"
        className="group block"
        aria-label={`Ver projeto ${item.name}`}
      >
        <div className="relative overflow-hidden bg-elevated">
          <img
            src={item.image}
            alt={item.alt}
            width={item.w}
            height={item.h}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 md:p-8">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {item.outcome}
            </p>
          </div>
          <span className="absolute top-5 left-5 eyebrow text-primary">
            0{index + 1}
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-5">
          <div>
            <h3 className="display text-[1.5rem] lg:text-[1.9rem]">{item.name}</h3>
            <p className="mt-2 text-[0.8125rem] text-subtle">
              {item.segment} — {item.service}
            </p>
          </div>
          <span className="shrink-0 pt-2 text-[0.8125rem] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
            Ver projeto <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Cases() {
  return (
    <section id="projetos" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
        <Reveal>
          <SectionLabel index="05">Projetos</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <h2 className="display text-[2.1rem] sm:text-[3rem] lg:col-span-8 lg:text-[3.9rem]">
            <TextReveal lines={["Projetos que existem", "para gerar impacto."]} />
          </h2>
          <Reveal className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Marcas de segmentos distintos, com o mesmo ponto de partida: clareza de
              posicionamento.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {CASES.map((item, i) => (
            <CaseCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
