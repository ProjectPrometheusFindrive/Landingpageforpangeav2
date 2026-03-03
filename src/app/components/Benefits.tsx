import { CheckCircle2, ArrowRight, TrendingUp, Shield, BarChart3, DollarSign, ArrowDown } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useAnalytics';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Benefits() {
  const sectionRef = useSectionTracking('benefits');
  
  const rentalCarBenefits = [
    {
      icon: TrendingUp,
      title: '업무 시간 85% 단축',
      before: '매일 2-3시간 수동 확인',
      after: 'RPA가 24시간 자동 모니터링',
      image: 'https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjB3b3JrZmxvdyUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc3MjU3OTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: '리스크 조기 발견',
      before: '발견 시 이미 손실 발생',
      after: '실시간 감지로 즉시 대응',
      image: 'https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwdGltZSUyMG1vbml0b3JpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcyNTc5NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: BarChart3,
      title: '운영 성과 지표화',
      before: '주관적인 설명만 가능',
      after: '객관적인 데이터로 증명',
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMG1ldHJpY3MlMjBjaGFydHxlbnwxfHx8fDE3NzI1Nzk1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: DollarSign,
      title: '금융 접근성 개선',
      before: '담보 부족으로 대출 거절',
      after: '데이터 기반 여신 확보',
      image: 'https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHByb3ZlZCUyMGxvYW4lMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI1Nzk1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const financeBenefits = [
    {
      title: '컴플라이언스 기반 심사',
      description: '운영 데이터 기반 대출 심사 가능',
      icon: BarChart3,
    },
    {
      title: '실시간 모니터링',
      description: '대출 후에도 리스크 관리 현황 확인',
      icon: Shield,
    },
    {
      title: '신규 시장 개척',
      description: '기존 거절했던 포트폴리오 확장',
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={sectionRef as any} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            핵심 가치
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pangea로 바뀌는 것들
          </h2>
          <p className="text-xl text-gray-600">
            렌터카 사업자와 금융사, 모두가 성장합니다
          </p>
        </div>
        
        {/* 렌터카 사업자 섹션 */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                렌터카 사업자
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Before → After</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentalCarBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* 이미지 */}
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* 아이콘 */}
                    <div className="absolute top-3 right-3 bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* 제목 */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                    </div>
                  </div>
                  
                  {/* Before/After */}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-16 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                        Before
                      </div>
                      <p className="text-sm text-gray-600">{benefit.before}</p>
                    </div>
                    
                    <div className="flex items-center justify-center my-2">
                      <ArrowDown className="w-4 h-4 text-blue-600" />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-16 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        After
                      </div>
                      <p className="text-sm text-gray-900 font-medium">{benefit.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 금융사 섹션 */}
        <div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                금융사
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Win-Win 효과</h3>
            </div>
            
            {/* 금융사 이미지 */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpcyUyMGRhdGElMjByZXBvcnR8ZW58MXx8fHwxNzcyNTc5NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="금융사 데이터 분석"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financeBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}