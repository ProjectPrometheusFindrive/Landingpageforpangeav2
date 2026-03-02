import { ArrowRight, Shield, TrendingUp, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { DemoModal } from './DemoModal';
import { useSectionTracking } from '../../hooks/useAnalytics';
import { trackCTAClick } from '../../utils/analytics';

export function Hero() {
  useSectionTracking('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoClick = () => {
    trackCTAClick('hero_demo_button', 'primary');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14">
          <div className="max-w-4xl">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Pangea: 렌터카 사업자 AI 관리 플랫폼</span>
            </div>

            {/* 메인 헤드라인 - 그라데이션 텍스트 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
              <span className="text-white">렌터카 사업의</span><br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">리스크를 관리하고</span><br />
              <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">성장을 가속화하세요</span>
            </h1>

            {/* 서브 헤드라인 - 박스 없음 */}
            <p className="text-lg sm:text-xl leading-relaxed mb-8 text-blue-50">
              AI 기반 자동 리스크 감지부터 금융연계까지.<br />
              <span className="inline-block">Pangea는 렌터카 사업자의 지속 가능한 성장을 지원하는 선순환 플랫폼입니다.</span>
            </p>

            {/* CTA 버튼 */}
            <div className="mb-10">
              <button
                onClick={handleDemoClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                무료 데모 신청하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 주요 지표 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/30 rounded-xl mb-4">
                  <Shield className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm md:text-base text-blue-100">자동 리스크 감지율</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/30 rounded-xl mb-4">
                  <TrendingUp className="w-6 h-6 text-green-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
                <div className="text-sm md:text-base text-blue-100">관리 업무 시간 단축</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/30 rounded-xl mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2배</div>
                <div className="text-sm md:text-base text-blue-100">금융 접근성 향상</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 웨이브 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}