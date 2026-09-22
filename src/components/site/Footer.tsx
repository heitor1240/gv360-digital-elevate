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
  { label: "Instagram", href: "https://instagram.com/agenciagv360/" },
  { label: "LinkedIn", href: "https://linkedin.com/company/agenciagv360/" },
  { label: "Facebook", href: "https://www.facebook.com/agenciagv360/" },
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

        <div className="mt-16 border-t border-border pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <p className="text-xs text-subtle">
              © 2026 Agência GV360. Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-3 flex justify-center">
            <p className="text-[9px] text-center text-muted-foreground">
              Desenvolvido com <span className="text-primary">❤</span> por {" "}
              <span className="relative inline-block group align-middle">
                <a
                  href="https://wa.me/5547992094044?text=Ol%C3%A1%2C%20vi%20o%20seu%20trabalho%20incr%C3%ADvel%20para%20o%20Recanto%20do%20bolinho%20de%20carne%20e%20queria%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                  style={{ color: "hsl(148, 100%, 30%)" }}
                >
                  Heitor Ferreira
                </a>

                <span className="
                  pointer-events-none group-hover:pointer-events-auto
                  absolute bottom-7 left-1/2 -translate-x-1/2
                  opacity-0 scale-95 translate-y-1
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  origin-bottom
                  z-50 w-64
                ">
                  <a
                    href="https://wa.me/5547992094044?text=Ol%C3%A1%2C%20vi%20o%20seu%20trabalho%20incr%C3%ADvel%20para%20o%20Recanto%20do%20bolinho%20de%20carne%20e%20queria%20um%20or%C3%A7amento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-left text-white shadow-xl no-underline"
                  >
                    <span className="mb-1.5 flex items-center gap-2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="hsl(148,100%,45%)">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.099.537 4.07 1.485 5.793L0 24l6.347-1.462A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.003-1.363l-.36-.213-3.767.868.946-3.658-.235-.376A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                      </svg>
                      <span className="text-[10px] font-medium" style={{ color: "hsl(148,100%,45%)" }}>
                        Pedir orçamento
                      </span>
                    </span>
                    <span className="text-[10px] leading-snug text-white/65">
                      "Olá, vi o seu trabalho incrível para a Agência GV360 e queria um orçamento"
                    </span>
                  </a>

                  <span className="absolute -bottom-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-zinc-900" />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
