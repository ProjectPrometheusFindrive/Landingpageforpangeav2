import { ArrowRight, Zap, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DemoModal } from './DemoModal';
import { trackCTAClick } from '../../utils/analytics';

export function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션 높이 가져오기
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection?.offsetHeight || 600;
      
      // Hero 섹션을 벗어났을 때 표시
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 체크
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    trackCTAClick('sticky_demo_button', 'primary');
    setIsModalOpen(true);
  };

  const handleMVPClick = () => {
    trackCTAClick('sticky_mvp_button', 'secondary');
    window.open('https://pangea.autos', '_blank');
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    // 5초 후 다시 표시 (선택적)
    setTimeout(() => setIsDismissed(false), 5000);
  };

  // 숨김 상태이거나 사용자가 닫았을 때 렌더링 안함
  if (!isVisible || isDismissed) return null;

  return (
    <>
      {/* 모바일: 하단 고정 바 / 데스크톱: 우측 하단 플로팅 */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto z-50 animate-slide-up">
        {/* 모바일 레이아웃 */}
        <div className="md:hidden bg-white border-t border-gray-200 shadow-2xl">
          <div className="flex items-center gap-2 p-3">
            <button
              onClick={handleDemoClick}
              className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              무료 진단
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleMVPClick}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Zap className="w-4 h-4" />
              바로 시작
            </button>
            
            <button
              onClick={handleDismiss}
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 데스크톱 레이아웃 */}
        <div className="hidden md:flex flex-col gap-3">
          <button
            onClick={handleDemoClick}
            className="group bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold text-base hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-blue-600"
          >
            무료 진단받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleMVPClick}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold text-base hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-green-400/50"
          >
            <Zap className="w-5 h-5" />
            지금 사용해보기
          </button>

          <button
            onClick={handleDismiss}
            className="self-end p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-lg shadow-lg"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
