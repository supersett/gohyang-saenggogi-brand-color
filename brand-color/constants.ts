import { ColorInfo, CombinationExample } from "./types";

// ============================================
// 색상 세트 선택 설정
// ============================================
// 색상 세트 타입 정의
export type ColorSetName =
  | "BRAND_COLORS"
  | "BRAND_COLORS1"
  | "BRAND_COLORS2"
  | "BRAND_COLORS3"
  | "BRAND_COLORS_V1"
  | "BRAND_COLORS_V2"
  | "BRAND_COLORS_V3"
  | "BRAND_COLORS_V4"
  | "BRAND_COLORS_V5"
  | "BRAND_COLORS_V6"
  | "BRAND_COLORS_V7";

// 앱 전체의 기본 색상 세트 (App.tsx에서 사용)
export const DEFAULT_COLOR_SET: ColorSetName = "BRAND_COLORS";

// 'BRAND_COLORS' | 'BRAND_COLORS2' | 'BRAND_COLORS3' 중 선택
export const ACTIVE_COLOR_SET: ColorSetName = "BRAND_COLORS";

export const BRAND_COLORS: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Pale Gold",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#D4AF37",
    rgb: "212, 175, 55",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#D4AF37]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.1:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#EBDE9A",
    rgb: "235, 222, 154",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#EBDE9A]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.4:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFFDF0",
    rgb: "255, 253, 240",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFFDF0]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.1:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#1A1A1A",
    rgb: "26, 26, 26",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#1A1A1A]",
    combinations: "Pale Gold, Pure White",
    wcag: "16.2:1 (vs White) - Pass (AAA)",
  },

  {
    name: "Deep Burgundy",
    hex: "#2D0B0B",
    rgb: "45, 11, 11",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#2D0B0B]",
    combinations: "Champagne Gold, Pure White",
    wcag: "16.5:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#0F172A",
    rgb: "15, 23, 42",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#0F172A]",
    combinations: "Cream White, Pure White",
    wcag: "15.8:1 (vs Cream White) - Pass (AAA)",
  },
];

export const BRAND_COLORS1: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Pale Gold",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#D4AF37",
    rgb: "212, 175, 55",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#D4AF37]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.1:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#EBDE9A",
    rgb: "235, 222, 154",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#EBDE9A]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.4:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFFAEB", // 중간 크림 (더 밸런스)
    rgb: "255, 250, 235",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFFAEB]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.08:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#1A1A1A",
    rgb: "26, 26, 26",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#1A1A1A]",
    combinations: "Pale Gold, Pure White",
    wcag: "16.2:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Burgundy",
    hex: "#240808", // 중간 버건디 (적당한 깊이)
    rgb: "36, 8, 8",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#240808]",
    combinations: "Champagne Gold, Pure White",
    wcag: "17.3:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#0F172A",
    rgb: "15, 23, 42",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#0F172A]",
    combinations: "Cream White, Pure White",
    wcag: "15.8:1 (vs Cream White) - Pass (AAA)",
  },
];

export const BRAND_COLORS2: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Pale Gold",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },

  {
    name: "Champagne Gold",
    hex: "#D4AF37",
    rgb: "212, 175, 55",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#D4AF37]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.1:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#EBDE9A",
    rgb: "235, 222, 154",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#EBDE9A]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.4:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFF8DC", // 기존보다 더 노란 톤
    rgb: "255, 248, 220",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFF8DC]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.05:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#1A1A1A",
    rgb: "26, 26, 26",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#1A1A1A]",
    combinations: "Pale Gold, Pure White",
    wcag: "16.2:1 (vs White) - Pass (AAA)",
  },

  {
    name: "Deep Burgundy",
    hex: "#1A0505", // 거의 검정에 가까운 버건디
    rgb: "26, 5, 5",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#1A0505]",
    combinations: "Champagne Gold, Pure White",
    wcag: "18.2:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#0F172A",
    rgb: "15, 23, 42",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#0F172A]",
    combinations: "Cream White, Pure White",
    wcag: "15.8:1 (vs Cream White) - Pass (AAA)",
  },
];

