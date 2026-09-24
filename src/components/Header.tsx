import { useState, useEffect } from 'react';
import { useScrolled } from './hooks';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Services', href: '#services' },
  { label: 'Network', href: '#network' },
  { label: 'Tracking', href: '#tracking' },
  { label: 'Case Study', href: '#experience' },
];

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'nav-scrolled py-3 shadow-md'
            : 'py-4 lg:py-5 bg-gradient-to-b from-[#07131F]/90 via-[#07131F]/40 to-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : undefined,
        }}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Meridian Global Logistics Home"
          >
            <div className="w-6 h-6 flex items-center justify-center text-[var(--brand-orange)] transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="font-extrabold tracking-tight text-base font-mono-data"
              style={{
                color: scrolled || isDark ? 'var(--text-primary)' : '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              MERIDIAN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider uppercase transition-colors duration-150 py-1"
                style={{
                  color: scrolled || isDark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-mono)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--brand-orange)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    scrolled || isDark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live Operational Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono-data text-[10px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL HUBS OPERATIONAL</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-150 border cursor-pointer"
              style={{
                color: scrolled || isDark ? 'var(--text-primary)' : '#FFFFFF',
                borderColor: scrolled || isDark ? 'var(--border-subtle)' : 'rgba(255,255,255,0.2)',
                backgroundColor: scrolled || isDark ? 'var(--surface)' : 'rgba(255,255,255,0.06)',
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Track Shipment Link */}
            <a
              href="#tracking"
              className="text-xs font-semibold px-3 py-2 rounded-sm transition-colors duration-150"
              style={{
                color: scrolled || isDark ? 'var(--text-primary)' : '#FFFFFF',
                border: `1px solid ${scrolled || isDark ? 'var(--border-strong)' : 'rgba(255,255,255,0.3)'}`,
                fontFamily: 'var(--font-mono)',
              }}
            >
              Track Cargo
            </a>

            {/* Quote Primary CTA */}
            <a href="#quote" className="btn-primary text-xs font-semibold py-2 px-3.5">
              Rate Request
              <svg className="btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-sm text-white"
              style={{
                color: scrolled || isDark ? 'var(--text-primary)' : '#FFFFFF',
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-sm cursor-pointer"
              style={{ color: scrolled || isDark ? 'var(--text-primary)' : '#FFFFFF' }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Full-Screen Mobile Drawer */}
      <div
        className={`mobile-nav-panel fixed inset-0 z-[100] flex flex-col ${menuOpen ? 'open' : ''}`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-[var(--brand-orange)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-extrabold text-base font-mono-data tracking-tight text-[var(--text-primary)]">
              MERIDIAN
            </span>
          </div>

          <button
            className="w-10 h-10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 px-6 py-8 flex flex-col gap-2 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] border-b border-[var(--border-subtle)] flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              <span className="text-[var(--brand-orange)] text-sm font-mono-data">→</span>
            </a>
          ))}
        </div>

        {/* Mobile Drawer Bottom Actions */}
        <div className="p-6 border-t border-[var(--border-subtle)] space-y-3 bg-[var(--surface)]">
          <a
            href="#tracking"
            className="btn-secondary w-full justify-center text-xs py-3"
            onClick={() => setMenuOpen(false)}
          >
            Track Consignment
          </a>
          <a
            href="#quote"
            className="btn-primary w-full justify-center text-xs py-3 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Request Rate Quotation
          </a>
        </div>
      </div>
    </>
  );
}
