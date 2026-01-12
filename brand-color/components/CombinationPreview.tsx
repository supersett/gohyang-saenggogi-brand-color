import React from "react";
import { COMBINATIONS } from "../constants";
import logoText from "@/img/logo-text.svg";

interface CombinationPreviewProps {
  category: "light" | "dark";
}

const CombinationPreview: React.FC<CombinationPreviewProps> = ({
  category,
}) => {
  const filteredCombos = COMBINATIONS.filter((c) => c.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredCombos.map((combo, idx) => {
        const isDark = combo.category === "dark";

        return (
          <div key={idx} className="flex flex-col gap-4">
            <div
              className={`rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-[420px] bg-white transition-all hover:shadow-2xl hover:-translate-y-1 duration-500`}
            >
              {/* Nav Header */}
              <div
                style={
                  isDark
                    ? { backgroundColor: "#1A1A1A" }
                    : { backgroundColor: "#FFFFFF" }
                }
                className={`px-5 py-4 flex items-center justify-between border-b `}
              >
                <img
                  src={logoText}
                  alt="고향생고기"
                  className="w-20 object-contain"
                  style={{
                    background: "transparent",
                    imageRendering: "crisp-edges",
                  }}
                />
                <div className="flex gap-1.5">
                  <div
                    className={`w-4 h-0.5 ${
                      isDark ? "bg-white/20" : "bg-black/10"
                    }`}
                  ></div>
                  <div
                    className={`w-4 h-0.5 ${
                      isDark ? "bg-white/20" : "bg-black/10"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Hero Area */}
              <div
                style={
                  combo.isBgGradient
                    ? { background: combo.bgGradient }
                    : { backgroundColor: combo.bg }
                }
                className="p-8 flex-grow flex flex-col justify-center text-center relative overflow-hidden"
              >
                {/* Subtle texture for dark gradients */}
                {isDark && combo.isBgGradient && (
                  <div className="absolute inset-0 bg-white/[0.03] pointer-events-none"></div>
                )}

                <div
                  className="inline-block mx-auto mb-5 px-3 py-1 rounded-full text-[9px] font-black tracking-[0.15em] uppercase border shadow-sm relative z-10"
                  style={{
                    color: isDark ? "#EBDE9A" : "#9E1B1B",
                    borderColor: isDark ? "#EBDE9A" : "#9E1B1B",
                  }}
                >
                  {category} strategy
                </div>
                <h3
                  style={{ color: combo.text }}
                  className="text-xl font-black mb-4 leading-[1.3] tracking-tight relative z-10"
                >
                  격이 다른 원육,
                  <br />
                  검증된 성공 시스템
                </h3>
                <p
                  style={{ color: combo.text, opacity: isDark ? 0.6 : 0.7 }}
                  className="text-[10px] mb-6 leading-relaxed font-medium relative z-10"
                >
                  30년 전통의 노하우를 담은
                  <br />
                  고향생고기 프리미엄
                </p>

                <button
                  style={{
                    backgroundColor:
                      isDark && combo.primary === "#EBDE9A"
                        ? "#EBDE9A"
                        : isDark
                        ? "#9E1B1B"
                        : "#9E1B1B",
                    color:
                      isDark && combo.primary === "#EBDE9A"
                        ? "#1A1A1A"
                        : "#FFFFFF",
                  }}
                  className="px-6 py-3.5 rounded-xl text-[10px] font-black shadow-lg transform active:scale-95 transition-all uppercase tracking-widest relative z-10 mx-auto"
                >
                  가맹 안내 보기
                </button>
              </div>

              {/* Bottom Info Section */}
              <div
                className={`p-5 flex items-center gap-3 ${
                  isDark
                    ? "bg-[#1A1A1A] border-t border-white/5"
                    : "bg-white border-t border-gray-100"
                }`}
              >
                <div
                  style={{ backgroundColor: combo.secondary }}
                  className="w-8 h-8 rounded-lg flex-shrink-0 shadow-inner flex items-center justify-center border border-black/5 overflow-hidden"
                >
                  <div
                    className="w-full h-full opacity-20"
                    style={{
                      background: "linear-gradient(135deg, white, transparent)",
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className={`h-2 w-16 rounded-full ${
                      isDark ? "bg-white/20" : "bg-gray-100"
                    }`}
                  ></div>
                  <div
                    className={`h-1 w-10 rounded-full ${
                      isDark ? "bg-white/10" : "bg-gray-50"
                    }`}
                  ></div>
                </div>
                <div className="ml-auto">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold ${
                      isDark
                        ? "bg-[#EBDE9A] text-black"
                        : "bg-[#9E1B1B] text-white"
                    }`}
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <h5 className="font-bold text-gray-900 mb-1 flex items-center gap-2 text-xs">
                {combo.title}
              </h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium line-clamp-2">
                {combo.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CombinationPreview;
