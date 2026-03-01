import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY2xlcyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmNsZXMpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
          지금 바로 시작하세요
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          렌터카 사업의 성장,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            Pangea와 함께 시작하세요
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
          무료 데모로 Pangea의 강력한 기능을 직접 체험해보세요.<br />
          전문 컨설턴트가 귀사의 상황에 맞는 최적의 솔루션을 제안해드립니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
            무료 데모 신청하기
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            상담 예약하기
            <Phone className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-2">⚡</div>
            <div className="font-bold text-lg mb-1">즉시 시작</div>
            <div className="text-blue-100 text-sm">가입과 동시에 바로 사용 가능</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-2">💰</div>
            <div className="font-bold text-lg mb-1">합리적 가격</div>
            <div className="text-blue-100 text-sm">사업 규모에 맞는 요금제</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-2">🤝</div>
            <div className="font-bold text-lg mb-1">전문 지원</div>
            <div className="text-blue-100 text-sm">이메일 및 채팅 지원</div>
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="text-sm text-blue-100 mb-4">문의하기</div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:02-1234-5678" className="flex items-center gap-2 text-lg hover:text-cyan-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span>02-1234-5678</span>
            </a>
            <a href="mailto:contact@pangea.com" className="flex items-center gap-2 text-lg hover:text-cyan-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@pangea.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}