export const BRAND_COLORS3: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Pale Gold",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },

  {
    name: "Champagne Gold",
    hex: "#D4AF37",
    rgb: "212, 175, 55",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#D4AF37]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.1:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#EBDE9A",
    rgb: "235, 222, 154",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#EBDE9A]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.4:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFF4CD", // 더 진한 골드빛 크림
    rgb: "255, 244, 205",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFF4CD]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.08:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#1A1A1A",
    rgb: "26, 26, 26",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#1A1A1A]",
    combinations: "Pale Gold, Pure White",
    wcag: "16.2:1 (vs White) - Pass (AAA)",
  },

  {
    name: "Deep Burgundy",
    hex: "#0D0202", // 완전히 검정에 가까움
    rgb: "13, 2, 2",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#0D0202]",
    combinations: "Champagne Gold, Pure White",
    wcag: "19.8:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#0F172A",
    rgb: "15, 23, 42",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#0F172A]",
    combinations: "Cream White, Pure White",
    wcag: "15.8:1 (vs Cream White) - Pass (AAA)",
  },
];

// VERSION 1 - Modern Purple Gradient
export const BRAND_COLORS_V1: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Deep Purple",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#961949",
    rgb: "150, 25, 73",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#961949]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "6.2:1 (vs White) - Pass (AA)",
  },
  {
    name: "Pale Gold",
    hex: "#7A3068",
    rgb: "122, 48, 104",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#7A3068]",
    combinations: "Heritage Red, Deep Text",
    wcag: "7.8:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Cream White",
    hex: "#F5F3F8",
    rgb: "245, 243, 248",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#F5F3F8]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.05:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#34476B",
    rgb: "52, 71, 107",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#34476B]",
    combinations: "Pale Gold, Pure White",
    wcag: "6.5:1 (vs White) - Pass (AA)",
  },
  {
    name: "Deep Burgundy",
    hex: "#2F4858",
    rgb: "47, 72, 88",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#2F4858]",
    combinations: "Champagne Gold, Pure White",
    wcag: "8.1:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#534073",
    rgb: "83, 64, 115",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#534073]",
    combinations: "Cream White, Pure White",
    wcag: "8.9:1 (vs White) - Pass (AAA)",
  },
];

// VERSION 2 - Soft Lavender Dream
export const BRAND_COLORS_V2: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Soft Lavender",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#ABA5DC",
    rgb: "171, 165, 220",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#ABA5DC]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.8:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#F2ECFF",
    rgb: "242, 236, 255",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#F2ECFF]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.04:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FAFAFE",
    rgb: "250, 250, 254",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FAFAFE]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.01:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#777395",
    rgb: "119, 115, 149",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#777395]",
    combinations: "Pale Gold, Pure White",
    wcag: "3.8:1 (vs White) - Pass (AA for UI)",
  },
  {
    name: "Deep Burgundy",
    hex: "#4A4661",
    rgb: "74, 70, 97",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#4A4661]",
    combinations: "Champagne Gold, Pure White",
    wcag: "7.2:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#2D2A3D",
    rgb: "45, 42, 61",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#2D2A3D]",
    combinations: "Cream White, Pure White",
    wcag: "12.8:1 (vs White) - Pass (AAA)",
  },
];

// VERSION 3 - Warm Terracotta
export const BRAND_COLORS_V3: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Soft Peach",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#BB8379",
    rgb: "187, 131, 121",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#BB8379]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.4:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#FFF4EF",
    rgb: "255, 244, 239",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#FFF4EF]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.02:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#F3EED9",
    rgb: "243, 238, 217",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#F3EED9]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.12:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#3D2E2A",
    rgb: "61, 46, 42",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#3D2E2A]",
    combinations: "Pale Gold, Pure White",
    wcag: "11.5:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Burgundy",
    hex: "#2A1D1A",
    rgb: "42, 29, 26",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#2A1D1A]",
    combinations: "Champagne Gold, Pure White",
    wcag: "15.2:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#4A3530",
    rgb: "74, 53, 48",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#4A3530]",
    combinations: "Cream White, Pure White",
    wcag: "10.8:1 (vs F3EED9) - Pass (AAA)",
  },
];

