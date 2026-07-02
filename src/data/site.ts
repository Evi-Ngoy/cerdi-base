import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Megaphone,
  Network,
  Scale,
  Search,
  Sprout,
  Users,
} from "lucide-react";
import type { GalleryItem, Intervention, NavItem, NewsArticle, Project, Stat } from "../types/content";

export const navItems: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "A propos", path: "/a-propos" },
  { label: "Domaines d'intervention", path: "/domaines" },
  { label: "Projets", path: "/projets" },
  { label: "Actualités", path: "/actualites" },
  { label: "Galerie", path: "/galerie" },
  { label: "Partenaires", path: "/partenaires" },
  { label: "Nous rejoindre", path: "/nous-rejoindre" },
  { label: "Contact", path: "/contact" },
];

export const stats: Stat[] = [
  { value: "+20", label: "ans d'expérience" },
  { value: "100+", label: "projets" },
  { value: "50000", label: "bénéficiaires" },
  { value: "20", label: "partenaires" },
];

export const values = [
  "Transparence",
  "Participation communautaire",
  "Durabilité",
  "Inclusion",
  "Redevabilité",
  "Innovation sociale",
];

export const imageBank = {
  hero: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2200&q=85",
  community: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
  agriculture: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1400&q=80",
  education: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1400&q=80",
  health: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
  governance: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80",
  environment: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
};

export const interventions: Intervention[] = [
  { title: "Développement communautaire", description: "Appui aux dynamiques locales, diagnostics participatifs et projets de proximité.", icon: HandHeart, image: imageBank.community },
  { title: "Gouvernance locale", description: "Dialogue citoyen, redevabilité publique et accompagnement des institutions locales.", icon: Scale, image: imageBank.governance },
  { title: "Agriculture durable", description: "Promotion de pratiques agricoles résilientes, rentables et respectueuses des sols.", icon: Sprout, image: imageBank.agriculture },
  { title: "Environnement", description: "Protection des écosystèmes, sensibilisation climatique et gestion responsable des ressources.", icon: Leaf, image: imageBank.environment },
  { title: "Éducation", description: "Accès à l'éducation, alphabétisation fonctionnelle et accompagnement scolaire.", icon: BookOpen, image: imageBank.education },
  { title: "Santé", description: "Prévention, mobilisation communautaire et renforcement des relais sanitaires.", icon: HeartPulse, image: imageBank.health },
  { title: "Genre et inclusion", description: "Promotion des droits, participation des femmes et inclusion des groupes vulnérables.", icon: Users, image: imageBank.community },
  { title: "Entrepreneuriat", description: "Structuration d'activités génératrices de revenus et incubation d'initiatives locales.", icon: BriefcaseBusiness, image: imageBank.governance },
  { title: "Renforcement des capacités", description: "Coaching, outils opérationnels et formation des organisations de base.", icon: GraduationCap, image: imageBank.education },
  { title: "Recherche", description: "Études, capitalisation, analyse territoriale et production de connaissances utiles.", icon: Search, image: imageBank.environment },
  { title: "Formation", description: "Modules pratiques pour leaders communautaires, jeunes, femmes et acteurs publics.", icon: Network, image: imageBank.agriculture },
  { title: "Plaidoyer", description: "Mobilisation, influence constructive et défense d'initiatives durables inclusives.", icon: Megaphone, image: imageBank.health },
];

export const projects: Project[] = [
  {
    title: "Appui aux initiatives économiques communautaires",
    description: "Structuration de groupes locaux autour d'activités génératrices de revenus, avec coaching et suivi de gestion.",
    image: imageBank.community,
    date: "2024 - 2026",
    place: "Kongo Central, RDC",
    partner: "Collectivités locales",
    budget: "250 000 USD",
    status: "En cours",
    results: ["35 organisations accompagnées", "1 800 ménages touchés", "12 plans d'affaires communautaires validés"],
  },
  {
    title: "Agriculture durable et sécurité alimentaire",
    description: "Renforcement des pratiques agroécologiques et amélioration de la résilience alimentaire des ménages ruraux.",
    image: imageBank.agriculture,
    date: "2023 - 2025",
    place: "Kwilu, RDC",
    partner: "Plateformes paysannes",
    budget: "410 000 USD",
    status: "En cours",
    results: ["620 producteurs formés", "18 champs écoles installés", "Hausse moyenne de rendement de 27%"],
  },
  {
    title: "Gouvernance participative locale",
    description: "Mise en place de cadres de concertation entre citoyens, services publics et autorités locales.",
    image: imageBank.governance,
    date: "2022 - 2024",
    place: "Kinshasa, RDC",
    partner: "Institutions publiques",
    budget: "180 000 USD",
    status: "Clôturé",
    results: ["9 cadres de dialogue opérationnels", "420 leaders formés", "Plans locaux de redevabilité adoptés"],
  },
];

export const news: NewsArticle[] = [
  {
    title: "CERDI-BAS renforce les capacités des leaders communautaires",
    category: "Formation",
    date: "12 juin 2026",
    image: imageBank.education,
    excerpt: "Une session axée sur la gouvernance participative, la gestion de projet et la redevabilité locale.",
    content: "Les participants ont travaillé sur des outils concrets pour améliorer la planification, le suivi et la transparence des initiatives de base.",
  },
  {
    title: "Nouveau programme pour l'agriculture durable",
    category: "Projets",
    date: "28 mai 2026",
    image: imageBank.agriculture,
    excerpt: "Le programme vise à renforcer la sécurité alimentaire et la résilience économique des ménages ruraux.",
    content: "Les activités combinent formation technique, accompagnement coopératif et diffusion de pratiques agroécologiques adaptées.",
  },
  {
    title: "Dialogue multi-acteurs sur l'inclusion sociale",
    category: "Plaidoyer",
    date: "7 avril 2026",
    image: imageBank.community,
    excerpt: "Des acteurs publics, privés et communautaires se sont réunis autour d'une feuille de route commune.",
    content: "Les échanges ont permis d'identifier des priorités opérationnelles pour améliorer la participation des femmes et des jeunes.",
  },
  {
    title: "Capitalisation des bonnes pratiques environnementales",
    category: "Recherche",
    date: "19 mars 2026",
    image: imageBank.environment,
    excerpt: "Une démarche de collecte d'expériences locales pour renforcer les politiques de protection des ressources.",
    content: "Les enseignements seront diffusés aux organisations de base et aux partenaires institutionnels.",
  },
];

export const galleryItems: GalleryItem[] = [
  { title: "Atelier communautaire", category: "Formation", image: imageBank.education },
  { title: "Champ école paysan", category: "Photos", image: imageBank.agriculture },
  { title: "Forum local", category: "Evènements", image: imageBank.governance },
  { title: "Rencontre des femmes leaders", category: "Communautés", image: imageBank.community },
  { title: "Sensibilisation environnementale", category: "Vidéos", image: imageBank.environment },
  { title: "Campagne santé communautaire", category: "Photos", image: imageBank.health },
];

export const partners = ["PNUD", "UNICEF", "GIZ", "Banque Mondiale", "Oxfam", "World Vision", "Union Européenne", "Ministères RDC"];
