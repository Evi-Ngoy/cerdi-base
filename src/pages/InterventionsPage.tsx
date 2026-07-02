import { Seo } from "../components/common/Seo";
import { InterventionGrid } from "../components/sections/InterventionGrid";
import { PageHero } from "./AboutPage";

export function InterventionsPage() {
  return (
    <>
      <Seo title="Domaines d'intervention" description="Les domaines d'action de CERDI-BAS: gouvernance, agriculture durable, environnement, santé, éducation, formation et plaidoyer." />
      <PageHero title="Domaines d'intervention" text="Des expertises complémentaires pour répondre aux priorités des communautés et des territoires." />
      <InterventionGrid />
    </>
  );
}
