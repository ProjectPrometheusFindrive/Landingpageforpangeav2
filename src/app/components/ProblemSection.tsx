import { AlertTriangle, FileText, TrendingDown, Clock } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useAnalytics';

export function ProblemSection() {
  const sectionRef = useSectionTracking('problem');
  
  const problems = [
    {
      icon: AlertTriangle,
      title: '리스크 관리의 어려움',
      description: '렌터카 사고, 연체, 차량 손실 등 다양한 리스크를 실시간으로 파악하기 어렵습니다.',
    },
    {
      icon: Clock,
      title: '수동 업무 과부하',
      description: '매일 반복되는 수동 확인 작업으로 핵심 업무에 집중할 시간이 부족합니다.',
    },
    {
      icon: FileText,
      title: '데이터 부족',
      description: '체계적인 운영 데이터가 없어 사업 성과를 객관적으로 증명하기 어렵습니다.',
    },
    {
      icon: TrendingDown,
      title: '금융 접근성 제한',
      description: '소규모 사업자는 신용도 부족으로 성장을 위한 자금 확보가 어렵습니다.',
    },
  ];

  return (
    <section ref={sectionRef as any} className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-red-100 text-red-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            렌터카 사업자가 겪는 문제
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            이런 고민, 하고 계신가요?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            소규모 렌터카 사업자가 직면한 현실적인 문제들
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-red-200"
            >
              <div className="bg-red-50 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <problem.icon className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}