// VERSION 4 - Dusty Rose Elegance
export const BRAND_COLORS_V4: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Dusty Rose",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#D19FA0",
    rgb: "209, 159, 160",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#D19FA0]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.9:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#F5E5E6",
    rgb: "245, 229, 230",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#F5E5E6]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.06:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFF9F9",
    rgb: "255, 249, 249",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFF9F9]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.01:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#A96467",
    rgb: "169, 100, 103",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#A96467]",
    combinations: "Pale Gold, Pure White",
    wcag: "2.8:1 (vs White) - UI only",
  },
  {
    name: "Deep Burgundy",
    hex: "#574142",
    rgb: "87, 65, 66",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#574142]",
    combinations: "Champagne Gold, Pure White",
    wcag: "8.4:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#3A2829",
    rgb: "58, 40, 41",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#3A2829]",
    combinations: "Cream White, Pure White",
    wcag: "13.5:1 (vs White) - Pass (AAA)",
  },
];


// VERSION 5 - Coral Lavender Fusion
export const BRAND_COLORS_V5: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Soft Coral",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#B27166",
    rgb: "178, 113, 102",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#B27166]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "2.6:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#FFE5DC",
    rgb: "255, 229, 220",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#FFE5DC]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.08:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#F8F6FF",
    rgb: "248, 246, 255",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#F8F6FF]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.02:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#ABA5DC",
    rgb: "171, 165, 220",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#ABA5DC]",
    combinations: "Pale Gold, Pure White",
    wcag: "1.8:1 (vs White) - UI only",
  },
  {
    name: "Deep Burgundy",
    hex: "#6B6590",
    rgb: "107, 101, 144",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#6B6590]",
    combinations: "Champagne Gold, Pure White",
    wcag: "4.2:1 (vs White) - Pass (AA)",
  },
  {
    name: "Deep Text",
    hex: "#2D2838",
    rgb: "45, 40, 56",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#2D2838]",
    combinations: "Cream White, Pure White",
    wcag: "12.9:1 (vs White) - Pass (AAA)",
  },
];

// VERSION 6 - Mint Peach Harmony
export const BRAND_COLORS_V6: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Soft Peach",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#E09A8E",
    rgb: "224, 154, 142",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#E09A8E]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.7:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#D1E7E0",
    rgb: "209, 231, 224",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#D1E7E0]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.15:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#F3EED9",
    rgb: "243, 238, 217",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#F3EED9]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.12:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#4A6B60",
    rgb: "74, 107, 96",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#4A6B60]",
    combinations: "Pale Gold, Pure White",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Deep Burgundy",
    hex: "#2D4339",
    rgb: "45, 67, 57",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#2D4339]",
    combinations: "Champagne Gold, Pure White",
    wcag: "10.2:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#1F2D27",
    rgb: "31, 45, 39",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#1F2D27]",
    combinations: "Cream White, Pure White",
    wcag: "14.8:1 (vs F3EED9) - Pass (AAA)",
  },
];

