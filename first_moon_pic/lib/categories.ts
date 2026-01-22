export const categories = [
  {
    id: "all",
    label: "All",
    description: "전체 작품",
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "제품 및 광고 촬영",
  },
  {
    id: "fashion",
    label: "Fashion",
    description: "패션 사진",
  },
  {
    id: "fine-art",
    label: "Fine Art",
    description: "개인 작업 및 순수 사진",
  },
] as const;

export type CategoryId = "all" | "commercial" | "fashion" | "fine-art";

