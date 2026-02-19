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
      title: "ck all perfume",
      description:
        "부드러운 빛과 천의 결 위에 놓인 순백의 병은 향수의 낄끔하고 젠더리스한 아이덴티티를 보여준다. 군더더기 없는 형태와 절제된 로고는 누구에게나 자연스럽게 어울리는 느낌을 전달하고 향을 넘어 미니멀리즘이 만들어내는 현대적인 감각을 시각적으로 제시한다.",
    },
    {
      src: "/images/commercial/commercial-002.jpg",
      title: "Montblanc perfume, Montblanc Explorer",
      description:
        "어둡게 가라앉은 배경과 거친 나무 위에 놓인 병은 깊고 묵직한 향을 조용히 보여준다. 간결한 디자인 속에서 신뢰와 강인함을 전한다. 질감을 지닌 나무와 어두운 톤의 화면은 탐험적인 분위기를 더해 전체적으로 절제된 색감과 견고한 소재가 어우러져 깊이와 모험심이 공존하는 모습을 완성한다.",
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
      title: "JENNIFER LOPEZ perfume, Jennifer Lopez Glow by J.Lo",
      description:
        "따뜻한 코랄빛 속에 놓인 병은 은은한 존재감을 드러낸다. 가볍게 겹쳐진 배경은 공기처럼 부드럽게 흐르며, 향이 피부 위에서 은은하게 퍼지는 순간을 떠올리게 한다. 전체적으로 따뜻한 색감과 유연한 질감이 어우러져, 화려함보다는 부드러운 광채와 편안한 매력을 전한다.",
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
