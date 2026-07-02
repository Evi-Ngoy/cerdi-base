import { Network, ShieldCheck, UsersRound } from "lucide-react";
import { Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { imageBank, legalHighlights, objectives, organization, registrations, values } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Seo title="A propos" description="Historique, mission, vision, valeurs, approche et identité juridique de CERDI-BAS." />
      <PageHero title="A propos de CERDI-BAS" text={`${organization.name} est une ASBL congolaise créée en ${organization.createdAt}.`} />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={imageBank.community} alt="Rencontre communautaire" className="h-[520px] w-full rounded-md object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              align="left"
              eyebrow="Création et nature"
              title="Une organisation de la société civile au service des initiatives de base"
              description={`${organization.name}, en sigle ${organization.shortName}, est une organisation de la société civile non gouvernementale de développement créée depuis ${organization.createdAt}.`}
            />
            <p className="leading-8 text-gray-600 dark:text-gray-300">
              En tant qu'association sans but lucratif de droit congolais, CERDI-BAS intervient auprès des communautés locales, des institutions publiques et privées, des ONG et des PME qui désirent mettre en place ou développer des initiatives locales durables.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {[
            ["Notre mission", organization.mission],
            ["Notre vision", "Des acteurs locaux capables de réfléchir, décider, agir et influencer les politiques locales pour lutter durablement contre les mécanismes de pauvreté."],
            ["Notre approche", "Appui-conseil, études et recherches, assistance technique aux projets, formation et renforcement des capacités."],
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
          <SectionHeader eyebrow="Objectifs" title="Les priorités institutionnelles" />
          <div className="grid gap-4 lg:grid-cols-2">
            {objectives.map((objective) => (
              <div key={objective} className="rounded-md border border-gray-200 p-6 leading-8 dark:border-white/10">{objective}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page">
          <SectionHeader eyebrow="Identité juridique" title="Une ASBL enregistrée auprès des instances compétentes" />
          <div className="grid gap-6 lg:grid-cols-3">
            {legalHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-md bg-white p-6 shadow-sm dark:bg-white/5">
                  <Icon className="mb-5 text-[#1565C0]" size={30} />
                  <h3 className="font-black">{item.label}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.value}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 rounded-md border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-black">Enregistrements sectoriels</h3>
            <ul className="mt-4 grid gap-3 text-gray-600 dark:text-gray-300">
              {registrations.map((registration) => <li key={registration}>• {registration}</li>)}
            </ul>
          </div>
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
          <SectionHeader
            eyebrow="Rayon d'action et organigramme"
            title="Une direction exécutive basée à Kinshasa, avec une capacité de déploiement national"
            description="CERDI-BAS se déploie sur toute l'étendue de la République Démocratique du Congo et s'appuie sur des consultants locaux et nationaux dans les chefs-lieux des provinces."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Assemblée Générale", text: "Orientation stratégique, gouvernance associative et contrôle institutionnel." },
              { icon: Network, title: "Direction Exécutive", text: organization.address },
              { icon: UsersRound, title: "Consultants et équipes terrain", text: "Appui local et national selon les besoins des partenaires et communautés." },
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
        <p className="mb-4 font-bold uppercase tracking-[0.18em] text-green-200">{organization.shortName}</p>
        <h1 className="max-w-4xl text-4xl font-black sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  );
}
