import { Link } from "@tanstack/react-router";
import { Reveal } from "./primitives";

const COLUMNS = [
  {
    title: "Navegação",
    links: [
      { label: "Empresa", href: "#sobre" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Projetos", href: "#projetos" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <span className="display text-[1.6rem] tracking-[-0.06em]">
              GV<span className="text-primary">360</span>
            </span>
            <p className="display mt-6 max-w-sm text-[1.4rem] leading-[1.1] text-muted-foreground lg:text-[1.8rem]">
              Transformando negócios.
              <br />
              Potencializando resultados.
            </p>
          </Reveal>

          {COLUMNS.map((col) => (
            <Reveal key={col.title} className="lg:col-span-2 lg:col-start-8">
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      data-cursor="link"
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Social</p>
            <ul className="mt-5 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/privacidade"
                  data-cursor="link"
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  data-cursor="link"
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Termos
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">Campo Mourão — Paraná — Brasil</p>
          <p className="text-xs text-subtle">
            © 2026 Agência GV360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
