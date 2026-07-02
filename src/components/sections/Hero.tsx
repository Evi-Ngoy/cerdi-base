import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../common/Button";
import { heroSlides, organization, stats } from "../../data/site";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[linear-gradient(135deg,#123524,#1565C0)]">
      {heroSlides.map((slide, index) => (
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          initial={false}
          animate={{ opacity: activeSlide === index ? 1 : 0, scale: activeSlide === index ? 1.04 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-black/65" />
      <div className="container-page relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl text-white">
          <p className="mb-5 inline-flex rounded-md bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
            {organization.legalStatus} créée en {organization.createdAt}
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            CERDI-BAS accompagne les initiatives locales durables en RDC.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            {organization.positioning}
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
          <div className="mt-8 flex gap-2" aria-label="Images du header">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all ${activeSlide === index ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
