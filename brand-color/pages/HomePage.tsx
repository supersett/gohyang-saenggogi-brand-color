import React from "react";
import { BRAND_COLORS } from "../constants";
import ColorCard from "../components/ColorCard";
import PaletteTable from "../components/PaletteTable";
import CombinationPreview from "../components/CombinationPreview";
import logoText from "@/img/logo-text.svg";

const HomePage: React.FC = () => {
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

export default HomePage;
