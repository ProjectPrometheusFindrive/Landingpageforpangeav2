export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <div className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Pangea</div>
          <p className="text-sm md:text-base text-gray-400">
            렌터카 사업의 성장을 위한 선순환 플랫폼
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="#" className="text-sm hover:text-white transition-colors">
              이용약관
            </a>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-sm text-gray-400">
              <strong className="text-gray-300">플로</strong> | 경기도 수원시 권선구 당수로129번길 10
            </div>
            <div className="text-sm text-gray-500">
              © 2026 Pangea. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}