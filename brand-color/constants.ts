
import { ColorInfo, CombinationExample } from './types';

export const BRAND_COLORS: ColorInfo[] = [
  {
    name: "Heritage Red (Primary)",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "White, Silk Cream Gold",
    wcag: "5.8:1 (vs White) - Pass (AA)"
  },
  {
    name: "Deep Burgundy (Dark BG)",
    hex: "#2D0B0B",
    rgb: "45, 11, 11",
    usage: "프리미엄 다크 테마 배경, 묵직한 신뢰감",
    twClass: "bg-[#2D0B0B]",
    combinations: "Champagne Gold, White",
    wcag: "16.5:1 (vs White) - Pass (AAA)"
  },
  {
    name: "Frost White (Minimal)",
    hex: "#FDFBF7",
    rgb: "253, 251, 247",
    usage: "초저채도 골드, 프로스트 샴페인 테마 베이스",
    twClass: "bg-[#FDFBF7]",
    combinations: "Heritage Red, Gold Border",
    wcag: "1.05:1 (vs White) - BG only"
  },
  {
    name: "Pearl Vanilla (Light)",
    hex: "#FFFDF0",
    rgb: "255, 253, 240",
    usage: "따뜻한 화이트, 라이트 테마 베이스",
    twClass: "bg-[#FFFDF0]",
    combinations: "Heritage Red",
    wcag: "1.1:1 (vs White) - BG only"
  },
  {
    name: "Champagne Gold (Accent)",
    hex: "#EBDE9A",
    rgb: "235, 222, 154",
    usage: "배지, 포인트 보더, 다크 테마 텍스트",
    twClass: "bg-[#EBDE9A]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.4:1 (vs White) - UI only"
  },
  {
    name: "Modern Dark (BG Dark)",
    hex: "#1A1A1A",
    rgb: "26, 26, 26",
    usage: "푸터, 다크 모드 배경",
    twClass: "bg-[#1A1A1A]",
    combinations: "Silk Cream Gold, White",
    wcag: "16.2:1 (vs White) - Pass (AAA)"
  },
  {
    name: "Red Noir Fade (Gradient)",
    hex: "Gradient",
    rgb: "Mixed",
    usage: "다크 누아르 효과, 135도 선형",
    twClass: "",
    isGradient: true,
    gradientValue: "linear-gradient(135deg, #1A1A1A 0%, #4A0E0E 100%)",
    combinations: "Gold Text, White Badge",
    wcag: "Visual Only"
  },
  {
    name: "Diagonal Silk (Layout)",
    hex: "Gradient",
    rgb: "Mixed",
    usage: "135도 사선 적용 (Vanilla to White)",
    twClass: "",
    isGradient: true,
    gradientValue: "linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 60%)",
    combinations: "Clean Layouts",
    wcag: "Visual Only"
  }
];

