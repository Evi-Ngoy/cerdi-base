import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}
    >
      {eyebrow ? <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#1565C0]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">{description}</p> : null}
    </motion.div>
  );
}
