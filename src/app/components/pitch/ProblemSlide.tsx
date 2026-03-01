import { AlertTriangle, Clock, FileText, TrendingDown } from 'lucide-react';

export function ProblemSlide() {
  const problems = [
    {
      icon: AlertTriangle,
      title: '리스크 관리의 어려움',
      description: '사고, 연체, 차량 손실 등 다양한 리스크를 실시간으로 파악하기 어렵습니다.',
      impact: '손실 확대',
    },
    {
      icon: Clock,
      title: '수동 업무 과부하',
      description: '매일 반복되는 수동 확인 작업으로 핵심 업무 집중이 어렵습니다.',
      impact: '생산성 저하',
    },
    {
      icon: FileText,
      title: '데이터 부족',
      description: '체계적인 운영 데이터 부재로 사업 성과 증명이 어렵습니다.',
      impact: '신뢰도 하락',
    },
    {
      icon: TrendingDown,
      title: '금융 접근성 제한',
      description: '소규모 사업자는 신용도 부족으로 성장 자금 확보가 어렵습니다.',
      impact: '성장 정체',
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-red-600 font-semibold text-lg mb-3">Problem</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          렌터카 사업자가 겪는<br />현실적인 문제
        </h2>
        <p className="text-xl text-gray-600">
          리스크 관리 부재는 사업 성장의 가장 큰 걸림돌입니다
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {problems.map((problem, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="bg-red-100 p-3 rounded-xl">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
            <div className="mt-auto pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                <span>→</span>
                <span>{problem.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