export const COMBINATIONS: CombinationExample[] = [
  // LIGHT CATEGORY
  {
    title: "L1. 모던 화이트 & 샴페인",
    description: "청결함과 신뢰를 강조하는 표준 라이트 조합입니다. 깔끔한 첫인상을 주어야 하는 메인 상단에 적합합니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#D9480F",
    bg: "#FFFFFF",
    text: "#0F172A",
    category: 'light'
  },
  {
    title: "L2. 펄 바닐라 다이아고날",
    description: "#FFFDF0에서 #FFFFFF로 흐르는 135도 사선 그래디언트로 세련된 입체감을 부여합니다. 콘텐츠가 많은 상세 페이지 배경으로 추천합니다.",
    primary: "#9E1B1B",
    secondary: "#FDFBF7",
    accent: "#B59410",
    bg: "linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 60%)",
    text: "#0F172A",
    category: 'light',
    isBgGradient: true,
    bgGradient: "linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 60%)"
  },
  {
    title: "L3. 선셋 리니어 페이드",
    description: "좌측(White)에서 우측(#FFF9E6)으로 부드럽게 연결되는 수평 페이드입니다. 가로로 흐르는 텍스트 레이아웃에 안정감을 더해줍니다.",
    primary: "#9E1B1B",
    secondary: "#F2E1A1",
    accent: "#FFFFFF",
    bg: "linear-gradient(to right, #FFFFFF 30%, #FFF9E6 100%)",
    text: "#0F172A",
    category: 'light',
    isBgGradient: true,
    bgGradient: "linear-gradient(to right, #FFFFFF 30%, #FFF9E6 100%)"
  },
  {
    title: "L4. 순백의 샴페인 실크",
    description: "상단의 순백색(#FFFFFF)에서 하단의 프로스트 화이트(#FDFBF7)로 침잠하는 수직 페이드입니다. 정갈한 여백미를 강조하여 프리미엄 리스트 섹션에 사용하기 좋습니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#FDFBF7",
    bg: "linear-gradient(to bottom, #FFFFFF 0%, #FDFBF7 100%)",
    text: "#0F172A",
    category: 'light',
    isBgGradient: true,
    bgGradient: "linear-gradient(to bottom, #FFFFFF 0%, #FDFBF7 100%)"
  },
  {
    title: "L5. 프로스트 샴페인 (Minimal)",
    description: "초저채도 골드(#FDFBF7)를 베이스로 여백의 미를 살려 정직함과 신뢰를 강조한 미니멀 조합입니다. 브랜드의 정직함을 전달할 때 효과적입니다.",
    primary: "#9E1B1B",
    secondary: "#F8F5F0",
    accent: "#EBDE9A",
    bg: "#FDFBF7",
    text: "#0F172A",
    category: 'light'
  },
  {
    title: "L6. 수줍은 노을의 약속",
    description: "수평으로 흐르는 미세한 붉은 기운이 사용자에게 편안한 안정감과 브랜드의 역동성을 동시에 전달합니다. 감성적인 스토리텔링 섹션에 적합합니다.",
    primary: "#9E1B1B",
    secondary: "#FFFDF0",
    accent: "#EBDE9A",
    bg: "linear-gradient(to right, #FFFDF0 0%, rgba(158, 27, 27, 0.04) 50%, #FDFBF7 100%)",
    text: "#2D0B0B",
    category: 'light',
    isBgGradient: true,
    bgGradient: "linear-gradient(to right, #FFFDF0 0%, rgba(158, 27, 27, 0.04) 50%, #FDFBF7 100%)"
  },
  {
    title: "L7. 헤리티지 블러썸 페이드",
    description: "새벽녘의 붉은 기운을 닮은 부드러운 페이드 효과입니다. 원육의 신선함을 강조하거나 프리미엄 메뉴를 돋보이게 할 때 탁월합니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#2D0B0B",
    bg: "linear-gradient(105deg, #FFFDF0 0%, #FDFBF7 60%, rgba(158, 27, 27, 0.08) 100%)",
    text: "#0F172A",
    category: 'light',
    isBgGradient: true,
    bgGradient: "linear-gradient(105deg, #FFFDF0 0%, #FDFBF7 60%, rgba(158, 27, 27, 0.08) 100%)"
  },
  {
    title: "L8. 선홍빛 새벽의 온기",
    description: "중앙에서 퍼져나가는 아주 연한 선홍빛의 방사형 그라디언트입니다. 브랜드의 생명력과 따스한 온기를 시각적으로 연출합니다.",
    primary: "#9E1B1B",
    secondary: "#FDFBF7",
    accent: "#EBDE9A",
    bg: "radial-gradient(circle at center, rgba(158, 27, 27, 0.06) 0%, #FFFDF0 70%)",
    text: "#0F172A",
    category: 'light',
    isBgGradient: true,
    bgGradient: "radial-gradient(circle at center, rgba(158, 27, 27, 0.06) 0%, #FFFDF0 70%)"
  },
  // DARK CATEGORY
  {
    title: "D1. 프리미엄 다크 골드",
    description: "모던 블랙(#1A1A1A) 위에 골드 텍스트를 배치한 정석적인 프리미엄 조합입니다. 고수익의 권위와 품격을 표현합니다.",
    primary: "#EBDE9A",
    secondary: "#B59410",
    accent: "#9E1B1B",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    category: 'dark'
  },
  {
    title: "D2. 임페리얼 레드 누아르",
    description: "#1A1A1A에서 #4A0E0E로 흐르는 135도 사선 페이드로 강력한 시각적 인상을 남깁니다. 가맹 문의 버튼과 같은 핵심 행동 유도 섹션에 적합합니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "linear-gradient(135deg, #1A1A1A 0%, #4A0E0E 100%)",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "linear-gradient(135deg, #1A1A1A 0%, #4A0E0E 100%)"
  },
  {
    title: "D3. 심연의 타오름 (Embers)",
    description: "어둠 속에서 타오르는 잉어불처럼 은은한 레드 글로우를 배치했습니다. 묵직한 무게감과 브랜드의 열정을 동시에 보여주는 다층 그라디언트입니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(at 10% 20%, rgba(158, 27, 27, 0.25) 0px, transparent 40%), radial-gradient(at 80% 50%, rgba(235, 222, 154, 0.1) 0px, transparent 40%), #1A1A1A",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "radial-gradient(at 10% 20%, rgba(158, 27, 27, 0.25) 0px, transparent 40%), radial-gradient(at 80% 50%, rgba(235, 222, 154, 0.1) 0px, transparent 40%), #1A1A1A"
  },
  {
    title: "D4. 미드나잇 헤리티지",
    description: "좌상단 방사형(Radial) 레드 광채가 블랙 배경과 만나는 드라마틱한 연출입니다. 브랜드의 자부심을 상징적으로 표현할 때 효과적입니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(circle at top left, #3D0A0A 0%, #1A1A1A 100%)",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "radial-gradient(circle at top left, #3D0A0A 0%, #1A1A1A 100%)"
  },
  {
    title: "D5. 미드나잇 오로라 메시",
    description: "3색 다층적 오로라 효과가 현대적이고 감각적인 분위기를 조성합니다. 브랜드 홍보 영상의 배경이나 메인 시네마틱 섹션에 최적입니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(at 0% 0%, rgba(158, 27, 27, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(235, 222, 154, 0.1) 0px, transparent 50%), #1A1A1A",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "radial-gradient(at 0% 0%, rgba(158, 27, 27, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(235, 222, 154, 0.1) 0px, transparent 50%), #1A1A1A"
  },
  {
    title: "D6. 금빛 성류석의 잔상",
    description: "좌상단에 샴페인 골드의 빛 번짐(Glow)을 추가하여 성공의 광채를 표현했습니다. 깊이감을 유지하면서도 시선을 명확하게 집중시키는 효과가 있습니다.",
    primary: "#EBDE9A",
    secondary: "#2D0B0B",
    accent: "#FFFFFF",
    bg: "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%), radial-gradient(at 0% 0%, rgba(235, 222, 154, 0.15) 0px, transparent 50%)",
    text: "#EBDE9A",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%), radial-gradient(at 0% 0%, rgba(235, 222, 154, 0.15) 0px, transparent 50%)"
  },
  {
    title: "D7. 명장의 버건디 묵향",
    description: "Deep Burgundy를 메인으로 활용한 압도적 무게감입니다. 전문적인 원육 숙성 노하우나 브랜드의 핵심 가치를 전달하는 섹션에 사용하십시오.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(circle at 50% 50%, #3D0A0A 0%, #2D0B0B 100%)",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "radial-gradient(circle at 50% 50%, #3D0A0A 0%, #2D0B0B 100%)"
  },
  {
    title: "D8. 성공의 붉은 나침반",
    description: "코닉 그라디언트를 활용하여 중심에서 뻗어 나가는 현대적 시각 효과를 줍니다. 본사의 비전이나 확장성을 보여주는 미래 지향적 페이지에 적합합니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "conic-gradient(from 45deg at 50% 50%, #1A1A1A, #2D0B0B, #9E1B1B, #2D0B0B, #1A1A1A)",
    text: "#FFFFFF",
    category: 'dark',
    isBgGradient: true,
    bgGradient: "conic-gradient(from 45deg at 50% 50%, #1A1A1A, #2D0B0B, #9E1B1B, #2D0B0B, #1A1A1A)"
  }
];
