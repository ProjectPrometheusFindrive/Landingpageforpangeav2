import { ArrowRight } from 'lucide-react';

export function VirtuousCycle() {
  const cycleSteps = [
    {
      number: '01',
      title: '리스크 자동 감지',
      description: 'RPA가 24시간 모니터링',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      title: '효율적 관리',
      description: '업무 시간 85% 단축',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      title: '성과 개선',
      description: '리스크 최소화로 수익 증대',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      number: '04',
      title: '데이터 지표화',
      description: '운영 성과의 객관적 증명',
      color: 'from-teal-500 to-teal-600',
    },
    {
      number: '05',
      title: '금융 여신 획득',
      description: '성장 자금 확보',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '06',
      title: '사업 확장',
      description: '더 큰 성장으로',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvY2lyY2xlPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Virtuous Cycle Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pangea가 만드는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
              성장의 선순환 구조
            </span>
          </h2>
          <p className="text-xl text-blue-100">
            리스크 관리가 곧 성장의 발판이 되는 혁신적인 플랫폼
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 relative">
              {cycleSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                    <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                  
                  {/* Arrows */}
                  {index < cycleSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-cyan-400" />
                    </div>
                  )}
                  
                  {/* Closing arrow from last to first */}
                  {index === cycleSteps.length - 1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent mb-2"></div>
                        <ArrowRight className="w-8 h-8 text-cyan-400 transform rotate-180" />
                        <div className="text-center mt-4 text-cyan-300 font-semibold">
                          지속적인 성장 반복
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {cycleSteps.map((step, index) => (
              <div key={index}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-2xl font-bold`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                
                {index < cycleSteps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowRight className="w-8 h-8 text-cyan-400 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-center pt-6">
              <div className="text-center">
                <ArrowRight className="w-8 h-8 text-cyan-400 transform rotate-180 mx-auto mb-2" />
                <div className="text-cyan-300 font-semibold">
                  지속적인 성장 반복
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
