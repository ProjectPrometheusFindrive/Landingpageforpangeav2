import { useState } from 'react';
import { Link } from 'react-router';
import { useSectionTracking } from '../../../hooks/useAnalytics';
import { trackCTAClick } from '../../../utils/analytics';
import { openCookieSettings } from '../../../utils/consent';

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
        <div className={EYEBROW}>The Finance Gap · 금융의 간극</div>
        <h2 className={H2}>차를 늘려야 성장하는데,<br />차가 늘수록 금융은 어려워집니다</h2>
        <p className={LEDE}>
          운수사업은 차량이 곧 매출입니다. 그런데 차량 구입 자금은 대부분 할부·리스로 조달하고, 그 조건은 회사 규모와 대표자 신용, 차량 담보 가치로 정해집니다.
        </p>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <p className="max-w-[30ch] border-l-[3px] border-blue-600 pl-6 text-[20px] font-semibold leading-[1.5] tracking-[-.01em] text-gray-900 md:text-[26px]">
            "캐피탈 업계, 렌터카 사업자에 한도 상향·금리 인하·원금 유예 등 상생 방안 제시"
          </p>
          <p className="font-mono-p mt-4 pl-[26px] text-[13px] text-gray-400">— 파이낸셜뉴스 보도 요지 (2026년 7월)</p>
        </div>

        <p className="mt-9 max-w-[62ch] text-[17px] leading-[1.7] text-gray-600">
          문제는, <span className="font-semibold text-gray-900">금융기관이 운수사업자의 실제 운영을 볼 수 없다는 것</span>입니다. 차가 얼마나 쉬지 않고 돌았는지, 정비와 사고는 어떻게 관리됐는지는 심사 서류에 남지 않습니다.{' '}
          <b className="font-semibold text-blue-600">Pangea는 그 빈칸을 차량 운영 데이터로 채웁니다.</b>
        </p>
      </div>
    </section>
  );
}

/* ---------------- Before / After ---------------- */
const ROWS: { proc: string; code: string; before: string; after: string; afterBold: string }[] = [
  { proc: '금융기관 찾기', code: 'FIND', before: '차량 영업사원이 추천하는 금융사에 의존, 조건 비교가 어려움', afterBold: '상담 창구 연결', after: ' · 업종과 자금 용도에 맞는 제휴 금융기관·등록 중개업체로 연결' },
  { proc: '심사 자료', code: 'UNDERWRITE', before: '재무제표·대표자 신용·담보 위주, 실제 운영 실적은 반영되지 않음', afterBold: '운영 데이터 리포트', after: ' · 가동률·매출·정비·사고 이력을 심사 참고자료로 제출' },
  { proc: '차량 담보 가치', code: 'COLLATERAL', before: '연식과 주행거리로만 평가', afterBold: '차량 상태 증빙', after: ' · 정비·사고 이력으로 담보 차량의 실제 상태를 기록' },
  { proc: '대출 후 관리', code: 'MONITOR', before: '연체·사고가 난 뒤에야 대응', afterBold: 'FLM 차량 관리', after: ' · 사고·이상 운행·장기 미운행을 바로 알림' },
  { proc: '다음 조달', code: 'RENEW', before: '다음 대출도 처음부터 다시 증빙', afterBold: '누적 운영 실적', after: ' · 쌓인 데이터가 다음 자금 조달의 근거' },
];

