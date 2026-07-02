import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Intervention = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  place: string;
  partner: string;
  budget: string;
  status: string;
  results: string[];
};

export type NewsArticle = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export type GalleryItem = {
  title: string;
  category: "Photos" | "Vidéos" | "Evènements" | "Formation" | "Communautés";
  image: string;
};
