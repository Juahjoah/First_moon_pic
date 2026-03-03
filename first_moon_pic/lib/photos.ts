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
      description:
        "오래된 소주병은 화려함보다 익숙함을 전해준다. 맛은 거칠고 투박하지만 오래된 친구처럼 편안하게 곁을 지킨다. 단순한 구성 속에서 진로는 소박하지만 깊은 여운을 남기는 일상의 술로 자리한다.",
    },
    {
      src: "/images/commercial/commercial-004.jpg",
      title: "Grafen, Pomade Sea Water(그라펜, 수성 포마드)",
      description:
        "단단한 바위 위에 놓인 용기는 강한 고정력과 묵직한 존재감을 상징한다. 공기처럼 피어오르는 연기는 자유로운 스타일링의 이미지를 더하고, 차가운 블루 톤의 빛은 시원하고 청량한 제품의 성격을 강조한다. 대비되는 질감과 색감 속에서 제품은 더욱 또렷한 존재감을 드러낸다.",
    },
    {
      src: "/images/commercial/commercial-005.jpg",
      title: "JENNIFER LOPEZ perfume, Jennifer Lopez Glow by J.Lo",
      description:
        "따뜻한 코랄빛 속에 놓인 병은 은은한 존재감을 드러낸다. 가볍게 겹쳐진 배경은 공기처럼 부드럽게 흐르며, 향이 피부 위에서 은은하게 퍼지는 순간을 떠올리게 한다. 전체적으로 따뜻한 색감과 유연한 질감이 어우러져, 화려함보다는 부드러운 광채와 편안한 매력을 전한다.",
    },
    {
      src: "/images/commercial/commercial-006.jpg",
      title: "Ralph Lauren Polo Blue",
      description:
        "거친 나무의 질감과 투명한 물의 대비는 화면에 자연스러운 긴장감을 더한다. 물결과 물방울은 상쾌한 에너지와 생동감을 보여주며 전체적으로 차가운 색감과 생동감 있는 물의 움직임이 어우러져 자유롭고 활동적인 향수를 표현한다.",
    },
    {
      src: "/images/commercial/commercial-007.jpg",
      title: "Tanqueray No. Ten",
      description:
        "차가운 얼음 사이에 놓인 초록빛 병은 선명하고 청량하게 존재감을 드러낸다. 투명한 얼음의 질감은 차가운 온도감을 강조하고 대비되는 색과 단단한 질감 속에서 병은 또렷하게 중심을 잡으며, 전체적으로 정제되고 깔끔한 진의 이미지를 완성한다.",
    },
    {
      src: "/images/commercial/commercial-008.jpg",
      title: "Jo Malone London Lime Basil & Mandarin Body & Hand Wash",
      description:
        "어둠 속에서 은은하게 퍼지는 연기는 라임과 바질, 만다린이 어우러진 상쾌한 향이 퍼지는 순간을 연상시키고, 투명한 용기 속 노란빛 액체는 깨끗하고 산뜻한 사용감을 떠올리게 한다. 대비되는 질감과 절제된 색감이 어우러져, 자연의 신선함과 세련된 분위기를 담은 이미지를 완성한다.",
    },
    {
      src: "/images/commercial/commercial-009.jpg",
      title: "Jo Malone London Lime Basil & Mandarin Body & Hand Wash",
      description:
        "투명한 액체의 노란빛은 라임과 바질, 만다린이 어우러진 상쾌한 향을 떠올리게 하고, 주변에 맺힌 물방울은 촉촉하고 시원한 느낌을 더한다.",
    },
    {
      src: "/images/commercial/commercial-010.jpg",
      title: "Trappola Jolie Julie",
      description:
        "블랙 원단 위를 흐르는 금빛 리본은 고급스럽고 화려한 분위기를 더하며, 병의 선명한 레드 톤과 대비되어 시선을 집중시킨다. 빛을 머금은 유리와 금속 장식이 어우러져, 강렬하면서도 우아한 향의 무드를 시각적으로 완성한다.",
    },
    {
      src: "/images/commercial/commercial-011.jpg",
      title: "Acqua di Parma Colonia Essenza",
      description:
        "따뜻하게 번지는 빛은 시트러스와 우디 노트가 어우러진 콜로니아 에센자의 깊이를 암시하고, 부드러운 가죽의 질감은 성숙하고 세련된 분위기를 더한다.",
    },
    {
      src: "/images/commercial/commercial-012.jpg",
      title: "Kenneth Cole Vintage Black",
      description:
        "매트한 질감의 검은 용기와 단순한 라벨 디자인은 군더더기 없는 남성적인 분위기를 강조하고, 은은하게 퍼지는 연기는 향의 깊이와 여운을 암시한다. 전체적으로 어두운 색감과 부드러운 질감이 어우러져, 차분하면서도 세련된 향의 무드를 완성한다.",
    },
  ],
  "fine-art": [
    {
      src: "/images/fine-art/fine-art-001.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
    },
    {
      src: "/images/fine-art/fine-art-002.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
    },
    {
      src: "/images/fine-art/fine-art-003.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
    },
    {
      src: "/images/fine-art/fine-art-004.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
    },
    {
      src: "/images/fine-art/fine-art-005.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
    },
    {
      src: "/images/fine-art/fine-art-006.jpg",
      title: "잔영 (殘影)",
      description:
        "빛이 사라진 뒤에도 한동안 눈과 마음에 남아 있는 마지막 흔적을 뜻한다. 이 전시는 어둠과 빛 사이에서 드러난 꽃의 결을 통해, 사라진 색 이후에도 남아 있는 형태와 감각의 여운을 담아낸다. 화면 속 꽃들은 선명한 순간이 아니라, 빛이 스치고 지나간 뒤 조용히 남아 있는 잔상의 형태로 존재하며, 관람자의 시선 속에서 다시 한 번 호흡한다.",
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
