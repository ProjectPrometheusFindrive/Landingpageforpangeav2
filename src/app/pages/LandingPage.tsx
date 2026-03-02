import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { VirtuousCycle } from '../components/VirtuousCycle';
import { Features } from '../components/Features';
import { Benefits } from '../components/Benefits';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { useScrollTracking } from '../../hooks/useAnalytics';

export function LandingPage() {
  useScrollTracking();
  
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <VirtuousCycle />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}