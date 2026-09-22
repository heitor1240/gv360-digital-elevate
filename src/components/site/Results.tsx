import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal, SectionLabel } from "./primitives";

type Stat = { prefix?: string; value: number; suffix?: string; label: string };

const STATS: Stat[] = [
  { prefix: "+", value: 300, label: "negócios impactados" },
  { value: 98, suffix: "%", label: "de clientes relatando resultados mensuráveis" },
  { value: 2022, label: "ano de fundação" },
];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(stat.value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(stat.value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, stat.value]);

  return (
    <span ref={ref} className="display block text-[3.4rem] leading-none lg:text-[6rem]">
      {stat.prefix}
      {stat.value === 2022 ? stat.value : display}
      {stat.suffix}
    </span>
  );
}

export function Results() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">
        <Reveal>
          <SectionLabel index="04">Resultados</SectionLabel>
        </Reveal>

        <dl className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i} className="border-t border-border pt-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp stat={stat} />
                <span className="mt-4 block max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