export function ShiftSection() {
  const ref = useSectionTracking('shift');
  return (
    <section id="shift" ref={ref as any} className="relative z-[1] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>AS-IS → TO-BE · 금융 조달 구조</div>
        <h2 className={H2}>금융기관이 보지 못하던 운영을,<br />데이터로 보여 줍니다</h2>
        <p className={LEDE}>
          운수사업자가 차량 자금을 조달하는 과정이 지금 어떻게 돌아가고, Pangea 위에서 무엇이 달라지는지를 <b className="font-semibold text-gray-900">단계별로</b> 옮겼습니다.
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
            * 대출 승인 여부와 금리·한도는 각 금융기관의 심사로 정해지며, Pangea는 조건 개선을 보장하지 않습니다.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Platform modules ---------------- */
const MODS = [
  { idx: '01 / REPORT', title: '금융 준비 리포트', desc: '차량·계약·정비·사고 데이터를 금융기관이 읽는 형식으로 정리합니다. 회사 소개서 대신 실제 운영 실적을 보여 줍니다.', tags: ['가동률', '매출 추이', '정비·사고 이력'] },
  { idx: '02 / CONNECT', title: '금융 상담 연결', desc: '업종과 자금 용도에 맞춰 제휴 금융기관·등록 중개업체의 상담 창구로 연결합니다. 상품 안내·심사·계약은 해당 기관이 진행합니다.', tags: ['차량 구입', '운영 자금', '대환'] },
  { idx: '03 / FLM', title: '차량 생애주기 관리', desc: '입고부터 매각까지 차량 한 대의 생애주기를 추적합니다. 사고·이상 운행을 알리고, 정비·사고 이력이 차량 단위로 쌓입니다.', tags: ['사고 감지', '정비 이력', '매각 리포트'] },
  { idx: '04 / SCORE', title: '운영 리스크 지표', desc: '운영 데이터 기반 리스크 지표(ACS)를 금융기관과 함께 검증하고 있습니다. 검증을 거쳐 단계적으로 제공합니다.', tags: ['대안신용(ACS)', '금융기관 공동 검증', '로드맵'] },
];

export function PlatformSection() {
  const ref = useSectionTracking('platform');
  return (
    <section id="platform" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>The Platform · 4개 모듈</div>
        <h2 className={H2}>금융 준비부터 대출 후 관리까지,<br />하나의 차량 데이터 위에서</h2>

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
  { big: '4', u: ' 개 업종', lab: '렌터카·버스·택시·화물 운수사업자', foot: '// FLEET OPERATORS' },
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
  { role: 'RENTAL · 렌터카', title: '단기·장기 렌터카사', items: ['차량 구입 할부·리스 조달', '성수기 전 증차 자금', '매각 전 차량 상태 증빙'] },
  { role: 'BUS · 버스', title: '시외·고속·전세버스 운수사', items: ['고가 대형버스 구입 자금', '차령 동안의 차량 상태 관리', '유류·정비 운영 자금'] },
  { role: 'TAXI · 택시', title: '법인택시 사업자', items: ['차량 교체 자금', '운영 자금', '교대 운행 차량의 사고 관리'] },
  { role: 'TRUCK · 화물', title: '화물 운송사업자', items: ['화물차 할부 조달', '유류·정비 운영 자금', '운행 기록 관리'] },
];

export function PersonaSection() {
  const ref = useSectionTracking('persona');
  return (
    <section id="who" ref={ref as any} className="relative z-[1] bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={EYEBROW}>For whom · 업종별 금융 니즈</div>
        <h2 className={H2}>운수업종마다<br />필요한 금융이 다릅니다</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        <h2 className={H2}>차량 운영 데이터를 가장 깊이<br />다뤄본 사람들이 만듭니다</h2>
        <p className={LEDE}>
          Pangea 팀은 쏘카·현대자동차그룹·42dot에서 차량 데이터와 AI 자동화를 직접 설계해 왔습니다. 운수사업의 문제를 밖에서 관찰한 것이 아니라, 안에서 풀어본 사람들입니다.
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
            <p className="text-[13.5px] leading-[1.65] text-gray-600">CAN 데이터부터 운영 정산까지, 차량 한 대에서 나오는 데이터의 흐름을 실제로 다뤄본 경험이 제품의 깊이가 됩니다.</p>
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
            다음 차량 금융,<br />운영 데이터로 준비하세요
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-[52ch] text-[17px] leading-[1.7] text-blue-100">
            무료 사전 상담에서 업종·보유 차량·자금 용도를 듣고, 준비할 데이터와 연결 가능한 상담 창구를 안내해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <button
              onClick={() => { trackCTAClick('cta', 'finance_consult'); onOpenDemo(); }}
              className="rounded-xl bg-white px-6 py-3.5 text-[15.5px] font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5"
            >
              금융 사전 상담 신청 →
            </button>
            <button
              onClick={() => { trackCTAClick('cta', 'flm_demo'); onOpenDemo(); }}
              className="rounded-xl border border-white/40 px-5 py-3.5 text-[15.5px] font-medium text-white transition hover:bg-white/10"
            >
              FLM 데모 요청
            </button>
          </div>
          <div className="font-mono-p mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/25 px-4 py-2 text-[13px] text-blue-50">
            <span className="h-1.5 w-1.5 rounded-full bg-white pangea-pulse" />초기 신청사 대상 · 상담 무료
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: 'Q1', question: 'Pangea가 직접 대출해 주나요?', a: '아니요. Pangea는 대출을 실행하거나 금융상품을 중개하지 않습니다. 운영 데이터를 정리해 제휴 금융기관·등록 중개업체의 상담 창구로 연결하며, 상품 안내·심사·계약은 해당 기관이 진행합니다.' },
  { q: 'Q2', question: '금리가 낮아지거나 한도가 늘어나나요?', a: '금리와 한도는 각 금융기관의 심사로 정해지며, Pangea가 보장하지 않습니다. 다만 재무제표만으로는 보이지 않는 실제 운영 실적을 함께 제출할 수 있도록 돕습니다.' },
  { q: 'Q3', question: '어떤 업종이 대상인가요?', a: '렌터카(단기·장기), 시외·고속·전세버스, 법인택시, 화물 운송사업자입니다. 보유 차량 규모와 자금 용도에 맞춰 상담합니다.' },
  { q: 'Q4', question: '우리 운영 데이터는 누구에게 제공되나요?', a: '귀사가 동의한 범위에서, 동의한 대상에게만 제공합니다. 데이터 소유권은 고객사에 있으며, 제공 범위와 처리 방식을 상담 단계에서 투명하게 안내합니다.' },
  { q: 'Q5', question: '지금 쓰는 ERP나 관제 단말을 바꿔야 하나요?', a: '아니요. 현재 쓰는 시스템과 엑셀 데이터를 활용하는 것부터 시작합니다. 차량 데이터가 더 필요하면 그때 단말 연동을 함께 검토합니다.' },
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
            <p className="max-w-[34ch] text-[14px] leading-[1.6] text-gray-500">운수사업자를 위한 금융 플랫폼. 차량 운영 데이터로 더 나은 금융을 연결합니다.</p>
            <p className="mt-4 text-[13px] text-gray-400">플로(Flo Corp.) · 경기도 수원시 권선구 당수로129번길 10</p>
            <p className="mt-3 max-w-[46ch] text-[12px] leading-[1.6] text-gray-400">Pangea는 금융상품판매업자 또는 금융상품판매대리·중개업자가 아니며, 대출 상품의 안내·심사·계약은 제휴 금융기관 및 등록 중개업체가 수행합니다.</p>
          </div>
          <div>
            <h5 className="font-mono-p mb-4 text-[12px] uppercase tracking-[.08em] text-gray-400">Product</h5>
            {[['#platform', '플랫폼'], ['#shift', '연결 구조'], ['#who', '업종별 니즈'], ['#pilot', '상담 신청']].map(([h, t]) => (
              <a key={h} href={h} className="mb-[11px] block text-[14px] text-gray-500 transition hover:text-blue-600">{t}</a>
            ))}
          </div>
          <div>
            <h5 className="font-mono-p mb-4 text-[12px] uppercase tracking-[.08em] text-gray-400">Company</h5>
            {[['#proof', '팀 소개'], ['#faq', 'FAQ'], ['/privacy', '개인정보처리방침'], ['/location', '위치정보이용약관'], ['mailto:aaron@pangea.autos', '문의하기']].map(([h, t]) =>
              h.startsWith('/') ? (
                <Link key={h} to={h} className="mb-[11px] block text-[14px] text-gray-500 transition hover:text-blue-600">{t}</Link>
              ) : (
                <a key={h} href={h} className="mb-[11px] block text-[14px] text-gray-500 transition hover:text-blue-600">{t}</a>
              )
            )}
            <button onClick={openCookieSettings} className="mb-[11px] block text-left text-[14px] text-gray-500 transition hover:text-blue-600">쿠키 설정</button>
          </div>
        </div>
        <div className="font-mono-p mt-11 border-t border-gray-200 pt-6 text-[12.5px] text-gray-400">
          FLM (Fleet Lifecycle Management) 솔루션 Pangea | 운영사 플로(Flo Corp.) · © 2026
        </div>
      </div>
    </footer>
  );
}
