import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Política de Privacidade | Agência GV360";
const DESCRIPTION =
  "Como a Agência GV360 coleta, utiliza e protege os dados de quem entra em contato pelo site.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="eyebrow hover:text-primary">
        ← Voltar
      </Link>
      <h1 className="display mt-8 text-[2.2rem] lg:text-[3.2rem]">Política de Privacidade</h1>
      <div className="mt-10 space-y-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
        <p>
          A Agência GV360 respeita a privacidade de quem visita este site. Coletamos apenas as
          informações que você nos envia voluntariamente ao iniciar uma conversa, como nome,
          empresa e dados de contato.
        </p>
        <p>
          Esses dados são utilizados exclusivamente para responder à sua solicitação, elaborar
          propostas e manter o relacionamento comercial. Não vendemos nem compartilhamos suas
          informações com terceiros para fins publicitários.
        </p>
        <p>
          Utilizamos ferramentas de análise de tráfego para entender como o site é usado. Esses
          dados são agregados e não identificam você individualmente.
        </p>
        <p>
          Você pode solicitar a correção ou exclusão dos seus dados a qualquer momento entrando em
          contato com a nossa equipe.
        </p>
      </div>
    </main>
  );
}
