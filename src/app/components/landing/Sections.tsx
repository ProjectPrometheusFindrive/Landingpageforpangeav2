import { useState } from 'react';
import { Link } from 'react-router';
import { useSectionTracking } from '../../../hooks/useAnalytics';
import { trackCTAClick } from '../../../utils/analytics';
import { revenueSummaryImg, rentalReservationImg, vehicleAssetImg } from '../../../assets/landing-v7/images';

/* ---------------- PAIN 01 / 02 / 03 ---------------- */
export function PainSections() {
  const ref = useSectionTracking('pain');
  return (
    <>
      <section id="pain" ref={ref as any}>
        <div className="wrap">
          <div className="pain-row">
            <div className="pain-text">
              <div className="pain-num">PAIN 01</div>
              <h2>문제가 터지고 나서야 안다</h2>
              <p>사고, 도난 의심, 고장, 단말 OFF — 지금은 이미 벌어진 다음에야 연락을 받습니다. 예방할 기회는 이미 지나간 뒤입니다.</p>
              <div className="pain-resolve">
                <div><div className="chk">✓</div></div>
                <div>
                  <p>실시간 감지로 심각도별 알림을 바로 받습니다.</p>
                  <span className="tag paid">유료 · 실시간 감지</span>
                </div>
              </div>
            </div>
            <div className="pain-visual">
              <div className="screen-card">
                <div className="screen-topbar">
                  <span className="dots"><span /><span /><span /></span>
                  <span className="title">조치 필요 항목 · 전체</span>
                </div>
                <div className="screen-body">
                  <div className="action-list">
                    <div className="action-item"><span className="sev high">High</span><span className="t">반납 지연 · 3건</span><span className="when">2시간 전</span></div>
                    <div className="action-item"><span className="sev high">High</span><span className="t">사고 접수 · 1건</span><span className="when">5시간 전</span></div>
                    <div className="action-item"><span className="sev mid">Mid</span><span className="t">차량 이상 감지 · 2건</span><span className="when">어제</span></div>
                    <div className="action-item"><span className="sev mid">Mid</span><span className="t">도난 의심 · 1건</span><span className="when">어제</span></div>
                    <div className="action-item"><span className="sev low">Low</span><span className="t">정기점검 예정 · 6건</span><span className="when">이번 달</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="pain-row reverse">
            <div className="pain-text">
              <div className="pain-num">PAIN 02</div>
              <h2>놀고 있는 차가 안 보인다</h2>
              <p>차는 세워져 있어도 감가상각은 계속됩니다. 그 손실이 화면에 잡히지 않으니, 누구도 조치하지 않습니다.</p>
              <div className="pain-resolve">
                <div><div className="chk">✓</div></div>
                <div>
                  <p>차량별 가동률을 실시간으로 — 어떤 차가 쉬고 있는지 바로 압니다.</p>
                  <span className="tag paid">유료 · 실시간 감지</span>
                </div>
              </div>
            </div>
            <div className="pain-visual">
              <div className="screen-card">
                <div className="screen-topbar">
                  <span className="dots"><span /><span /><span /></span>
                  <span className="title">매출 요약</span>
                  <span className="tag example" style={{ background: '#E7F8F1', color: '#0E9F6E' }}>실제 화면</span>
                </div>
                <div className="screen-body" style={{ padding: '16px' }}>
                  <img src={revenueSummaryImg} alt="Pangea 매출 요약 화면 — 차량별 매출 현황" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="pain-row">
            <div className="pain-text">
              <div className="pain-num">PAIN 03</div>
              <h2>반납, 연체, 보험 만료 — 잡무가 쌓인다</h2>
              <p>계약 만기와 반납 일정을 엑셀로 따라가다 보면, 결국 뭔가는 놓치게 됩니다.</p>
              <div className="pain-resolve">
                <div><div className="chk">✓</div></div>
                <div>
                  <p>계약·자산관리는 무료입니다. 지금 바로 정리하세요.</p>
                  <span className="tag free">무료 · 자산관리</span>
                </div>
              </div>
            </div>
            <div className="pain-visual" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="screen-card">
                <div className="screen-topbar">
                  <span className="dots"><span /><span /><span /></span>
                  <span className="title">대여 예약 · 계약 현황</span>
                  <span className="tag example" style={{ background: '#E7F8F1', color: '#0E9F6E' }}>실제 화면 · 정보 마스킹</span>
                </div>
                <div className="screen-body" style={{ padding: '16px' }}>
                  <img src={rentalReservationImg} alt="Pangea 대여 예약 화면 — 계약 현황" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                </div>
              </div>
              <div className="screen-card">
                <div className="screen-topbar">
                  <span className="dots"><span /><span /><span /></span>
                  <span className="title">차량 자산 · 보험 관리</span>
                  <span className="tag example" style={{ background: '#E7F8F1', color: '#0E9F6E' }}>실제 화면 · 정보 마스킹</span>
                </div>
                <div className="screen-body" style={{ padding: '16px' }}>
                  <img src={vehicleAssetImg} alt="Pangea 차량 자산 관리 화면 — 보험만료일·차종 관리" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- MOAT ---------------- */
export function MoatSection() {
  const ref = useSectionTracking('moat');
  return (
    <section className="moat-section" ref={ref as any}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ background: 'rgba(111,227,180,0.15)', color: '#6FE3B4' }}>왜 우리만 가능한가</span>
          <h2 style={{ color: '#fff' }}>장비 설치, 이제 대부분 필요 없습니다</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Pleos가 적용된 신차는 그 자체가 이미 커넥티드카라서, 별도 장비 없이 실시간 감지를 바로 씁니다.</p>
        </div>
        <div className="moat-grid">
          <div>
            <div className="moat-compare">
              <div className="moat-row"><div className="icon">✓</div><div className="t"><b>Pleos 적용 신차(아반떼·그랜저 등)</b>는 계약 즉시, 오늘부터 바로 시작</div></div>
              <div className="moat-row"><div className="icon">✓</div><div className="t">Pleos 미적용 <b>기존 차량</b>은 소형 단말 하나로 동일하게 연결</div></div>
              <div className="moat-row"><div className="icon">✓</div><div className="t">기사님 방문 일정, 며칠간의 운행 중단, 대당 고가 설치비 — 대부분 없어집니다</div></div>
            </div>
            <div className="moat-note">Pangea는 아무 차나 지원하는 대신, 신차 교체 주기에 있는 렌터카사부터 가장 빠르고 저렴하게 시작할 수 있도록 설계했습니다. 지원 차종은 계속 늘어납니다.</div>
          </div>
          <div className="moat-visual">
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>무단말 연결, 브랜드마다 다릅니다</div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
              <div className="oem-chip">BMW</div>
              <div className="oem-chip">현대자동차</div>
              <div className="oem-chip">기아</div>
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', marginBottom: '18px' }}>제조사가 제공하는 커넥티드카(원격 관제) 서비스를 이용할 수 있는 차량은 별도 단말 장착 없이 연결될 수 있습니다. 지원 가능 여부는 차량 모델·연식에 따라 다르며, 상담 시 확인해 드립니다.</div>
            <div className="moat-cost">어느 쪽이든, 계약·자산관리(ERP)와 실시간 감지(FMS)를 별도로 계약할 때보다 저렴합니다</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPETITIVE LANDSCAPE ---------------- */
export function CompareSection() {
  const ref = useSectionTracking('compare');
  return (
    <section id="compare" ref={ref as any} style={{ background: '#fff', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--navy)', background: 'var(--blue-light)' }}>지금 시장은 어떻게 되어 있나</span>
          <h2>계약관리와 실시간 감지, 원래는 따로 계약해야 했습니다</h2>
          <p className="muted">공개된 정보를 기준으로 정리했습니다. 각 사의 정확한 서비스 범위는 다를 수 있습니다.</p>
        </div>
        <div className="comp-grid">
          <div className="comp-card">
            <div className="who">모두의렌터카 등</div>
            <div className="what">계약·자산관리 ERP 중심</div>
            <div className="comp-caps">
              <div className="comp-cap yes">계약·자산관리</div>
              <div className="comp-cap no">실시간 리스크 감지</div>
            </div>
          </div>
          <div className="comp-card">
            <div className="who">유비퍼스트대원 등</div>
            <div className="what">차량관제(실시간 모니터링) 전문</div>
            <div className="comp-caps">
              <div className="comp-cap no">계약·자산관리</div>
              <div className="comp-cap yes">실시간 리스크 감지</div>
            </div>
          </div>
          <div className="comp-card">
            <div className="who">IMS 등 토탈솔루션</div>
            <div className="what">여러 제품 라인으로 구성</div>
            <div className="comp-caps">
              <div className="comp-cap yes">계약·자산관리</div>
              <div className="comp-cap yes">실시간 리스크 감지</div>
            </div>
          </div>
          <div className="comp-card hero">
            <div className="who">Pangea</div>
            <div className="what">하나의 플랫폼, 하나의 계약</div>
            <div className="comp-caps">
              <div className="comp-cap yes">계약·자산관리 (무료)</div>
              <div className="comp-cap yes">실시간 리스크 감지 (유료)</div>
            </div>
          </div>
        </div>
        <div className="comp-source">회사명은 공개 자료 기준으로 표기했으며, 실제 제품 범위·UX는 직접 비교를 권장합니다.</div>
      </div>
    </section>
  );
}

/* ---------------- PRICING + ROI ---------------- */
const SEGMENTS: { label: string; rate: number }[] = [
  { label: '경형 (모닝·레이)', rate: 60000 },
  { label: '준중형 (아반떼·K3)', rate: 80000 },
  { label: '중형 (쏘나타·K5)', rate: 90000 },
  { label: '준대형 (그랜저·K8)', rate: 120000 },
  { label: 'SUV (투싼·싼타페)', rate: 100000 },
  { label: '승합/RV (카니발)', rate: 180000 },
];

function fmtWon(n: number) {
  return '₩' + Math.round(n).toLocaleString('ko-KR');
}

export function PricingSection() {
  const ref = useSectionTracking('pricing');
  const [rate, setRate] = useState(80000);
  const [fleet, setFleet] = useState(30);
  const [cur, setCur] = useState(65);
  const [tgt, setTgt] = useState(75);

  const diff = Math.max(0, tgt - cur);
  const monthly = fleet * 30 * rate * (diff / 100);
  const segLabel = SEGMENTS.find((s) => s.rate === rate)?.label ?? '선택 차종';

  return (
    <section id="pricing" ref={ref as any}>
      <div className="wrap">
        <div className="section-head">
          <h2>무료로 시작해서, 필요한 만큼만</h2>
          <p>계약·자산관리는 무료입니다. 그 데이터가 있어야 실시간 감지가 더 정확히 판단할 수 있기 때문입니다.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="tier">계약 · 자산관리</div>
            <div className="amount">₩0<span> / 무제한</span></div>
            <ul className="price-list">
              <li><span className="ck">✓</span>대여 계약 관리</li>
              <li><span className="ck">✓</span>차량 자산관리</li>
              <li><span className="ck">✓</span>매출 요약</li>
            </ul>
            <a
              href="https://www.pangea.autos/login"
              className="btn btn-secondary"
              onClick={() => trackCTAClick('pricing', 'free_start')}
            >
              무료로 시작하기
            </a>
          </div>
          <div className="price-card highlight">
            <div className="tier">실시간 감지 + AI 자동화</div>
            <div className="amount">차량 대수 기준<span> / 상담</span></div>
            <ul className="price-list">
              <li><span className="ck">✓</span>고장 · 도난 감지</li>
              <li><span className="ck">✓</span>안전운전점수</li>
              <li><span className="ck">✓</span>가동률 실시간 추적</li>
            </ul>
            <a href="#roi" className="btn btn-primary" onClick={() => trackCTAClick('pricing', 'roi_calc')}>도입 효과 계산해보기</a>
          </div>
          <div className="price-card">
            <div className="tier">확장 금융 연계 · 중장기</div>
            <div className="amount">파트너십 기반</div>
            <ul className="price-list">
              <li><span className="ck">✓</span>운영 데이터 기반 심사</li>
              <li><span className="ck">✓</span>제휴 금융사 연계</li>
            </ul>
            <a href="#roadmap" className="btn btn-secondary">단계별 제공 보기</a>
          </div>
        </div>

        <div className="roi-box" id="roi">
          <div className="roi-head">
            <h3>가동률이 오르면, 매출은 얼마나 늘어날까요?</h3>
            <span className="tag example">예시 계산기</span>
          </div>
          <div className="seg-row">
            {SEGMENTS.map((s) => (
              <button
                key={s.label}
                type="button"
                className={`seg-btn${rate === s.rate ? ' active' : ''}`}
                onClick={() => setRate(s.rate)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="roi-grid">
            <div className="roi-inputs">
              <div className="roi-field">
                <label>차종 참고 일 요금 <b>{rate.toLocaleString('ko-KR')}원</b></label>
                <input type="range" min={30000} max={250000} step={5000} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
              </div>
              <div className="roi-field">
                <label>보유 차량 대수 <b>{fleet}대</b></label>
                <input type="range" min={5} max={200} step={1} value={fleet} onChange={(e) => setFleet(Number(e.target.value))} />
              </div>
              <div className="roi-field">
                <label>현재 가동률 <b>{cur}%</b></label>
                <input type="range" min={30} max={95} step={1} value={cur} onChange={(e) => setCur(Number(e.target.value))} />
              </div>
              <div className="roi-field">
                <label>실시간 감지 도입 후 목표 가동률 <b>{tgt}%</b></label>
                <input type="range" min={30} max={99} step={1} value={tgt} onChange={(e) => setTgt(Number(e.target.value))} />
              </div>
            </div>
            <div className="roi-result">
              <div className="lbl">예상 월 추가 매출</div>
              <div className="val">{fmtWon(monthly)} / 월</div>
              <div className="roi-basis">
                계산 근거: {segLabel} 참고 일 요금 {rate.toLocaleString('ko-KR')}원 × 차량 {fleet}대 × 30일 × 가동률 개선 {diff}%p
              </div>
              <div className="roi-foot">참고 일 요금은 쏘카 카셰어링 공개 요금 기준 차종 구간 대표값이며, 실제 렌터카 대여료와 다를 수 있는 추정치입니다.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ROADMAP ---------------- */
export function RoadmapSection() {
  const ref = useSectionTracking('roadmap');
  return (
    <section id="roadmap" ref={ref as any} style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ background: 'var(--purple-light)', color: '#6B4FCF' }}>구매부터 매각까지</span>
          <h2>데이터로 이어지는 차량의 생애주기</h2>
          <p className="muted">작은 렌터카사일수록 자금은 어렵습니다. Pangea는 차량 한 대의 시작부터 끝까지, 그 문제를 함께 풀어가려 합니다.</p>
        </div>
        <div className="roadmap-row">
          <div className="roadmap-bookend"><div className="lc-num">1</div><div className="lc-label">차량 구매<br />금융</div><div className="lc-tag">단계별 제공</div></div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-step now">
            <div className="roadmap-kicker">지금</div>
            <h4>무료로 자산을 파악</h4>
            <p>계약·자산관리 ERP로 무엇을 갖고 있는지부터 정리합니다.</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-step next">
            <div className="roadmap-kicker">다음</div>
            <h4>가동을 지키고, 기록이 쌓입니다</h4>
            <p>실시간 감지로 리스크를 줄이는 과정 자체가 운영 데이터로 남습니다.</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-step future">
            <div className="roadmap-kicker">그다음 <span className="tag roadmap">단계별 제공</span></div>
            <h4>맞춤 금융·정비·보험으로</h4>
            <p>쌓인 운영 데이터가 사업 신뢰도의 근거가 되어, 합리적인 조건의 금융·정비·보험 등 자산 단위 맞춤 서비스로 연결될 수 있는 기반이 됩니다.</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-bookend"><div className="lc-num">6</div><div className="lc-label">차량<br />매각</div><div className="lc-tag">단계별 제공</div></div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS: { q: string; question: string; answer: React.ReactNode }[] = [
  { q: 'Q1', question: '어떤 규모의 렌터카사에도 맞나요?', answer: '신차 교체 주기에 있는 중소형 렌터카사를 우선 대상으로 설계했습니다. 보유 차량 규모와 운영 방식에 맞춰 필요한 기능부터 선택적으로 도입하실 수 있습니다.' },
  { q: 'Q2', question: '지금 쓰는 엑셀·ERP는 어떻게 되나요?', answer: '전면 교체가 전제는 아닙니다. 온보딩 단계에서 기존에 쓰시던 자료를 어떻게 옮기고 이을지부터 함께 진단해드립니다.' },
  { q: 'Q3', question: '단말기를 꼭 달아야 하나요?', answer: '아니요. 제조사 커넥티드카 서비스가 연결된 차량은 별도 단말 없이 관리할 수 있고, 연결되어 있지 않은 차량만 IoT 단말을 장착합니다.' },
  {
    q: 'Q4',
    question: '가격은 어떻게 되나요?',
    answer: (
      <>차량 등록·계약 운영·보험 관리는 무료로 이용하실 수 있고, 실시간 감지·정비는 유료 플랜입니다. 자세한 내용은{' '}
        <a href="#pricing" style={{ color: '#2563EB', textDecoration: 'underline' }}>가격 섹션</a>에서 확인하실 수 있습니다.</>
    ),
  },
  {
    q: 'Q5',
    question: '차량 구매 금융이나 매각도 지금 가능한가요?',
    answer: (
      <>아직입니다. 등록부터 보험까지 4단계는 지금 바로 사용하실 수 있고, 구매 금융·매각 연계는{' '}
        <a href="#roadmap" style={{ color: '#2563EB', textDecoration: 'underline' }}>단계별로 순차 제공</a>되는 항목입니다.</>
    ),
  },
  { q: 'Q6', question: '도입은 얼마나 걸리나요?', answer: '상담 신청 후 세일즈팀이 직접 방문하는 날부터 바로 사용을 시작하실 수 있고, 사용 방법에 대한 교육도 함께 제공해드립니다.' },
];

export function FaqSection() {
  const ref = useSectionTracking('faq');
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" ref={ref as any} style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ background: 'var(--blue-light)', color: '#1E4C8C' }}>FAQ</span>
          <h2>도입 전에 궁금한 것들</h2>
          <p className="muted">자주 받는 질문을 먼저 정리했습니다. 더 궁금한 점은 상담 신청을 통해 편하게 물어보세요.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>
                  <span className="q-tag">{f.q}</span>
                  {f.question}
                </span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA STRIP ---------------- */
export function CtaSection() {
  const ref = useSectionTracking('cta');
  return (
    <section ref={ref as any}>
      <div className="wrap">
        <div className="cta-strip">
          <h2>지금, 무료로 시작하세요</h2>
          <p>신차 교체 주기에 있는 중소형 렌터카사부터 — 지금 함께 키워나갈 고객을 찾습니다.</p>
          <div className="cta-strip-actions">
            <a
              href="https://www.pangea.autos/login"
              className="btn"
              style={{ background: '#fff', color: 'var(--navy)' }}
              onClick={() => trackCTAClick('cta', 'free_start')}
            >
              무료로 시작하기
            </a>
            <a href="#roi" className="btn btn-outline-light">도입 효과 계산해보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
interface LandingFooterProps {
  onOpenDemo: () => void;
}

export function LandingFooter({ onOpenDemo }: LandingFooterProps) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name"><span className="dot" />Pangea</div>
            <p className="footer-desc">차량 구매부터 매각까지, 렌터카 사업의 전 생애주기를 잇는 운영 플랫폼.</p>
            <div className="footer-addr">플로(Flo Corp.) · 경기도 수원시 권선구 당수로129번길 10</div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#pain">문제</a>
            <a href="#compare">비교</a>
            <a href="#pricing">가격</a>
            <a href="#roadmap">단계별 제공</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/privacy">개인정보처리방침</Link>
            <Link to="/terms">이용약관</Link>
            <Link to="/location">위치정보이용약관</Link>
            <a href="javascript:void(0)" onClick={() => { trackCTAClick('other', 'footer_contact'); onOpenDemo(); }}>문의하기</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Flo Corp. · Pangea — 차량 생애주기 통합 플랫폼 · pangea.autos</div>
      </div>
    </footer>
  );
}
