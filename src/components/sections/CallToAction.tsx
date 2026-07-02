import { ArrowRight } from "lucide-react";
import { Button } from "../common/Button";

export function CallToAction() {
  return (
    <section className="bg-[#1565C0] py-20 text-white">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.18em] text-white/70">Agir avec CERDI-BAS</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Construisons des initiatives durables, inclusives et mesurables.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/nous-rejoindre" variant="secondary">Nous rejoindre</Button>
          <Button to="/contact" className="bg-[#2E7D32]">Contacter l'équipe <ArrowRight size={18} /></Button>
        </div>
      </div>
    </section>
  );
}
