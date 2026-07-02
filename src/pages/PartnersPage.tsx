import { Building2 } from "lucide-react";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { PartnersStrip } from "../components/sections/PartnersStrip";
import { internationalPartners, nationalPartners } from "../data/site";
import { PageHero } from "./AboutPage";

export function PartnersPage() {
  return (
    <>
      <Seo title="Partenaires" description="Partenaires nationaux, agences des Nations Unies et partenaires internationaux de CERDI-BAS." />
      <PageHero title="Partenaires" text="Depuis sa création, CERDI-BAS a été sollicité par des partenaires nationaux et internationaux qui lui font confiance." />
      <PartnersStrip />
      <PartnerSection
        eyebrow="Partenaires nationaux"
        title="Organisations et institutions en République Démocratique du Congo"
        partners={nationalPartners}
      />
      <PartnerSection
        eyebrow="Partenaires internationaux"
        title="Agences, bailleurs et organisations de coopération"
        partners={internationalPartners}
        muted
      />
    </>
  );
}

function PartnerSection({ eyebrow, title, partners, muted = false }: { eyebrow: string; title: string; partners: string[]; muted?: boolean }) {
  return (
    <section className={`section-pad ${muted ? "bg-[#F7FAF8] dark:bg-[#07100C]" : "bg-white dark:bg-[#091711]"}`}>
      <div className="container-page">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner} className="grid min-h-32 place-items-center rounded-md border border-gray-200 bg-white p-6 text-center dark:border-white/10 dark:bg-white/5">
              <Building2 className="mb-3 text-[#1565C0]" />
              <strong>{partner}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
