import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/gv360";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function Wordmark() {
  return (
    <a
      href="#inicio"
      data-cursor="link"
      className="display text-[1.35rem] tracking-[-0.06em] text-foreground"
      aria-label="GV360 — início"
    >
      GV<span className="text-primary">360</span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
          <Wordmark />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-cursor="link"
                    className="group relative text-[0.8125rem] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="hidden items-center gap-2 text-[0.8125rem] text-foreground transition-colors duration-300 hover:text-primary sm:inline-flex"
            >
              Falar com especialista
              <span aria-hidden="true" className="text-primary">
                →
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={cn(
                  "h-px w-6 bg-foreground transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-6 bg-foreground transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[79] flex flex-col justify-between bg-background px-6 pt-28 pb-10 lg:hidden"
          >
            <nav aria-label="Navegação mobile">
              <ul>
                {NAV.map((item, i) => (
                  <li key={item.href} className="overflow-hidden border-b border-border">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.08 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="display flex items-baseline gap-4 py-5 text-[2.5rem] text-foreground"
                    >
                      <span className="text-[0.65rem] tracking-[0.2em] text-subtle">
                        0{i + 1}
                      </span>
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground"
              >
                Falar com um especialista →
              </a>
              <p className="eyebrow">Campo Mourão — Paraná — Brasil</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
