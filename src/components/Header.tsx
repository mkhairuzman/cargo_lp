import { useState } from 'react';
import { useScrolled } from './hooks';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = ['Company', 'Services', 'Network', 'Industries', 'Insights'];

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(60);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled py-3' : 'py-5'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-[1360px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" style={{ color: scrolled || isDark ? 'var(--text-primary)' : '#fff' }}>
            <div
              className="w-6 h-6 flex items-center justify-center"
              style={{ color: 'var(--brand-orange)' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="font-bold tracking-tight text-base" style={{ letterSpacing: '-0.02em' }}>
              MERIDIAN
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: scrolled || isDark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.80)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled || isDark
                    ? 'var(--text-primary)'
                    : '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled || isDark
                    ? 'var(--text-secondary)'
                    : 'rgba(255,255,255,0.80)';
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
              style={{
                color: scrolled || isDark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.70)',
                backgroundColor: 'transparent',
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Track Shipment */}
            <a
              href="#tracking"
              className="text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200"
              style={{
                color: scrolled || isDark ? 'var(--text-primary)' : 'rgba(255,255,255,0.90)',
                border: `1px solid ${scrolled || isDark ? 'var(--border-strong)' : 'rgba(255,255,255,0.35)'}`,
              }}
            >
              Track Shipment
            </a>

            {/* Get a Quote */}
            <a href="#quote" className="btn-primary text-sm">
              Get a Quote
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            style={{ color: scrolled || isDark ? 'var(--text-primary)' : '#fff' }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile nav panel */}
      <div
        className={`mobile-nav-panel fixed inset-0 z-[100] flex flex-col ${menuOpen ? 'open' : ''}`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-bold text-base" style={{ letterSpacing: '-0.02em' }}>MERIDIAN</span>
          <button
            className="w-10 h-10 flex items-center justify-center"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 px-6 py-4 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className="py-4 text-2xl font-700 anim-fade-up"
              style={{
                animationDelay: `${i * 60}ms`,
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-subtle)',
                letterSpacing: '-0.02em',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="px-6 py-6 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <a href="#tracking" className="btn-secondary text-center justify-center" onClick={() => setMenuOpen(false)}>
            Track Shipment
          </a>
          <a href="#quote" className="btn-primary text-center justify-center" onClick={() => setMenuOpen(false)}>
            Get a Quote
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <button
            onClick={() => { onToggleTheme(); setMenuOpen(false); }}
            className="flex items-center gap-3 py-3 text-sm font-600"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isDark ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                Switch to Light Mode
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                Switch to Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
