import { useInView } from './hooks';

const points = [
  { title: 'Route Optimization', copy: 'AI routing selects the most efficient combination of mode, carrier and port for every shipment — reducing fuel consumption and empty movements.' },
  { title: 'Shipment Consolidation', copy: 'LCL programs and shared container solutions reduce per-unit emissions without compromising transit time or service quality.' },
  { title: 'Multimodal Planning', copy: 'Selecting ocean over air where scheduling allows cuts carbon intensity by up to 80% on the same corridor.' },
  { title: 'Emissions Reporting', copy: 'Scope 3 freight emissions reporting is available for all managed shipments — structured for sustainability disclosures and ESG frameworks.' },
];

export function Sustainability() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36 overflow-hidden section-light"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div
            className={`relative overflow-hidden rounded-sm ${inView ? 'anim-clip-h' : 'opacity-0'}`}
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&auto=format&q=80"
              alt="Industrial port infrastructure"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top right, rgba(7,26,43,0.5), transparent)' }}
            />
            {/* Stat overlay */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded p-5"
              style={{ backgroundColor: 'rgba(7,26,43,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <div className="flex justify-between gap-8">
                {[
                  { value: '18%', label: 'Avg. Emission Reduction' },
                  { value: '3.2M', label: 'Kg CO₂ Avoided (2025)' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-800 mb-0.5" style={{ color: 'var(--brand-orange)', letterSpacing: '-0.03em' }}>
                      {s.value}
                    </div>
                    <div className="label-caps" style={{ color: 'rgba(243,244,242,0.50)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div
              className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              Sustainable Logistics
            </div>
            <h2
              className={`heading-xl mb-8 ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              Smarter routes.
              <br />
              Lower impact.
            </h2>

            <div className="space-y-6">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className={`${inView ? 'anim-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(i + 2) * 80}ms` }}
                >
                  <div
                    className="flex items-start gap-4 py-5"
                    style={{ borderTop: '1px solid var(--border-subtle)' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: 'var(--brand-orange)' }}
                    />
                    <div>
                      <div className="text-sm font-700 mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        {p.title}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {p.copy}
                      </p>
                    </div>
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
