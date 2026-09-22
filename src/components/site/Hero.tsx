import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { TextReveal } from "./primitives";
import { MagneticLink } from "./MagneticLink";
import { WHATSAPP_URL } from "@/lib/gv360";

const TAGS = ["ESTRATÉGIA DIGITAL", "SEO", "WEB", "GOOGLE", "CONVERSÃO"];

/** Objeto visual: esfera de linhas + grade digital, puramente CSS/SVG (leve). */
function HeroObject() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useSpring(0, { stiffness: 80, damping: 20 });
  const py = useSpring(0, { stiffness: 80, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 26);
    py.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 26);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative aspect-square w-full"
      aria-hidden="true"
    >
      <motion.div style={{ x: px, y: py }} className="absolute inset-0 float-slow">
        <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_35%_30%,oklch(0.88_0.22_128/0.14),transparent_62%)] blur-2xl" />
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="gvLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.88 0.22 128)" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#gvLine)" strokeWidth="0.6">
            <circle cx="200" cy="200" r="150" />
            <circle cx="200" cy="200" r="118" />
            <circle cx="200" cy="200" r="78" strokeOpacity="0.5" />
            {Array.from({ length: 11 }).map((_, i) => (
              <ellipse
                key={`e${i}`}
                cx="200"
                cy="200"
                rx={150 - i * 13.6}
                ry="150"
                strokeOpacity={0.45}
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <ellipse
                key={`h${i}`}
                cx="200"
                cy="200"
                rx="150"
                ry={150 - Math.abs(i - 4) * 33}
                strokeOpacity={0.28}
              />
            ))}
          </g>
          <g className="spin-slow" style={{ transformOrigin: "200px 200px" }}>
            <circle cx="350" cy="200" r="2.6" fill="oklch(0.88 0.22 128)" />
            <circle cx="50" cy="200" r="1.8" fill="#ffffff" fillOpacity="0.5" />
          </g>
        </svg>
      </motion.div>

      <div className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-32 pb-12 lg:pb-16"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.88_0.22_128/0.07),transparent_70%)]" />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-14"
      >
        <div className="lg:col-span-7 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="eyebrow">Agência GV360 — desde 2022</span>
          </motion.div>

          <h1 className="display text-[2.65rem] leading-[0.98] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[4.5rem] xl:text-[5.6rem]">
            <TextReveal
              lines={[
                "Sua empresa não precisa",
                "apenas estar online.",
                <span key="k" className="text-muted-foreground">
                  Ela precisa ser{" "}
                  <em className="text-foreground not-italic underline decoration-primary decoration-1 underline-offset-[0.14em]">
                    encontrada
                  </em>
                  .
                </span>,
              ]}
              delay={0.15}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base"
          >
            Estratégia, tecnologia e posicionamento para transformar presença digital em
            oportunidades reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
          >
            <MagneticLink href={WHATSAPP_URL} external className="justify-center">
              Falar com um especialista <span aria-hidden="true">→</span>
            </MagneticLink>
            <MagneticLink href="#projetos" variant="ghost" className="justify-center">
              Explorar projetos <span aria-hidden="true">↓</span>
            </MagneticLink>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5 xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-[78%] sm:w-[62%] lg:w-full"
          >
            <HeroObject />
          </motion.div>
        </div>

        <ul className="col-span-full flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 lg:gap-x-14">
          {TAGS.map((tag, i) => (
            <motion.li
              key={tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.08 }}
              className="eyebrow"
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
