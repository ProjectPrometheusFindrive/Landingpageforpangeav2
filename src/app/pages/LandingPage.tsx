import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { Benefits } from '../components/Benefits';
import { Footer } from '../components/Footer';
import { StickyFloatingCTA } from '../components/StickyFloatingCTA';
import { useScrollTracking } from '../../hooks/useAnalytics';

export function LandingPage() {
  useScrollTracking();
  
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <Benefits />
      <Footer />
      <StickyFloatingCTA />
    </div>
  );
}