import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Download } from 'lucide-react';
import { Link } from 'react-router';
import { CoverSlide } from '../components/pitch/CoverSlide';
import { ProblemSlide } from '../components/pitch/ProblemSlide';
import { SolutionOverviewSlide } from '../components/pitch/SolutionOverviewSlide';
import { HowItWorksSlide } from '../components/pitch/HowItWorksSlide';
import { VirtuousCycleSlide } from '../components/pitch/VirtuousCycleSlide';
import { FeaturesSlide } from '../components/pitch/FeaturesSlide';
import { BenefitsSlide } from '../components/pitch/BenefitsSlide';
import { PricingSlide } from '../components/pitch/PricingSlide';
import { CompetitiveAdvantageSlide } from '../components/pitch/CompetitiveAdvantageSlide';
import { RoadmapSlide } from '../components/pitch/RoadmapSlide';
import { CTASlide } from '../components/pitch/CTASlide';

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <CoverSlide key="cover" />,
    <ProblemSlide key="problem" />,
    <SolutionOverviewSlide key="solution" />,
    <HowItWorksSlide key="how" />,
    <VirtuousCycleSlide key="cycle" />,
    <FeaturesSlide key="features" />,
    <BenefitsSlide key="benefits" />,
    <PricingSlide key="pricing" />,
    <CompetitiveAdvantageSlide key="advantage" />,
    <RoadmapSlide key="roadmap" />,
    <CTASlide key="cta" />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 flex flex-col"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-white hover:text-blue-400 transition-colors flex items-center gap-2">
          <Home className="w-5 h-5" />
          <span className="text-sm font-medium">홈으로</span>
        </Link>
        
        <div className="text-white text-sm font-medium">
          Pangea 서비스 소개서
        </div>
        
        <button className="text-white hover:text-blue-400 transition-colors flex items-center gap-2">
          <Download className="w-5 h-5" />
          <span className="text-sm font-medium">다운로드</span>
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">이전</span>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium">다음</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
