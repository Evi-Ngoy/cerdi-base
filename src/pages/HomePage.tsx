import { Award, CheckCircle2, Eye, Handshake, Target } from "lucide-react";
import { Button } from "../components/common/Button";
import { Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { CallToAction } from "../components/sections/CallToAction";
import { Hero } from "../components/sections/Hero";
import { InterventionGrid } from "../components/sections/InterventionGrid";
import { PartnersStrip } from "../components/sections/PartnersStrip";
import { galleryItems, news, projects, values } from "../data/site";

export function HomePage() {
  return (
    <>
      <Seo title="Accueil" description="CERDI-BAS accompagne le développement durable des initiatives de base en République Démocratique du Congo." />
      <Hero />
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {[
            { icon: Target, title: "Mission", text: "Contribuer au développement socio-économique des communautés par des initiatives durables, participatives et inclusives." },
            { icon: Eye, title: "Vision", text: "Des communautés autonomes, résilientes et capables de porter leur propre transformation." },
            { icon: Handshake, title: "Valeurs", text: values.slice(0, 4).join(" · ") },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-md border border-gray-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <Icon className="mb-6 text-[#2E7D32]" size={34} />
                  <h2 className="text-2xl font-black">{item.title}</h2>
                  <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <InterventionGrid limit={6} />
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page">
          <SectionHeader eyebrow="Réalisations" title="Des actions concrètes et suivies" />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <article className="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                  <img src={project.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <span className="text-sm font-bold text-[#1565C0]">{project.status}</span>
                    <h3 className="mt-2 text-xl font-black">{project.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeader align="left" eyebrow="Pourquoi nous choisir" title="Une organisation de terrain, structurée et redevable" description="CERDI-BAS associe connaissance locale, méthode professionnelle et culture de transparence." />
          <div className="grid gap-4">
            {["Approche participative centrée sur les communautés", "Capacité à travailler avec les secteurs public, privé et associatif", "Suivi des résultats, capitalisation et apprentissage continu", "Expérience multisectorielle depuis 2002"].map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-gray-200 bg-[#F7FAF8] p-4 dark:border-white/10 dark:bg-white/5">
                <CheckCircle2 className="mt-1 shrink-0 text-[#2E7D32]" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnersStrip />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page">
          <SectionHeader eyebrow="Actualités récentes" title="Dernières nouvelles du terrain" />
          <div className="grid gap-6 lg:grid-cols-3">
            {news.slice(0, 3).map((article) => (
              <article key={article.title} className="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                <img src={article.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-sm font-bold text-[#2E7D32]">{article.category} · {article.date}</span>
                  <h3 className="mt-2 text-xl font-black">{article.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page">
          <SectionHeader eyebrow="Galerie" title="Moments forts et actions communautaires" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item) => (
              <img key={item.title} src={item.image} alt={item.title} className="h-64 w-full rounded-md object-cover" loading="lazy" />
            ))}
          </div>
          <div className="mt-8 text-center"><Button to="/galerie" variant="ghost">Voir la galerie <Award size={18} /></Button></div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
