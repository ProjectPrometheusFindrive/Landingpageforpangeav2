import { useState } from 'react';
import { Nav } from '../components/landing/Nav';
import { HeroSection } from '../components/landing/HeroSection';
import {
  PainSections,
  MoatSection,
  CompareSection,
  PricingSection,
  RoadmapSection,
  FaqSection,
  CtaSection,
  LandingFooter,
} from '../components/landing/Sections';
import { DemoModal } from '../components/DemoModal';
import { useScrollTracking } from '../../hooks/useAnalytics';
import '../../styles/landing-v7.css';

export function LandingPage() {
  useScrollTracking();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);

  return (
    <div className="pgv7">
      <Nav onOpenDemo={openDemo} />
      <HeroSection />
      <PainSections />
      <MoatSection />
      <CompareSection />
      <PricingSection />
      <RoadmapSection />
      <FaqSection />
      <CtaSection />
      <LandingFooter onOpenDemo={openDemo} />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
