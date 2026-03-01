import { CheckCircle2 } from 'lucide-react';

export function BenefitsSlide() {
  const benefits = [
    {
      category: '렌터카 사업자',
      icon: '🚗',
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
      icon: '🏦',
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

  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-teal-600 font-semibold text-lg mb-3">Benefits</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          모두에게 이로운 Win-Win 플랫폼
        </h2>
        <p className="text-xl text-gray-600">
          렌터카 사업자와 금융사, 모두의 성장을 지원합니다
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${
              benefit.color === 'blue' ? 'from-blue-50 to-cyan-50' : 'from-green-50 to-emerald-50'
            } rounded-3xl p-8 shadow-xl flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">{benefit.icon}</div>
              <div className={`${
                benefit.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
              } text-white px-4 py-2 rounded-full font-bold`}>
                {benefit.category}
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {benefit.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className={`w-5 h-5 ${
                    benefit.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  } mr-3 flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