// VERSION 7 - Bold Red Spectrum
export const BRAND_COLORS_V7: ColorInfo[] = [
  {
    name: "Heritage Red",
    hex: "#9E1B1B",
    rgb: "158, 27, 27",
    usage: "브랜드 아이덴티티, 핵심 강조, 메인 버튼",
    twClass: "bg-[#9E1B1B]",
    combinations: "Pure White, Bright Coral",
    wcag: "5.8:1 (vs White) - Pass (AA)",
  },
  {
    name: "Champagne Gold",
    hex: "#FF8C79",
    rgb: "255, 140, 121",
    usage: "하이엔드 포인트, 럭셔리 악센트, 중요 지표",
    twClass: "bg-[#FF8C79]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.5:1 (vs White) - UI only",
  },
  {
    name: "Pale Gold",
    hex: "#FFCFC7",
    rgb: "255, 207, 199",
    usage: "배지, 부드러운 하이라이트, 보조 버튼",
    twClass: "bg-[#FFCFC7]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.2:1 (vs White) - UI only",
  },
  {
    name: "Cream White",
    hex: "#FFF5F3",
    rgb: "255, 245, 243",
    usage: "라이트모드 메인 배경, 따뜻한 청결함",
    twClass: "bg-[#FFF5F3]",
    combinations: "Heritage Red, Deep Text",
    wcag: "1.03:1 (vs White) - BG only",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    usage: "다크모드 텍스트, 카드 배경, 여백",
    twClass: "bg-[#FFFFFF]",
    combinations: "Modern Dark, Heritage Red",
    wcag: "1.0:1 - Base",
  },
  {
    name: "Modern Dark",
    hex: "#AD2B26",
    rgb: "173, 43, 38",
    usage: "다크모드 메인 배경, 푸터, 강한 대비",
    twClass: "bg-[#AD2B26]",
    combinations: "Pale Gold, Pure White",
    wcag: "5.2:1 (vs White) - Pass (AA)",
  },
  {
    name: "Deep Burgundy",
    hex: "#7D0000",
    rgb: "125, 0, 0",
    usage: "프리미엄 다크 배경, 묵직한 신뢰감 형성",
    twClass: "bg-[#7D0000]",
    combinations: "Champagne Gold, Pure White",
    wcag: "8.9:1 (vs White) - Pass (AAA)",
  },
  {
    name: "Deep Text",
    hex: "#710000",
    rgb: "113, 0, 0",
    usage: "라이트모드 메인 텍스트, 가독성 확보",
    twClass: "bg-[#710000]",
    combinations: "Cream White, Pure White",
    wcag: "9.8:1 (vs White) - Pass (AAA)",
  },
];
// ============================================
// 색상 세트 유틸리티 함수
// ============================================

/**
 * 현재 활성화된 색상 세트를 반환합니다.
 */
export const getActiveBrandColors = (): ColorInfo[] => {
  const colorSetName: ColorSetName = ACTIVE_COLOR_SET;

  if (colorSetName === "BRAND_COLORS") return BRAND_COLORS;
  if (colorSetName === "BRAND_COLORS1") return BRAND_COLORS1;
  if (colorSetName === "BRAND_COLORS2") return BRAND_COLORS2;
  if (colorSetName === "BRAND_COLORS3") return BRAND_COLORS3;
  if (colorSetName === "BRAND_COLORS_V1") return BRAND_COLORS_V1;
  if (colorSetName === "BRAND_COLORS_V2") return BRAND_COLORS_V2;
  if (colorSetName === "BRAND_COLORS_V3") return BRAND_COLORS_V3;
  if (colorSetName === "BRAND_COLORS_V4") return BRAND_COLORS_V4;
  if (colorSetName === "BRAND_COLORS_V5") return BRAND_COLORS_V5;
  if (colorSetName === "BRAND_COLORS_V6") return BRAND_COLORS_V6;
  if (colorSetName === "BRAND_COLORS_V7") return BRAND_COLORS_V7;

  return BRAND_COLORS;
};

/**
 * ColorInfo 배열을 Tailwind config 형태로 변환합니다.
 */
export const convertToTailwindColors = (colors: ColorInfo[]) => {
  const colorMap: Record<string, string> = {};

  colors.forEach((color) => {
    // 색상 이름을 kebab-case로 변환
    const key = color.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    colorMap[key] = color.hex;
  });

  return colorMap;
};

