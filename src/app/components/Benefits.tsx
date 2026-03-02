import { CheckCircle2 } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useAnalytics';

export function Benefits() {
  const sectionRef = useSectionTracking('benefits');
  
  const benefits = [
    {
      category: '렌터카 사업자',
      items: [
        '리스크 관리 자동화로 업무 부담 85% 감소',
        '실시간 알림으로 문제 발생 즉시 대응',
        '데이터 기반 의사결정으로 수익성 개선',
        '체계적인 운영 지표로 사업 신뢰도 향상',
        '금융 여신 확보로 사업 확장 기회 증대',
      ],
      color: 'blue',
    },
    {
      category: '금융사',
      items: [
        '객관적인 운영 데이터로 심사 정확도 향상',
        '소규모 사업자에게도 안전한 여신 제공',
        '리스크 관리 현황을 실시간으로 확인',
        'Compliance 요구사항 자동 충족',
        '대출 포트폴리오 다각화 기회',
      ],
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-cyan-50',
      badge: 'bg-blue-600',
      icon: 'text-blue-600',
    },
    green: {
      bg: 'from-green-50 to-emerald-50',
      badge: 'bg-green-600',
      icon: 'text-green-600',
    },
  };

  return (
    <section ref={sectionRef as any} className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            핵심 가치
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            모두에게 이로운<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Win-Win 플랫폼
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            렌터카 사업자와 금융사, 모두의 성장을 지원합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl`}
              >
                <div className={`${colors.badge} text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 inline-block`}>
                  {benefit.category}
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon} mr-2 md:mr-3 flex-shrink-0 mt-0.5`} />
                      <span className="text-base md:text-lg text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}