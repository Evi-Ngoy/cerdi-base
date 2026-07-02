import { interventions } from "../../data/site";
import { Reveal } from "../common/Reveal";
import { SectionHeader } from "../common/SectionHeader";

export function InterventionGrid({ limit }: { limit?: number }) {
  const items = limit ? interventions.slice(0, limit) : interventions;

  return (
    <section className="section-pad bg-white dark:bg-[#091711]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Domaines d'intervention"
          title="Une expertise au service des communautés"
          description="Nos programmes combinent accompagnement technique, mobilisation sociale, recherche-action et plaidoyer."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-md bg-white text-[#2E7D32]">
                      <Icon size={24} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
