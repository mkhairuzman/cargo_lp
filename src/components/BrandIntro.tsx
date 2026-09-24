import { useInView } from './hooks';

const capabilities = [
  {
    num: '01',
    title: 'Intermodal Precision',
    description:
      'Direct synchronization between deep-water berths, railheads, and bonded road feeder networks eliminating dwell-time bottlenecks.',
    spec: 'Direct Port-to-Rail Interchange',
  },
  {
    num: '02',
    title: 'Pre-Lodged Customs EDI',
    description:
      'Automated import/export declarations pre-cleared 48 hours prior to vessel arrival with European, Asian, and US customs systems.',
    spec: 'Sub-4-Hour Border Turnaround',
  },
  {
    num: '03',
    title: 'Continuous Cold-Chain Telemetry',
    description:
      'Calibrated environmental sensors logging temperature, humidity, and atmospheric pressure with tamper-evident digital seal audits.',
    spec: 'GDP & IATA CEIV Certified Lanes',
  },
  {
    num: '04',
    title: 'Autonomous Exception Recovery',
    description:
      'Real-time marine traffic analysis and automated alternative lane diversion to bypass port congestion and weather delays.',
    spec: '24/7 Sovereign Control Desk',
  },
];

export function BrandIntro() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="capabilities"
      className="py-24 lg:py-32 section-light border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div className="lg:col-span-7">
            <div
              className={`label-caps mb-4 flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Operational Manifesto</span>
            </div>
            <h2
              className={`heading-xl text-[var(--text-primary)] ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Engineered for certainty across global trade corridors.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              className={`text-base leading-relaxed text-[var(--text-secondary)] ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            >
              In global commerce, variance is cost. MERIDIAN operates an integrated logistics architecture where ocean liner capacity, scheduled air freight, and inland rail corridors are orchestrated under singular, accountable operational command.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid with High-End Editorial Presentation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <div
              key={cap.num}
              className={`flex flex-col justify-between p-6 rounded-sm bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors duration-200 shadow-sm ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--border-subtle)]">
                  <span className="font-mono-data text-xs font-bold text-[var(--brand-orange)] tracking-wider">
                    SYS // {cap.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] font-mono-data text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                <span>BENCHMARK</span>
                <span className="font-semibold text-[var(--text-primary)]">{cap.spec}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Asset Strip: Port Infrastructure Showcase */}
        <div
          className={`mt-16 grid lg:grid-cols-12 gap-8 items-center rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-subtle)] overflow-hidden p-6 lg:p-8 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
        >
          <div className="lg:col-span-5 space-y-4">
            <span className="status-chip status-cleared">Global Infrastructure</span>
            <h4 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Sovereign terminals & bonded corridors
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              From our flagship container terminal berths in Rotterdam and Antwerp to high-throughput air hubs in Frankfurt and Singapore, our physical footprint ensures priority handling and bonded continuity without intermediate handoff delays.
            </p>
            <div className="pt-2 flex items-center gap-6 font-mono-data text-xs text-[var(--text-primary)] font-bold">
              <span>ROTTERDAM GATEWAY</span>
              <span className="text-[var(--text-muted)]">·</span>
              <span>SINGAPORE STRAIT</span>
              <span className="text-[var(--text-muted)]">·</span>
              <span>SHANGHAI PORT</span>
            </div>
          </div>
          <div className="lg:col-span-7 h-64 lg:h-72 relative rounded-sm overflow-hidden border border-[var(--border-subtle)]">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=600&fit=crop&auto=format&q=80"
              alt="Intermodal shipping container yard with reach stacker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131F]/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-mono-data text-xs text-white/90 font-medium">
                Berth 4 Intermodal Yard · Rotterdam Hub Facility
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
