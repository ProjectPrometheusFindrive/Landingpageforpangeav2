import { ArrowRight } from 'lucide-react';

export function VirtuousCycleSlide() {
  const steps = [
    { num: '01', title: '리스크 자동 감지', desc: 'RPA 24시간 모니터링', color: 'blue' },
    { num: '02', title: '효율적 관리', desc: '업무 시간 85% 단축', color: 'purple' },
    { num: '03', title: '성과 개선', desc: '리스크 최소화, 수익 증대', color: 'cyan' },
    { num: '04', title: '데이터 지표화', desc: '운영 성과 객관적 증명', color: 'teal' },
    { num: '05', title: '금융 여신 획득', desc: '성장 자금 확보', color: 'green' },
    { num: '06', title: '사업 확장', desc: '더 큰 성장으로', color: 'emerald' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    teal: 'from-teal-500 to-teal-600',
    green: 'from-green-500 to-green-600',
    emerald: 'from-emerald-500 to-emerald-600',
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 p-16 flex flex-col text-white">
      <div className="mb-12">
        <div className="text-cyan-400 font-semibold text-lg mb-3">Virtuous Cycle</div>
        <h2 className="text-5xl font-bold mb-4">
          성장의 선순환 구조
        </h2>
        <p className="text-xl text-blue-100">
          리스크 관리가 곧 성장의 발판이 되는 혁신적인 플랫폼
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-5xl">
          {/* Circular layout */}
          <div className="grid grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all h-full">
                  <div className={`bg-gradient-to-r ${colorMap[step.color]} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-100 text-sm">{step.desc}</p>
                </div>
                
                {/* Arrow indicators */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Closing cycle arrow */}
          <div className="flex justify-center mt-8">
            <div className="bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 px-6 py-3 rounded-full flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-cyan-400 transform rotate-180" />
              <span className="font-bold text-cyan-300">지속적인 성장 반복</span>
              <ArrowRight className="w-5 h-5 text-cyan-400 transform rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
