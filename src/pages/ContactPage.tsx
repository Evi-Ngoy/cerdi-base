import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { ZodError } from "zod";
import { Button } from "../components/common/Button";
import { SectionHeader } from "../components/common/SectionHeader";
import { Seo } from "../components/common/Seo";
import { contactSchema, type ContactFormData } from "../lib/contactSchema";
import { PageHero } from "./AboutPage";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setFormErrors(toFieldErrors(parsed.error));
      return;
    }
    setFormErrors({});
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSent(true);
    reset();
  };

  return (
    <>
      <Seo title="Contact" description="Contactez CERDI-BAS en République Démocratique du Congo." />
      <PageHero title="Contact" text="Parlons partenariat, projet, volontariat ou accompagnement communautaire." />
      <section className="section-pad bg-[#F7FAF8] dark:bg-[#07100C]">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader align="left" title="Coordonnées" description="Notre équipe vous répondra dans les meilleurs délais." />
            <div className="grid gap-4">
              <Info icon={<MapPin />} title="Adresse" text="Kinshasa, République Démocratique du Congo" />
              <Info icon={<Phone />} title="Téléphone" text="+243 000 000 000" />
              <Info icon={<Mail />} title="Email" text="contact@cerdi-bas.org" />
            </div>
            <div className="mt-6 overflow-hidden rounded-md border border-gray-200 dark:border-white/10">
              <iframe
                title="Carte Kinshasa"
                src="https://www.google.com/maps?q=Kinshasa%20RDC&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" error={formErrors.name}><input {...register("name")} className="field" /></Field>
              <Field label="Email" error={formErrors.email}><input {...register("email")} className="field" /></Field>
              <Field label="Téléphone" error={formErrors.phone}><input {...register("phone")} className="field" /></Field>
              <Field label="Sujet" error={formErrors.subject}><input {...register("subject")} className="field" /></Field>
            </div>
            <Field label="Message" error={formErrors.message} className="mt-5"><textarea {...register("message")} className="field min-h-40 resize-y" /></Field>
            {sent ? <p className="mt-5 rounded-md bg-[#2E7D32]/10 p-4 font-bold text-[#2E7D32]">Message préparé avec succès. Connexion backend à brancher ensuite.</p> : null}
            <Button type="submit" className="mt-6 w-full sm:w-auto">{isSubmitting ? "Envoi..." : "Envoyer le message"}</Button>
          </form>
        </div>
      </section>
    </>
  );
}

function Info({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-md border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <span className="text-[#1565C0]">{icon}</span>
      <span><strong className="block">{title}</strong><span className="text-gray-600 dark:text-gray-300">{text}</span></span>
    </div>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block font-bold">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}

function toFieldErrors(error: ZodError<ContactFormData>) {
  return error.issues.reduce<Partial<Record<keyof ContactFormData, string>>>((acc, issue) => {
    const key = issue.path[0] as keyof ContactFormData | undefined;
    if (key && !acc[key]) acc[key] = issue.message;
    return acc;
  }, {});
}
