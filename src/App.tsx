import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OperationsStrip } from './components/OperationsStrip';
import { BrandIntro } from './components/BrandIntro';
import { GlobalScale } from './components/GlobalScale';
import { Services } from './components/Services';
import { GlobalNetwork } from './components/GlobalNetwork';
import { ShipmentJourney } from './components/ShipmentJourney';
import { Tracking } from './components/Tracking';
import { OperationalValue } from './components/OperationalValue';
import { Industries } from './components/Industries';
import { ControlTower } from './components/ControlTower';
import { CaseStudy } from './components/CaseStudy';
import { Testimonials } from './components/Testimonials';
import { Sustainability } from './components/Sustainability';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function MobileStickyQuote() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('#hero-sentinel');
    const cta = document.querySelector('#quote');
    if (!hero || !cta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);

    const ctaObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShow(false); },
      { threshold: 0 }
    );
    ctaObserver.observe(cta);

    return () => { observer.disconnect(); ctaObserver.disconnect(); };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 py-3"
      style={{
        backgroundColor: 'var(--nav-bg-scrolled)',
        borderTop: '1px solid var(--border-subtle)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <a href="#quote" className="btn-primary w-full justify-center">
        Get a Quote
        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <div id="hero-sentinel" style={{ position: 'absolute', top: '90vh' }} />
        <Hero />
        <OperationsStrip />
        <BrandIntro />
        <GlobalScale />
        <Services />
        <GlobalNetwork />
        <ShipmentJourney />
        <Tracking />
        <OperationalValue />
        <Industries />
        <ControlTower />
        <CaseStudy />
        <Testimonials />
        <Sustainability />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyQuote />
    </div>
  );
}
