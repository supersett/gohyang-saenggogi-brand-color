import React from "react";
import { BRAND_COLORS } from "./constants";
import ColorCard from "./components/ColorCard";
import PaletteTable from "./components/PaletteTable";
import CombinationPreview from "./components/CombinationPreview";
import logoText from "@/img/logo-text.svg";

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 bg-[#F3F4F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-5 shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={logoText}
                alt="고향생고기"
                className="h-10 object-contain"
                style={{
                  background: "transparent",
                  imageRendering: "crisp-edges",
                }}
              />
              <div>
                <p className="text-gray-500 text-xs font-medium mt-0.5">
                  팔레트 v1.0
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-[10px] font-bold text-gray-600">
                  8 Light Themes
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#EBDE9A]"></span>
                <span className="text-[10px] font-bold text-[#EBDE9A]">
                  8 Dark Themes
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 mt-12 space-y-24">
        {/* Core Colors Group */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-6 w-1 bg-[#9E1B1B] rounded-full"></div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-widest">
              Core Palette
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {BRAND_COLORS.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </section>

        {/* Category: LIGHT THEMES */}
        <section className="relative">
          <div className="flex flex-col gap-2 mb-10 border-l-4 border-[#EBDE9A] pl-6">
            <span className="text-[10px] font-black text-amber-600 tracking-widest uppercase">
              Visual Group A
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Light Theme Variations
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              정갈한 여백의 L5(Minimal)와 수직 페이드의 L4를 포함하여, 가독성과
              청결함을 극대화한 라이트 배경군입니다.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
            <CombinationPreview category="light" />
          </div>
        </section>

        {/* Category: DARK THEMES */}
        <section className="relative">
          <div className="flex flex-col gap-2 mb-10 border-l-4 border-[#9E1B1B] pl-6">
            <span className="text-[10px] font-black text-[#9E1B1B] tracking-widest uppercase">
              Visual Group B
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Dark Theme Variations
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              D5 스타일의 메시 그라디언트와 D8의 코닉 효과를 포함하여, 브랜드의
              깊이감과 권위가 느껴지는 다크 테마군입니다.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9E1B1B]/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="relative z-10">
              <CombinationPreview category="dark" />
            </div>
          </div>
        </section>

        {/* Final Matrix Table */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-6 w-1 bg-gray-400 rounded-full"></div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-widest">
              Implementation Specs
            </h2>
          </div>
          <PaletteTable />
        </section>
      </main>
    </div>
  );
};

export default App;
