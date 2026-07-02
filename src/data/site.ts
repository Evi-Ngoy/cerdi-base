import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileSearch,
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

export const organization = {
  name: "Le Cercle de Réflexion et d'Appui pour le Développement Durable des Initiatives de Base",
  shortName: "CERDI-BAS",
  legalStatus: "Association Sans But Lucratif de droit congolais",
  createdAt: "2002",
  legalPersonality: "Arrêté ministériel N°366/CAB/MIN/J&DH/2012 du 02 avril 2012",
  taxNumber: "A2166074T",
  cnssNumber: "102415612090N",
  address: "N°12, 15è rue, quartier industriel, commune de Limete, Kinshasa, RDC",
  phones: ["+243 999 909 784", "+243 896 455 167"],
  emails: ["cerdi_bas@yahoo.fr", "cerdibasasbl@gmail.com"],
  mission:
    "Promouvoir une offre pérenne de services de qualité et de proximité aux structures publiques et privées, aux ONG et PME désirant mettre en place des initiatives locales durables ou développer leurs activités en cours.",
  positioning:
    "CERDI-BAS se positionne comme un acteur de développement au service des communautés locales et des institutions publiques et privées, avec une approche fondée sur le développement durable.",
};

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
  { value: "4", label: "métiers complémentaires" },
  { value: "RDC", label: "rayon d'action national" },
  { value: "2012", label: "personnalité juridique" },
];

export const objectives = [
  "Contribuer à la promotion et au développement de la gouvernance participative en renforçant les capacités des citoyens et des gouvernants.",
  "Contribuer au développement de la citoyenneté responsable pour vivre dans un milieu sain, vert et sans déchets.",
  "Promouvoir des rapports sociaux équilibrés, débarrassés des dominations et exclusions, notamment entre femmes et hommes.",
  "Renforcer les capacités institutionnelles et organisationnelles des structures étatiques et des organisations de la société civile.",
];

export const values = [
  "Dignité humaine",
  "Sauvegarde de l'environnement",
  "Respect des rapports sociaux et du genre",
  "Participation consciente des acteurs locaux",
  "Citoyenneté responsable et agissante",
  "Autopromotion et intérêt général",
];

