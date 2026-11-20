import { useEffect, useState } from 'react';
import { getConsent, loadAnalytics, saveConsent, OPEN_SETTINGS_EVENT } from '../../utils/consent';
import { router } from '../routes';

// 법적 고지 페이지에서는 화면을 가리지 않고 하단 배너로만 보여 줌
const NON_BLOCKING_PATHS = ['/privacy', '/terms', '/location'];

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [path, setPath] = useState(router.state.location.pathname);

  useEffect(() => {
    const saved = getConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      if (saved.analytics) loadAnalytics();
    } else {
      setOpen(true);
    }

    const onOpen = () => {
      const current = getConsent();
      setAnalytics(current?.analytics ?? false);
      setShowDetail(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    const unsubscribe = router.subscribe((state) => setPath(state.location.pathname));
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
      unsubscribe();
    };
  }, []);

  const blocking = open && !NON_BLOCKING_PATHS.includes(path);

  useEffect(() => {
    document.body.style.overflow = blocking ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [blocking]);

  if (!open) return null;

  const decide = (value: boolean) => {
    saveConsent(value);
    setAnalytics(value);
    setOpen(false);
    setShowDetail(false);
  };

  const panel = (
    <div
      role="dialog"
      aria-modal={blocking}
      aria-labelledby="cookie-title"
      className="w-full max-w-[560px] rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl md:p-7"
    >
      <h2 id="cookie-title" className="text-[19px] font-bold tracking-[-.01em] text-gray-900">
        쿠키 사용 안내
      </h2>
      <p className="mt-2.5 text-[14px] leading-[1.65] text-gray-600">
        Pangea는 사이트 작동에 필요한 쿠키를 사용하며, 동의하신 경우에만 방문 분석 쿠키(Google Analytics, Microsoft Clarity)를 사용합니다.
        분석 쿠키에 동의하지 않아도 사이트의 모든 기능을 이용할 수 있습니다.{' '}
        <a href="/privacy#cookies" className="font-medium text-blue-600 underline underline-offset-2">
          자세히 보기
        </a>
      </p>

      {showDetail && (
        <div className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200">
          <div className="flex items-start justify-between gap-4 p-4">
            <div>
              <div className="text-[14.5px] font-semibold text-gray-900">필수 쿠키</div>
              <div className="mt-1 text-[13px] leading-[1.55] text-gray-500">쿠키 선택 내용 저장 등 사이트 작동에 필요합니다.</div>
            </div>
            <span className="shrink-0 rounded-md bg-gray-100 px-2.5 py-1 text-[12px] font-medium text-gray-500">항상 사용</span>
          </div>
          <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
            <div>
              <div className="text-[14.5px] font-semibold text-gray-900">분석 쿠키 (선택)</div>
              <div className="mt-1 text-[13px] leading-[1.55] text-gray-500">
                방문 경로, 스크롤, 클릭을 분석해 사이트를 개선합니다. Google Analytics, Microsoft Clarity
              </div>
            </div>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 accent-blue-600"
              aria-label="분석 쿠키 사용 동의"
            />
          </label>
        </div>
      )}

      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <button
          onClick={() => decide(false)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-[14.5px] font-semibold text-gray-800 transition hover:border-gray-400"
        >
          필수 쿠키만 허용
        </button>
        <button
          onClick={() => decide(true)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-[14.5px] font-semibold text-gray-800 transition hover:border-gray-400"
        >
          모두 허용
        </button>
      </div>
      {showDetail ? (
        <button
          onClick={() => decide(analytics)}
          className="mt-2.5 w-full rounded-xl bg-blue-600 px-4 py-3 text-[14.5px] font-semibold text-white transition hover:bg-blue-700"
        >
          선택 내용 저장
        </button>
      ) : (
        <button
          onClick={() => setShowDetail(true)}
          className="mt-3 w-full text-center text-[13.5px] font-medium text-gray-500 underline underline-offset-2 hover:text-gray-800"
        >
          쿠키 설정 보기
        </button>
      )}
    </div>
  );

  if (blocking) {
    return (
      <div className="fixed inset-0 z-[100] flex items-end justify-center bg-gray-900/40 p-4 backdrop-blur-[2px] sm:items-center">
        {panel}
      </div>
    );
  }

  return <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4">{panel}</div>;
}
