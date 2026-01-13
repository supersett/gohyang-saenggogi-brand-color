import React from "react";
import { Link } from "react-router-dom";
import logoText from "@/img/logo-text.svg";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-5 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-5">
              <img
                src={logoText}
                alt="고향생고기"
                className="h-10 object-contain"
                style={{
                  background: "transparent",
                  imageRendering: "crisp-edges",
                }}
              />
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              ← 홈으로
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <h1 className="text-4xl font-black text-gray-900 mb-6">
            About 페이지
          </h1>
          <p className="text-gray-600 mb-4">
            이것은 라우팅 예시를 위한 About 페이지입니다.
          </p>
          <p className="text-gray-600 mb-4">새로운 페이지를 추가하려면:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                pages/
              </code>
              폴더에 새로운 컴포넌트를 만들고
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                App.tsx
              </code>
              에 라우트를 추가하세요
            </li>
          </ol>
          <Link
            to="/"
            className="inline-block bg-[#9E1B1B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8A1818] transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
