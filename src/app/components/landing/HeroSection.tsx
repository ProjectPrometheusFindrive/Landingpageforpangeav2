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
    <header ref={sectionRef as any} className="relative z-[1] pt-20 pb-16 md:pt-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(59,232,176,.18)] bg-[rgba(59,232,176,.05)] px-3.5 py-1.5 font-mono-p text-[12.5px] tracking-[.06em] text-[#3BE8B0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3BE8B0] pangea-pulse" />
          RENTAL CAR OPERATING SYSTEM
        </span>

        <h1 className="font-display max-w-[15ch] text-[38px] font-bold leading-[1.04] tracking-[-.03em] text-[#EAF0F7] sm:text-[54px] lg:text-[68px]">
          렌터카 운영의 <span className="whitespace-nowrap text-[#3BE8B0]">AX</span>,
          <br />그 첫걸음은 데이터입니다
        </h1>

        <p className="font-body mt-6 mb-8 max-w-[52ch] text-[16px] font-light text-[#8A97AC] md:text-[19px]">
          영업·CS·자산관리·재무를 잇는 운영 데이터를 한곳에 모으고, 자동화하고, 리스크를 점수화합니다.{' '}
          <b className="font-medium text-[#EAF0F7]">AI 전환을 어디서부터 시작할지</b> 고민하는 렌터카사를 위해, Pangea가 그 토대를 미리 만들어 두었습니다.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => { trackCTAClick('hero', 'free_demo'); onOpenDemo(); }}
            className="font-display rounded-[11px] bg-[#3BE8B0] px-6 py-3.5 text-[15.5px] font-semibold text-[#0A0E14] transition hover:-translate-y-0.5 hover:bg-[#57f0c0] hover:shadow-[0_10px_30px_-10px_#3BE8B0]"
          >
            무료 데모 신청 →
          </button>
          <a
            href="#shift"
            className="font-display rounded-[11px] border border-[#2A3A52] px-5 py-3.5 text-[15.5px] font-medium text-[#EAF0F7] transition hover:border-[#3BE8B0] hover:text-[#3BE8B0]"
          >
            도입 효과 보기
          </a>
        </div>
        <p className="font-mono-p mt-4 text-[13px] text-[#5C6B82]">// 데모 신청 후 영업일 1일 이내 연락 · 무상 온보딩 지원</p>
      </div>

      {/* telemetry strip */}
      <div className="mx-auto mt-14 max-w-[1180px] px-6">
        <div className="overflow-hidden rounded-[14px] border border-[#1F2A3C] bg-gradient-to-b from-[#0F1520] to-[#0A0E14]">
          <div className="flex items-center gap-2 border-b border-[#1F2A3C] px-4 py-3 font-mono-p text-[12px] text-[#5C6B82]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#2A3A52]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#2A3A52]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#2A3A52]" />
            <span className="ml-2">pangea · fleet_operations.live</span>
            <span className="ml-auto flex items-center gap-1.5 text-[#3BE8B0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3BE8B0] pangea-pulse" />STREAMING
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-b border-r border-[#1F2A3C] px-5 py-[22px] md:border-b-0">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-[#5C6B82]">통합 운영 데이터</div>
              <div className="font-display mt-2 text-[30px] font-bold tracking-[-.02em] text-[#EAF0F7]">4<span className="ml-1 text-[14px] font-normal text-[#8A97AC]">개 모듈</span></div>
              <div className="mt-1 text-[12.5px] text-[#8A97AC]">ERP · FMS · RPA · AI Score</div>
              <Spark color="#3BE8B0" points="0,26 25,22 50,24 75,14 100,18 125,9 150,12 175,5 200,7" />
            </div>
            <div className="border-b border-[#1F2A3C] px-5 py-[22px] md:border-b-0 md:border-r">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-[#5C6B82]">차량 1대당 데이터</div>
              <div className="font-display mt-2 text-[30px] font-bold tracking-[-.02em] text-[#EAF0F7]">40<span className="ml-1 text-[14px] font-normal text-[#8A97AC]">+ 항목</span></div>
              <div className="mt-1 text-[12.5px] text-[#8A97AC]">계약·정비·사고·정산 이력</div>
              <Spark color="#3BE8B0" points="0,20 25,18 50,22 75,15 100,17 125,11 150,14 175,8 200,10" />
            </div>
            <div className="border-r border-[#1F2A3C] px-5 py-[22px]">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-[#5C6B82]">자동화 대상 업무</div>
              <div className="font-display mt-2 text-[30px] font-bold tracking-[-.02em] text-[#EAF0F7]">수기 → <span className="text-[14px] font-normal text-[#8A97AC]">RPA</span></div>
              <div className="mt-1 text-[12.5px] text-[#8A97AC]">반복 행정 업무 대체</div>
              <Spark color="#FFB454" points="0,8 25,10 50,7 75,14 100,12 125,18 150,16 175,24 200,22" />
            </div>
            <div className="px-5 py-[22px]">
              <div className="font-mono-p text-[11px] uppercase tracking-[.05em] text-[#5C6B82]">리스크 스코어링</div>
              <div className="font-display mt-2 text-[30px] font-bold tracking-[-.02em] text-[#EAF0F7]">ACS<span className="ml-1 text-[14px] font-normal text-[#8A97AC]"> 대안신용</span></div>
              <div className="mt-1 text-[12.5px] text-[#8A97AC]">연체·사고 예측 점수</div>
              <Spark color="#3BE8B0" points="0,24 25,20 50,21 75,16 100,13 125,14 150,9 175,10 200,6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