export const registrations = [
  "Environnement et développement durable : n°3115/CAB/MIN/ECN-T/15/JEB/09 du 05 décembre 2009",
  "Développement rural : n°013/MIN/DR/2017 du 13 mars 2017",
  "Santé publique : n°MS 1255/DSSP/30/49 du 05 mai 2017",
  "Agriculture : N°5011/323/DDEA/SG/AGRI2019 du 17 décembre 2019",
  "Plan : N°1689/PL/DCRE/2020",
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

export const heroSlides = [
  {
    image: imageBank.governance,
    alt: "Concertation et gouvernance locale",
  },
  {
    image: imageBank.agriculture,
    alt: "Initiatives agricoles durables",
  },
  {
    image: imageBank.environment,
    alt: "Protection de l'environnement",
  },
  {
    image: imageBank.community,
    alt: "Communautés accompagnées par CERDI-BAS",
  },
];

export const coreTrades: Intervention[] = [
  {
    title: "Appui-conseil",
    description:
      "Diagnostic organisationnel et institutionnel, gouvernance, planification stratégique, structuration des OSC, plaidoyer, réseautage, business plans et plans de développement.",
    icon: HandHeart,
    image: imageBank.community,
  },
  {
    title: "Études et recherches",
    description:
      "Études de base, enquêtes socio-économiques, enquêtes CAP, études de marché, audits sociaux et techniques, évaluations, EIES et faisabilité.",
    icon: FileSearch,
    image: imageBank.environment,
  },
  {
    title: "Assistance technique aux projets",
    description:
      "Mise en œuvre de projets, sous-traitance, agence locale d'exécution, maîtrise d'œuvre, contrôle et appui aux infrastructures socio-économiques de base.",
    icon: ClipboardCheck,
    image: imageBank.governance,
  },
  {
    title: "Formation et renforcement des capacités",
    description:
      "Collecte et analyse de données, gouvernance, redevabilité, comptabilité, finance, gestion des stocks, éducation financière, entrepreneuriat et AGR.",
    icon: GraduationCap,
    image: imageBank.education,
  },
];

export const interventions: Intervention[] = [
  { title: "Gouvernance participative", description: "Renforcement des citoyens et gouvernants, dialogue politique, redevabilité et amélioration de la gouvernance locale.", icon: Scale, image: imageBank.governance },
  { title: "Développement communautaire", description: "Accompagnement des initiatives de base, autopromotion, structuration des organisations et appui aux communautés locales.", icon: HandHeart, image: imageBank.community },
  { title: "Citoyenneté responsable", description: "Promotion de comportements responsables et entreprenants pour des milieux sains, verts et sans déchets.", icon: Users, image: imageBank.environment },
  { title: "Agriculture durable", description: "Appui aux producteurs, projets agricoles, entrepreneuriat rural, chaînes de valeur et sécurité alimentaire.", icon: Sprout, image: imageBank.agriculture },
  { title: "Environnement", description: "Sauvegarde de l'environnement, études d'impact environnemental et social, protection des ressources et sensibilisation.", icon: Leaf, image: imageBank.environment },
  { title: "Genre et inclusion", description: "Promotion de rapports sociaux équilibrés et respect des droits des personnes faibles ou vulnérables.", icon: Users, image: imageBank.community },
  { title: "Éducation et formation", description: "Formation des femmes et des hommes avec des méthodes, compétences et connaissances utiles à l'action autonome.", icon: BookOpen, image: imageBank.education },
  { title: "Santé publique", description: "Interventions inscrites dans les dynamiques de santé publique, mobilisation communautaire et renforcement des structures.", icon: HeartPulse, image: imageBank.health },
  { title: "Entrepreneuriat et auto-emploi", description: "Éducation financière, entrepreneuriat, mise en œuvre des activités génératrices de revenus et auto-emploi des jeunes.", icon: BriefcaseBusiness, image: imageBank.agriculture },
  { title: "Recherche appliquée", description: "Collecte, traitement et analyse de données avec des outils comme ODK, Kobo Collect, SurveyCTO, SPSS, Stata ou R.", icon: Search, image: imageBank.governance },
  { title: "Renforcement institutionnel", description: "Appui organisationnel aux ministères, ETD, associations, ONG, services, communautés et organes locaux.", icon: Network, image: imageBank.education },
  { title: "Plaidoyer", description: "Influence des politiques locales, participation citoyenne et défense constructive des initiatives durables.", icon: Megaphone, image: imageBank.health },
];

export const projects: Project[] = [
  {
    title: "Projet Cross Border de stabilisation communautaire",
    description:
      "Contribution aux solutions durables pour les flux migratoires mixtes et la gestion efficace des frontières entre l'Angola et la RDC.",
    image: imageBank.community,
    date: "Référence institutionnelle",
    place: "Communautés frontalières Angola - RDC",
    partner: "OIM et HCR",
    budget: "Non communiqué",
    status: "Référence partenaire",
    results: ["Stabilisation communautaire", "Solutions durables", "Appui à la gestion frontalière"],
  },
  {
    title: "Appui aux programmes Banque Mondiale",
    description:
      "Interventions associées au PADMPME, au PEMU et au Projet d'Équité et de Renforcement du Système Éducatif.",
    image: imageBank.governance,
    date: "Référence institutionnelle",
    place: "Kinshasa, Lubumbashi, Matadi et autres zones d'intervention",
    partner: "Banque Mondiale et CEP-O/REGIDESO",
    budget: "Non communiqué",
    status: "Référence partenaire",
    results: ["Appui aux MPME", "Eau potable en milieu urbain", "Renforcement du système éducatif"],
  },
  {
    title: "Programmes agricoles PASA NK et AVENIR",
    description:
      "Accompagnement de projets agricoles et ruraux sensibles à la nutrition, inclusifs et résilients.",
    image: imageBank.agriculture,
    date: "Référence institutionnelle",
    place: "Nord-Kivu et zones rurales de la RDC",
    partner: "FIDA",
    budget: "Non communiqué",
    status: "Référence partenaire",
    results: ["Appui au secteur agricole", "Entrepreneuriat rural", "Valorisation inclusive des initiatives locales"],
  },
  {
    title: "Appui à la décentralisation et à la gouvernance locale",
    description:
      "Animation d'activités inscrites dans la composante ADGL pour renforcer les dynamiques de gouvernance locale.",
    image: imageBank.environment,
    date: "PTA 2015",
    place: "Province de l'Équateur, RDC",
    partner: "PNUD",
    budget: "Non communiqué",
    status: "Référence partenaire",
    results: ["Animation territoriale", "Gouvernance locale", "Appui à la décentralisation"],
  },
];

export const news: NewsArticle[] = [
  {
    title: "CERDI-BAS, ASBL congolaise engagée depuis 2002",
    category: "Institutionnel",
    date: "Depuis 2002",
    image: imageBank.community,
    excerpt: "Une organisation de la société civile au service des communautés locales, des institutions publiques et privées.",
    content:
      "CERDI-BAS est une organisation non gouvernementale de développement qui accompagne les initiatives locales durables avec une approche participative.",
  },
  {
    title: "Quatre métiers complémentaires structurent l'intervention",
    category: "Expertise",
    date: "Présentation CERDI-BAS",
    image: imageBank.governance,
    excerpt: "Appui-conseil, études et recherches, assistance technique, formation et renforcement des capacités.",
    content:
      "Ces métiers permettent d'intervenir depuis le diagnostic jusqu'à la mise en œuvre, au suivi, à l'évaluation et à la capitalisation des projets.",
  },
  {
    title: "Un rayon d'action national en République Démocratique du Congo",
    category: "Terrain",
    date: "Présentation CERDI-BAS",
    image: imageBank.environment,
    excerpt: "CERDI-BAS peut se déployer sur toute l'étendue nationale selon les demandes et partenariats.",
    content:
      "L'organisation s'appuie sur des partenariats avec des consultants locaux et nationaux dans les chefs-lieux des provinces.",
  },
  {
    title: "Des références auprès d'acteurs nationaux et internationaux",
    category: "Partenariats",
    date: "Présentation CERDI-BAS",
    image: imageBank.education,
    excerpt: "CERDI-BAS a collaboré avec des institutions publiques, ONG, agences des Nations Unies et partenaires techniques.",
    content:
      "Les références incluent notamment OIM, HCR, Banque Mondiale, FIDA, PNUD, GIZ, Union Européenne, USAID, ENABEL, OXFAM et plusieurs organisations nationales.",
  },
];

export const galleryItems: GalleryItem[] = [
  { title: "Atelier de formation communautaire", category: "Formation", image: imageBank.education },
  { title: "Initiatives agricoles et rurales", category: "Photos", image: imageBank.agriculture },
  { title: "Dialogue et gouvernance locale", category: "Evènements", image: imageBank.governance },
  { title: "Renforcement des communautés", category: "Communautés", image: imageBank.community },
  { title: "Sensibilisation environnementale", category: "Vidéos", image: imageBank.environment },
  { title: "Mobilisation santé publique", category: "Photos", image: imageBank.health },
];

export const nationalPartners = [
  "GAAD",
  "INADES",
  "CONAPAC",
  "CENADEP",
  "Caritas Congo",
  "Gouvernement congolais",
  "ETD",
  "EUP FBP KIN",
  "BDD Kisantu-MISEREOR",
];

export const internationalPartners = [
  "OIM",
  "HCR",
  "Banque Mondiale",
  "FIDA",
  "PNUD",
  "GIZ",
  "Union Européenne",
  "USAID",
  "ENABEL",
  "OXFAM",
  "Fonds mondial",
  "CTA",
  "IITA",
  "WWF",
  "BAD",
  "SNV",
  "IRC",
  "CRS",
  "ACTED",
  "NRC",
  "Ambassade du Canada",
  "Ambassade des Pays-Bas",
  "Agriterra",
  "Cuso International",
  "ADRA",
  "Handicap International",
];

export const partners = [...internationalPartners.slice(0, 12), ...nationalPartners.slice(0, 4)];

export const legalHighlights = [
  { label: "Personnalité juridique", value: organization.legalPersonality, icon: Building2 },
  { label: "Numéro d'impôt", value: organization.taxNumber, icon: ClipboardCheck },
  { label: "CNSS", value: organization.cnssNumber, icon: Scale },
];
