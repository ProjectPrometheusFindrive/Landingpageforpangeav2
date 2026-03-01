import { Monitor, AlertCircle, TrendingUp, FileCheck } from 'lucide-react';

export function HowItWorksSlide() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      <div className="mb-12">
        <div className="text-purple-600 font-semibold text-lg mb-3">How It Works</div>
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          실제 작동 방식
        </h2>
        <p className="text-xl text-gray-600">
          렌터카 사업의 모든 과정을 자동화하고 최적화합니다
        </p>
      </div>

      <div className="flex-1 flex items-center">
        <div className="w-full">
          <div className="relative">
            {/* Flow */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">데이터 수집</h3>
                <p className="text-sm text-gray-600">
                  차량 정보, 계약 현황,<br />사고 이력 등 자동 수집
                </p>
              </div>

              <div className="flex items-center justify-center px-4">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">AI 분석</h3>
                <p className="text-sm text-gray-600">
                  패턴 분석 및<br />리스크 자동 감지
                </p>
              </div>

              <div className="flex items-center justify-center px-4">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">실시간 알림</h3>
                <p className="text-sm text-gray-600">
                  위험 요소 즉시 통지<br />우선순위 기반 처리
                </p>
              </div>

              <div className="flex items-center justify-center px-4">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">리포트 생성</h3>
                <p className="text-sm text-gray-600">
                  운영 성과 지표화<br />금융사 제출용 리포트
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">핵심 자동화 기능</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="font-semibold mb-1">RPA 엔진</div>
                  <div className="text-sm text-gray-600">24시간 무중단 모니터링</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <div className="font-semibold mb-1">AI 분석</div>
                  <div className="text-sm text-gray-600">패턴 학습 및 예측</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="font-semibold mb-1">실시간 대시보드</div>
                  <div className="text-sm text-gray-600">언제 어디서나 현황 파악</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
