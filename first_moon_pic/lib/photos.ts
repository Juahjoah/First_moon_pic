import type { CategoryId } from "./categories";

export interface Photo {
  src: string;
  title: string;
  description: string;
}

export const photos: Record<Exclude<CategoryId, "all">, Photo[]> = {
  commercial: [
    {
      src: "/images/commercial/commercial-001.jpg",
      title: "ck perfume",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-002.jpg",
      title: "Montblanc perfume",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-003.jpg",
      title: "Jinro soju",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-004.jpg",
      title: "Grafen, Pomade Sea Water(그라펜, 수성 포마드)",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-005.jpg",
      title: "JENNIFER LOPEZ perfume",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-006.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-007.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-008.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-009.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-010.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-011.jpg",
      title: "",
      description: "product shot",
    },
    {
      src: "/images/commercial/commercial-012.jpg",
      title: "",
      description: "product shot",
    },
  ],
  "fine-art": [
    {
      src: "/images/fine-art/fine-art-001.jpg",
      title: "",
      description: "",
    },
    {
      src: "/images/fine-art/fine-art-002.jpg",
      title: "",
      description: "",
    },
    {
      src: "/images/fine-art/fine-art-003.jpg",
      title: "",
      description: "",
    },
        {
      src: "/images/fine-art/fine-art-004.jpg",
      title: "",
      description: "",
    },
        {
      src: "/images/fine-art/fine-art-005.jpg",
      title: "",
      description: "",
    },
        {
      src: "/images/fine-art/fine-art-006.jpg",
      title: "",
      description: "",
    },

  ],
  fashion: [
    {
      src: "/images/fashion/fashion-001.jpg",
      title: "Black dress",
      description: "full body shot",
    },
    {
      src: "/images/fashion/fashion-002.jpg",
      title: "Black dress 02",
      description: "full body shot",
    },
    {
      src: "/images/fashion/fashion-003.jpg",
      title: "Black dress 03",
      description: "side shot",
    },
  ],
};
