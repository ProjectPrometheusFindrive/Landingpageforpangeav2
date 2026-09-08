import { useSectionTracking } from '../../../hooks/useAnalytics';
import { trackCTAClick } from '../../../utils/analytics';

export function HeroSection() {
  const sectionRef = useSectionTracking('hero');

  return (
    <>
      <div className="disclaimer">
        화면은 Pangea 실제 서비스 캡처이며 차량번호·고객명 등 개인정보는 마스킹했습니다 · 일부 항목(예약 일정 일부, 자산 정보 일부)은 이해를 돕기 위해 예시로 구성했습니다 · 경쟁사 정보는 공개 자료 기준이며 실제와 다를 수 있습니다
      </div>

      <div className="hero" ref={sectionRef as any}>
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow">차량 생애주기 통합 플랫폼</span>
            <h1>
              사고도, 도난도, 고장도 —<br />항상 벌어지고 나서야 압니다
            </h1>
            <div className="hero-cta">
              <a
                href="https://www.pangea.autos/login"
                className="btn btn-primary"
                onClick={() => trackCTAClick('hero', 'free_start')}
              >
                무료로 시작하기
              </a>
              <a href="#pain" className="btn btn-outline-light">문제부터 보기 →</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="screen-card">
              <div className="screen-topbar">
                <span className="dots"><span /><span /><span /></span>
                <span className="title">홈 · 오늘 할 일</span>
              </div>
              <div className="screen-body today-widget">
                <div className="today-summary">
                  <div className="ts-item"><span className="ts-num">0</span><span className="ts-lab">오늘 예약</span></div>
                  <div className="ts-item"><span className="ts-num">0</span><span className="ts-lab">오늘 대여</span></div>
                  <div className="ts-item"><span className="ts-num">0</span><span className="ts-lab">오늘 반납</span></div>
                </div>
                <div className="today-alerts">
                  <div className="today-alert attn">
                    <div className="ta-icon">⏰</div>
                    <div className="ta-body"><div className="ta-num">4</div><div className="ta-lab">반납 지연</div></div>
                  </div>
                  <div className="today-alert attn">
                    <div className="ta-icon">💳</div>
                    <div className="ta-body"><div className="ta-num">1</div><div className="ta-lab">미납·결제 문제</div></div>
                  </div>
                  <div className="today-alert attn">
                    <div className="ta-icon">⚠️</div>
                    <div className="ta-body"><div className="ta-num">1</div><div className="ta-lab">사고 접수</div></div>
                  </div>
                  <div className="today-alert ok">
                    <div className="ta-icon">🛡️</div>
                    <div className="ta-body"><div className="ta-num">0</div><div className="ta-lab">보험 만료 임박</div></div>
                  </div>
                  <div className="today-alert ok">
                    <div className="ta-icon">🔧</div>
                    <div className="ta-body"><div className="ta-num">0</div><div className="ta-lab">점검 만료 임박</div></div>
                  </div>
                  <div className="today-alert ok">
                    <div className="ta-icon">🚗</div>
                    <div className="ta-body"><div className="ta-num">0</div><div className="ta-lab">차량 이상</div></div>
                  </div>
                </div>
                <div className="today-foot">단말 OFF · 도난 의심 등 실시간 감지 항목도 이 화면 하나에서 함께 확인합니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy-band">
        <div className="wrap philosophy-inner">
          <p>작은 사업자일수록 자금은 어렵고, 자동화는 미뤄지기 쉽습니다.<br />Pangea는 이 두 가지를 함께 풉니다.</p>
          <span>지금 놓치고 있는 것을 잡는 것부터, 그 기록이 내일의 기회가 되는 것까지</span>
        </div>
        <div className="wrap">
          <div className="lifecycle-strip">
            <a href="#roadmap" className="lc-stage roadmap"><div className="lc-num">1</div><div className="lc-label">차량 구매<br />금융</div><div className="lc-tag">단계별 제공</div></a>
            <div className="lc-arrow">→</div>
            <a href="#pain" className="lc-stage live"><div className="lc-num">2</div><div className="lc-label">차량 등록<br />(자산화)</div><div className="lc-tag">무료</div></a>
            <div className="lc-arrow">→</div>
            <a href="#pain" className="lc-stage live"><div className="lc-num">3</div><div className="lc-label">계약·대여<br />운영</div><div className="lc-tag">무료</div></a>
            <div className="lc-arrow">→</div>
            <a href="#pain" className="lc-stage live"><div className="lc-num">4</div><div className="lc-label">실시간 감지<br />·정비</div><div className="lc-tag">유료</div></a>
            <div className="lc-arrow">→</div>
            <a href="#pain" className="lc-stage live"><div className="lc-num">5</div><div className="lc-label">보험<br />갱신</div><div className="lc-tag">무료</div></a>
            <div className="lc-arrow">→</div>
            <a href="#roadmap" className="lc-stage roadmap"><div className="lc-num">6</div><div className="lc-label">차량<br />매각</div><div className="lc-tag">단계별 제공</div></a>
          </div>
        </div>
      </div>
    </>
  );
}
