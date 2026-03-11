import ARCH1 from "@/assets/ARCH-1.jpg"
import ARCH2 from "@/assets/ARCH-2.jpg"
import ARCH3 from "@/assets/ARCH-3.jpg"
import ARCH4 from "@/assets/ARCH-4.jpg"
import ARCH5 from "@/assets/ARCH-5.jpg"
import ARCH6 from "@/assets/ARCH-6.jpg"
import ARCH7 from "@/assets/ARCH-7.jpg"
import ARCH8 from "@/assets/ARCH-8.jpg"
import ARCH9 from "@/assets/ARCH-9.jpg"
import ARCH10 from "@/assets/ARCH-10.jpg"
import ARCH11 from "@/assets/ARCH-11.jpg"
import ARCH12 from "@/assets/ARCH-12.jpg"
import ARCH13 from "@/assets/ARCH-13.jpg"
import ARCH14 from "@/assets/ARCH-14.jpg"
import ARCH15 from "@/assets/ARCH-15.jpg"
import placeholderImg from "@/assets/1.jpg"
import VARDS1 from "@/assets/VARDS-1.jpg";
import VARDS2 from "@/assets/VARDS-2.jpg";
import VARDS3 from "@/assets/VARDS-3.jpg";
import VARDS4 from "@/assets/VARDS-4.jpg";
import VARDS5 from "@/assets/VARDS-5.jpg";
import VARDS6 from "@/assets/VARDS-6.jpg";
import VARDS7 from "@/assets/VARDS-7.jpg";
import VARDS8 from "@/assets/VARDS-8.jpg";
import VARDS9 from "@/assets/VARDS-9.jpg";
import VARDS10 from "@/assets/VARDS-10.jpg";
import VARDS11 from "@/assets/VARDS-11.jpg";
import VARDS12 from "@/assets/VARDS-12.jpg";
import VARDS13 from "@/assets/VARDS-13.jpg";
import BLUOR1 from "@/assets/BLUOR-1.jpg";
import BLUOR2 from "@/assets/BLUOR-2.jpg";
import BLUOR3 from "@/assets/BLUOR-3.jpg";
import BLUOR4 from "@/assets/BLUOR-4.jpg";
import BLUOR5 from "@/assets/BLUOR-5.jpg";
import BLUOR6 from "@/assets/BLUOR-6.jpg";
import BLUOR7 from "@/assets/BLUOR-7.jpg";
import BLUOR8 from "@/assets/BLUOR-8.jpg";
import BLUOR9 from "@/assets/BLUOR-9.jpg";
import BLUOR10 from "@/assets/BLUOR-10.jpg";
import BLUOR11 from "@/assets/BLUOR-11.jpg";
import BLUOR12 from "@/assets/BLUOR-12.jpg";
import BLUOR13 from "@/assets/BLUOR-13.jpg";
import RO1 from "@/assets/RO-1.jpg";
import RO2 from "@/assets/RO-2.jpg";
import RO3 from "@/assets/RO-3.jpg";
import RO4 from "@/assets/RO-4.jpg";
import RO5 from "@/assets/RO-5.jpg";
import RO6 from "@/assets/RO-6.jpg";
import RO7 from "@/assets/RO-7.jpg";
import RO8 from "@/assets/RO-8.jpg";
import RO9 from "@/assets/RO-9.jpg";
import RO10 from "@/assets/RO-10.jpg";
import RO12 from "@/assets/RO-12.jpg";
import RO13 from "@/assets/RO-13.jpg";
import RO14 from "@/assets/RO-14.jpg";
import RO15 from "@/assets/RO-15.jpg";
import RO16 from "@/assets/RO-16.jpg";
import rvkm1 from "@/assets/rvkm-1.jpg";
import rvkm2 from "@/assets/rvkm-2.jpg";
import rvkm3 from "@/assets/rvkm-3.jpg";
import rvkm4 from "@/assets/rvkm-4.jpg";
import rvkm5 from "@/assets/rvkm-5.jpg";
import rvkm6 from "@/assets/rvkm-6.jpg";
import rvkm7 from "@/assets/rvkm-7.jpg";
import rvkm8 from "@/assets/rvkm-8.jpg";
import rvkm9 from "@/assets/rvkm-9.jpg";
import rvkm10 from "@/assets/rvkm-10.jpg";
import rvkm11 from "@/assets/rvkm-11.jpg";
import rvkm12 from "@/assets/rvkm-12.jpg";
import rvkm13 from "@/assets/rvkm-13.jpg";
import rvkm14 from "@/assets/rvkm-14.jpg";
import rvkm15 from "@/assets/rvkm-15.jpg";
import rvkm16 from "@/assets/rvkm-16.jpg";
import rvkm17 from "@/assets/rvkm-17.jpg";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  subtitle?: string;
  description: string;
  year: string;
  client?: string;
  images: string[];
  color: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  archiveOnly?: boolean;
}

