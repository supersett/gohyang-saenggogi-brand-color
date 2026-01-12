
import React from 'react';
import { BRAND_COLORS } from '../constants';

const PaletteTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">색상명</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">미리보기</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">HEX / RGB</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tailwind</th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">용도 / 조합</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {BRAND_COLORS.map((color) => (
            <tr key={color.hex} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-bold text-gray-900">{color.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`w-12 h-12 rounded-lg shadow-inner ${color.twClass}`} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-mono">{color.hex}</div>
                <div className="text-xs text-gray-500 font-mono">{color.rgb}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <code className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{color.twClass}</code>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{color.usage}</div>
                <div className="text-xs text-gray-400 mt-0.5 italic">추천 조합: {color.combinations}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaletteTable;
