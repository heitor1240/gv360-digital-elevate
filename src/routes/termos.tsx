import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Termos de Uso | Agência GV360";
const DESCRIPTION =
  "Condições de uso do site institucional da Agência GV360 e do conteúdo publicado nele.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="eyebrow hover:text-primary">
        ← Voltar
      </Link>
      <h1 className="display mt-8 text-[2.2rem] lg:text-[3.2rem]">Termos de Uso</h1>
      <div className="mt-10 space-y-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        <p>
          Este site é mantido pela Agência GV360 e tem caráter institucional. O conteúdo
          apresentado tem finalidade informativa e pode ser atualizado a qualquer momento.
        </p>
        <p>
          Textos, imagens, marcas e projetos exibidos pertencem à GV360 ou aos respectivos
          clientes, e não podem ser reproduzidos sem autorização prévia.
        </p>
        <p>
          Propostas comerciais, prazos e escopos são definidos individualmente em contrato. As
          informações desta página não constituem oferta vinculante.
        </p>
        <p>
          Ao continuar navegando, você concorda com estas condições.
        </p>
      </div>
    </main>
  );
}
