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

        {/* Strategy Guide */}
        <section className="bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="text-[#9E1B1B]">L</span>ight Strategy
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex gap-3">
                <span className="text-[#EBDE9A] font-black">01</span>
                <span>
                  <strong className="text-gray-900">시각적 역동성:</strong> L6,
                  L7, L8은 미세한 붉은 톤과 방사형 그라디언트를 활용해 신선한
                  원육의 이미지와 역동적인 에너지를 전달합니다.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#EBDE9A] font-black">02</span>
                <span>
                  <strong className="text-gray-900">신뢰와 여백:</strong> L4와
                  L5는 고의적인 여백과 초저채도 골드를 활용해 브랜드의 정직함을
                  시각화합니다.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="text-[#9E1B1B]">D</span>ark Strategy
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex gap-3">
                <span className="text-[#9E1B1B] font-black">01</span>
                <span>
                  <strong className="text-gray-900">다층적 깊이감:</strong> D3,
                  D5, D7은 여러 층의 그라디언트를 중첩시켜 단조로움을 피하고
                  브랜드의 전문성을 표현합니다.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#9E1B1B] font-black">02</span>
                <span>
                  <strong className="text-gray-900">미래 지향적 가치:</strong>{" "}
                  D8(붉은 나침반)의 코닉 효과는 변화에 유연하고 진보하는
                  프랜차이즈의 비전을 상징합니다.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-24 py-16 border-t border-gray-200 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#9E1B1B] rounded-lg"></div>
            <div className="text-gray-400 text-[10px] font-black tracking-widest uppercase">
              GOHYANG MEAT PREMIUM FRANCHISE IDENTITY SYSTEM
            </div>
          </div>
          <div className="text-gray-400 text-[10px] font-bold">
            Copyright 2024. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
