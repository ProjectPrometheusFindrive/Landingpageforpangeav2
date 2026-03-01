import { Mail, Phone, Globe } from 'lucide-react';

export function CTASlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY2xlcyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmNsZXMpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          렌터카 사업의 성장,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            지금 바로 시작하세요
          </span>
        </h2>
        
        <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
          무료 체험으로 Pangea의 강력한 기능을 직접 경험해보세요
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-3">⚡</div>
            <div className="font-bold text-xl mb-2">즉시 시작</div>
            <div className="text-blue-100 text-sm">가입과 동시에 바로 사용</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-3">🎁</div>
            <div className="font-bold text-xl mb-2">14일 무료 체험</div>
            <div className="text-blue-100 text-sm">신용카드 등록 불필요</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-3">🤝</div>
            <div className="font-bold text-xl mb-2">전문 지원</div>
            <div className="text-blue-100 text-sm">이메일 및 채팅 지원</div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">문의하기</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
              <div className="font-semibold mb-1">전화</div>
              <div className="text-blue-100 text-sm">02-1234-5678</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
              <div className="font-semibold mb-1">이메일</div>
              <div className="text-blue-100 text-sm">contact@pangea.com</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
              <div className="font-semibold mb-1">웹사이트</div>
              <div className="text-blue-100 text-sm">www.pangea.com</div>
            </div>
          </div>
        </div>

        <div className="text-3xl font-bold">
          Thank You
        </div>
        <div className="text-blue-100 mt-2">
          Pangea와 함께 성장하세요
        </div>
      </div>
    </div>
  );
}
