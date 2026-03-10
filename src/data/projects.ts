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
import placeholderImg from "@/assets/1.jpg";

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
    id: "chromatic-dreams",
    title: "Port of Riga",
    tags: ["illustration", "digital art", "abstract"],
    subtitle: "Transforming the brand for international growth",
    description: "Transforming the brand for international growth",
    year: "2024",
    client: "Personal Project",
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
    aspectRatio: "portrait"
  },
  {
    id: "flow-magazine",
    title: "BluOr Bank",
    tags: ["editorial", "magazine", "lifestyle"],
    description: "Editorial design for Flow magazine, a publication about mindfulness and well-being. The project involved creating a visual system that conveys calm and balance through generous spacing, elegant typography, and contemplative photography.",
    year: "2023",
    client: "Flow Magazine",
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
  tags: ["branding", "visual identity", "cultural"],
  subtitle: "Contemporary identity for a historic institution",
  description: "Visual identity development for Museum of Riga RVKM. The project focused on creating a modern, flexible system that respects historical context while positioning the institution for contemporary audiences.",
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
    id: "urban-nature",
    title: "Lielvards",
    tags: ["branding", "identity", "nature"],
    subtitle: "Bridging urban design with natural elements",
    description: "A branding project that explores the harmony between urban architecture and natural forms, creating a visual identity that celebrates the coexistence of city life and nature.",
    year: "2024",
    client: "Urban Studio",
  images: [
  VARDS1,
  VARDS2,
  VARDS3,
  VARDS4,
  VARDS5,
  VARDS6,
  VARDS7,
  VARDS8,
  VARDS9,
  VARDS10,
  VARDS11,
  VARDS12,
  VARDS13
],
    color: "#10B981",
    aspectRatio: "portrait"
  },
  {
    id: "botanical-forms",
    title: "Botanical Forms",
    tags: ["photography", "nature", "editorial"],
    subtitle: "Exploring organic patterns in flora",
    description: "A photographic study of botanical structures and their intricate patterns, revealing the hidden geometry of the natural world.",
    year: "2023",
    client: "Nature Press",
    images: [
  placeholderImg,
  placeholderImg
],
    color: "#F59E0B",
    aspectRatio: "portrait",
    archiveOnly: true
  },
  {
    id: "silent-observers",
    title: "Silent Observers",
    tags: ["photography", "wildlife", "documentary"],
    subtitle: "Wildlife in their natural habitat",
    description: "A documentary photography series capturing wildlife in undisturbed moments, exploring the quiet dignity of animals in their natural environments.",
    year: "2024",
    client: "Wildlife Foundation",
 images: [
  placeholderImg,
  placeholderImg
],
    color: "#8B5CF6",
    aspectRatio: "landscape",
    archiveOnly: true
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Get unique categories from all project tags
export const getCategories = (): string[] => {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
};
