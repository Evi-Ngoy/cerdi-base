import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { Seo } from "../components/common/Seo";
import { galleryItems } from "../data/site";
import type { GalleryItem } from "../types/content";
import { cn } from "../utils/cn";
import { PageHero } from "./AboutPage";

const filters: Array<GalleryItem["category"] | "Tous"> = ["Tous", "Photos", "Vidéos", "Evènements", "Formation", "Communautés"];

export function GalleryPage() {
  const [active, setActive] = useState<GalleryItem["category"] | "Tous">("Tous");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const items = useMemo(() => (active === "Tous" ? galleryItems : galleryItems.filter((item) => item.category === active)), [active]);

  return (
    <>
      <Seo title="Galerie" description="Galerie photos, vidéos, évènements, formations et communautés de CERDI-BAS." />
      <PageHero title="Galerie" text="Images et moments marquants de nos actions auprès des communautés." />
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  "rounded-md border px-4 py-2 font-bold transition",
                  active === filter ? "border-[#2E7D32] bg-[#2E7D32] text-white" : "border-gray-200 bg-white hover:border-[#2E7D32] dark:border-white/10 dark:bg-white/5",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <button key={item.title} type="button" onClick={() => setSelected(item)} className="group relative h-72 overflow-hidden rounded-md text-left">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-sm font-black text-[#2E7D32]">{item.category}</span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20 text-white">
                  <h2 className="text-xl font-black">{item.title}</h2>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true">
          <button type="button" aria-label="Fermer" onClick={() => setSelected(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-md bg-white text-black">
            <X />
          </button>
          <figure className="max-w-5xl">
            <img src={selected.image} alt={selected.title} className="max-h-[82vh] w-full rounded-md object-contain" />
            <figcaption className="mt-4 text-center text-lg font-bold text-white">{selected.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
