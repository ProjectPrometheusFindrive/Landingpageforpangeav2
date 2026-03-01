import { Bot, Bell, BarChart3, Banknote } from 'lucide-react';

export function SolutionOverviewSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-blue-600 font-semibold text-lg mb-3">Solution</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Pangea의 4단계 솔루션
        </h2>
        <p className="text-xl text-gray-600">
          RPA로 시작해서 금융 성장까지 연결하는 선순환 플랫폼
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 flex-1">
        <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500 flex flex-col">
          <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Bot className="w-7 h-7 text-blue-600" />
          </div>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block w-fit">
            STEP 01
          </div>
          <h3 className="text-xl font-bold mb-3">RPA 기반<br />자동화</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI가 24시간 모든 리스크 포인트를 자동 모니터링
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-purple-500 flex flex-col">
          <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Bell className="w-7 h-7 text-purple-600" />
          </div>
          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block w-fit">
            STEP 02
          </div>
          <h3 className="text-xl font-bold mb-3">스마트<br />알림</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            위험 요소 감지 시 즉시 알림, 우선순위 기반 처리
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-cyan-500 flex flex-col">
          <div className="bg-cyan-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <BarChart3 className="w-7 h-7 text-cyan-600" />
          </div>
          <div className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block w-fit">
            STEP 03
          </div>
          <h3 className="text-xl font-bold mb-3">지표화 &<br />대시보드</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            리스크 관리지표와 사업 성과를 실시간 분석
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-green-500 flex flex-col">
          <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Banknote className="w-7 h-7 text-green-600" />
          </div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block w-fit">
            STEP 04
          </div>
          <h3 className="text-xl font-bold mb-3">금융사<br />연계</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            객관적 데이터로 여신 심사 통과, 성장 자금 확보
          </p>
        </div>
      </div>
    </div>
  );
}
