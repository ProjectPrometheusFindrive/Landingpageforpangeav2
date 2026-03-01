import { Bot, Bell, BarChart3, Banknote } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: Bot,
      step: 'STEP 01',
      title: 'RPA 기반 자동화',
      description: '사고, 연체, 정비 등 모든 리스크 포인트를 AI가 24시간 자동으로 모니터링합니다.',
      color: 'blue',
    },
    {
      icon: Bell,
      step: 'STEP 02',
      title: '스마트 알림',
      description: '위험 요소가 감지되면 즉시 알림을 받고, 우선순위에 따라 처리할 수 있습니다.',
      color: 'purple',
    },
    {
      icon: BarChart3,
      step: 'STEP 03',
      title: '지표화 & 대시보드',
      description: '리스크 관리지표와 사업 성과를 실시간으로 확인하고 분석할 수 있습니다.',
      color: 'cyan',
    },
    {
      icon: Banknote,
      step: 'STEP 04',
      title: '금융사 연계',
      description: '객관적인 운영 데이터를 기반으로 금융사의 여신 심사를 통과하여 성장 자금을 확보합니다.',
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-700',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      badge: 'bg-purple-100 text-purple-700',
    },
    cyan: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-700',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      badge: 'bg-green-100 text-green-700',
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Pangea의 솔루션
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            RPA로 시작해서<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              금융 성장까지 연결하는 4단계
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            단순한 관리 툴이 아닌, 성장을 위한 선순환 플랫폼
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const colors = colorClasses[solution.color as keyof typeof colorClasses];
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 ${colors.border} hover:scale-105`}
              >
                <div className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block`}>
                  {solution.step}
                </div>
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
