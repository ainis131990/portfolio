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
  placeholderImg,
  placeholderImg
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
    title: "Urban Nature",
    tags: ["branding", "identity", "nature"],
    subtitle: "Bridging urban design with natural elements",
    description: "A branding project that explores the harmony between urban architecture and natural forms, creating a visual identity that celebrates the coexistence of city life and nature.",
    year: "2024",
    client: "Urban Studio",
  images: [
  placeholderImg,
  placeholderImg
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
