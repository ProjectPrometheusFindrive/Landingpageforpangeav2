import { trackCTAClick } from '../../../utils/analytics';

interface NavProps {
  onOpenDemo: () => void;
}

export function Nav({ onOpenDemo }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1F2A3C] bg-[rgba(10,14,20,.72)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        <div className="font-display flex items-center gap-2.5 text-[19px] font-bold tracking-[-.02em] text-[#EAF0F7]">
          <span className="h-[9px] w-[9px] rounded-full bg-[#3BE8B0] shadow-[0_0_12px_#3BE8B0]" />
          Pangea
        </div>

        <div className="hidden gap-[30px] text-[14px] text-[#8A97AC] md:flex">
          <a href="#gap" className="transition hover:text-[#EAF0F7]">문제</a>
          <a href="#shift" className="transition hover:text-[#EAF0F7]">도입 효과</a>
          <a href="#platform" className="transition hover:text-[#EAF0F7]">플랫폼</a>
          <a href="#proof" className="transition hover:text-[#EAF0F7]">팀</a>
          <a href="#faq" className="transition hover:text-[#EAF0F7]">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://pangea.autos/login"
            className="font-display text-[14px] font-medium text-[#8A97AC] transition hover:text-[#EAF0F7]"
          >
            로그인
          </a>
          <button
            onClick={() => { trackCTAClick('other', 'nav_demo'); onOpenDemo(); }}
            className="font-display rounded-[9px] bg-[#3BE8B0] px-[18px] py-[9px] text-[14px] font-semibold text-[#0A0E14] transition hover:-translate-y-px hover:bg-[#57f0c0]"
          >
            무료 데모 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
