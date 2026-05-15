/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, ExternalLink, ArrowUp } from 'lucide-react';

type TabType = '프로그램' | '언론보도' | '공지사항';

const projects = [
  {
    id: 1,
    category: '복합문화예술공간',
    title: '느와르 아트리움',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    reverse: false
  },
  {
    id: 2,
    category: '원로·중견 작가 지원사업',
    title: '느와르 미술상',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop',
    reverse: true
  },
  {
    id: 3,
    category: '전국청년작가 미술공모전',
    title: 'N-EAA',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop',
    reverse: false
  },
  {
    id: 4,
    category: '발달장애인 문화예술 지원사업',
    title: '예술공작소',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    reverse: true
  }
];

interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
  reverse: boolean;
}

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[180px] md:h-[240px] mb-12 md:mb-16 last:mb-0 cursor-pointer group"
    >
      {/* Image Container */}
      <motion.div
        initial={false}
        animate={{
          width: isHovered ? '100%' : '78%',
          left: isHovered ? '0%' : (project.reverse ? '22%' : '0%'),
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 h-full overflow-hidden"
      >
        <img 
          src={project.image} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          alt={project.title}
        />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </motion.div>

      {/* Text Container */}
      <motion.div
        initial={false}
        animate={{
          left: isHovered ? '50%' : (project.reverse ? '0%' : '78%'),
          x: isHovered ? '-50%' : '0%',
          textAlign: isHovered ? 'center' : (project.reverse ? 'left' : 'right'),
          color: isHovered ? '#ffffff' : '#111111',
          width: isHovered ? '100%' : '22%',
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col justify-center px-4 md:px-10"
      >
        <p className={`text-[12px] md:text-[14px] mb-1 font-medium tracking-wide transition-colors duration-500 ${isHovered ? 'text-white/70' : 'text-[#888]'}`}>
          {project.category}
        </p>
        <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight transition-colors duration-500 ${isHovered ? 'text-white' : 'text-[#111]'}`}>
          {project.title}
          {isHovered && <span className="ml-3 font-normal opacity-80">→</span>}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('프로그램');
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const newsData = {
    '프로그램': [
      { id: 1, badge: '프로그램', title: '[NOIR ART LAB] 4기 신진 작가 입주자 선정 안내', date: '2026.01.08', thumb: 'https://images.unsplash.com/photo-1579762795188-aa33d23f89ae?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#2c2c2c]', 'bg-[#444]', 'bg-[#555]', 'bg-[#333]'] },
      { id: 2, badge: '프로그램', title: '[전시연계] 느와르 갤러리 도슨트 프로그램 〈어둠 속의 미학〉 신청 안내', date: '2025.12.23', thumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#3a5a4a]', 'bg-[#4a7a6a]', 'bg-[#5a6a9a]', 'bg-[#7a9aaa]'] },
      { id: 3, badge: '프로그램', title: '[아트클래스] 발달장애인과 함께하는 ‘선과 면의 대화’ 미술 치료 워크숍', date: '2025.11.14', thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#6a3a2a]', 'bg-[#8a5a4a]', 'bg-[#3a6a8a]', 'bg-[#5a8aaa]'] },
    ],
    '언론보도': [
      { id: 4, badge: '언론보도', title: '[보도자료] 느와르 갤러리, 현대 미술의 새로운 지평을 열다 - 창작지원사업 성과 발표', date: '2026.01.19', thumb: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#222]', 'bg-[#111]', 'bg-[#333]', 'bg-[#000]'] },
      { id: 5, badge: '언론보도', title: '[언론] 블랙의 철학을 담다, NOIR GALLERY가 제안하는 공간의 재해석', date: '2025.07.02', thumb: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#444]', 'bg-[#555]', 'bg-[#666]', 'bg-[#222]'] },
      { id: 6, badge: '언론보도', title: '[리뷰] 2025 올해의 갤러리 상 선정, 느와르의 실험적 시도가 낳은 결과', date: '2025.04.28', thumb: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#1a1a1a]', 'bg-[#2a2a2a]', 'bg-[#3a3a3a]', 'bg-[#0a0a0a]'] },
    ],
    '공지사항': [
      { id: 7, badge: '공지사항', title: '[공모전] 2026 NOIR 신진 작가 미술공모전 최종 합격자 발표 공식 안내', date: '2026.05.06', thumb: 'https://images.unsplash.com/photo-1491243950741-97e9ad603410?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#333]', 'bg-[#444]', 'bg-[#555]', 'bg-[#111]'] },
      { id: 8, badge: '공지사항', title: '[안내] 2025년도 느와르 문화재단 결산보고서 및 기부금 활용 공시', date: '2026.04.30', thumb: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#2c2c2c]', 'bg-[#3d3d3d]', 'bg-[#4e4e4e]', 'bg-[#1a1a1a]'] },
      { id: 9, badge: '공지사항', title: '[휴관안내] 내부 시설 정기 점검으로 인한 5월 첫째 주 임시 휴관 공지', date: '2026.04.22', thumb: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop', colors: ['bg-[#555]', 'bg-[#666]', 'bg-[#777]', 'bg-[#333]'] },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-white border-b border-[#e8e8e8] flex items-center justify-between px-6 md:px-10">
        <a href="/" className="flex items-center gap-3 no-underline group" id="main-logo">
          <div className="w-9 h-7 flex flex-col gap-[3px]">
            <span className="block h-2 bg-[#e63312] w-full rounded-sm"></span>
            <span className="block h-2 bg-[#f5a623] w-[70%] rounded-sm"></span>
            <span className="block h-2 bg-black w-full rounded-sm"></span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-lg tracking-wider text-[#111]">NOIR GALLERY</span>
            <span className="text-[9px] text-[#888] tracking-widest mt-0.5">느와르 갤러리</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {[
            { name: '갤러리소개', href: '#main' },
            { name: '전시실적', href: '#exhibitions' },
            { name: '주요사업', href: '#projects' },
            { name: '커뮤니티', href: '#news' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-bold text-[#111] tracking-wide relative pb-0.5 group no-underline hover:text-[#e63312] transition-colors"
            >
              {item.name}
              <span className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#e63312] scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          ))}
          <div className="flex items-center border border-[#ccc] rounded-sm overflow-hidden text-[11px] font-medium ml-4">
            <button 
              onClick={() => setLang('KOR')}
              className={`px-3 py-1 transition-colors ${lang === 'KOR' ? 'bg-[#111] text-white' : 'text-[#555] hover:bg-gray-100'}`}
            >
              KOR
            </button>
            <button 
              onClick={() => setLang('ENG')}
              className={`px-3 py-1 transition-colors ${lang === 'ENG' ? 'bg-[#111] text-white' : 'text-[#555] hover:bg-gray-100'}`}
            >
              ENG
            </button>
          </div>
        </nav>

        {/* Mobile menu icon (visual only) */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[2px] bg-[#111]"></span>
          <span className="w-6 h-[2px] bg-[#111]"></span>
          <span className="w-6 h-[2px] bg-[#111]"></span>
        </div>
      </header>

      <main className="flex-1 pt-[60px]">
        {/* HERO */}
        <section id="main" className="px-6 md:px-10 pt-16 pb-12 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tighter text-[#0a0a0a] mb-10 max-w-[850px]"
          >
            DISCOVERING ESSENCE,<br />REDEFINING MODERNITY.
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr_1fr] gap-1 h-[600px] md:h-[320px] animate-fade-up-delay">
            <div className="relative bg-gradient-to-br from-[#1a0a05] via-[#5c2a10] to-[#2d1208] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop" 
                alt="Noir Abstract" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-40">
                <radialGradient id="grd1" cx="50%" cy="60%" r="60%">
                  <stop offset="0%" stopColor="#8b3a1a" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1"/>
                </radialGradient>
                <rect width="200" height="320" fill="url(#grd1)"/>
              </svg>
            </div>
            <div className="relative bg-[#f0ede8] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop" 
                alt="Gallery Interior" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative bg-[#e5e0d8] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=800&auto=format&fit=crop" 
                alt="Sculpture" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* MAIN PROJECT */}
        <section id="projects" className="bg-[#f9f9f9] px-6 md:px-10 py-28 overflow-hidden">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-20">
              <h2 className="font-display font-black text-4xl tracking-tight text-[#000] select-none">
                MAIN PROJECT
              </h2>
            </div>
            
            <div className="flex flex-col">
              {projects.map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* EXHIBITIONS */}
        <section id="exhibitions" className="px-6 md:px-10 py-20 bg-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-xs tracking-[2px] text-[#111] uppercase select-none">
              EXHIBITIONS
            </h2>
            <a href="#" className="text-[12px] text-[#666] no-underline tracking-wide border-b border-[#ccc] pb-0.5 hover:text-[#e63312] hover:border-[#e63312] transition-all">
              전체보기
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            {/* Exhibition 1 */}
            <motion.a 
              whileHover={{ y: -5 }}
              href="#" 
              className="group no-underline text-inherit block"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-[#222] mb-4">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
                  alt="Nam June Paik" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-6">
                  <div className="text-center z-10 text-white font-sans">
                    <p className="text-[9px] font-bold tracking-[2px] opacity-70 mb-4">ON VIEW</p>
                    <h3 className="text-3xl font-display font-black leading-tight mb-2 tracking-tighter">NAM JUNE <br /> PAIK: STILL LIVE</h3>
                    <p className="text-xs opacity-60">백남준: 살아 있는 시간</p>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#888] tracking-widest uppercase mb-1">On View</p>
              <h4 className="text-sm font-medium leading-relaxed text-[#111]">백남준: STILL LIVE – 살아 있는 시간</h4>
            </motion.a>

            {/* Exhibition 2 */}
            <motion.a 
              whileHover={{ y: -5 }}
              href="#" 
              className="group no-underline text-inherit block"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-[#1a1205] mb-4">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop" 
                  alt="Gleam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center relative p-8">
                   <div className="relative z-10 text-center font-serif text-[#d4b870]">
                      <p className="text-[10px] tracking-[4px] uppercase mb-4 opacity-70">A. Sicioldr</p>
                      <h3 className="text-3xl font-bold tracking-tight mb-1">GLEAM</h3>
                      <p className="text-[10px] tracking-[2px] italic mb-1 opacity-60">of a</p>
                      <h3 className="text-2xl font-bold tracking-tight">SILENT ECSTASY</h3>
                   </div>
                </div>
              </div>
              <p className="text-[11px] text-[#888] tracking-widest uppercase mb-1">Upcoming</p>
              <h4 className="text-sm font-medium leading-relaxed text-[#111]">고요한 빛, 황홀의 틈 Gleam of a Silent Ecstasy</h4>
            </motion.a>

            {/* Exhibition 3 */}
            <motion.a 
              whileHover={{ y: -5 }}
              href="#" 
              className="group no-underline text-inherit block"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-[#180a00] mb-4">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop" 
                  alt="Bloom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-10">
                  <div className="relative text-center text-white font-serif">
                    <p className="text-[8px] tracking-[3px] text-orange-200 opacity-60 mb-8 uppercase">Reserve Now</p>
                    <h3 className="text-5xl font-black italic text-orange-600 tracking-tighter mix-blend-overlay">BLOOM</h3>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#888] tracking-widest uppercase mb-1">Archive</p>
              <h4 className="text-sm font-medium leading-relaxed text-[#111]">Time to Bloom: 피어나는 시간</h4>
            </motion.a>
          </div>
        </section>

        {/* NEWS */}
        <section id="news" className="bg-[#f7f6f4] px-6 md:px-10 py-20">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-10">
              <h2 className="font-display font-bold text-xs tracking-[2px] text-[#111] uppercase select-none">
                NEWS
              </h2>
              <div className="flex gap-6 items-center">
                {(['프로그램', '언론보도', '공지사항'] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[13px] pb-1 border-b-2 transition-all cursor-pointer ${
                      activeTab === tab 
                        ? 'text-[#111] border-black font-bold' 
                        : 'text-[#888] border-transparent hover:text-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <a href="#" className="text-[12px] text-[#666] no-underline tracking-wide border-b border-[#ccc] pb-0.5 hover:text-[#e63312] hover:border-[#e63312] transition-all self-start">
              전체보기
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatePresence mode="wait">
              {newsData[activeTab].map((item) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  href="#"
                  className="group no-underline text-inherit block"
                >
                  <span className="inline-block text-[10px] font-medium tracking-tight border border-[#ccc] px-2 py-0.5 rounded-full text-[#555] mb-3 group-hover:bg-[#e63312] group-hover:text-white group-hover:border-[#e63312] transition-colors">
                    {item.badge}
                  </span>
                  <h3 className="text-[13px] leading-relaxed font-medium text-[#111] mb-2 min-h-[40px] group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#aaa] font-mono mb-4">{item.date}</p>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.thumb} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-[#ccc] px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-10 border-b border-[#333] pb-10 mb-8">
            <div className="flex flex-col gap-8">
              <a href="#" className="text-[11px] tracking-[2px] text-[#888] font-bold no-underline hover:text-white transition-colors flex items-center gap-2">
                <Instagram size={14} className="opacity-70" />
                INSTAGRAM
              </a>
              <div className="text-[11px] text-[#666] leading-[1.8]">
                느와르 갤러리 · NOIR GALLERY FOUNDATION<br />
                서울특별시 강남구 테헤란로 123 (역삼동) 느와르 빌딩 4-6F<br />
                T. 02-123-4567 · E. contact@noirgallery.com<br />
                <p className="mt-4 text-[#555] uppercase tracking-wide">COPYRIGHT © 2026 NOIR GALLERY. ALL RIGHTS RESERVED.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-end">
              <div className="relative group">
                <select className="appearance-none bg-[#1e1e1e] border border-[#333] text-[#888] text-[12px] px-10 py-2.5 rounded-sm cursor-pointer min-w-[200px] outline-none hover:border-[#555] transition-colors">
                  <option>FAMILY SITE</option>
                  <option>느와르 아트리움</option>
                  <option>느와르 아카이브</option>
                  <option>문화체육관광부</option>
                  <option>예술경영지원센터</option>
                </select>
                <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none group-hover:text-white transition-colors" />
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-[10px] text-[#666] px-3 py-1.5 border border-[#333] rounded-sm no-underline hover:bg-[#222] transition-colors flex items-center gap-2">
                  문화체육관광부 <ExternalLink size={10} />
                </a>
                <a href="#" className="text-[10px] text-[#666] px-3 py-1.5 border border-[#333] rounded-sm no-underline hover:bg-[#222] transition-colors flex items-center gap-2">
                   국세청 공시 <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-5 flex flex-col gap-[2px]">
                <span className="block h-1.5 bg-[#e63312] w-full rounded-sm"></span>
                <span className="block h-1.5 bg-[#f5a623] w-[70%] rounded-sm"></span>
                <span className="block h-1.5 bg-white w-full rounded-sm"></span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-white text-[15px] tracking-wide">NOIR GALLERY</span>
                <span className="text-[8px] text-[#555] font-medium tracking-[0.5px]">느와르 문화재단</span>
              </div>
            </div>
            <div className="text-[9px] text-[#444] border border-[#222] px-3 py-1.5 rounded-sm select-none tracking-[2px] font-bold">
              GBWEB AWARDS PLATINUM
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[60] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#e63312] transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
