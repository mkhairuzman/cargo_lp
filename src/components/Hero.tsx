import { useEffect, useState } from 'react';

const activeCorridors = [
  { from: 'ROTTERDAM (RTM)', to: 'SINGAPORE (SIN)', mode: 'OCEAN FCL', status: 'IN TRANSIT', statusClass: 'status-transit' },
  { from: 'SHANGHAI (SHA)', to: 'HAMBURG (HAM)', mode: 'RAIL BRIDGE', status: 'CUSTOMS CLEARED', statusClass: 'status-cleared' },
  { from: 'FRANKFURT (FRA)', to: 'DUBAI (DXB)', mode: 'AIR PRIORITY', status: 'ON SCHEDULE', statusClass: 'status-arrived' },
  { from: 'ANTWERP (ANR)', to: 'NEW YORK (NYC)', mode: 'OCEAN FCL', status: 'DEPARTED BERTH', statusClass: 'status-transit' },
  { from: 'LOS ANGELES (LAX)', to: 'TOKYO (TYO)', mode: 'TRANSPAC AIR', status: 'PROCESSING', statusClass: 'status-booked' },
  { from: 'CHICAGO (ORD)', to: 'ROTTERDAM (RTM)', mode: 'INTERMODAL', status: 'IN TRANSIT', statusClass: 'status-transit' },
  { from: 'SINGAPORE (SIN)', to: 'DUBAI (DXB)', mode: 'OCEAN FEEDER', status: 'CUSTOMS CLEARED', statusClass: 'status-cleared' },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#07131F]">
      {/* Background visual with cinematic industrial treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2000&h=1300&fit=crop&auto=format&q=85"
          alt="Deep-sea container port terminal and gantry cranes"
          className="w-full h-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
        {/* Calibrated architectural contrast overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(110deg, #07131F 0%, rgba(7, 19, 31, 0.95) 45%, rgba(7, 19, 31, 0.76) 72%, rgba(7, 19, 31, 0.45) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #07131F 0%, rgba(7, 19, 31, 0.25) 50%, transparent 100%)' }}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-32 lg:pt-40 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Brand & Editorial Headline */}
          <div className="lg:col-span-8">
            <div
              className={`label-caps mb-6 flex items-center gap-3 text-[var(--brand-orange)] ${loaded ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>International Multimodal Infrastructure</span>
            </div>

            <h1
              className={`heading-display text-white mb-6 tracking-tight ${loaded ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Precision freight.
              <br />
              <span className="text-white/80">Global velocity.</span>
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed text-slate-300 max-w-[560px] mb-8 font-normal ${loaded ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            >
              Orchestrating scheduled ocean, air, and cross-continental freight corridors. Delivering uncompromising schedule certainty, active telemetry, and dedicated customs execution across 8 global trade gateways.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap items-center gap-4 mb-12 ${loaded ? 'anim-fade-up delay-300' : 'opacity-0'}`}>
              <a href="#quote" className="btn-primary text-sm font-semibold">
                Request Freight Rate
                <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#tracking" className="btn-secondary btn-secondary-white text-sm font-semibold">
                Track Live Consignment
                <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Credibility Metric Anchor */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 max-w-[680px] ${loaded ? 'anim-fade-up delay-400' : 'opacity-0'}`}
            >
              <div>
                <div className="text-2xl font-extrabold text-white font-mono-data tracking-tight">8</div>
                <div className="label-caps text-slate-400 text-[10px] mt-0.5">Gateway Hubs</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono-data tracking-tight">99.2%</div>
                <div className="label-caps text-slate-400 text-[10px] mt-0.5">Schedule Integrity</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono-data tracking-tight">24/7</div>
                <div className="label-caps text-slate-400 text-[10px] mt-0.5">Control Tower</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[var(--brand-orange)] font-mono-data tracking-tight">AIS + GPS</div>
                <div className="label-caps text-slate-400 text-[10px] mt-0.5">Active Telemetry</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Manifest Telemetry Card */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div
              className={`w-full max-w-[390px] bg-[#0A1420] border border-white/15 p-6 rounded-sm shadow-2xl ${loaded ? 'anim-fade-up delay-300' : 'opacity-0'}`}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="label-caps text-slate-300 text-[10px]">Active Manifest</span>
                </div>
                <span className="status-chip status-transit">En Route</span>
              </div>

              {/* Corridor */}
              <div className="mb-4">
                <div className="flex items-center justify-between font-mono-data text-white font-bold text-base mb-1">
                  <span>ROTTERDAM</span>
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[var(--brand-orange)]">
                    <path d="M0 6H20M15 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>SINGAPORE</span>
                </div>
                <div className="flex justify-between text-[11px] font-mono-data text-slate-400">
                  <span>RTM GATEWAY · BERTH 4</span>
                  <span>PASIR PANJANG 6</span>
                </div>
              </div>

              {/* Manifest Specs */}
              <div className="space-y-2.5 py-3 border-y border-white/10 text-xs font-mono-data">
                <div className="flex justify-between">
                  <span className="text-slate-400">VESSEL</span>
                  <span className="text-white font-semibold">MV MERIDIAN ARROW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CONTAINER</span>
                  <span className="text-white font-semibold">MRDU 940218-4 · 40HC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CURRENT POSITION</span>
                  <span className="text-emerald-400 font-semibold">Malacca Approach · 19.8 kts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ESTIMATED ARRIVAL</span>
                  <span className="text-white font-semibold">27 Sep · 04:00 UTC</span>
                </div>
              </div>

              <div className="mt-4 pt-1 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono-data">Verified AIS Stream</span>
                <a
                  href="#tracking"
                  className="text-xs font-bold text-[var(--brand-orange)] hover:underline inline-flex items-center gap-1"
                >
                  Inspect Voyage
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Corridors Velocity Ticker - seamlessly docked */}
      <div
        className="relative z-10 w-full bg-[#08111A] border-t border-white/10 py-3.5 ticker-wrapper"
        tabIndex={0}
        aria-label="Active trade corridor feed"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#08111A] to-transparent z-10 pointer-events-none" />
        <div className="ticker-track">
          {[...activeCorridors, ...activeCorridors].map((c, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-6 border-r border-white/10 text-xs font-mono-data shrink-0"
            >
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <span>{c.from}</span>
                <span className="text-[var(--brand-orange)]">→</span>
                <span>{c.to}</span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">{c.mode}</span>
              <span className={`status-chip ${c.statusClass} text-[10px]`}>{c.status}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#08111A] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
