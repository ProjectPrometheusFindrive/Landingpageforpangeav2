import { AlertTriangle, FileText, TrendingDown, Clock } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useAnalytics';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProblemSection() {
  const sectionRef = useSectionTracking('problem');
  
  const problems = [
    {
      icon: Clock,
      title: '매일 반복되는 수동 확인 작업',
      description: '사고, 연체, 차량 위치를 일일이 확인하느라 하루가 다 갑니다',
      image: 'https://images.unsplash.com/photo-1758519290890-46b542bb25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMGJ1c2luZXNzJTIwb3duZXIlMjBvZmZpY2UlMjBwYXBlcndvcmt8ZW58MXx8fHwxNzcyNTc5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: AlertTriangle,
      title: '리스크 발견이 너무 늦음',
      description: '문제를 발견했을 때는 이미 손실이 발생한 후입니다',
      image: 'https://images.unsplash.com/photo-1645836557895-e8ff62caee7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudCUyMG5vdGlmaWNhdGlvbiUyMGFsZXJ0fGVufDF8fHx8MTc3MjU3OTU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: FileText,
      title: '객관적인 데이터 부족',
      description: '아무리 잘 운영해도 금융사에 증명할 방법이 없습니다',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcyNTU1MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: TrendingDown,
      title: '성장 자금 확보의 어려움',
      description: '소규모 사업자는 신용도 부족으로 대출이 거의 불가능합니다',
      image: 'https://images.unsplash.com/photo-1603039078583-13468e835b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWplY3RlZCUyMGxvYW4lMjBkaXNhcHBvaW50ZWQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI1Nzk1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-600 to-rose-600',
    },
  ];

  return (
    <section ref={sectionRef as any} className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            렌터카 사업자가 겪는 문제
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            이런 고민, 하고 계신가요?
          </h2>
          <p className="text-xl text-gray-600">
            렌터카 사업자가 매일 겪는 현실
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <ImageWithFallback
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 오버레이 그라데이션 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* 아이콘 */}
                <div className={`absolute top-4 right-4 bg-gradient-to-br ${problem.gradient} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              {/* 콘텐츠 영역 */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{problem.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}