import { trackCTAClick } from '../../../utils/analytics';

interface NavProps {
  onOpenDemo: () => void;
}

export function Nav({ onOpenDemo }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5 text-[20px] font-bold tracking-[-.02em] text-gray-900">
          <span className="h-[9px] w-[9px] rounded-full bg-blue-600" />
          Pangea
        </div>

        <div className="hidden gap-8 text-[14.5px] font-medium text-gray-500 md:flex">
          <a href="#gap" className="transition hover:text-gray-900">문제</a>
          <a href="#shift" className="transition hover:text-gray-900">도입 효과</a>
          <a href="#platform" className="transition hover:text-gray-900">플랫폼</a>
          <a href="#proof" className="transition hover:text-gray-900">팀</a>
          <a href="#faq" className="transition hover:text-gray-900">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://pangea.autos/login"
            className="text-[14.5px] font-medium text-gray-600 transition hover:text-gray-900"
          >
            로그인
          </a>
          <button
            onClick={() => { trackCTAClick('other', 'nav_demo'); onOpenDemo(); }}
            className="rounded-lg bg-blue-600 px-[18px] py-[9px] text-[14.5px] font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-blue-700"
          >
            무료 데모 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
