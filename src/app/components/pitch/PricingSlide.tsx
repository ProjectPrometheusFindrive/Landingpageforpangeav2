import { Check } from 'lucide-react';

export function PricingSlide() {
  const plans = [
    {
      name: '스타터',
      price: '무료',
      description: '소규모 사업자를 위한 기본 플랜',
      vehicles: '최대 5대',
      features: [
        '기본 리스크 모니터링',
        '실시간 알림 (이메일)',
        '기본 대시보드',
        '월간 리포트',
        '이메일 지원',
      ],
      highlighted: false,
    },
    {
      name: '프로페셔널',
      price: '₩299,000',
      period: '/월',
      description: '성장하는 사업자를 위한 추천 플랜',
      vehicles: '최대 20대',
      features: [
        '스타터 기능 전체 포함',
        '고급 AI 리스크 분석',
        '실시간 알림 (SMS, 카카오톡)',
        '맞춤형 대시보드',
        '주간/월간 리포트',
        '금융사 연계 리포트',
        '우선 지원 (채팅)',
      ],
      highlighted: true,
    },
    {
      name: '비즈니스',
      price: '₩599,000',
      period: '/월',
      description: '중대형 사업자를 위한 고급 플랜',
      vehicles: '최대 50대',
      features: [
        '프로페셔널 기능 전체 포함',
        '예측 분석 및 추천',
        '다중 사용자 계정',
        'API 연동',
        '실시간 리포트',
        '전담 계정 매니저',
        '컨설팅 서비스 (월 2회)',
      ],
      highlighted: false,
    },
    {
      name: '엔터프라이즈',
      price: '맞춤 견적',
      description: '대규모 사업자를 위한 맞춤형 플랜',
      vehicles: '50대 이상',
      features: [
        '비즈니스 기능 전체 포함',
        '무제한 차량 및 사용자',
        '커스텀 기능 개발',
        '전용 서버 옵션',
        '온프레미스 배포 가능',
        '24/7 전화 지원',
        '정기 컨설팅',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 p-16 flex flex-col">
      <div className="mb-10">
        <div className="text-blue-600 font-semibold text-lg mb-3">Pricing</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          사업 규모에 맞는 요금제
        </h2>
        <p className="text-xl text-gray-600">
          무료 체험으로 시작해서 필요에 따라 확장하세요
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 flex-1">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-2xl p-5 flex flex-col ${
              plan.highlighted 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105' 
                : 'bg-white shadow-lg'
            }`}
          >
            {plan.highlighted && (
              <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 text-center">
                추천
              </div>
            )}
            <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
              {plan.name}
            </h3>
            <div className="mb-3">
              <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
              </span>
              {plan.period && (
                <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              )}
            </div>
            <p className={`text-xs mb-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
              {plan.description}
            </p>
            <div className={`text-sm font-semibold mb-4 pb-4 border-b ${
              plan.highlighted ? 'border-blue-400' : 'border-gray-200'
            }`}>
              {plan.vehicles}
            </div>
            <ul className="space-y-2 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs">
                  <Check className={`w-4 h-4 mr-2 flex-shrink-0 ${
                    plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                  }`} />
                  <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        * 모든 플랜은 14일 무료 체험이 가능합니다 (신용카드 등록 불필요)
      </div>
    </div>
  );
}