/**
 * SampleLanding.tsx에서 사용하는 형태의 색상 매핑을 반환합니다.
 * 기존 클래스명(brand-red, brand-cream 등)과 호환됩니다.
 */
export const getTailwindBrandColors = (
  colorSet: ColorInfo[] = getActiveBrandColors()
) => {
  // 색상 세트에서 필요한 색상 찾기
  const heritageRed =
    colorSet.find((c) => c.name === "Heritage Red")?.hex || "#9E1B1B";
  const champagneGold =
    colorSet.find((c) => c.name === "Champagne Gold")?.hex || "#D4AF37";
  const paleGold =
    colorSet.find((c) => c.name === "Pale Gold")?.hex || "#EBDE9A";
  const creamWhite =
    colorSet.find((c) => c.name === "Cream White")?.hex || "#FFFDF0";
  const pureWhite =
    colorSet.find((c) => c.name === "Pure White")?.hex || "#FFFFFF";
  const modernDark =
    colorSet.find((c) => c.name === "Modern Dark")?.hex || "#1A1A1A";
  const deepBurgundy =
    colorSet.find((c) => c.name === "Deep Burgundy")?.hex || "#2D0B0B";
  const deepText =
    colorSet.find((c) => c.name === "Deep Text")?.hex || "#0F172A";

  return {
    red: heritageRed,
    burgundy: deepBurgundy,
    champagne: champagneGold,
    palegold: paleGold,
    dark: modernDark,
    cream: creamWhite,
    white: pureWhite,
    deepText: deepText,
  };
};

/**
 * 모든 색상 세트 목록을 반환합니다.
 */
export const getAllColorSets = () => ({
  BRAND_COLORS,
  BRAND_COLORS1,
  BRAND_COLORS2,
  BRAND_COLORS3,
  BRAND_COLORS_V1,
  BRAND_COLORS_V2,
  BRAND_COLORS_V3,
  BRAND_COLORS_V4,
  BRAND_COLORS_V5,
  BRAND_COLORS_V6,
  BRAND_COLORS_V7,
});

