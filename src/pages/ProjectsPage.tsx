import { Calendar, MapPin, Wallet } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "../components/common/Reveal";
import { Seo } from "../components/common/Seo";
import { projects } from "../data/site";
import { PageHero } from "./AboutPage";

export function ProjectsPage() {
  return (
    <>
      <Seo title="Projets" description="Découvrez les projets de CERDI-BAS, leurs partenaires, budgets, statuts et résultats." />
      <PageHero title="Projets" text="Des programmes structurés, suivis et orientés vers des résultats tangibles pour les communautés." />
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="grid overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] dark:border-white/10 dark:bg-white/5">
                <img src={project.image} alt="" className="h-full min-h-80 w-full object-cover" loading="lazy" />
                <div className="p-8">
                  <span className="rounded-md bg-[#2E7D32]/10 px-3 py-1 text-sm font-black text-[#2E7D32]">{project.status}</span>
                  <h2 className="mt-4 text-3xl font-black">{project.title}</h2>
                  <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Info icon={<Calendar size={18} />} text={project.date} />
                    <Info icon={<MapPin size={18} />} text={project.place} />
                    <Info icon={<Wallet size={18} />} text={project.budget} />
                    <Info icon={<span className="font-black">P</span>} text={project.partner} />
                  </div>
                  <h3 className="mt-6 font-black">Résultats</h3>
                  <ul className="mt-3 grid gap-2 text-gray-600 dark:text-gray-300">
                    {project.results.map((result) => <li key={result}>• {result}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Info({ icon, text }: { icon: ReactNode; text: string }) {
  return <div className="flex items-center gap-3 rounded-md bg-[#F7FAF8] p-3 font-semibold dark:bg-white/5">{icon}<span>{text}</span></div>;
}
