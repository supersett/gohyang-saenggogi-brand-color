import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Award,
  Truck,
  ShieldCheck,
  Search,
  Users,
  TrendingUp,
  Handshake,
  ArrowRight,
} from "lucide-react";

import logoText from "@/img/logo-text.svg";
import heroImage from "@/img/hero.png";
import philosophyImage from "@/img/sample1.png";
// Shared UI Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logoText}
            alt="고향생고기"
            className="h-8 object-contain"
            style={{
              background: "transparent",
              imageRendering: "crisp-edges",
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["브랜드 소개", "메뉴안내", "매장안내", "창업안내", "창업문의"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] font-semibold hover:text-brand-red transition-colors uppercase tracking-widest text-brand-cream/80"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-red-800 text-brand-cream px-5 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-red/20">
            <ShoppingBag size={14} />
            창업문의
          </button>
          <button
            className="md:hidden text-brand-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-6 text-brand-cream">
          {["브랜드 스토리", "전체메뉴", "품질인증", "매장안내"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-myeongjo text-xl font-bold tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-3 bg-brand-red px-8 py-3 rounded-full text-base font-bold shadow-2xl shadow-brand-red/20">
            주문하기
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="고향생고기 프리미엄 육회"
          className="h-full w-full object-cover object-right md:object-center"
        />
        {/* Using pure black for the gradient to blend seamlessly */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red font-bold tracking-[0.4em] text-xs uppercase">
              Premium Local Beef
            </span>
          </div>

          <h1 className="font-myeongjo text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight text-brand-cream">
            직도축으로
            <br />
            <span className="text-brand-red">증명하는</span> 품질
          </h1>

          <p className="font-myeongjo text-lg md:text-xl text-brand-palegold mb-10 tracking-wide font-light opacity-90">
            고향에서 온 당일 생고기!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-brand-red hover:bg-red-800 text-brand-cream rounded-md font-bold text-base transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-red/30">
              지금 바로 상담하기
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
            <button className="px-8 py-3.5 border border-brand-champagne/30 hover:bg-brand-champagne/10 text-brand-champagne rounded-md font-bold text-base transition-all backdrop-blur-sm">
              브랜드 스토리
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-brand-champagne/10 pt-8 max-w-lg">
            <div className="text-left">
              <p className="text-brand-red font-bold text-xl mb-1">08:00</p>
              <p className="text-brand-palegold/60 text-[9px] tracking-widest uppercase font-bold">
                Daily Slaughter
              </p>
            </div>
            <div className="text-left">
              <p className="text-brand-red font-bold text-xl mb-1">100%</p>
              <p className="text-brand-palegold/60 text-[9px] tracking-widest uppercase font-bold">
                Korean Hanwoo
              </p>
            </div>
            <div className="text-left">
              <p className="text-brand-red font-bold text-xl mb-1">Fresh</p>
              <p className="text-brand-palegold/60 text-[9px] tracking-widest uppercase font-bold">
                Direct Delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.4em] uppercase text-brand-cream font-bold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-champagne to-transparent"></div>
      </div>
    </section>
  );
};

const StoreSection = () => {
  const stores = [
    {
      name: "강남 본점",
      address: "서울 강남구 테헤란로 123",
      phone: "02-1234-5678",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "판교 직영점",
      address: "경기 성남시 분당구 판교역로 10",
      phone: "031-987-6543",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "부산 센텀점",
      address: "부산 해운대구 센텀남대로 35",
      phone: "051-234-5678",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Store Locations
            </span>
            <h2 className="font-myeongjo text-3xl md:text-4xl font-bold text-brand-deepText leading-tight">
              전국 어디서나 만나는
              <br />
              고향의 따뜻한 맛
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-brand-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-red/10 group text-base">
            전체 매장 찾기
            <Search
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stores.map((store, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={store.img}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  Premium Store
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-myeongjo text-xl font-bold text-brand-deepText mb-4">
                  {store.name}
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-brand-deepText/60 text-sm">
                    <MapPin size={16} className="text-brand-red" />
                    {store.address}
                  </p>
                  <p className="flex items-center gap-3 text-brand-deepText/60 text-sm">
                    <Phone size={16} className="text-brand-red" /> {store.phone}
                  </p>
                </div>
                <button className="mt-8 flex items-center gap-2 text-brand-red font-bold text-sm hover:gap-4 transition-all">
                  상세 보기 <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// New Franchise Section (Light Theme)
const FranchiseSection = () => {
  const benefits = [
    {
      icon: Handshake,
      title: "체계적인 교육",
      desc: "고기 선별부터 손질까지, 전문가의 노하우를 그대로 전수합니다.",
    },
    {
      icon: Users,
      title: "강력한 브랜드파워",
      desc: "전국적인 인지도와 신뢰를 바탕으로 안정적인 운영을 지원합니다.",
    },
    {
      icon: TrendingUp,
      title: "수익 극대화",
      desc: "산지 직송 시스템을 통한 유통 마진 최소화로 높은 마진율을 실현합니다.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "가맹 상담",
      desc: "전문 컨설턴트와의 1:1 맞춤형 상담",
    },
    {
      num: "02",
      title: "상권 분석",
      desc: "입지 최적화를 위한 데이터 기반 분석",
    },
    {
      num: "03",
      title: "점주 교육",
      desc: "조리부터 서비스까지 체계적인 교육",
    },
    { num: "04", title: "매장 오픈", desc: "본사 홍보 지원 및 오픈 현장 케어" },
  ];

  return (
    <section className="py-32 bg-brand-cream border-t border-brand-champagne/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Franchise Guide
          </span>
          <h2 className="font-myeongjo text-3xl md:text-4xl font-bold text-brand-deepText">
            성공적인 미래를 함께할 파트너
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-8 p-8 bg-white rounded-3xl shadow-sm border border-brand-champagne/5 hover:border-brand-red/20 transition-all"
              >
                <div className="w-14 h-14 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center shrink-0">
                  <benefit.icon size={28} />
                </div>
                <div>
                  <h4 className="font-myeongjo text-xl font-bold text-brand-deepText mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-brand-deepText/60 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden border border-brand-champagne/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full"></div>
            <h3 className="font-myeongjo text-2xl font-bold text-brand-deepText mb-12">
              창업 프로세스
            </h3>
            <div className="space-y-10 relative">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-brand-champagne/20"></div>
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start relative z-10">
                  <div className="w-12 h-12 bg-brand-palegold text-brand-deepText rounded-full flex items-center justify-center font-bold text-lg shadow-md shrink-0 border-4 border-white">
                    {step.num}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-deepText mb-1 text-base">
                      {step.title}
                    </h5>
                    <p className="text-brand-deepText/50 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-16 w-full py-5 bg-brand-red hover:bg-red-800 text-white font-bold rounded-2xl transition-all shadow-lg shadow-brand-red/20 flex items-center justify-center gap-3 group text-base">
              가맹 창업 문의하기
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="bg-brand-burgundy/40 p-8 rounded-2xl border border-brand-champagne/5 hover:border-brand-red/30 transition-all group shadow-2xl backdrop-blur-sm">
    <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-brand-cream transition-all duration-500">
      <Icon size={28} />
    </div>
    <h3 className="font-myeongjo text-xl font-bold mb-3 text-brand-palegold tracking-tight">
      {title}
    </h3>
    <p className="text-brand-cream/60 text-sm leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-brand-cream">
      <Navbar />

      <main>
        <HeroSection />

        {/* Feature Section - Background set to black */}
        <section className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
                Our Commitment
              </span>
              <h2 className="font-myeongjo text-3xl md:text-4xl font-bold mb-5">
                고향생고기의 자부심
              </h2>
              <p className="text-brand-cream/50 max-w-2xl mx-auto font-medium leading-relaxed text-sm">
                우리는 타협하지 않는 품질 기준을 통해 가장 신선한 육류만을
                고집합니다.
                <br />
                도축장에서 식탁까지, 중간 과정 없이 가장 정직하게 전해드립니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <FeatureCard
                icon={Award}
                title="당일 도축 원칙"
                desc="도축 후 24시간이 지나지 않은 초신선 생고기만을 취급하여 한우 본연의 풍미와 식감을 그대로 전해드립니다."
              />
              <FeatureCard
                icon={Truck}
                title="산지 직송 시스템"
                desc="복잡한 유통 마진을 걷어내고 산지에서 매장까지 직접 관리하여 가장 신선한 상태로 고객님께 도달합니다."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="명인의 선별"
                desc="수십 년 경력의 육류 전문가가 직접 마블링과 탄력을 확인하여 까다롭게 엄선한 최상위 등급만을 제공합니다."
              />
            </div>
          </div>
        </section>

        {/* Store Locator Section - NEW Light Section */}
        <StoreSection />
        {/* Brand Philosophy - Background set to black */}
        <section className="py-24 bg-black relative overflow-hidden border-y border-brand-champagne/10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-red/10 border border-brand-champagne/10">
                <img
                  src={philosophyImage}
                  alt="Quality Beef Selection"
                  className="w-full h-full object-cover grayscale-[0.1] hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-red rounded-3xl p-6 hidden lg:flex flex-col justify-end shadow-3xl">
                <p className="text-brand-cream font-myeongjo text-2xl font-bold leading-tight">
                  Since
                  <br />
                  1998
                </p>
                <div className="h-1 w-12 bg-brand-palegold mt-4"></div>
              </div>
            </div>

            <div>
              <span className="text-brand-champagne font-bold tracking-widest text-xs uppercase mb-5 block">
                Our Philosophy
              </span>
              <h2 className="font-myeongjo text-3xl md:text-4xl font-bold mb-8 leading-[1.2]">
                신선함이 곧<br />
                <span className="text-brand-palegold">
                  최고의 레시피입니다.
                </span>
              </h2>
              <p className="text-brand-cream/70 mb-6 text-base leading-relaxed font-medium">
                우리는 '신선함'이야말로 고기가 가질 수 있는 가장 큰 가치라고
                믿습니다. 고향생고기는 복잡한 유통 경로를 거치지 않습니다. 새벽
                도축된 고기를 그날 저녁 식탁에서 만나보실 수 있는 이유입니다.
              </p>
              <p className="text-brand-cream/70 mb-10 text-base leading-relaxed font-medium">
                한우의 깊은 맛과 찰진 식감은 도축 직후에만 느낄 수 있습니다.
                수십 년간 지켜온 고집으로, 당신의 식탁에 정직한 맛을
                올리겠습니다.
              </p>
              <button className="flex items-center gap-3 text-brand-champagne font-bold text-base hover:gap-5 transition-all group">
                브랜드 히스토리 <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Franchise Section - NEW Light Section */}
      <FranchiseSection />

      <footer className="bg-black border-t border-brand-champagne/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src={logoText}
              alt="고향생고기"
              className="h-16 object-contain -ml-6 mb-6"
              style={{
                background: "transparent",
                imageRendering: "crisp-edges",
              }}
            />
            <p className="text-brand-cream/70 max-w-sm mb-8 leading-relaxed text-sm font-medium">
              대한민국 최고의 신선도를 자랑하는 프리미엄 당일 도축 생고기
              브랜드입니다. 우리의 목표는 전국 어디서나 가장 신선한 한우를 즐길
              수 있게 하는 것입니다.
            </p>
            <div className="flex gap-5">
              {["Instagram", "Naver Blog", "YouTube"].map((sns) => (
                <a
                  key={sns}
                  href="#"
                  className="text-xs text-brand-palegold/70 hover:text-brand-cream transition-colors underline underline-offset-8 decoration-brand-red/20 font-semibold"
                >
                  {sns}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-6 text-brand-cream uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4 text-brand-cream/70 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-champagne transition-colors"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-champagne transition-colors"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-champagne transition-colors"
                >
                  배송 및 환불안내
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-champagne transition-colors"
                >
                  가맹 및 대량주문문의
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-6 text-brand-cream uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-brand-cream/70 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-brand-red" /> 서울특별시
                강남구 테헤란로 123
                <br />
                고향생고기 빌딩 5F
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red" /> 1588-1234
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-red" /> 평일 09:00 -
                18:00 (주말 휴무)
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-champagne/10 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-brand-cream/30 text-[10px] font-medium uppercase tracking-widest">
            © 2024 Hometown Raw Beef. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-brand-cream/30 text-[9px] uppercase tracking-wider font-bold">
            <span>CEO: HONG GILDONG</span>
            <span>BRN: 123-45-67890</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
