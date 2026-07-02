import { Building2 } from "lucide-react";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { PartnersStrip } from "../components/sections/PartnersStrip";
import { partners } from "../data/site";
import { PageHero } from "./AboutPage";

export function PartnersPage() {
  return (
    <>
      <Seo title="Partenaires" description="Partenaires techniques, institutionnels et financiers de CERDI-BAS." />
      <PageHero title="Partenaires" text="Nous travaillons avec des acteurs publics, privés, communautaires et internationaux." />
      <PartnersStrip />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page">
          <SectionHeader title="Réseau de partenaires" description="Les logos définitifs pourront remplacer ces emplacements dès validation de la charte et des autorisations d'affichage." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="grid h-36 place-items-center rounded-md border border-gray-200 bg-[#F7FAF8] p-6 text-center dark:border-white/10 dark:bg-white/5">
                <Building2 className="mb-3 text-[#1565C0]" />
                <strong>{partner}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
