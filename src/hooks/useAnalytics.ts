import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackSectionView } from '../utils/analytics';

// 스크롤 깊이 추적 훅
export function useScrollTracking() {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // 25%, 50%, 75%, 100% 추적
      [25, 50, 75, 100].forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// 섹션 뷰 추적 훅
export function useSectionTracking(sectionName: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionName);
          }
        });
      },
      { threshold: 0.3 } // 30% 이상 보이면 추적
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName]);

  return sectionRef;
}
