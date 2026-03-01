export function CoverSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white flex flex-col items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 inline-block">
          <span className="text-lg font-medium">서비스 소개서</span>
        </div>
        
        <h1 className="text-7xl font-bold mb-4 leading-tight">
          Pangea
        </h1>
        
        <div className="text-3xl mb-12 text-blue-100">
          RPA 기반 리스크 관리 플랫폼
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-12"></div>
        
        <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
          렌터카 사업자의 지속 가능한 성장을 지원하는 선순환 플랫폼
        </p>
        
        <div className="mt-16 text-sm text-blue-200">
          2026.03
        </div>
      </div>
    </div>
  );
}
