import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">🚀 Pangea v2.0 - RPA 기반 리스크 관리 플랫폼</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          렌터카 사업의<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            리스크를 관리하고
          </span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            성장을 가속화하세요
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl leading-relaxed">
          AI 기반 자동 리스크 감지부터 금융 연계까지. Pangea는 렌터카 사업자의 지속 가능한 성장을 지원하는 선순환 플랫폼입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
            무료 데모 신청하기
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2">
            서비스 소개서 다운로드
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <Shield className="w-10 h-10 text-cyan-300 mb-3" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">자동 리스크 감지율</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <TrendingUp className="w-10 h-10 text-teal-300 mb-3" />
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="text-blue-100">관리 업무 시간 단축</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <svg className="w-10 h-10 text-yellow-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-3xl font-bold mb-2">2배</div>
            <div className="text-blue-100">금융 접근성 향상</div>
          </div>
        </div>
      </div>
    </section>
  );
}