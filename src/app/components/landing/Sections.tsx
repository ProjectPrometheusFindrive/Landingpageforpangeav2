import { useState } from 'react';
import { useSectionTracking } from '../../../hooks/useAnalytics';
import { trackCTAClick } from '../../../utils/analytics';

const EYEBROW =
  'font-mono-p mb-4 flex items-center gap-2.5 text-[12.5px] uppercase tracking-[.12em] text-blue-600 before:h-px before:w-[26px] before:bg-blue-600 before:content-[""]';
const H2 = 'max-w-[22ch] text-[28px] font-bold leading-[1.22] tracking-[-.025em] text-gray-900 md:text-[40px]';
const LEDE = 'mt-[18px] max-w-[58ch] text-[17px] leading-[1.7] text-gray-600';

/* ---------------- The AX Gap ---------------- */
export function GapSection() {
  const ref = useSectionTracking('gap');
  return (
    <section id="gap" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>The AX Gap · 전환의 간극</div>
        <h2 className={H2}>렌터카사가 AI 전환을<br />시작하려 할 때 마주하는 벽</h2>
        <p className={LEDE}>
          최근 한 중견 렌터카사는 AI 전환을 이끌 전담 리드를 채용 공고로 내걸었습니다. 그 공고에 적힌 과제는, 이 산업이 공통으로 안고 있는 숙제이기도 합니다.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <p className="max-w-[30ch] border-l-[3px] border-blue-600 pl-6 text-[20px] font-semibold leading-[1.5] tracking-[-.01em] text-gray-900 md:text-[26px]">
            "영업·CS·자산관리·재무·인사 프로세스를 분석하고, AI를 적용할 영역을 정의하는 것."
          </p>
          <p className="font-mono-p mt-4 pl-[26px] text-[13px] text-gray-400">— 렌터카 업계 AI Transformation Lead 채용 공고 중</p>
        </div>

        <p className="mt-9 max-w-[62ch] text-[17px] leading-[1.7] text-gray-600">
          문제는, <span className="font-semibold text-gray-900">AI를 적용할 데이터가 흩어져 있다는 것</span>입니다. 계약은 ERP에, 정비는 정비소 장부에, 사고는 보험사 메일에, 정산은 엑셀에. AI 리드를 채용해도 첫 6개월은 이 데이터를 모으고 잇는 데 쓰입니다.{' '}
          <b className="font-semibold text-blue-600">Pangea는 바로 그 토대를 제품으로 만들어 둔 회사입니다.</b>
        </p>
      </div>
    </section>
  );
}

/* ---------------- Before / After ---------------- */
const ROWS: { proc: string; code: string; before: string; after: string; afterBold: string }[] = [
  { proc: '영업 · 계약', code: 'SALES', before: '엑셀 계약 대장, 담당자별 파일 분산, 실시간 가동률 파악 어려움', afterBold: 'ERP 통합 계약 관리', after: ' · 차량·계약·고객 단일 뷰, 가동률 실시간 집계' },
  { proc: 'CS · 고객 응대', code: 'CS', before: '전화·메신저 분산, 이력 추적 안 됨, 반복 문의 수기 응대', afterBold: 'RPA + 이력 통합', after: ' · 응대 이력 자동 축적, 반복 업무 자동화' },
  { proc: '자산 · 정비 관리', code: 'FMS', before: '정비 이력 정비소별 장부, 사고 접수 보험사 메일, 차량 상태 파악 지연', afterBold: 'FMS 차량 생애주기 관리', after: ' · 정비·사고·점검 이력 차량 단위 통합' },
  { proc: '재무 · 정산', code: 'FINANCE', before: '월말 수기 정산, 항목별 대사 반복, 마감에 수일 소요', afterBold: '정산 자동 집계', after: ' · 계약·정비·보험 데이터 연동, 마감 시간 단축' },
  { proc: '리스크 · 여신', code: 'RISK', before: '담당자 경험에 의존한 연체·사고 위험 판단, 사후 대응', afterBold: 'AI 리스크 스코어링(ACS)', after: ' · 대안신용 기반 사전 위험 점수화' },
];

