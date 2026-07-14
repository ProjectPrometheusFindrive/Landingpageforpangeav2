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
    <div className="font-body min-h-screen bg-white text-gray-900">
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
