// Google Analytics 4 이벤트 추적 유틸리티

// GA4가 로드되었는지 확인
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// 페이지뷰 추적
export const trackPageView = (path: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// 스크롤 깊이 추적
export const trackScrollDepth = (depth: number) => {
  if (isGALoaded()) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `scroll_${depth}%`,
      value: depth,
    });
  }
};

// 섹션 도달 추적
export const trackSectionView = (sectionName: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'section_view', {
      event_category: 'engagement',
      event_label: sectionName,
    });
  }
};

// CTA 버튼 클릭 추적
export const trackCTAClick = (location: 'hero' | 'cta' | 'other', label: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'cta_click', {
      event_category: 'conversion',
      event_label: `${location}_${label}`,
      value: 1,
    });
  }
};

// 모달 열기 추적
export const trackModalOpen = (modalType: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'modal_open', {
      event_category: 'conversion',
      event_label: modalType,
    });
  }
};

// 모달 닫기 추적
export const trackModalClose = (modalType: string, reason: 'user_action' | 'success') => {
  if (isGALoaded()) {
    window.gtag('event', 'modal_close', {
      event_category: 'engagement',
      event_label: modalType,
      close_reason: reason,
    });
  }
};

// 폼 입력 시작 추적
export const trackFormStart = (formName: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'form_start', {
      event_category: 'conversion',
      event_label: formName,
    });
  }
};

// 폼 필드 완료 추적
export const trackFormFieldComplete = (formName: string, fieldName: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'form_field_complete', {
      event_category: 'conversion',
      event_label: `${formName}_${fieldName}`,
    });
  }
};

// 폼 제출 추적
export const trackFormSubmit = (formName: string, success: boolean) => {
  if (isGALoaded()) {
    window.gtag('event', success ? 'form_submit_success' : 'form_submit_error', {
      event_category: 'conversion',
      event_label: formName,
      value: success ? 1 : 0,
    });
  }
};

// 전환 완료 추적 (최종 목표)
export const trackConversion = (conversionType: string, value?: number) => {
  if (isGALoaded()) {
    window.gtag('event', 'conversion', {
      event_category: 'conversion',
      event_label: conversionType,
      value: value || 1,
    });
  }
};

// 에러 추적
export const trackError = (errorType: string, errorMessage: string) => {
  if (isGALoaded()) {
    window.gtag('event', 'error', {
      event_category: 'error',
      event_label: errorType,
      error_message: errorMessage,
    });
  }
};

// TypeScript 타입 정의
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
