import { getTailwindBrandColors } from "./constants";

/**
 * Tailwind CSS 설정을 생성합니다.
 * constants.ts의 ACTIVE_COLOR_SET에 따라 색상이 자동으로 변경됩니다.
 */
export const createTailwindConfig = () => {
  const brandColors = getTailwindBrandColors();

  return {
    theme: {
      extend: {
        colors: {
          brand: brandColors,
        },
      },
    },
  };
};

// 브라우저 환경에서 전역으로 노출
if (typeof window !== "undefined") {
  (window as any).createTailwindConfig = createTailwindConfig;
}
