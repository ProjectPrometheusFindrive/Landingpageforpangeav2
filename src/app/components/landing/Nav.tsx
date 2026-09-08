import { trackCTAClick } from '../../../utils/analytics';

interface NavProps {
  onOpenDemo: () => void;
}

export function Nav({ onOpenDemo }: NavProps) {
  return (
    <header>
      <div className="wrap">
        <nav>
          <div className="logo-block">
            <div className="logo">
              <span className="logo-mark" />
              Pangea
            </div>
            <div className="logo-sub">차량 생애주기 통합 플랫폼</div>
          </div>

          <div className="nav-links mobile-hide">
            <a href="#pain">문제</a>
            <a href="#compare">비교</a>
            <a href="#pricing">가격</a>
            <a href="#roadmap">단계별 제공</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-cta">
            <button
              type="button"
              className="btn btn-secondary mobile-hide"
              onClick={() => { trackCTAClick('other', 'nav_consult'); onOpenDemo(); }}
            >
              상담하기
            </button>
            <a
              href="https://www.pangea.autos/login"
              className="btn btn-primary"
              onClick={() => trackCTAClick('other', 'nav_login')}
            >
              무료로 시작하기
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
