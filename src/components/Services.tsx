import { useState } from 'react';
import { useInView } from './hooks';

const services = [
  {
    num: '01',
    name: 'Ocean Freight',
    short: 'Full container and consolidation solutions across major global shipping lanes.',
    capabilities: ['FCL – Full Container Load', 'LCL – Less than Container', 'Port-to-Port', 'Door-to-Door'],
    benefits: ['Weekly sailings on key corridors', 'Real-time vessel tracking', 'Customs documentation support'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=700&fit=crop&auto=format&q=80',
  },
  {
    num: '02',
    name: 'Air Freight',
    short: 'Priority and standard air cargo services to over 150 destinations worldwide.',
    capabilities: ['Express & Priority', 'General Cargo', 'Charter Solutions', 'Dangerous Goods (IATA)'],
    benefits: ['Next-flight-out options', 'Airport-to-airport and door-to-door', 'Temperature-controlled capability'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=700&fit=crop&auto=format&q=80',
  },
  {
    num: '03',
    name: 'Road Freight',
    short: 'Flexible ground transport across regional and cross-border trade corridors.',
    capabilities: ['Full Truckload (FTL)', 'Partial / LTL', 'Refrigerated Transport', 'Cross-border Clearance'],
    benefits: ['GPS-tracked fleet', 'Dedicated & shared options', 'Overnight regional service'],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=700&fit=crop&auto=format&q=80',
  },
  {
    num: '04',
    name: 'Warehousing',
    short: 'Strategic storage and distribution centers in key logistics hubs.',
    capabilities: ['Bonded & Free Zone Storage', 'Pick & Pack', 'Cross-docking', 'Inventory Management'],
    benefits: ['WMS with real-time visibility', 'Value-added services', 'Scalable capacity'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=700&fit=crop&auto=format&q=80',
  },
  {
    num: '05',
    name: 'Customs Clearance',
    short: 'Expert import/export brokerage to keep cargo moving across borders.',
    capabilities: ['Import & Export Declarations', 'Tariff Classification', 'Duty Optimization', 'Compliance Audit'],
    benefits: ['Licensed brokers in 20+ countries', 'Automated pre-clearance', 'Regulatory advisory'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=700&fit=crop&auto=format&q=80',
  },
  {
    num: '06',
    name: 'Last-Mile Delivery',
    short: 'Final delivery solutions that connect your cargo to its end destination.',
    capabilities: ['Urban & Rural Delivery', 'Proof-of-Delivery', 'Appointment Delivery', 'Returns Management'],
    benefits: ['98.2% first-attempt success', 'Real-time delivery updates', 'White-glove options'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&h=700&fit=crop&auto=format&q=80',
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const service = services[active];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-light py-28 lg:py-36"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div
              className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              Our Services
            </div>
            <h2
              className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              One network.
              <br />
              Every mode.
            </h2>
          </div>
          <p
            className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'var(--text-secondary)' }}
          >
            From a single shipment to a complex supply chain, we manage freight across every transportation mode with integrated systems and dedicated expertise.
          </p>
        </div>

        {/* Desktop: left index + right visual */}
        <div className="hidden lg:grid lg:grid-cols-[420px_1fr] gap-0" style={{ border: '1px solid var(--border-subtle)', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Service list */}
          <div style={{ borderRight: '1px solid var(--border-subtle)' }}>
            {services.map((s, i) => (
              <button
                key={s.name}
                className={`service-item w-full text-left ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="label-caps mb-1"
                      style={{ color: active === i ? 'var(--brand-orange)' : 'var(--text-muted)' }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-base font-700"
                      style={{ color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)', letterSpacing: '-0.01em' }}
                    >
                      {s.name}
                    </div>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    style={{ color: active === i ? 'var(--brand-orange)' : 'var(--border-strong)', transition: 'color 200ms' }}
                  >
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex flex-col" style={{ backgroundColor: 'var(--surface)' }}>
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: '320px' }}>
              <img
                key={service.image}
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover anim-fade-in"
                style={{ transition: 'opacity 400ms' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, var(--surface) 100%)' }}
              />
              {/* Service number overlay */}
              <div
                className="absolute top-6 right-6 text-6xl font-800 select-none"
                style={{ color: 'rgba(255,255,255,0.12)', letterSpacing: '-0.04em' }}
              >
                {service.num}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1">
              <h3 className="heading-md mb-3" style={{ color: 'var(--text-primary)' }}>
                {service.name}
              </h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {service.short}
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="label-caps mb-3" style={{ color: 'var(--text-muted)' }}>
                    Capabilities
                  </div>
                  <ul className="space-y-2">
                    {service.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--brand-orange)' }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="label-caps mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Benefits
                  </div>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <a href="#quote" className="btn-primary">
                  Request {service.name} Quote
                  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical panels */}
        <div className="lg:hidden space-y-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-sm"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(7,26,43,0.9) 100%)' }} />
                <div className="absolute bottom-4 left-4">
                  <div className="label-caps mb-1" style={{ color: 'var(--brand-orange)' }}>{s.num}</div>
                  <div className="text-lg font-700 text-white">{s.name}</div>
                </div>
              </div>
              <div className="p-5" style={{ backgroundColor: 'var(--surface)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.short}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.capabilities.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
