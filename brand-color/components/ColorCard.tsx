import React from "react";
import { ColorInfo } from "../types";

interface ColorCardProps {
  color: ColorInfo;
}

const ColorCard: React.FC<ColorCardProps> = ({ color }) => {
  const needsBorder =
    color.hex === "#F8F9FA" || color.hex === "#EBDE9A" || color.isGradient;

  const backgroundStyle = color.isGradient
    ? { background: color.gradientValue }
    : { backgroundColor: color.hex };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div
        style={backgroundStyle}
        className={`h-24 flex items-end p-3 relative ${
          needsBorder ? "border-b border-gray-100" : ""
        }`}
      >
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm shadow-sm ${
            color.hex === "#1A1A1A" ||
            color.hex === "#9E1B1B" ||
            color.hex === "#0F172A" ||
            color.hex === "#334155" ||
            color.hex === "#64748B"
              ? "bg-black/20 text-white"
              : "bg-white/40 text-black font-bold"
          }`}
        >
          {color.hex}
        </span>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="text-sm font-medium text-gray-900 mb-1 leading-tight">
          {color.name}
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
