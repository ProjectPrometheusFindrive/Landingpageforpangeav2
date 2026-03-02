import { Activity, Shield, LineChart, Zap, Users, Lock } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useAnalytics';

export function Features() {
  const sectionRef = useSectionTracking('features');
  
  const features = [
    {
      icon: Activity,
      title: '실시간 모니터링',
      description: '차량 상태, 사고 이력, 연체 정보 등을 실시간으로 추적하고 관리합니다.',
      items: ['사고 자동 감지', '연체 예측 알림', '차량 상태 추적'],
    },
    {
      icon: Shield,
      title: '리스크 자동 평가',
      description: 'AI 기반 알고리즘으로 잠재적 리스크를 사전에 파악하고 대응합니다.',
      items: ['AI 리스크 스코어링', '패턴 분석', '예방적 조치 추천'],
    },
    {
      icon: LineChart,
      title: '성과 대시보드',
      description: '사업 운영 지표를 한눈에 확인하고 데이터 기반 의사결정을 내립니다.',
      items: ['매출 분석', 'ROI 추적', '운영 효율성 지표'],
    },
    {
      icon: Zap,
      title: '업무 자동화',
      description: '반복적인 확인 작업을 자동화하여 핵심 업무에 집중할 수 있습니다.',
      items: ['보고서 자동 생성', '알림 자동화', 'API 연동'],
    },
    {
      icon: Users,
      title: '금융사 연계',
      description: '객관적인 운영 데이터로 금융사와의 신뢰를 구축하고 여신을 확보합니다.',
      items: ['Compliance 리포트', '신용도 지표화', '맞춤형 금융 상품'],
    },
    {
      icon: Lock,
      title: '보안 & 컴플라이언스',
      description: '금융권 수준의 보안 체계로 데이터를 안전하게 보호합니다.',
      items: ['데이터 암호화', '접근 권한 관리', '감사 로그'],
    },
  ];

  return (
    <section ref={sectionRef as any} className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            주요 기능
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            렌터카 사업에 필요한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              모든 기능을 하나의 플랫폼에
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
                    <svg className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}