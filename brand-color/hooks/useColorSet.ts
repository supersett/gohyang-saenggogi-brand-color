import { useEffect } from "react";
import {
  ColorSetName,
  getTailwindBrandColors,
  getAllColorSets,
} from "../constants";

/**
 * HEX 색상을 RGB 문자열로 변환합니다. (Tailwind 투명도 지원용)
 * @example hexToRgb("#9E1B1B") => "158 27 27"
 */
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0 0 0";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `${r} ${g} ${b}`;
}

/**
 * 페이지 컴포넌트에서 사용할 색상 세트를 설정하는 훅입니다.
 *
 * @param colorSetName - 사용할 색상 세트 이름
 * @param targetElementId - CSS Variables를 적용할 요소의 ID (기본값: 해당 컴포넌트의 루트)
 *
 * @example
 * function SampleLanding() {
 *   useColorSet("BRAND_COLORS");
 *   return <div className="bg-brand-cream">...</div>
 * }
 *
 * @example
 * function SampleLanding2() {
 *   useColorSet("BRAND_COLORS2");
 *   return <div className="bg-brand-cream">...</div>
 * }
 */
export function useColorSet(colorSetName: ColorSetName) {
  useEffect(() => {
    const allSets = getAllColorSets();
    const selectedSet = allSets[colorSetName];
    const colors = getTailwindBrandColors(selectedSet);

    // CSS Variables를 document root에 RGB 형식으로 설정 (Tailwind 투명도 지원)
    const root = document.documentElement;

    root.style.setProperty("--brand-red", hexToRgb(colors.red));
    root.style.setProperty("--brand-burgundy", hexToRgb(colors.burgundy));
    root.style.setProperty("--brand-champagne", hexToRgb(colors.champagne));
    root.style.setProperty("--brand-palegold", hexToRgb(colors.palegold));
    root.style.setProperty("--brand-dark", hexToRgb(colors.dark));
    root.style.setProperty("--brand-cream", hexToRgb(colors.cream));
    root.style.setProperty("--brand-white", hexToRgb(colors.white));
    root.style.setProperty("--brand-deeptext", hexToRgb(colors.deepText));

    console.log(`🎨 Color set changed to: ${colorSetName}`, colors);
  }, [colorSetName]);
}

/**
 * 특정 컴포넌트 영역에만 색상을 적용하는 훅입니다.
 * 반환된 ref를 해당 컴포넌트의 루트 요소에 연결하세요.
 *
 * @example
 * function FeatureSection() {
 *   const colorRef = useColorSetScoped("BRAND_COLORS2");
 *   return (
 *     <div ref={colorRef} className="bg-brand-cream">
 *       이 영역만 BRAND_COLORS2 적용
 *     </div>
 *   );
 * }
 */
export function useColorSetScoped(colorSetName: ColorSetName) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const allSets = getAllColorSets();
    const selectedSet = allSets[colorSetName];
    const colors = getTailwindBrandColors(selectedSet);

    const element = ref.current;

    // 해당 요소에만 CSS Variables 적용 (RGB 형식)
    element.style.setProperty("--brand-red", hexToRgb(colors.red));
    element.style.setProperty("--brand-burgundy", hexToRgb(colors.burgundy));
    element.style.setProperty("--brand-champagne", hexToRgb(colors.champagne));
    element.style.setProperty("--brand-palegold", hexToRgb(colors.palegold));
    element.style.setProperty("--brand-dark", hexToRgb(colors.dark));
    element.style.setProperty("--brand-cream", hexToRgb(colors.cream));
    element.style.setProperty("--brand-white", hexToRgb(colors.white));
    element.style.setProperty("--brand-deeptext", hexToRgb(colors.deepText));

    console.log(`🎨 Scoped color set applied: ${colorSetName}`, colors);
  }, [colorSetName]);

  return ref;
}

// React import for useRef
import * as React from "react";
