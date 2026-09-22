import { Reveal, TextReveal } from "./primitives";
import { MagneticLink } from "./MagneticLink";
import { WHATSAPP_DIAGNOSTIC_URL, WHATSAPP_URL } from "@/lib/gv360";

export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute -bottom-52 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.88_0.22_128/0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-10 lg:px-14 lg:py-48">
        <h2 className="display text-[2.4rem] leading-[0.96] sm:text-[3.8rem] lg:text-[6.5rem]">
          <TextReveal lines={["Vamos transformar", "sua presença digital?"]} />
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
              Conte para a GV360 onde sua empresa está hoje. Nós mostramos onde ela pode chegar.
            </p>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
              <MagneticLink href={WHATSAPP_URL} external className="justify-center px-9 py-5">
                Falar com a GV360 <span aria-hidden="true">→</span>
              </MagneticLink>
              <MagneticLink
                href={WHATSAPP_DIAGNOSTIC_URL}
                external
                variant="ghost"
                className="justify-center px-9 py-5"
              >
                Agendar diagnóstico
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
