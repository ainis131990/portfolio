import placeholderImg from "@/assets/1.jpg";
import holographicImg from "@/assets/simon-lee-holographic.jpg";
import catImg from "@/assets/syarafina-cat.jpg";
import spheresImg from "@/assets/victoria-spheres.jpg";
import birdImg from "@/assets/nypl-bird.jpg";
import floralImg from "@/assets/kasturi-roy-floral.jpg";
import deerImg from "@/assets/omk-deer.jpg";

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
    description: "A series of digital illustrations exploring the interaction between geometric shapes and vibrant colors. The project emerged from a desire to translate emotions into abstract visual compositions, where each piece represents a different emotional state through specific chromatic palettes.",
    year: "2024",
    client: "Personal Project",
    images: [
      placeholderImg,
      placeholderImg,
      placeholderImg
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
    images: [placeholderImg],
      catImg,
      "placeholderImg,/photo-1506905925346-21bda4d32df4?w=800&q=80"
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
    images: [placeholderImg],
      holographicImg,
      "placeholderImg,/photo-1559028012-481c04fa702d?w=800&q=80"
    ],
    color: "#EC4899",
    aspectRatio: "portrait"
  },
  {
    id: "urban-nature",
    title: "Urban Nature",
    tags: ["branding", "identity", "nature"],
    subtitle: "Bridging urban design with natural elements",
    description: "A branding project that explores the harmony between urban architecture and natural forms, creating a visual identity that celebrates the coexistence of city life and nature.",
    year: "2024",
    client: "Urban Studio",
    images: [placeholderImg],
      birdImg,
      "placeholderImg,/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
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
    images: [placeholderImg],
      floralImg,
      "placeholderImg,/photo-1490750967868-88aa4f44baee?w=800&q=80"
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
    images: [placeholderImg],
      deerImg,
      "placeholderImg,/photo-1474511320723-9a56873571b7?w=800&q=80"
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
