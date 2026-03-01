export function RoadmapSlide() {
  const roadmap = [
    {
      quarter: 'Q2 2026',
      phase: 'Phase 1',
      status: 'Current',
      items: [
        '베타 서비스 오픈',
        '초기 파트너사 온보딩 (10개사)',
        '기본 RPA 엔진 구축',
        '대시보드 및 알림 기능',
      ],
    },
    {
      quarter: 'Q3 2026',
      phase: 'Phase 2',
      status: 'Planning',
      items: [
        'AI 리스크 분석 고도화',
        '금융사 연계 파일럿 (2개 금융사)',
        '모바일 앱 출시',
        '고객사 100개 확보',
      ],
    },
    {
      quarter: 'Q4 2026',
      phase: 'Phase 3',
      status: 'Planning',
      items: [
        '정식 금융 상품 론칭',
        'API 플랫폼 오픈',
        '예측 분석 기능 추가',
        '파트너 에코시스템 구축',
      ],
    },
    {
      quarter: '2027',
      phase: 'Phase 4',
      status: 'Vision',
      items: [
        '해외 시장 진출 (동남아)',
        '차량 관련 추가 서비스 확장',
        '블록체인 기반 신용 시스템',
        '렌터카 산업 표준 플랫폼',
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-indigo-600 font-semibold text-lg mb-3">Roadmap</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          성장 로드맵
        </h2>
        <p className="text-xl text-gray-600">
          단계별 성장 전략으로 렌터카 산업의 표준을 만들어갑니다
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {roadmap.map((phase, index) => (
          <div key={index} className="relative">
            <div className={`rounded-2xl p-6 h-full flex flex-col ${
              phase.status === 'Current' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl' 
                : 'bg-white shadow-lg'
            }`}>
              <div className="mb-4">
                <div className={`text-sm font-semibold mb-1 ${
                  phase.status === 'Current' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {phase.quarter}
                </div>
                <div className={`text-2xl font-bold ${
                  phase.status === 'Current' ? 'text-white' : 'text-gray-900'
                }`}>
                  {phase.phase}
                </div>
                {phase.status === 'Current' && (
                  <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold mt-2 inline-block">
                    진행중
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 flex-1">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg 
                      className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                        phase.status === 'Current' ? 'text-blue-200' : 'text-blue-600'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={phase.status === 'Current' ? 'text-blue-50' : 'text-gray-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            {index < roadmap.length - 1 && (
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-2xl text-gray-900 mb-1">2027년 목표</div>
            <div className="text-gray-600">렌터카 사업자 1,000개사 · 금융 연계액 500억원 달성</div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1,000+</div>
              <div className="text-sm text-gray-600">파트너사</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500억+</div>
              <div className="text-sm text-gray-600">금융 연계액</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10,000+</div>
              <div className="text-sm text-gray-600">관리 차량</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
