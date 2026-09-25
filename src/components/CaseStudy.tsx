import { useInView } from './hooks';

export function CaseStudy() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-surface py-28 lg:py-36"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div
          className={`label-caps mb-12 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
          style={{ color: 'var(--brand-orange)' }}
        >
          <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
          Case Study
        </div>

        {/* Full bleed card */}
        <div
          className={`relative overflow-hidden rounded-sm ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
          style={{ minHeight: '520px' }}
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1400&h=700&fit=crop&auto=format&q=80"
            alt="Cargo ship at sea"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(7,26,43,0.95) 0%, rgba(7,26,43,0.80) 50%, rgba(7,26,43,0.40) 100%)' }}
          />

          {/* Content */}
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-end h-full min-h-[520px]">
            {/* Left: headline */}
            <div className="flex-1">
              <div className="label-caps mb-4" style={{ color: 'rgba(243,244,242,0.50)' }}>
                Petrosynth Industrial · Saudi Arabia → Malaysia
              </div>
              <h3
                className="heading-lg mb-6"
                style={{ color: '#F3F4F2', maxWidth: '480px' }}
              >
                "Reducing cross-border delivery time by 31%."
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(243,244,242,0.65)', maxWidth: '420px' }}>
                By redesigning the freight routing and pre-lodging customs documentation 72 hours in advance, we eliminated the primary source of delay on this corridor.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm font-600"
                style={{ color: '#F3F4F2', borderBottom: '1px solid rgba(255,255,255,0.35)', paddingBottom: '4px', transition: 'border-color 200ms' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--brand-orange)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand-orange)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)'; (e.currentTarget as HTMLAnchorElement).style.color = '#F3F4F2'; }}
              >
                Read Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            {/* Right: results */}
            <div className="flex flex-col gap-6 lg:text-right">
              {[
                { value: '31%', label: 'Faster Transit Time' },
                { value: '22%', label: 'Lower Handling Cost' },
                { value: '99.1%', label: 'Delivery Accuracy' },
              ].map((r) => (
                <div key={r.label}>
                  <div
                    className="text-4xl font-800 mb-1"
                    style={{ color: 'var(--brand-orange)', letterSpacing: '-0.04em' }}
                  >
                    {r.value}
                  </div>
                  <div className="label-caps" style={{ color: 'rgba(243,244,242,0.45)' }}>
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