export function ShiftSection() {
  const ref = useSectionTracking('shift');
  return (
    <section id="shift" ref={ref as any} className="relative z-[1] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>AS-IS → TO-BE · 업무별 전환 구조</div>
        <h2 className={H2}>채용으로 0부터 설계할 일을,<br />검증된 구조로 시작하세요</h2>
        <p className={LEDE}>
          아래는 실적 자랑이 아니라 <b className="font-semibold text-gray-900">구조 진단</b>입니다. 렌터카 운영의 핵심 프로세스가 지금 어떻게 돌아가고, Pangea 위에서 어떻게 바뀌는지를 그대로 옮겼습니다.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] md:grid">
            <div className="font-mono-p bg-gray-50 px-6 py-[18px] text-[12.5px] uppercase tracking-[.05em] text-gray-400">프로세스</div>
            <div className="font-mono-p border-l border-gray-200 bg-amber-50/50 px-6 py-[18px] text-[12.5px] uppercase tracking-[.05em] text-amber-600">AS-IS · 현행 (수기·분산)</div>
            <div className="font-mono-p border-l border-gray-200 bg-blue-50/60 px-6 py-[18px] text-[12.5px] uppercase tracking-[.05em] text-blue-600">TO-BE · Pangea</div>
          </div>
          {ROWS.map((r) => (
            <div key={r.code} className="grid grid-cols-1 border-t border-gray-200 md:grid-cols-[1.1fr_1.4fr_1.4fr]">
              <div className="flex flex-col gap-[3px] border-b border-gray-200 bg-gray-50 px-6 py-5 text-[14.5px] font-semibold text-gray-900 md:border-b-0">
                {r.proc}
                <span className="font-mono-p text-[11px] tracking-[.04em] text-gray-400">{r.code}</span>
              </div>
              <div className="border-b border-gray-200 bg-white px-6 py-5 text-[14.5px] text-gray-500 md:border-b-0 md:border-l">
                <span className="font-mono-p mb-1.5 block text-[10px] tracking-[.05em] text-amber-600 md:hidden">AS-IS · 현행</span>
                {r.before}
              </div>
              <div className="border-t border-gray-200 bg-blue-50/30 px-6 py-5 text-[14.5px] text-gray-700 md:border-t-0 md:border-l">
                <span className="font-mono-p mb-1.5 block text-[10px] tracking-[.05em] text-blue-600 md:hidden">TO-BE · Pangea</span>
                <b className="font-semibold text-blue-700">{r.afterBold}</b>{r.after}
              </div>
            </div>
          ))}
          <div className="font-mono-p border-t border-gray-200 bg-gray-50 px-6 py-4 text-[12px] text-gray-400">
            * 전환 효과의 정량 수치는 파일럿 파트너사의 실제 데이터로 함께 측정합니다. 과장된 실적 수치 대신, 검증 가능한 구조를 제시합니다.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Platform modules ---------------- */
const MODS = [
  { idx: '01 / ERP', title: '통합 운영 관리', desc: '계약·차량·고객·매출을 단일 데이터 모델로 통합합니다. 부서별 엑셀 대신, 하나의 진실된 원장에서 운영합니다.', tags: ['계약 관리', '가동률', '고객 이력'] },
  { idx: '02 / FMS', title: '차량 자산 관리', desc: '차량 한 대의 입고부터 매각까지 생애주기를 추적합니다. 정비·사고·점검 이력이 차량 단위로 쌓입니다.', tags: ['정비 이력', '사고 관리', '생애주기'] },
  { idx: '03 / RPA', title: '반복 업무 자동화', desc: '정산 대사, 문서 발급, 데이터 입력 같은 반복 행정을 자동화합니다. 사람은 판단이 필요한 일에 집중합니다.', tags: ['정산 자동화', '문서 발급', '대사'] },
  { idx: '04 / AI SCORE', title: '리스크 스코어링', desc: '대안신용점수(ACS)로 고객·계약의 연체·사고 위험을 사전에 점수화합니다. 경험이 아닌 데이터로 판단합니다.', tags: ['대안신용(ACS)', '연체 예측', '여신 판단'] },
];

export function PlatformSection() {
  const ref = useSectionTracking('platform');
  return (
    <section id="platform" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>The Platform · 4개 모듈</div>
        <h2 className={H2}>흩어진 운영을<br />하나의 데이터 위에서</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {MODS.map((m) => (
            <div key={m.idx} className="rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="font-mono-p text-[12px] tracking-[.08em] text-blue-600">{m.idx}</div>
              <h3 className="my-2.5 text-[21px] font-bold tracking-[-.01em] text-gray-900">{m.title}</h3>
              <p className="text-[14.5px] leading-[1.65] text-gray-600">{m.desc}</p>
              <div className="mt-4 flex flex-wrap gap-[7px]">
                {m.tags.map((t) => (
                  <span key={t} className="font-mono-p rounded-md border border-gray-200 bg-gray-50 px-[9px] py-1 text-[11px] text-gray-500">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capability counters ---------------- */
const CAPS = [
  { big: '4', u: ' 모듈', lab: 'ERP·FMS·RPA·AI를 잇는 통합 운영 스택', foot: '// END-TO-END' },
  { big: '40', u: '+ 항목', lab: '차량 1대당 통합 관리되는 운영 데이터 포인트', foot: '// PER VEHICLE' },
  { big: '9', u: '년+', lab: '창업팀의 모빌리티·자율주행 누적 경력', foot: '// DOMAIN DEPTH' },
  { big: '3', u: '사 출신', lab: '쏘카·현대차그룹·42dot에서 쌓은 모빌리티 전문성', foot: '// MOBILITY DNA' },
];

export function CapsSection() {
  const ref = useSectionTracking('caps');
  return (
    <section ref={ref as any} className="relative z-[1] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>Built, not promised · 지금 준비된 것</div>
        <h2 className={`${H2} mb-12`}>고객 수가 아니라,<br />제품의 밀도로 증명합니다</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {CAPS.map((c) => (
            <div key={c.foot} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 px-7 py-8 shadow-sm">
              <div className="text-[34px] font-bold tracking-[-.03em] text-gray-900 md:text-[44px]">
                {c.big}<span className="text-[16px] font-semibold text-blue-600">{c.u}</span>
              </div>
              <div className="mt-2 text-[13.5px] leading-[1.5] text-gray-600">{c.lab}</div>
              <div className="font-mono-p mt-3 text-[11px] tracking-[.03em] text-gray-400">{c.foot}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Personas ---------------- */
const PERSONAS = [
  { role: 'C-LEVEL · 경영진', title: 'AI 전환을 결정해야 하는 대표·임원', items: ['전환의 첫걸음을 리드 채용이 아닌 제품으로 단축', '가동률·정산·리스크를 하나의 대시보드로 파악', '데이터 기반 의사결정 체계의 토대 확보'] },
  { role: 'OPS · 운영 실무', title: '영업·CS·자산관리 담당자', items: ['부서별 엑셀 대신 단일 화면에서 운영', '반복 행정 업무를 RPA로 자동화', '차량·계약·고객 이력을 한 번에 조회'] },
  { role: 'FINANCE · 재무', title: '정산·여신 담당자', items: ['월말 수기 정산을 자동 집계로 전환', 'AI 리스크 점수로 여신 판단 지원', '연동된 데이터로 마감 시간 단축'] },
];

export function PersonaSection() {
  const ref = useSectionTracking('persona');
  return (
    <section id="who" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>For whom · 이런 분께</div>
        <h2 className={H2}>렌터카사의 모든 자리에서<br />같은 데이터를 봅니다</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <div key={p.role} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-7 py-8 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:to-indigo-400 before:content-['']">
              <div className="font-mono-p text-[12px] tracking-[.05em] text-blue-600">{p.role}</div>
              <h4 className="my-3 text-[19px] font-bold text-gray-900">{p.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {p.items.map((it) => (
                  <li key={it} className="relative pl-5 text-[14px] leading-[1.6] text-gray-600 before:absolute before:left-0 before:font-bold before:text-blue-500 before:content-['→']">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team / Proof (logo + text) ---------------- */
const TEAM = [
  {
    logo: 'SOCAR',
    logoClass: 'text-[#5B4CF5]',
    role: 'AI 자동화 개발',
    txt: '카셰어링 운영 데이터의 AI 자동화를 개발. 차량상태기반정비(CBM) ML 모델, 사고영상 추출 모델, 유류 이상사용 모니터링 등 렌터카 운영에 직결되는 문제를 데이터로 해결했습니다.',
  },
  {
    logo: '42dot',
    logoClass: 'text-gray-900',
    role: '자율주행 · AI 모델링',
    txt: '자율주행 사업개발과 AI 모델링을 담당. 사고 감지·위험운전 감지 모델을 설계하고, 차량 데이터(CAN)와 SDV 전환의 최전선을 경험했습니다.',
  },
  {
    logo: 'HYUNDAI',
    logoClass: 'text-[#002C5F]',
    role: '차량 데이터 분석 · 설계',
    txt: '완성차 그룹에서 차량상품 기획, 자동차 품질 개발, 데이터 분석, 모델 설계 등 자동차 데이터를 다루는 핵심 업무를 수행하며, 차량 데이터를 읽고 설계하는 역량을 배양했습니다.',
  },
];

export function ProofSection() {
  const ref = useSectionTracking('proof');
  return (
    <section id="proof" ref={ref as any} className="relative z-[1] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>The Team · 모빌리티 전문가 집단</div>
        <h2 className={H2}>렌터카 데이터를 가장 깊이<br />다뤄본 사람들이 만듭니다</h2>
        <p className={LEDE}>
          Pangea 팀은 쏘카·현대자동차그룹·42dot에서 차량 데이터와 AI 자동화를 직접 설계해 왔습니다. 렌터카 운영의 문제를 밖에서 관찰한 것이 아니라, 안에서 풀어본 사람들입니다.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TEAM.map((t) => (
            <div key={t.logo} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 items-center">
                <span className={`text-[26px] font-extrabold tracking-tight ${t.logoClass}`}>{t.logo}</span>
              </div>
              <div className="mt-4 mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 font-mono-p text-[11.5px] font-medium tracking-[.03em] text-blue-700">
                {t.role}
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-gray-600">{t.txt}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-7 py-7">
            <div className="font-mono-p text-[12px] uppercase tracking-[.05em] text-gray-400">Domain Depth</div>
            <h4 className="my-2 text-[18px] font-bold text-gray-900">차량 데이터를 아는 팀</h4>
            <p className="text-[13.5px] leading-[1.65] text-gray-600">CAN 데이터부터 운영 정산까지, 렌터카 한 대에서 나오는 데이터의 흐름을 실제로 다뤄본 경험이 제품의 깊이가 됩니다.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-7 py-7">
            <div className="font-mono-p text-[12px] uppercase tracking-[.05em] text-gray-400">Data Sovereignty</div>
            <h4 className="my-2 text-[18px] font-bold text-gray-900">운영 데이터는 고객사의 것</h4>
            <p className="text-[13.5px] leading-[1.65] text-gray-600">차량·고객·정산 데이터는 민감정보입니다. 데이터 소유권과 접근 권한 구조를 처음부터 고객 중심으로 설계합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pilot CTA ---------------- */
export function PilotSection({ onOpenDemo }: { onOpenDemo: () => void }) {
  const ref = useSectionTracking('pilot');
  return (
    <section id="pilot" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-16 text-center shadow-xl shadow-blue-600/20 md:px-12">
          <div className="pointer-events-none absolute right-[-5%] top-[-30%] h-[300px] w-[300px] rounded-full bg-white/10 blur-2xl" />
          <h2 className="mx-auto max-w-[24ch] text-[28px] font-bold leading-[1.25] tracking-[-.02em] text-white md:text-[40px]">
            당신의 렌터카사에서<br />AX의 첫 페이지를 함께 쓰겠습니다
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-[52ch] text-[17px] leading-[1.7] text-blue-100">
            무상 온보딩과 함께, 귀사의 실제 운영 데이터 위에서 Pangea의 효과를 직접 확인하세요. 30분이면 충분합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <button
              onClick={() => { trackCTAClick('cta', 'free_demo'); onOpenDemo(); }}
              className="rounded-xl bg-white px-6 py-3.5 text-[15.5px] font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5"
            >
              무료 데모 신청 →
            </button>
            <button
              onClick={() => { trackCTAClick('cta', 'demo_30min'); onOpenDemo(); }}
              className="rounded-xl border border-white/40 px-5 py-3.5 text-[15.5px] font-medium text-white transition hover:bg-white/10"
            >
              30분 데모 요청
            </button>
          </div>
          <div className="font-mono-p mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 px-4 py-2 text-[13px] text-blue-50">
            <span className="h-1.5 w-1.5 rounded-full bg-white pangea-pulse" />초기 도입사 대상 · 무상 온보딩 지원
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: 'Q1', question: '우리 회사 규모에도 맞나요?', a: '중소·중견 렌터카사를 우선 대상으로 설계했습니다. 대형사의 자체 시스템과 영세사업자의 수기 운영 사이, 통합 시스템이 가장 절실한 규모를 정조준합니다. 보유 차량 규모와 업무 구조에 맞춰 모듈을 선택적으로 적용할 수 있습니다.' },
  { q: 'Q2', question: '우리는 이미 ERP를 쓰고 있는데 갈아타야 하나요?', a: '전면 교체가 전제는 아닙니다. 파일럿 단계에서 현행 시스템·엑셀의 데이터를 어떻게 잇고 이관할지부터 함께 진단합니다. 흩어진 데이터를 통합하는 것이 AX의 첫걸음이며, Pangea는 그 통합 계층을 제공합니다.' },
  { q: 'Q3', question: 'AI 리드를 채용하는 것과 무엇이 다른가요?', a: '보완 관계입니다. AI 리드가 0에서 설계할 데이터 통합·자동화 토대를 Pangea가 제품으로 제공합니다. 리드가 있다면 Pangea 위에서 더 빠르게 성과를 낼 수 있고, 아직 없다면 Pangea가 그 출발점이 됩니다.' },
  { q: 'Q4', question: '우리 운영 데이터는 안전하게 관리되나요?', a: '차량·고객·정산 데이터는 민감정보로 취급합니다. 데이터 소유권은 고객사에 있으며, 접근 권한 구조와 데이터 처리 방식을 도입 단계에서 투명하게 안내합니다.' },
  { q: 'Q5', question: '파일럿은 어떻게 시작하나요?', a: '무료 데모 신청 후, 귀사의 핵심 업무 프로세스를 함께 진단합니다. 적합하다고 판단되면 파일럿 파트너로 온보딩하며, 범위와 일정은 협의해 정합니다.' },
];

export function FaqSection() {
  const ref = useSectionTracking('faq');
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" ref={ref as any} className="relative z-[1] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>FAQ · 자주 묻는 질문</div>
        <h2 className={H2}>도입 전에 궁금한 것들</h2>
        <div className="mt-11 overflow-hidden rounded-2xl border border-gray-200">
          {FAQS.map((f, i) => (
            <div key={f.q} className={i > 0 ? 'border-t border-gray-200' : ''}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left transition hover:bg-gray-50"
              >
                <span className="flex items-center text-[16.5px] font-semibold text-gray-900">
                  <span className="font-mono-p mr-3.5 text-[13px] text-blue-600">{f.q}</span>
                  {f.question}
                </span>
                <span className={`text-[22px] font-light transition ${open === i ? 'rotate-45 text-blue-600' : 'text-gray-400'}`}>+</span>
              </button>
              {open === i && (
                <div className="max-w-[76ch] bg-gray-50/50 px-6 pb-6 pt-1 text-[15px] leading-[1.7] text-gray-600">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function LandingFooter() {
  return (
    <footer className="relative z-[1] border-t border-gray-200 bg-gray-50 pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5 text-[20px] font-bold text-gray-900">
              <span className="h-[9px] w-[9px] rounded-full bg-blue-600" />Pangea
            </div>
            <p className="max-w-[34ch] text-[14px] leading-[1.6] text-gray-500">렌터카·모빌리티 사업자를 위한 통합 운영 플랫폼. AI 전환의 첫걸음을 데이터로 시작합니다.</p>
            <p className="mt-4 text-[13px] text-gray-400">플로(Flo Corp.) · 경기도 수원시 권선구 당수로129번길 10</p>
          </div>
          <div>
            <h5 className="font-mono-p mb-4 text-[12px] uppercase tracking-[.08em] text-gray-400">Product</h5>
            {[['#platform', '플랫폼'], ['#shift', '전환 구조'], ['#who', '도입 대상'], ['#pilot', '데모 신청']].map(([h, t]) => (
              <a key={h} href={h} className="mb-[11px] block text-[14px] text-gray-500 transition hover:text-blue-600">{t}</a>
            ))}
          </div>
          <div>
            <h5 className="font-mono-p mb-4 text-[12px] uppercase tracking-[.08em] text-gray-400">Company</h5>
            {[['#proof', '팀 소개'], ['#faq', 'FAQ'], ['/privacy', '개인정보처리방침'], ['/location', '위치정보이용약관'], ['mailto:prometheus.rok@gmail.com', '문의하기']].map(([h, t]) => (
              <a key={h} href={h} className="mb-[11px] block text-[14px] text-gray-500 transition hover:text-blue-600">{t}</a>
            ))}
          </div>
        </div>
        <div className="font-mono-p mt-11 border-t border-gray-200 pt-6 text-[12.5px] text-gray-400">
          © 2026 Flo Corp. · Pangea — Rental Car Operating System · pangea.autos
        </div>
      </div>
    </footer>
  );
}
