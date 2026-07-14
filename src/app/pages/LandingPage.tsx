import { useState } from 'react';
import { Nav } from '../components/landing/Nav';
import { HeroSection } from '../components/landing/HeroSection';
import {
  GapSection,
  ShiftSection,
  PlatformSection,
  CapsSection,
  PersonaSection,
  ProofSection,
  PilotSection,
  FaqSection,
  LandingFooter,
} from '../components/landing/Sections';
import { DemoModal } from '../components/DemoModal';
import { useScrollTracking } from '../../hooks/useAnalytics';

export function LandingPage() {
  useScrollTracking();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);

  return (
    <div className="font-body relative min-h-screen overflow-x-hidden bg-[#0A0E14] text-[#EAF0F7]">
      {/* background grid atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(#1F2A3C 1px, transparent 1px), linear-gradient(90deg, #1F2A3C 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%)',
        }}
      />

      <Nav onOpenDemo={openDemo} />
      <HeroSection onOpenDemo={openDemo} />
      <GapSection />
      <ShiftSection />
      <PlatformSection />
      <CapsSection />
      <PersonaSection />
      <ProofSection />
      <PilotSection onOpenDemo={openDemo} />
      <FaqSection />
      <LandingFooter />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
