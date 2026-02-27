import holographicImg from "@/assets/simon-lee-holographic.jpg";
import catImg from "@/assets/syarafina-cat.jpg";
import spheresImg from "@/assets/victoria-spheres.jpg";

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
}

export const projects: Project[] = [
  {
    id: "chromatic-dreams",
    title: "Port of Riga",
    tags: ["illustration", "digital art", "abstract"],
    subtitle: "Transforming the brand for international growth",
    description: "A series of digital illustrations exploring the interaction between geometric shapes and vibrant colors. The project emerged from a desire to translate emotions into abstract visual compositions, where each piece represents a different emotional state through specific chromatic palettes.",
    year: "2024",
    client: "Personal Project",
    images: [
      spheresImg,
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80"
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
      catImg,
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    ],
    color: "#6366F1",
    aspectRatio: "landscape"
  },
  {
    id: "typeface-manifesto",
    title: "Typeface Manifesto",
    tags: ["typography", "poster", "experimental"],
    description: "A series of experimental posters exploring the limits of typography as a form of visual expression. Each piece challenges traditional typographic conventions, transforming letters into graphic sculptures.",
    year: "2024",
    client: "ADG Brasil",
    images: [
      holographicImg,
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
    ],
    color: "#EC4899",
    aspectRatio: "portrait"
  },
  {
    id: "motion-blur",
    title: "Motion Blur",
    tags: ["motion", "digital", "animation"],
    description: "Exploration of movement and time through static imagery that suggests motion. This project captures the essence of speed and fluidity, freezing dynamic moments in visually striking compositions.",
    year: "2023",
    client: "Sports Brand",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80"
    ],
    color: "#7C3AED",
    aspectRatio: "landscape"
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
