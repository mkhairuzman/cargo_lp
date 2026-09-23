import { useRef } from 'react';
import { useInView } from './hooks';

export function BrandIntro() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-light py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text — left */}
          <div>
            <div
              className={`label-caps mb-6 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              About the Network
            </div>

            <h2
              className={`heading-xl mb-8 ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              Logistics built
              <br />
              around certainty.
            </h2>

            <div
              className={`space-y-5 ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            >
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We operate an integrated freight network spanning air, ocean and road — engineered for visibility across every stage. From booking to final delivery, our teams coordinate each movement with precision and accountability.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our infrastructure connects major trade corridors across Asia, the Middle East, and Europe. Every shipment is monitored in real time, with a dedicated coordination team available at every hour.
              </p>
            </div>

            <div
              className={`mt-10 flex flex-wrap gap-8 pt-8 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {[
                { value: 'Multimodal', label: 'Freight Capability' },
                { value: 'End-to-End', label: 'Supply Chain' },
                { value: 'Real-Time', label: 'Shipment Visibility' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-700 mb-1" style={{ color: 'var(--brand-orange)' }}>
                    {item.value}
                  </div>
                  <div className="label-caps" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — right */}
          <div
            className={`relative ${inView ? 'anim-clip-h delay-200' : 'opacity-0'}`}
            style={{ clipPath: 'inset(0)' }}
          >
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&h=700&fit=crop&auto=format&q=80"
                alt="Shipping containers stacked at port"
                className="w-full h-full object-cover"
                style={{ transition: 'transform 8s ease', transform: 'scale(1.04)' }}
              />
              {/* Accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: 'var(--brand-orange)' }}
              />
            </div>

            {/* Floating credential card */}
            <div
              className="absolute -bottom-6 -left-6 rounded-lg p-5"
              style={{
                backgroundColor: 'var(--surface)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="label-caps mb-1" style={{ color: 'var(--text-muted)' }}>Founded</div>
              <div className="text-2xl font-800" style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                2009
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                15+ years of global operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
