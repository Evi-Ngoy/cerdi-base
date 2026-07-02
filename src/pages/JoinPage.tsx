import { HeartHandshake, Landmark, Users } from "lucide-react";
import { Button } from "../components/common/Button";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { PageHero } from "./AboutPage";

export function JoinPage() {
  return (
    <>
      <Seo title="Nous rejoindre" description="Soutenir CERDI-BAS, devenir bénévole, partenaire ou donateur." />
      <PageHero title="Nous rejoindre" text="Votre engagement peut soutenir des initiatives durables portées par les communautés locales." />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page">
          <SectionHeader title="Trois manières d'agir avec nous" />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: HeartHandshake, title: "Faire un don", text: "Contribuez au financement d'activités communautaires, de formations et de projets pilotes." },
              { icon: Users, title: "Devenir bénévole", text: "Mettez vos compétences au service des communautés, de la recherche ou de la communication." },
              { icon: Landmark, title: "Devenir partenaire", text: "Co-construisons des programmes alignés sur les priorités locales et les standards internationaux." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md border border-gray-200 p-8 dark:border-white/10">
                  <Icon className="mb-6 text-[#2E7D32]" size={34} />
                  <h2 className="text-2xl font-black">{item.title}</h2>
                  <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button to="/contact">Contacter CERDI-BAS</Button>
          </div>
        </div>
      </section>
    </>
  );
}
