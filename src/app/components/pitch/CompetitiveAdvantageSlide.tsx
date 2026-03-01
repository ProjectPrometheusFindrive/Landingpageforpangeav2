import { Target } from 'lucide-react';

export function CompetitiveAdvantageSlide() {
  const competitors = [
    {
      name: '기존 관리 툴',
      cons: ['수동 데이터 입력 필요', '리스크 감지 불가', '금융 연계 없음', '제한적 분석 기능'],
    },
    {
      name: '단순 알림 서비스',
      cons: ['포괄적 모니터링 불가', '분석 기능 부족', '리포트 생성 불가', '사업 확장 지원 없음'],
    },
  ];

  const advantages = [
    { title: 'RPA 자동화', desc: '100% 자동 데이터 수집 및 모니터링' },
    { title: 'AI 리스크 분석', desc: '패턴 학습 기반 예측 및 추천' },
    { title: '금융사 연계', desc: '국내 유일의 금융 연계 플랫폼' },
    { title: '즉시 사용', desc: '가입 후 바로 시작, 복잡한 설정 불필요' },
    { title: '선순환 구조', desc: '리스크 관리가 곧 성장의 발판' },
    { title: '전문 지원', desc: '렌터카 업계 특화 컨설팅' },
  ];

  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-orange-600 font-semibold text-lg mb-3">Competitive Advantage</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Pangea만의 차별점
        </h2>
        <p className="text-xl text-gray-600">
          단순한 관리 툴을 넘어선 성장 플랫폼
        </p>
      </div>

      <div className="flex gap-8 flex-1">
        {/* Competitors */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">기존 솔루션의 한계</h3>
          {competitors.map((comp, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-3 text-gray-700">{comp.name}</h4>
              <ul className="space-y-2">
                {comp.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pangea Advantages */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Pangea의 차별화된 가치</h3>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl h-[calc(100%-3rem)]">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10" />
              <span className="text-2xl font-bold">핵심 경쟁력</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((adv, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="font-bold mb-2">{adv.title}</div>
                  <div className="text-sm text-blue-100">{adv.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">국내 유일</div>
                <div className="text-blue-100">RPA 기반 금융 연계 렌터카 리스크 관리 플랫폼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
