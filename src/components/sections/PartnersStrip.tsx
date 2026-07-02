import { partners } from "../../data/site";
import { SectionHeader } from "../common/SectionHeader";

export function PartnersStrip() {
  return (
    <section className="section-pad overflow-hidden bg-[#F3F7F4] dark:bg-[#07100C]">
      <div className="container-page">
        <SectionHeader eyebrow="Partenaires" title="Des collaborations fondées sur la confiance" />
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex min-w-full animate-[slide_28s_linear_infinite] gap-5 px-5">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner}-${index}`} className="grid h-24 min-w-56 place-items-center rounded-md border border-gray-200 bg-white px-8 text-center font-black text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
