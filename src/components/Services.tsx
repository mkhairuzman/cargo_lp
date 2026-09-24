import { useState } from 'react';
import { useInView } from './hooks';

const modes = [
  {
    id: 'ocean',
    code: 'MOD-01',
    name: 'Ocean Freight',
    headline: 'High-volume international maritime transport with weekly fixed-day departures.',
    overview:
      'Scheduled container liner services connecting Tier-1 deep-water ports across Trans-Pacific, Trans-Atlantic, and Asia-Europe corridors. Offering flexible Full Container Load (FCL) and Less than Container Load (LCL) consolidation with verified gross mass (VGM) and ocean bill of lading automation.',
    capabilities: [
      { label: 'FCL & LCL Consolidation', detail: 'Dedicated 20ft, 40ft, and 40ft High-Cube container allocation' },
      { label: 'Climate-Controlled Reefer', detail: '-30°C to +30°C monitored active marine reefer units' },
      { label: 'Heavy Project Cargo', detail: 'Out-of-gauge (OOG) and heavy-lift breakbulk coordination' },
      { label: 'Port-to-Port & Door Intermodal', detail: 'Seamless ocean-to-rail intermodal interchange at terminals' },
    ],
    telemetry: {
      velocity: '18 - 22 kts',
      schedule: 'Weekly Fixed-Day Sailings',
      leadTime: '14 - 28 Days Transoceanic',
      compliance: 'IMO / SOLAS / VGM Certified',
    },
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&h=900&fit=crop&auto=format&q=85',
    imageAlt: 'Modern container ship under power in international waters',
  },
  {
    id: 'air',
    code: 'MOD-02',
    name: 'Air Cargo',
    headline: 'Time-critical global air charter and scheduled freighter capacity.',
    overview:
      'Direct main-deck and belly-hold cargo space connecting major global aviation gateways. Engineered for expedited high-value freight, temperature-sensitive pharmaceuticals, and urgent automotive replacement supply chains with 24-48 hour delivery windows.',
    capabilities: [
      { label: 'Priority Express', detail: 'Next-flight-out guarantees with dedicated ramp transfer' },
      { label: 'Pharma Cold-Chain', detail: 'IATA CEIV Pharma certified handling with dry-ice re-icing' },
      { label: 'Full Freighter Charter', detail: 'Dedicated Boeing 777F & 747-8F charter routing for oversize loads' },
      { label: 'Dangerous Goods (DGR)', detail: 'Fully certified IATA DGR hazardous material specialists' },
    ],
    telemetry: {
      velocity: '850 - 920 km/h',
      schedule: 'Daily Gateway Departures',
      leadTime: '24 - 72 Hours Transcontinental',
      compliance: 'IATA CEIV / AEO-F Accredited',
    },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&h=900&fit=crop&auto=format&q=85',
    imageAlt: 'Air freighter being loaded with unit load device cargo pallets',
  },
  {
    id: 'rail-road',
    code: 'MOD-03',
    name: 'Overland & Rail',
    headline: 'Cross-continental rail bridges and secured European road feeder networks.',
    overview:
      'Bridging maritime gateways and inland manufacturing clusters with high-capacity container block trains and GPS-telematic road convoys. Achieving up to 68% carbon reduction over long-haul road haulage while sustaining predictable scheduled transit times.',
    capabilities: [
      { label: 'Trans-Eurasian Rail', detail: 'Scheduled block-train corridors between East Asia and Europe' },
      { label: 'Bonded FTL & LTL', detail: 'Sealed cross-border road transport under TIR carnet' },
      { label: 'Telematics Tracking', detail: 'Continuous satellite positioning, door sensors, and geofencing' },
      { label: 'Last-Mile Drayage', detail: 'Port-to-warehouse drayage with zero demurrage scheduling' },
    ],
    telemetry: {
      velocity: '65 - 90 km/h Rail Avg.',
      schedule: 'Tri-Weekly Block Trains',
      leadTime: '12 - 16 Days Eurasia Transit',
      compliance: 'TIR Carnet / CMR Convention',
    },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&h=900&fit=crop&auto=format&q=85',
    imageAlt: 'Modern intermodal freight transport corridor and container chassis',
  },
  {
    id: 'customs-contract',
    code: 'MOD-04',
    name: 'Contract Logistics & Customs',
    headline: 'Bonded free-zone warehousing and pre-cleared regulatory customs brokerage.',
    overview:
      'Integrated supply chain execution combining strategically positioned bonded storage facilities with licensed in-house customs brokerage. We eliminate regulatory border friction through pre-arrival declaration filing, tariff classification, and fiscal representation.',
    capabilities: [
      { label: 'Automated Brokerage', detail: 'Direct EDI interfaces with European, US, and Asian customs' },
      { label: 'Bonded Warehousing', detail: 'Duty-deferred storage in major maritime and air free zones' },
      { label: 'Compliance Audit', detail: 'Tariff classification (HS Code), origin certificates, and duty optimization' },
      { label: 'Inventory Staging', detail: 'WMS integration with vendor-managed inventory and cross-docking' },
    ],
    telemetry: {
      velocity: 'Sub-4h Pre-Clearance',
      schedule: 'Continuous 24/7 Processing',
      leadTime: 'Pre-Arrival Documentation',
      compliance: 'WCO SAFE / Authorized Economic Operator',
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&h=900&fit=crop&auto=format&q=85',
    imageAlt: 'High-bay automated racking in modern logistics distribution hub',
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView();
  const current = modes[activeTab];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="services"
      className="py-24 lg:py-32 section-light border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div
              className={`label-caps mb-4 flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Multimodal Architecture</span>
            </div>
            <h2
              className={`heading-xl text-[var(--text-primary)] ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              One network. Every mode.
            </h2>
          </div>
          <p
            className={`text-base text-[var(--text-secondary)] max-w-[480px] leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
          >
            We eliminate the seams between maritime carriers, air freighters, and overland rail systems. Every cargo movement operates under synchronized dispatch and continuous visibility.
          </p>
        </div>

        {/* Mode Selector Tabs (Editorial style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {modes.map((mode, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(index)}
                className={`p-5 text-left border rounded-sm transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[var(--surface)] border-[var(--brand-orange)] shadow-sm'
                    : 'bg-[var(--bg-secondary)] border-transparent hover:border-[var(--border-strong)]'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono-data text-xs font-bold ${
                      isActive ? 'text-[var(--brand-orange)]' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {mode.code}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)]" />
                  )}
                </div>
                <div
                  className={`text-base font-extrabold tracking-tight ${
                    isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {mode.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Mode Showcase: Asymmetric Editorial Spread */}
        <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-sm overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-12">
            {/* Left Content Area (7 cols) */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="status-chip status-transit">{current.code}</span>
                  <span className="text-xs font-mono-data text-[var(--text-muted)]">
                    {current.telemetry.compliance}
                  </span>
                </div>

                <h3 className="heading-lg text-[var(--text-primary)] mb-4 tracking-tight">
                  {current.headline}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                  {current.overview}
                </p>

                {/* Capabilities Sub-Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {current.capabilities.map((c) => (
                    <div
                      key={c.label}
                      className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-sm"
                    >
                      <div className="font-bold text-sm text-[var(--text-primary)] mb-1">
                        {c.label}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] leading-normal">
                        {c.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action & Rate CTA */}
              <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono-data text-xs text-[var(--text-muted)]">
                  STANDARD ROUTING: <span className="font-bold text-[var(--text-primary)]">{current.telemetry.schedule}</span>
                </div>
                <a
                  href="#quote"
                  className="btn-primary text-xs font-semibold"
                >
                  Configure {current.name} Rate
                  <svg className="btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Visual & Operational Telemetry (5 cols) */}
            <div className="lg:col-span-5 bg-[var(--bg-secondary)] flex flex-col justify-between">
              {/* Cinematic Industrial Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden border-b border-[var(--border-subtle)]">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/70 via-transparent to-transparent flex items-end p-4">
                  <span className="font-mono-data text-[11px] text-white/90 font-medium">
                    {current.name} Operational Asset
                  </span>
                </div>
              </div>

              {/* Operational Specification Matrix */}
              <div className="p-6 lg:p-8 space-y-4 font-mono-data text-xs">
                <div className="label-caps text-[var(--text-muted)] mb-2">Operational Telemetry</div>

                <div className="flex justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">AVERAGE VELOCITY</span>
                  <span className="font-bold text-[var(--text-primary)]">{current.telemetry.velocity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">TRANSIT SCHEDULE</span>
                  <span className="font-bold text-[var(--text-primary)]">{current.telemetry.schedule}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">TRANSIT WINDOW</span>
                  <span className="font-bold text-[var(--text-primary)]">{current.telemetry.leadTime}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">REGULATORY CLEARANCE</span>
                  <span className="font-bold text-[var(--brand-orange)]">{current.telemetry.compliance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
