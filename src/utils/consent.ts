// 쿠키 동의 관리
// - 필수 쿠키(동의 기록 저장)는 항상 사용
// - 분석 쿠키(Google Analytics, Microsoft Clarity)는 이용자가 동의한 경우에만 로드
// - 동의하지 않아도 사이트 이용에는 제한이 없음 (개인정보보호법상 선택 항목 거부로 서비스 제공 거부 금지)

const STORAGE_KEY = 'pangea_cookie_consent_v1';
const GA_ID = 'G-NXNTFDNVEC';
const CLARITY_ID = 'vsm21pufm2';

export const OPEN_SETTINGS_EVENT = 'pangea:open-cookie-settings';

export interface ConsentState {
  analytics: boolean;
  decidedAt: string;
  version: 1;
}

export function getConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    return parsed && parsed.version === 1 ? parsed : null;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean): ConsentState {
  const prev = getConsent();
  const next: ConsentState = { analytics, decidedAt: new Date().toISOString(), version: 1 };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // 저장이 막힌 환경(사생활 보호 모드 등)에서는 이번 방문에만 적용
  }

  if (analytics) {
    loadAnalytics();
  } else if (prev?.analytics) {
    // 동의 철회: 분석 쿠키를 지우고 스크립트가 없는 상태로 다시 불러옴
    clearAnalyticsCookies();
    window.location.reload();
  }
  return next;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

let analyticsLoaded = false;

export function loadAnalytics() {
  if (analyticsLoaded || typeof window === 'undefined') return;
  analyticsLoaded = true;

  // Google Analytics 4
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA_ID);
  const ga = document.createElement('script');
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(ga);

  // Microsoft Clarity
  w.clarity =
    w.clarity ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      (w.clarity.q = w.clarity.q || []).push(arguments);
    };
  const cl = document.createElement('script');
  cl.async = true;
  cl.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(cl);
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map((c) => c.split('=')[0].trim());
  const targets = names.filter((n) => n.startsWith('_ga') || n.startsWith('_cl') || n === 'CLID' || n === 'MUID');
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  targets.forEach((name) => {
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;${d ? ` domain=${d};` : ''}`;
    });
  });
}
