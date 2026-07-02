import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { imageBank, stats } from "../../data/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[linear-gradient(135deg,#123524,#1565C0)]">
      <img src={imageBank.hero} alt="Communauté accompagnée par CERDI-BAS" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="container-page relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl text-white">
          <p className="mb-5 inline-flex rounded-md bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">ASBL congolaise de développement depuis 2002</p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Des initiatives locales fortes pour un développement durable en RDC.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            CERDI-BAS accompagne les communautés, les institutions publiques et privées dans des démarches participatives, inclusives et mesurables.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/a-propos">Découvrir CERDI-BAS <ArrowRight size={18} /></Button>
            <Button to="/contact" variant="secondary">Nous contacter <Mail size={18} /></Button>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/15 bg-white/10 p-5 backdrop-blur">
                <strong className="block text-3xl font-black">{stat.value}</strong>
                <span className="text-sm text-white/75">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
