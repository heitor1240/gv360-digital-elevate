import { createFileRoute } from "@tanstack/react-router";

import { Cursor } from "@/components/site/Cursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProblemSection } from "@/components/site/ProblemSection";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Cases } from "@/components/site/Cases";
import { Results } from "@/components/site/Results";
import { About } from "@/components/site/About";
import { GV360Method } from "@/components/site/GV360Method";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const TITLE = "Agência GV360 | Marketing Digital, SEO e Presença Online";
const DESCRIPTION =
  "A Agência GV360 ajuda empresas a crescerem no digital através de SEO, sites, Google, redes sociais, design e estratégias digitais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Agência GV360",
          description: DESCRIPTION,
          foundingDate: "2022",
          areaServed: "BR",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Campo Mourão",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          knowsAbout: [
            "SEO",
            "SEO Local",
            "Desenvolvimento de sites",
            "Google Meu Negócio",
            "Redes sociais",
            "Design e identidade visual",
            "Estratégia digital",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProblemSection />
        <Services />
        <Process />
        <Results />
        <Cases />
        <About />
        <GV360Method />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
