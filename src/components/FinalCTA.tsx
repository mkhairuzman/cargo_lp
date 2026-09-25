import { useInView } from './hooks';

export function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="quote"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-end overflow-hidden"
      style={{ backgroundColor: '#071A2B' }}
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop&auto=format&q=80"
        alt="Port at dusk with cranes and containers"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 60%' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, #071A2B 0%, rgba(7,26,43,0.75) 50%, rgba(7,26,43,0.35) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 py-24 w-full">
        <div className="max-w-[680px]">
          <div
            className={`label-caps mb-6 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            style={{ color: 'var(--brand-orange)' }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
            Ready to Move
          </div>

          <h2
            className={`heading-display mb-6 ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            style={{ color: '#F3F4F2' }}
          >
            Your cargo.
            <br />
            Our responsibility.
          </h2>

          <p
            className={`text-lg mb-10 leading-relaxed max-w-[520px] ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'rgba(243,244,242,0.65)' }}
          >
            From a single shipment to a global supply chain, our teams keep cargo moving with clarity and control.
          </p>

          <div
            className={`flex flex-wrap gap-4 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
          >
            <a href="#" className="btn-primary">
              Get a Quote
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#" className="btn-secondary btn-secondary-white">
              Talk to Our Logistics Team
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
