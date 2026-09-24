const links = {
  Infrastructure: [
    { label: 'Ocean Liner Services', href: '#services' },
    { label: 'Air Freight Charter', href: '#services' },
    { label: 'Trans-Eurasian Rail', href: '#services' },
    { label: 'Bonded Warehousing', href: '#services' },
    { label: 'Automated Customs EDI', href: '#services' },
  ],
  Network: [
    { label: 'Rotterdam Gateway', href: '#network' },
    { label: 'Singapore Strait Hub', href: '#network' },
    { label: 'Shanghai Deep-Water Port', href: '#network' },
    { label: 'Dubai Aviation Crossway', href: '#network' },
    { label: 'Frankfurt CargoCity', href: '#network' },
    { label: 'Los Angeles Terminal', href: '#network' },
  ],
  Intelligence: [
    { label: 'Telemetry Workbench', href: '#tracking' },
    { label: 'Active Vessel Tracking', href: '#tracking' },
    { label: 'Cold-Chain Verification', href: '#tracking' },
    { label: 'Tariff Classification Desk', href: '#quote' },
    { label: 'Rate Configurator', href: '#quote' },
  ],
  Company: [
    { label: 'About Meridian', href: '#capabilities' },
    { label: 'Operational Manifesto', href: '#capabilities' },
    { label: 'Case Studies', href: '#experience' },
    { label: 'Compliance & AEO', href: '#experience' },
    { label: 'Careers & Dispatch', href: '#quote' },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050D15] text-white border-t border-white/10">
      {/* Oversized Subtle Architectural Watermark */}
      <div
        className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none select-none opacity-20"
        aria-hidden
      >
        <div
          className="text-[clamp(6rem,18vw,16rem)] font-extrabold leading-none text-white/5 tracking-tighter"
          style={{ transform: 'translateY(18%)', whiteSpace: 'nowrap' }}
        >
          MERIDIAN
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-20 pb-12">
        {/* Top Operational Row: Brand & Global Gateway Headquarters */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 flex items-center justify-center text-[var(--brand-orange)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-full h-full">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-mono-data">
                MERIDIAN
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-[420px] leading-relaxed">
              Independent international freight infrastructure. Orchestrating ocean liner services, transcontinental rail bridges, and scheduled air cargo with continuous telemetry and sovereign broker desks.
            </p>
            <div className="pt-2 font-mono-data text-xs text-slate-400 space-y-1">
              <div>CENTRAL DISPATCH: <strong className="text-white">dispatch@meridian-logistics.com</strong></div>
              <div>OPERATIONAL TELEPHONE: <strong className="text-white">+31 (0) 10 790 4400</strong></div>
            </div>
          </div>

          {/* Global Gateway Hub Addresses */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6 font-mono-data text-xs border-t lg:border-t-0 border-white/10 pt-6 lg:pt-0">
            <div>
              <div className="label-caps text-[var(--brand-orange)] mb-2">European HQ</div>
              <div className="font-bold text-white mb-1">Rotterdam Gateway</div>
              <div className="text-slate-400 leading-relaxed text-[11px]">
                Willemskade 22<br />
                3016 DK Rotterdam<br />
                The Netherlands
              </div>
            </div>
            <div>
              <div className="label-caps text-[var(--brand-blue)] mb-2">Asia-Pacific Hub</div>
              <div className="font-bold text-white mb-1">Singapore Strait</div>
              <div className="text-slate-400 leading-relaxed text-[11px]">
                Marina Bay Financial Tower<br />
                10 Marina Boulevard<br />
                Singapore 018983
              </div>
            </div>
            <div>
              <div className="label-caps text-slate-400 mb-2">Americas Operations</div>
              <div className="font-bold text-white mb-1">Chicago Intermodal</div>
              <div className="text-slate-400 leading-relaxed text-[11px]">
                300 South Wacker Drive<br />
                Chicago, IL 60606<br />
                United States
              </div>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="label-caps text-slate-400 mb-4 text-[10px]">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-slate-300 hover:text-[var(--brand-orange)] transition-colors duration-150 font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-data text-xs text-slate-500">
          <div>
            © 2026 MERIDIAN GLOBAL LOGISTICS GROUP. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>AEO-F ACCREDITED</span>
            <span>•</span>
            <span>ISO 9001 / 14001</span>
            <span>•</span>
            <span>IATA CEIV PHARMA</span>
            <span>•</span>
            <a href="#quote" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#quote" className="text-slate-400 hover:text-white transition-colors">
              Terms of Carriage
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