export const projects: Project[] = [
  {
    id: "port-of-riga",
    title: "Port of Riga",
    tags: ["branding", "visual identity", "strategy"],
    subtitle: "Transforming the brand for international growth",
    description: "A comprehensive brand transformation for the Port of Riga, one of the Baltic region’s most important logistics and transport hubs. The project focused on developing a modern visual identity that reflects the port’s strategic role in international trade while strengthening its global presence. The system combines strong geometric forms with a flexible communication framework designed for digital platforms, infrastructure, and international promotion.",
    year: "2024",
    client: "Freeport of Riga Authority",
    images: [
      RO1,
      RO2,
      RO5,
      RO4,
      RO3,
      RO8,
      RO9,
      RO6,
      RO14,
      RO15,
      RO12,
      RO13,
      RO7,
      RO16
    ],
    color: "#FF6B6B",
    aspectRatio: "portrait",
  },
  {
    id: "bluor-bank",
    title: "BluOr Bank",
    tags: ["branding", "visual identity", "finance"],
    subtitle: "Reimagining the identity of a modern private bank",
    description: "Brand identity refresh for BluOr Bank, a contemporary financial institution serving private and corporate clients across Europe. The project focused on evolving the brand into a more modern, confident and internationally relevant visual system. The identity balances clarity and sophistication, combining refined typography, a structured visual language and a distinctive color palette designed to strengthen recognition across digital and physical environments.",
    year: "2023",
    client: "BluOr Bank",
images: [
  BLUOR1,
  BLUOR4,
  BLUOR3,
  BLUOR2,
  BLUOR7,
  BLUOR6,
  BLUOR5,
  BLUOR10,
  BLUOR9,
  BLUOR8,
  BLUOR13,
  BLUOR12,
  BLUOR11
],
    color: "#6366F1",
    aspectRatio: "landscape"
  },
{
  id: "rvkm",
  title: "Museum of Riga RVKM",
  tags: ["branding", "visual identity", "culture"],
  subtitle: "A contemporary identity for Riga’s oldest museum",
  description: "Visual identity design for the Museum of the History of Riga and Navigation, one of the oldest museums in the Baltic region. The project focused on creating a contemporary visual system that respects the institution’s rich historical heritage while improving clarity and accessibility for modern audiences. The identity combines typographic precision with a flexible graphic framework designed to support exhibitions, publications and digital communication. Photography:Sandijs Ruļuks",
  year: "2025",
  client: "Museum of Riga RVKM",
  images: [
    rvkm1,
    rvkm2,
    rvkm5,
    rvkm4,
    rvkm3,
    rvkm8,
    rvkm7,
    rvkm6,
    rvkm11,
    rvkm10,
    rvkm9,
    rvkm12,
    rvkm13,
    rvkm14,
    rvkm15,
    rvkm16,
    rvkm17
  ],
  color: "#111111",
  aspectRatio: "landscape"
},
  {
    id: "lielvards",
    title: "Lielvards",
    tags: ["branding", "visual identity", "publishing"],
    subtitle: "Visual identity for Latvia’s leading publishing house",
    description: "Brand identity development for Lielvārds, one of Latvia’s most influential educational publishing houses. The visual system was designed to reflect the company’s role in shaping modern education while maintaining clarity and adaptability across books, digital learning platforms and corporate communication. The identity balances structured typography with a flexible visual framework suited for both educational and institutional contexts.",
    year: "2024",
    client: "Lielvārds",
  images: [
  VARDS1,
  VARDS4,
  VARDS3,
  VARDS2,
  VARDS7,
  VARDS6,
  VARDS12,
  VARDS10,
  VARDS9,
  VARDS8,
  VARDS13,
  VARDS5,
  VARDS11
],
    color: "#10B981",
    aspectRatio: "portrait"
  },
  {
    id: "Lieldienas-2026",
    title: "Lieldienas 2026",
    tags: ["poster", "illustration"],
    subtitle: "Illustrations for Riga city – Spring campaign",
    description: "",
    year: "2023",
 images: [
 ARCH1
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "AMLpro",
    title: "AMLpro",
    tags: ["branding", "visual identity"],
    subtitle: "Logo for Anti-money laundering",
    description: "",
    year: "2024",
 images: [
 ARCH2
],
    color: "#8B5CF6",
    aspectRatio: "landscape",
    archiveOnly: true
  },
  {
    id: "Balticway",
    title: "BalticWay",
    tags: ["branding", "visual identity"],
    subtitle: "Visual identity",
    description: "",
    year: "2023",
 images: [
 ARCH3
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Latdev",
    title: "Latvian agency for development",
    tags: ["branding", "visual identity"],
    subtitle: "Visual identity proposal",
    description: "",
    year: "2023",
 images: [
 ARCH4
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "LVNM",
    title: "National History Museum of Latvia",
    tags: ["branding", "visual identity"],
    subtitle: "Business card proposal",
    description: "",
    year: "2023",
 images: [
 ARCH5
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Merks",
    title: "Merks majas",
    tags: ["branding", "visual identity"],
    subtitle: "Logo and sign design",
    description: "",
    year: "2023",
 images: [
 ARCH10
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "LS",
    title: "Lacplesa skvers",
    tags: ["branding", "visual identity"],
    subtitle: "Visual identity",
    description: "",
    year: "2023",
 images: [
 ARCH7
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Swiss",
    title: "Embassy of Switzerland in Latvia",
    tags: ["branding", "visual identity"],
    subtitle: "One hundread years of de iure recognition",
    description: "",
    year: "2023",
 images: [
 ARCH8
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "RTU",
    title: "RTU science centre",
    tags: ["branding", "visual identity"],
    subtitle: "Logo design",
    description: "",
    year: "2023",
 images: [
 ARCH6
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Vizium",
    title: "Vizium science centre",
    tags: ["branding", "visual identity"],
    subtitle: "Visual identity and sign design",
    description: "",
    year: "2023",
 images: [
 ARCH11
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "AOM",
    title: "Architecture of migration",
    tags: ["branding", "visual identity"],
    subtitle: "Conference identity design",
    description: "",
    year: "2023",
 images: [
 ARCH12
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Legandgo",
    title: "Leg&go",
    tags: ["branding", "visual identity"],
    subtitle: "Branding for kids balance bike",
    description: "",
    year: "2023",
 images: [
 ARCH13
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "Front",
    title: "Front",
    tags: ["branding", "visual identity"],
    subtitle: "Visual identity for handmade rug distributor",
    description: "",
    year: "2023",
 images: [
 ARCH14
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
    {
    id: "Paradox holdings",
    title: "Paradox holdings",
    tags: ["branding", "visual identity"],
    subtitle: "Branding holding company",
    description: "",
    year: "2023",
 images: [
 ARCH15
],
    color: "#000000",
    aspectRatio: "portrait",
    archiveOnly: true
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Get unique categories from all project tags
export const getCategories = (): string[] => {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
};
