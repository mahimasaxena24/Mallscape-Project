import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  attractions,
  diningCollections,
  events,
  floatingNavItems,
  heroMetrics,
  luxuryBrands,
  retailBrands,
  statCards,
} from './data/propertyData';
import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { RetailShowcase } from './components/RetailShowcase';
import { LuxurySection } from './components/LuxurySection';
import { LifestyleSection } from './components/LifestyleSection';
import { AttractionsSection } from './components/AttractionsSection';
import { PlatformSection } from './components/PlatformSection';
import { CtaSection } from './components/CtaSection';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const sections = useMemo(() => floatingNavItems, []);

  return (
    <div className="page-shell min-h-screen">
      <FloatingNav items={sections} />

      <motion.main
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="relative isolate"
      >
        <HeroSection metrics={heroMetrics} />
        <StatsSection stats={statCards} />
        <RetailShowcase brands={retailBrands} />
        <LuxurySection brands={luxuryBrands} />
        <LifestyleSection collections={diningCollections} />
        <AttractionsSection attractions={attractions} />
        <PlatformSection events={events} />
        <CtaSection />
      </motion.main>
    </div>
  );
}

export default App;