export const COMBINATIONS: CombinationExample[] = [
  // LIGHT CATEGORY
  {
    title: "L1. 클래식 헤리티지 화이트",
    description:
      "순백색 배경에 메인 레드와 딥 텍스트를 배치하여 정갈한 가독성을 제공합니다. 브랜드 소개 및 정보 전달용 표준 조합입니다.",
    primary: "#9E1B1B",
    secondary: "#D4AF37",
    accent: "#0F172A",
    bg: "#FFFFFF",
    text: "#0F172A",
    category: "light",
  },
  {
    title: "L2. 크림 바닐라 다이아고날",
    description:
      "Cream White(#FFFDF0)에서 Pure White로 흐르는 135도 사선 페이드 효과입니다. 단조로움을 피하면서 고급스러운 깊이감을 줍니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#D4AF37",
    bg: "linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 60%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient: "linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 60%)",
  },
  {
    title: "L3. 선셋 리니어 수평 페이드",
    description:
      "좌측 Pure White에서 우측 Cream White로 부드럽게 연결되는 수평 그라디언트입니다. 텍스트 흐름에 따른 시선 이동을 자연스럽게 유도합니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#D4AF37",
    bg: "linear-gradient(to right, #FFFFFF 30%, #FFFDF0 100%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient: "linear-gradient(to right, #FFFFFF 30%, #FFFDF0 100%)",
  },
  {
    title: "L4. 순백의 크림 실크 페이드",
    description:
      "상단 Pure White에서 하단 Cream White(#FFFDF0)로 서서히 침잠하는 수직 페이드입니다. 정교한 여백미를 통해 콘텐츠를 안정적으로 받쳐줍니다.",
    primary: "#9E1B1B",
    secondary: "#D4AF37",
    accent: "#FFFDF0",
    bg: "linear-gradient(to bottom, #FFFFFF 0%, #FFFDF0 100%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient: "linear-gradient(to bottom, #FFFFFF 0%, #FFFDF0 100%)",
  },
  {
    title: "L5. 프로스트 크림 (Minimal)",
    description:
      "Cream White 단색 배경을 활용한 초미니멀 조합입니다. 불필요한 장식을 배제하여 브랜드의 정직함과 투명한 경영 철학을 강조합니다.",
    primary: "#9E1B1B",
    secondary: "#EBDE9A",
    accent: "#D4AF37",
    bg: "#FFFDF0",
    text: "#0F172A",
    category: "light",
  },
  {
    title: "L6. 노을빛 스테이 페이드",
    description:
      "중앙에 아주 미세한 레드 광채를 배치하여 따뜻한 온기를 연출합니다. 가맹점주의 상생과 온정을 표현하는 감성적인 섹션에 적합합니다.",
    primary: "#9E1B1B",
    secondary: "#FFFDF0",
    accent: "#EBDE9A",
    bg: "linear-gradient(to right, #FFFDF0 0%, rgba(158, 27, 27, 0.04) 50%, #FFFFFF 100%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient:
      "linear-gradient(to right, #FFFDF0 0%, rgba(158, 27, 27, 0.04) 50%, #FFFFFF 100%)",
  },
  {
    title: "L7. 블러썸 샴페인 소프트 페이드",
    description:
      "Cream White와 미세한 붉은 기운이 섞인 105도 페이드 효과입니다. 신선한 원육의 생동감을 부드럽고 우아하게 표현합니다.",
    primary: "#9E1B1B",
    secondary: "#D4AF37",
    accent: "#2D0B0B",
    bg: "linear-gradient(105deg, #FFFDF0 0%, #FFFFFF 60%, rgba(158, 27, 27, 0.08) 100%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient:
      "linear-gradient(105deg, #FFFDF0 0%, #FFFFFF 60%, rgba(158, 27, 27, 0.08) 100%)",
  },
  {
    title: "L8. 센터 글로우 라이트 래디얼",
    description:
      "중앙에서 외부로 퍼져나가는 아주 연한 선홍빛 방사형 그라디언트입니다. 집중도를 높여야 하는 메뉴 소개나 핵심 특징 강조에 효과적입니다.",
    primary: "#9E1B1B",
    secondary: "#FFFDF0",
    accent: "#EBDE9A",
    bg: "radial-gradient(circle at center, rgba(158, 27, 27, 0.06) 0%, #FFFDF0 70%)",
    text: "#0F172A",
    category: "light",
    isBgGradient: true,
    bgGradient:
      "radial-gradient(circle at center, rgba(158, 27, 27, 0.06) 0%, #FFFDF0 70%)",
  },
  // DARK CATEGORY
  {
    title: "D1. 시그니처 블랙 & 골드",
    description:
      "Modern Dark 배경 위에 Champagne Gold 텍스트를 배치한 극강의 프리미엄 조합입니다. 성공한 가맹점의 권위와 자부심을 상징합니다.",
    primary: "#D4AF37",
    secondary: "#EBDE9A",
    accent: "#9E1B1B",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    category: "dark",
  },
  {
    title: "D2. 임페리얼 버건디 리니어",
    description:
      "Modern Dark에서 Deep Burgundy로 흐르는 사선 페이드입니다. 시각적 압도감을 통해 브랜드의 역사와 전문성을 강력하게 피력합니다.",
    primary: "#D4AF37",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%)",
    text: "#FFFFFF",
    category: "dark",
    isBgGradient: true,
    bgGradient: "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%)",
  },
  {
    title: "D3. 심연의 타오름 (Refined)",
    description:
      "어둠 속에서 타오르는 잉어불처럼 은은한 레드 글로우를 배치했습니다. 브랜드의 열정과 내공을 보여주는 심미적인 다층 그라디언트입니다.",
    primary: "#D4AF37",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(at 10% 20%, rgba(158, 27, 27, 0.2) 0px, transparent 40%), radial-gradient(at 80% 50%, rgba(212, 175, 55, 0.1) 0px, transparent 40%), #1A1A1A",
    text: "#FFFFFF",
    category: "dark",
    isBgGradient: true,
    bgGradient:
      "radial-gradient(at 10% 20%, rgba(158, 27, 27, 0.2) 0px, transparent 40%), radial-gradient(at 80% 50%, rgba(212, 175, 55, 0.1) 0px, transparent 40%), #1A1A1A",
  },
  {
    title: "D4. 미드나잇 레드 래디얼",
    description:
      "좌상단 방사형 레드 광채가 블랙 배경과 만나는 드라마틱한 연출입니다. 시선을 특정 지점으로 강하게 유도하는 임팩트 섹션에 최적입니다.",
    primary: "#EBDE9A",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(circle at top left, #3D0A0A 0%, #1A1A1A 100%)",
    text: "#FFFFFF",
    category: "dark",
    isBgGradient: true,
    bgGradient: "radial-gradient(circle at top left, #3D0A0A 0%, #1A1A1A 100%)",
  },
  {
    title: "D5. 프리미엄 골든 메시",
    description:
      "Modern Dark 배경에 골드와 레드의 부드러운 빛무리가 섞인 오로라 효과입니다. 현대적이고 감각적인 비주얼을 선호하는 젊은 예비 점주들에게 어필합니다.",
    primary: "#D4AF37",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "radial-gradient(at 0% 0%, rgba(158, 27, 27, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.1) 0px, transparent 50%), #1A1A1A",
    text: "#FFFFFF",
    category: "dark",
    isBgGradient: true,
    bgGradient:
      "radial-gradient(at 0% 0%, rgba(158, 27, 27, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.1) 0px, transparent 50%), #1A1A1A",
  },
  {
    title: "D6. 금빛 샴페인 잔상 글로우",
    description:
      "버건디 배경에 샴페인 골드의 빛 번짐을 추가했습니다. 성공의 결과물이나 높은 수익률을 시각화하는 지표 섹션에 사용하기 좋습니다.",
    primary: "#D4AF37",
    secondary: "#2D0B0B",
    accent: "#FFFFFF",
    bg: "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%), radial-gradient(at 0% 0%, rgba(212, 175, 55, 0.2) 0px, transparent 50%)",
    text: "#EBDE9A",
    category: "dark",
    isBgGradient: true,
    bgGradient:
      "linear-gradient(135deg, #1A1A1A 0%, #2D0B0B 100%), radial-gradient(at 0% 0%, rgba(212, 175, 55, 0.2) 0px, transparent 50%)",
  },
  {
    title: "D7. 명장의 숙성 버건디 솔리드",
    description:
      "Deep Burgundy 단색을 중심으로 한 압도적인 무게감입니다. 원육의 숙성 철학이나 브랜드의 깊은 내공을 전달하는 신뢰 섹션에 적합합니다.",
    primary: "#D4AF37",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "#2D0B0B",
    text: "#FFFFFF",
    category: "dark",
  },
  {
    title: "D8. 성공의 붉은 나침반 (Conic)",
    description:
      "중심에서 사방으로 뻗어 나가는 코닉 그라디언트 효과입니다. 프랜차이즈의 확장성과 가맹 본사의 강력한 리더십을 시각화합니다.",
    primary: "#D4AF37",
    secondary: "#9E1B1B",
    accent: "#FFFFFF",
    bg: "conic-gradient(from 45deg at 50% 50%, #1A1A1A, #2D0B0B, #9E1B1B, #2D0B0B, #1A1A1A)",
    text: "#FFFFFF",
    category: "dark",
    isBgGradient: true,
    bgGradient:
      "conic-gradient(from 45deg at 50% 50%, #1A1A1A, #2D0B0B, #9E1B1B, #2D0B0B, #1A1A1A)",
  },
];
