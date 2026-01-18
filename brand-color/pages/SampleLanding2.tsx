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
  Quote,
} from "lucide-react";

import { useColorSet } from "../hooks/useColorSet";
import logoText from "@/img/logo-text.svg";
import heroImage from "@/img/hero.png";
import philosophyImage from "@/img/sample1.png";
import origin_logo from "@/img/origin_logo.png";
import success_img from "@/img/success_img.png";

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
            src={origin_logo}
            alt="고향생고기"
            className="h-16 object-contain"
            style={{
              background: "transparent",
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            "브랜드 소개",
            "브랜드 성공공식",
            "매장안내",
            "창업절차",
            "창업문의",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[14px] font-semibold hover:text-brand-red transition-colors uppercase tracking-widest text-brand-cream/80"
            >
              {item}
            </a>
          ))}
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
            <h2 className="font-myeongjo text-3xl md:text-4xl font-bold text-brand-deepText leading-tight flex items-center gap-4">
              <img
                src={origin_logo}
                alt="고향생고기 로고"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              />
              <span>
                전국 어디서나 만나는
                <br />
                고향의 따뜻한 맛
              </span>
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

// 창업 절차 섹션 (레퍼런스 스타일의 세련된 직사각형 - 가시성 및 정렬 수정 버전)
const FranchiseProcessSection = () => {
  const steps = [
    {
      step: 1,
      title: "가맹상담",
      items: ["고향생고기 창업", "브랜드 정보전달"],
    },
    {
      step: 2,
      title: "상권분석",
      items: ["전문가를 통한 상권분석 및 입점지 선정", "점포계약"],
    },
    {
      step: 3,
      title: "가맹계약체결",
      items: ["가맹점 개설 결정 및", "계약서 작성"],
    },
    {
      step: 4,
      title: "공사착공",
      items: ["인테리어 / 도면설계", "공정표 작성", "오픈일정 가이드"],
    },
    {
      step: 5,
      title: "오픈 전 교육",
      items: ["2주간의 집중 교육", "위생교육, 영업실무", "인허가 준비"],
    },
    {
      step: 6,
      title: "그랜드 오픈",
      items: ["5일간 슈퍼바이저 지원", "당일 영업 피드백"],
    },
    {
      step: 7,
      title: "매장 활성화 마케팅",
      items: ["공격적인 초기 마케팅", "SNS, 맛집 상위노출", "바이럴 홍보 진행"],
    },
    {
      step: 8,
      title: "사후관리",
      items: ["효율적인 지출 관리", "육류 로스 관리 및 지원"],
    },
  ];

  return (
    <section
      className="bg-brand-cream py-32 px-6 relative overflow-hidden"
      aria-labelledby="franchise-heading"
    >
      {/* 배경 텍스처 효과 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 ">
            <img
              src={origin_logo}
              alt="Quality Badge"
              className="w-32 h-32 text-brand-champagne"
            />
          </div>
          <h2
            id="franchise-heading"
            className="font-myeongjo text-4xl md:text-5xl font-extrabold text-brand-deepText mb-8 tracking-tighter"
          >
            창업절차
          </h2>
          <p className="text-base md:text-lg text-brand-deepText/40 font-medium tracking-[0.2em] uppercase">
            Professional Franchise Process System
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-px bg-brand-champagne/40"></div>
          </div>
        </div>

        {/* 세련된 직사각형 그리드 (이중 프레임 가시성 강화) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2px] px-6">
          {steps.map((step, idx) => (
            <article
              key={idx}
              className="bg-white p-[6px] group transition-all duration-700 hover:z-10 border border-brand-champagne/15"
              role="article"
            >
              {/* 내부 이중 프레임 레이어 - 보더 가시성 높임 */}
              <div className="h-full border border-brand-champagne/15 p-8 transition-all duration-500 group-hover:border-brand-champagne/60 group-hover:bg-brand-cream/10 flex flex-col items-start text-left">
                <div className="mb-2">
                  <span className="text-[11px] font-black text-brand-champagne tracking-[0.3em] uppercase opacity-80">
                    STEP {String(step.step).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-myeongjo text-xl md:text-xl font-bold text-brand-deepText mb-10 group-hover:text-brand-red transition-all duration-500 leading-tight">
                  {step.title}
                </h3>

                <ul className="space-y-2 mt-auto w-full" role="list">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-brand-deepText/50 flex items-start gap-3 leading-relaxed group-hover:text-brand-deepText/80 transition-colors"
                    >
                      <span className="w-[3px] h-[3px] bg-brand-champagne/30 mt-[9px] shrink-0 group-hover:bg-brand-champagne transition-colors"></span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-brand-deepText/30 text-[10px] font-bold tracking-[0.6em] uppercase mb-10">
            Trusted Partnership since 2005
          </p>
          <button className="group relative px-10 py-4 bg-brand-red text-white font-bold text-base overflow-hidden transition-all shadow-2xl">
            <span className="relative z-10 flex items-center gap-4 tracking-widest uppercase text-sm">
              가맹 상담 신청
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-brand-burgundy translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
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

const SuccessFormulaSection = () => {
  const stories = [
    {
      name: "김점주",
      role: "대표님",
      testimonial:
        "점주로서 수익률을 극대화 시키는 방법은 정해져있습니다. 본사가 가진 19년의 정석을 따르는 것이 유일한 지름길입니다.",
      metrics: ["운영 브랜드 3개", "운영 매장 5개", "9년째 운영중"],
    },
    {
      name: "이점주",
      role: "대표님",
      testimonial:
        "창업을 결심할 때 얼마나 많은 용기가 필요한지 잘 알고있습니다. 고향생고기의 체계적인 시스템은 그 용기에 대한 최고의 보답이었습니다.",
      metrics: ["운영 브랜드 10개", "운영 매장 15개", "10년째 운영중"],
    },
  ];

  return (
    <section
      className="bg-black py-32 relative overflow-hidden"
      aria-labelledby="success-heading"
    >
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square border border-brand-champagne/10 rounded-full animate-pulse-slow"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-brand-champagne/5 rounded-full"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square border border-brand-champagne/5 rounded-full"></div> */}

        {/* 대형 로고 워터마크 (마스크 효과 및 플로팅 애니메이션 추가) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] opacity-[0.06] grayscale brightness-150 transition-transform duration-[10s] animate-float">
          <img
            src={origin_logo}
            alt="Background Watermark"
            className="w-full h-full object-contain [mask-image:radial-gradient(circle,white_20%,transparent_70%)]"
          />
        </div>

        {/* 은은한 광원 효과 */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-champagne/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 상단 헤더 */}
        <div className="text-center mb-12 max-w-3xl mx-auto relative mt-10">
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-20 h-20 opacity-80 md:w-24 md:h-24 md:opacity-100 md:-top-32">
            <img
              src={origin_logo}
              alt="Quality Badge"
              className="w-full h-full object-contain drop-shadow-glow"
            />
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-brand-champagne/40"></div>
            <p className="text-brand-champagne font-bold text-xs tracking-[0.2em] uppercase">
              15개 브랜드 · 21개 음식점
            </p>
            <div className="h-px w-10 bg-brand-champagne/40"></div>
          </div>
          <h2
            id="success-heading"
            className="font-myeongjo text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            운영 경험으로 쌓인
            <br />
            <span className="text-brand-champagne italic">성공 공식</span>을
            알려드립니다
          </h2>
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-1 bg-brand-red rounded-full shadow-[0_0_10px_rgba(158,27,27,0.8)]"></div>
          </div>
        </div>

        {/* 인터뷰 카드 그리드 */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          {stories.map((story, i) => (
            <article
              key={i}
              className="bg-brand-dark/40 backdrop-blur-md border border-white/5 rounded-3xl p-10 md:p-14 hover:border-brand-champagne/20 transition-all duration-500 group shadow-2xl relative overflow-hidden"
            >
              <Quote
                size={80}
                className="absolute -top-6 -right-6 text-brand-champagne/5 rotate-12 transition-transform group-hover:scale-110"
              />

              <div className="mb-12 min-h-[100px]">
                <p className="text-white/80 text-base md:text-lg font-myeongjo leading-relaxed text-center italic tracking-tight">
                  "{story.testimonial}"
                </p>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  {story.name}
                  <span className="text-white/30 text-sm font-normal ml-2">
                    {story.role}
                  </span>
                </h3>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-brand-champagne text-[11px] font-bold uppercase tracking-widest mt-4 opacity-70">
                  {story.metrics.map((m, idx) => (
                    <React.Fragment key={idx}>
                      <span>{m}</span>
                      {idx < story.metrics.length - 1 && (
                        <span className="text-white/10">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 bg-transparent border border-brand-champagne/30 text-brand-champagne rounded-xl font-bold hover:bg-brand-champagne hover:text-brand-dark transition-all text-xs tracking-widest uppercase">
                  인터뷰 보기
                </button>
                <button className="py-4 bg-brand-champagne text-brand-dark rounded-xl font-bold hover:bg-brand-palegold transition-all text-xs tracking-widest uppercase shadow-lg shadow-brand-champagne/10">
                  상담 신청하기
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 하단 브랜드 철학 섹션 (요청 문구) */}
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div className="lg:w-3/5 text-center lg:text-left relative">
            <div className="inline-block p-3 bg-brand-red/10 rounded-2xl mb-10">
              <Quote className="text-brand-red w-8 h-8 opacity-60" />
            </div>

            <div className="space-y-8 md:space-y-10 font-myeongjo">
              <p className="text-white/50 text-lg md:text-2xl font-light tracking-tight leading-relaxed">
                책임질 가족이 있어서, <br className="md:hidden" />
                <span className="text-white font-medium border-b border-brand-red/30">
                  더 신중해야 했습니다.
                </span>
              </p>

              <p className="text-white/50 text-lg md:text-2xl font-light tracking-tight leading-relaxed">
                창업은 쉽지 않습니다. <br className="md:hidden" />
                <span className="text-white font-medium border-b border-brand-red/30">
                  하지만 혼자가 아닙니다.
                </span>
              </p>

              <div className="pt-8 space-y-4">
                <h2 className="text-xl md:text-3xl text-brand-champagne font-bold leading-snug tracking-tighter opacity-80">
                  먼저 경험한 저희의 노하우가
                </h2>
                <h2 className="text-3xl md:text-5xl text-white font-extrabold leading-tight tracking-tighter">
                  여러분의
                  <span className="ml-2 text-brand-red drop-shadow-glow-red">
                    든든한 동반자
                  </span>
                  가 <br />
                  되어드리겠습니다.
                </h2>
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <button className="px-8 py-4 bg-brand-champagne text-brand-dark rounded-full font-bold text-sm hover:bg-brand-palegold transition-all shadow-2xl shadow-brand-champagne/20 uppercase tracking-[0.2em]">
                창업 가이드 신청
              </button>
              <div className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase">
                육회의 정석, 고향생고기
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 group">
              <img
                src={success_img}
                alt="시그니처 메뉴"
                className="w-full max-w-[500px] mx-auto h-auto object-contain drop-shadow-[0_20px_80px_rgba(158,27,27,0.4)] transition-transform duration-1000 group-hover:scale-105"
              />
              {/* 이미지 주변 후광 효과 */}
              <div className="absolute -inset-10 bg-brand-red/10 blur-[100px] -z-10 rounded-full scale-125 opacity-50"></div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-myeongjo text-brand-champagne text-xs font-bold tracking-[0.4em] mb-2 uppercase">
                Signature Menu
              </p>
              <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase">
                The Art of Korean Beef
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateX(-33%) rotate(0deg); }
          50% { transform: translateY(-52%) translateX(-31%) rotate(1deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));
        }
        .drop-shadow-glow-red {
          filter: drop-shadow(0 0 15px rgba(158, 27, 27, 0.5));
        }
      `}</style>
    </section>
  );
};

const BrandLabelDivider: React.FC<{ backgroundColor?: string }> = ({
  backgroundColor = "#000",
}) => {
  const labelText = "고향생고기";

  return (
    <div
      className="border-y border-white/5 h-12 flex items-center overflow-hidden"
      style={{ backgroundColor }}
      role="separator"
    >
      <div className="w-full flex justify-around items-center opacity-50 px-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-1 shrink-0 mr-2">
            <img
              src={origin_logo}
              alt="Quality Badge"
              className="w-4 h-auto text-white opacity-60"
            />
            <span className="text-[10px] md:text-[12px] text-white font-myeongjo tracking-[0.1em] whitespace-nowrap">
              {labelText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandPhilosophySection = () => {
  return (
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
          <h2 className="font-myeongjo text-3xl md:text-4xl font-bold mb-8 leading-[1.2] flex items-center gap-4">
            <img
              src={origin_logo}
              alt="고향생고기 로고"
              className="w-12 h-12 md:w-20 md:h-20 object-contain flex-shrink-0"
            />
            <span>
              신선함이 곧<br />
              <span className="text-brand-palegold">최고의 레시피입니다.</span>
            </span>
          </h2>
          <p className="text-brand-cream/70 mb-6 text-base leading-relaxed font-medium">
            우리는 '신선함'이야말로 고기가 가질 수 있는 가장 큰 가치라고
            믿습니다. 고향생고기는 복잡한 유통 경로를 거치지 않습니다. 새벽
            도축된 고기를 그날 저녁 식탁에서 만나보실 수 있는 이유입니다.
          </p>
          <p className="text-brand-cream/70 mb-10 text-base leading-relaxed font-medium">
            한우의 깊은 맛과 찰진 식감은 도축 직후에만 느낄 수 있습니다. 수십
            년간 지켜온 고집으로, 당신의 식탁에 정직한 맛을 올리겠습니다.
          </p>
          <button className="flex items-center gap-3 text-brand-champagne font-bold text-base hover:gap-5 transition-all group">
            브랜드 히스토리 <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex text-center mb-20 flex-col justify-center mb-8 items-center gap-4">
          <img
            src={origin_logo}
            alt="고향생고기 로고"
            className="w-32 h-32 md:w-40 md:h-40 object-contain flex-shrink-0"
          />
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
  );
};

const App: React.FC = () => {
  // 🎨 이 페이지는 BRAND_COLORS를 사용합니다
  useColorSet("BRAND_COLORS2");

  return (
    <div className="min-h-screen bg-black text-brand-cream">
      <Navbar />

      <main>
        <HeroSection />
        <BrandLabelDivider />
        <SuccessFormulaSection />
        <BrandLabelDivider />

        {/* Feature Section - Background set to black */}
        <FeatureSection />

        {/* Store Locator Section - NEW Light Section */}
        <StoreSection />
        {/* Brand Philosophy - Background set to black */}
        <BrandPhilosophySection />
      </main>
      <BrandLabelDivider />
      {/* Franchise Section - NEW Light Section */}
      <FranchiseProcessSection />

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
