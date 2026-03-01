import { Activity, Shield, LineChart, Zap, Users, Lock } from 'lucide-react';

export function FeaturesSlide() {
  const features = [
    {
      icon: Activity,
      title: '실시간 모니터링',
      items: ['사고 자동 감지', '연체 예측 알림', '차량 상태 추적'],
    },
    {
      icon: Shield,
      title: '리스크 자동 평가',
      items: ['AI 리스크 스코어링', '패턴 분석', '예방적 조치 추천'],
    },
    {
      icon: LineChart,
      title: '성과 대시보드',
      items: ['매출 분석', 'ROI 추적', '운영 효율성 지표'],
    },
    {
      icon: Zap,
      title: '업무 자동화',
      items: ['보고서 자동 생성', '알림 자동화', 'API 연동'],
    },
    {
      icon: Users,
      title: '금융사 연계',
      items: ['Compliance 리포트', '신용도 지표화', '맞춤형 금융 상품'],
    },
    {
      icon: Lock,
      title: '보안 & 컴플라이언스',
      items: ['데이터 암호화', '접근 권한 관리', '감사 로그'],
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-purple-600 font-semibold text-lg mb-3">Features</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          핵심 기능
        </h2>
        <p className="text-xl text-gray-600">
          렌터카 사업에 필요한 모든 기능을 하나의 플랫폼에
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <svg className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
