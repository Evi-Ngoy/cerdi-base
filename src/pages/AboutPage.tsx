import { Network, ShieldCheck, UsersRound } from "lucide-react";
import { Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { imageBank, values } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Seo title="A propos" description="Historique, mission, vision, valeurs, approche et équipe de CERDI-BAS." />
      <PageHero title="A propos de CERDI-BAS" text="Une ASBL congolaise née en 2002 pour accompagner durablement les initiatives de base." />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={imageBank.community} alt="Rencontre communautaire" className="h-[520px] w-full rounded-md object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader align="left" eyebrow="Historique" title="Plus de deux décennies d'engagement" description="Créé en 2002, le Cercle de Réflexion et d'Appui pour le Développement Durable des Initiatives de Base agit comme passerelle entre les communautés locales, les institutions et les partenaires de développement." />
            <p className="leading-8 text-gray-600 dark:text-gray-300">
              L'organisation accompagne les initiatives socio-économiques, renforce les capacités locales et favorise des mécanismes de gouvernance inclusifs adaptés aux réalités territoriales.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {[
            ["Notre vision", "Des communautés congolaises autonomes, équitables et résilientes."],
            ["Notre mission", "Contribuer au développement socio-économique par des initiatives durables et participatives."],
            ["Notre approche", "Diagnostic partagé, co-construction, mise en œuvre responsable et capitalisation."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-gray-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page">
          <SectionHeader eyebrow="Valeurs" title="Ce qui guide notre action" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="rounded-md border border-gray-200 p-6 text-lg font-black dark:border-white/10">{value}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page">
          <SectionHeader eyebrow="Equipe et organigramme" title="Une structure claire, proche du terrain" />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Assemblée Générale", text: "Orientation stratégique et contrôle institutionnel." },
              { icon: Network, title: "Coordination Exécutive", text: "Pilotage des programmes, partenariats et opérations." },
              { icon: UsersRound, title: "Equipes terrain", text: "Animation communautaire, suivi, formation et reporting." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md bg-white p-8 shadow-sm dark:bg-white/5">
                  <Icon className="mb-5 text-[#1565C0]" size={32} />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-[#07100C] py-24 text-white">
      <div className="container-page">
        <p className="mb-4 font-bold uppercase tracking-[0.18em] text-green-200">CERDI-BAS</p>
        <h1 className="max-w-4xl text-4xl font-black sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  );
}
