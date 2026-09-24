import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Services } from './components/Services';
import { GlobalNetwork } from './components/GlobalNetwork';
import { Tracking } from './components/Tracking';
import { CaseStudy } from './components/CaseStudy';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function MobileStickyQuote() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroSentinel = document.querySelector('#hero-sentinel');
    const quoteSection = document.querySelector('#quote');
    if (!heroSentinel || !quoteSection) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    heroObserver.observe(heroSentinel);

    const quoteObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(false);
      },
      { threshold: 0.1 }
    );
    quoteObserver.observe(quoteSection);

    return () => {
      heroObserver.disconnect();
      quoteObserver.disconnect();
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 py-3 bg-[var(--nav-bg-scrolled)] border-t border-[var(--border-subtle)] backdrop-blur-lg"
      style={{
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div className="flex items-center gap-3">
        <a
          href="#tracking"
          className="btn-secondary flex-1 justify-center text-xs py-2.5 font-mono-data"
        >
          Track Cargo
        </a>
        <a
          href="#quote"
          className="btn-primary flex-1 justify-center text-xs py-2.5 font-semibold"
        >
          Request Rate
          <svg className="btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('meridian-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('meridian-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('meridian-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-200"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <div id="hero-sentinel" className="absolute top-[85vh] h-px w-px pointer-events-none" />
        {/* 1. Hero with integrated operations ticker */}
        <Hero />
        {/* 2. Credibility & capabilities manifesto */}
        <BrandIntro />
        {/* 3. Multimodal services architecture */}
        <Services />
        {/* 4. Global network & route visualization */}
        <GlobalNetwork />
        {/* 5. Live consignment telemetry workbench */}
        <Tracking />
        {/* 6. Featured case study & specialized industry capabilities */}
        <CaseStudy />
        {/* 7. Interactive rate consultation suite & final CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyQuote />
    </div>
  );
}
