import { Reveal, SectionLabel, TextReveal } from "./primitives";

const NODES = ["SEO", "GOOGLE", "SITE", "CONTEÚDO", "DESIGN", "CONVERSÃO", "DADOS", "CRESCIMENTO"];

export function GV360Method() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:px-14 lg:py-40">
        <Reveal>
          <SectionLabel index="07">O Método GV360</SectionLabel>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="display text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem]">
              <TextReveal lines={["Um ciclo,", "não uma lista", "de serviços."]} />
            </h2>
            <Reveal>
              <p className="mt-8 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                Cada frente alimenta a seguinte. O que aprendemos com os dados volta para a
                estratégia — e o ciclo recomeça mais preciso.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <ol className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
                {NODES.map((node, i) => (
                  <li key={node} className="flex items-baseline gap-3 text-sm text-muted-foreground">
                    <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {node}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0 spin-slow">
                <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="rgba(15, 23, 42, 0.12)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="rgba(13, 94, 247, 0.6)"
                    strokeWidth="1"
                    strokeDasharray="34 970"
                  />
                  {NODES.map((node, i) => {
                    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 200 + Math.cos(angle) * 160;
                    const y = 200 + Math.sin(angle) * 160;
                    return (
                      <g key={node}>
                        <line
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="rgba(15, 23, 42, 0.08)"
                          strokeWidth="0.6"
                        />
                        <circle cx={x} cy={y} r="3" fill="var(--brand-blue)" />
                      </g>
                    );
                  })}
                </svg>
              </div>

              <ul className="absolute inset-0">
                {NODES.map((node, i) => {
                  const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <li
                      key={node}
                      className="eyebrow absolute text-[0.5625rem] whitespace-nowrap text-muted-foreground sm:text-[0.625rem]"
                      style={{
                        left: `${50 + Math.cos(angle) * 46}%`,
                        top: `${50 + Math.sin(angle) * 46}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {node}
                    </li>
                  );
                })}
              </ul>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="display block text-[1.6rem] sm:text-[2rem]">
                    GV<span className="text-primary">360</span>
                  </span>
                  <span className="eyebrow mt-2 block">Sistema integrado</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
