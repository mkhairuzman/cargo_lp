import { useEffect, useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#071A2B]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&h=1100&fit=crop&auto=format&q=80"
          alt="Container port aerial view"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, #071A2B 0%, #071A2B 40%, rgba(7,26,43,0.75) 65%, rgba(7,26,43,0.25) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #071A2B 0%, transparent 50%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 pb-20 pt-40 w-full">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <div
            className={`label-caps mb-6 flex items-center gap-3 anim-fade-up ${loaded ? '' : 'opacity-0'}`}
            style={{ color: 'var(--brand-orange)' }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ backgroundColor: 'var(--brand-orange)' }}
            />
            Global Logistics Network
          </div>

          {/* Headline */}
          <h1
            className={`heading-display mb-6 anim-fade-up delay-200 ${loaded ? '' : 'opacity-0'}`}
            style={{ color: '#F3F4F2' }}
          >
            Built to move
            <br />
            what matters.
          </h1>

          {/* Body */}
          <p
            className={`text-lg mb-8 leading-relaxed max-w-[480px] anim-fade-up delay-300 ${loaded ? '' : 'opacity-0'}`}
            style={{ color: 'rgba(243,244,242,0.65)', fontWeight: 400 }}
          >
            Integrated air, ocean and ground logistics with full visibility and control from origin to destination.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-3 mb-16 anim-fade-up delay-400 ${loaded ? '' : 'opacity-0'}`}>
            <a href="#quote" className="btn-primary">
              Get a Quote
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#tracking" className="btn-secondary btn-secondary-white">
              Track Shipment
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Metrics */}
          <div
            className={`flex flex-wrap gap-8 pt-8 anim-fade-up delay-500 ${loaded ? '' : 'opacity-0'}`}
            style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
          >
            {[
              { value: '98.7%', label: 'On-Time Performance' },
              { value: '32+', label: 'Countries Connected' },
              { value: '24/7', label: 'Operational Support' },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="text-2xl font-800 mb-1"
                  style={{ color: '#F3F4F2', letterSpacing: '-0.02em' }}
                >
                  {m.value}
                </div>
                <div className="label-caps" style={{ color: 'rgba(243,244,242,0.50)' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Route indicator — bottom right */}
        <div
          className={`absolute bottom-20 right-6 hidden md:block anim-fade-up delay-600 ${loaded ? '' : 'opacity-0'}`}
        >
          <div
            className="rounded-lg p-4 min-w-[200px]"
            style={{
              backgroundColor: 'rgba(7,26,43,0.80)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="label-caps mb-3" style={{ color: 'rgba(243,244,242,0.45)' }}>
              Live Shipment
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-700" style={{ color: '#F3F4F2' }}>JED</span>
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                <path d="M0 5h24M19 1l5 4-5 4" stroke="var(--brand-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-700" style={{ color: '#F3F4F2' }}>KUL</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="status-chip status-transit">In Transit</span>
              <div className="text-right">
                <div className="label-caps mb-0.5" style={{ color: 'rgba(243,244,242,0.45)' }}>ETA</div>
                <div className="text-xs font-700" style={{ color: '#F3F4F2' }}>02D 14H</div>
              </div>
            </div>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="label-caps" style={{ color: 'rgba(243,244,242,0.35)' }}>
                AF-2841 · MSCU 284125
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="label-caps" style={{ color: '#F3F4F2' }}>Scroll</div>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 1v14M2 9l6 6 6-6" stroke="#F3F4F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
