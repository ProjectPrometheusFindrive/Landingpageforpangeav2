import { useSectionTracking } from '../../../hooks/useAnalytics';
import { trackCTAClick } from '../../../utils/analytics';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

function Spark({ points, color }: { points: string; color: string }) {
  return (
    <svg className="mt-3 block h-[34px] w-full" viewBox="0 0 200 34" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={points} />
    </svg>
  );
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const sectionRef = useSectionTracking('hero');

  return (
    <header ref={sectionRef as any} className="relative z-[1] overflow-hidden pt-20 pb-16 md:pt-28">
      {/* soft gradient blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute left-[-8%] top-[10%] h-[360px] w-[360px] rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 font-mono-p text-[12.5px] tracking-[.04em] text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 pangea-pulse" />
          RENTAL CAR OPERATING SYSTEM
        </span>

        <h1 className="max-w-[16ch] text-[38px] font-bold leading-[1.14] tracking-[-.03em] text-gray-900 sm:text-[52px] lg:text-[64px]">
          렌터카 운영의 <span className="text-blue-600">AX</span>,<br />그 첫걸음은 데이터입니다
        </h1>

        <p className="mt-6 mb-8 max-w-[54ch] text-[17px] leading-[1.7] text-gray-600 md:text-[19px]">
          영업·CS·자산관리·재무를 잇는 운영 데이터를 한곳에 모으고, 자동화하고, 리스크를 점수화합니다.{' '}
          <b className="font-semibold text-gray-900">AI 전환을 어디서부터 시작할지</b> 고민하는 렌터카사를 위해, Pangea가 그 토대를 미리 만들어 두었습니다.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => { trackCTAClick('hero', 'free_demo'); onOpenDemo(); }}
            className="rounded-xl bg-blue-600 px-6 py-3.5 text-[15.5px] font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            무료 데모 신청 →
          </button>
          <a
            href="#shift"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-[15.5px] font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            도입 효과 보기
          </a>
        </div>
        <p className="font-mono-p mt-4 text-[13px] text-gray-400">// 데모 신청 후 영업일 1일 이내 연락 · 무상 온보딩 지원</p>
      </div>

      {/* telemetry strip - light card */}
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,.12)]">
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/60 px-4 py-3 font-mono-p text-[12px] text-gray-400">
            <span className="h-[9px] w-[9px] rounded-full bg-gray-200" />
            <span className="h-[9px] w-[9px] rounded-full bg-gray-200" />
            <span className="h-[9px] w-[9px] rounded-full bg-gray-200" />
            <span className="ml-2">pangea · fleet_operations.live</span>
            <span className="ml-auto flex items-center gap-1.5 text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 pangea-pulse" />STREAMING
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-b border-r border-gray-100 px-5 py-6 md:border-b-0">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-gray-400">통합 운영 데이터</div>
              <div className="mt-2 text-[30px] font-bold tracking-[-.02em] text-gray-900">4<span className="ml-1 text-[14px] font-medium text-gray-400">개 모듈</span></div>
              <div className="mt-1 text-[12.5px] text-gray-500">ERP · FMS · RPA · AI Score</div>
              <Spark color="#2563EB" points="0,26 25,22 50,24 75,14 100,18 125,9 150,12 175,5 200,7" />
            </div>
            <div className="border-b border-gray-100 px-5 py-6 md:border-b-0 md:border-r">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-gray-400">차량 1대당 데이터</div>
              <div className="mt-2 text-[30px] font-bold tracking-[-.02em] text-gray-900">40<span className="ml-1 text-[14px] font-medium text-gray-400">+ 항목</span></div>
              <div className="mt-1 text-[12.5px] text-gray-500">계약·정비·사고·정산 이력</div>
              <Spark color="#2563EB" points="0,20 25,18 50,22 75,15 100,17 125,11 150,14 175,8 200,10" />
            </div>
            <div className="border-r border-gray-100 px-5 py-6">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-gray-400">자동화 대상 업무</div>
              <div className="mt-2 text-[30px] font-bold tracking-[-.02em] text-gray-900">수기 → <span className="text-[14px] font-medium text-gray-400">RPA</span></div>
              <div className="mt-1 text-[12.5px] text-gray-500">반복 행정 업무 대체</div>
              <Spark color="#F59E0B" points="0,8 25,10 50,7 75,14 100,12 125,18 150,16 175,24 200,22" />
            </div>
            <div className="px-5 py-6">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-gray-400">리스크 스코어링</div>
              <div className="mt-2 text-[30px] font-bold tracking-[-.02em] text-gray-900">ACS<span className="ml-1 text-[14px] font-medium text-gray-400"> 대안신용</span></div>
              <div className="mt-1 text-[12.5px] text-gray-500">연체·사고 예측 점수</div>
              <Spark color="#2563EB" points="0,24 25,20 50,21 75,16 100,13 125,14 150,9 175,10 200,6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
