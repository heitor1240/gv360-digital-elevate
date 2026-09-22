const WORDS = [
  "STRATEGY",
  "DESIGN",
  "TECHNOLOGY",
  "SEO",
  "PERFORMANCE",
  "GROWTH",
];

export function Marquee() {
  const sequence = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((word) => (
        <span key={word} className="flex items-center">
          <span className="display px-6 text-[2.25rem] whitespace-nowrap text-foreground/85 sm:px-9 sm:text-[3.5rem] lg:text-[4.75rem]">
            {word}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Áreas de atuação da GV360"
      className="overflow-hidden border-y border-border py-8 sm:py-10"
    >
      <div className="flex w-max marquee-track" aria-hidden="true">
        {sequence}
        {sequence}
      </div>
      <span className="sr-only">
        Estratégia, design, tecnologia, SEO, performance e crescimento.
      </span>
    </section>
  );
}
