import { useState } from 'react';
import { useInView } from './hooks';

interface ShipmentRecord {
  id: string;
  origin: string;
  destination: string;
  mode: string;
  carrier: string;
  container: string;
  cargo: string;
  status: string;
  statusClass: string;
  progress: number;
  currentLocation: string;
  eta: string;
  telemetry: {
    temp?: string;
    humidity?: string;
    shock?: string;
    seal: string;
    speed: string;
    coordinates: string;
  };
  events: Array<{
    time: string;
    event: string;
    location: string;
    completed: boolean;
  }>;
}

const demoShipments: Record<string, ShipmentRecord> = {
  'MR-8402': {
    id: 'MR-8402',
    origin: 'Rotterdam Gateway (NLRTM), Netherlands',
    destination: 'Pasir Panjang Terminal, Port of Singapore (SGSIN)',
    mode: 'Ocean Freight — 40ft High Cube (FCL)',
    carrier: 'MV Meridian Arrow (IMO 9840211)',
    container: 'MRDU 940218-4 · 40HC',
    cargo: 'Precision Industrial Robotics',
    status: 'In Transit',
    statusClass: 'status-transit',
    progress: 84,
    currentLocation: 'Malacca Strait Approach (05°42\' N, 95°18\' E)',
    eta: '27 Sep · 04:00 UTC',
    telemetry: {
      temp: '+18.4°C (Ambient Hold)',
      humidity: '58% RH',
      shock: '0.14 G (Nominal <0.5G)',
      seal: 'VERIFIED ELECTRONIC (ISO 17712)',
      speed: '19.8 kts',
      coordinates: '05°42\'N, 095°18\'E',
    },
    events: [
      { time: '24 Sep · 11:30 UTC', event: 'Underway in Andaman corridor approaching Malacca Strait TSS', location: 'Andaman Sea · AIS Stream Active', completed: true },
      { time: '21 Sep · 06:15 UTC', event: 'Transit confirmed past Cape of Good Hope nautical corridor', location: 'South Atlantic Maritime Route', completed: true },
      { time: '15 Sep · 19:40 UTC', event: 'Equatorial crossing logged; all sensor readings nominal', location: 'Atlantic Ocean (00°00\'N, 15°30\'W)', completed: true },
      { time: '06 Sep · 14:00 UTC', event: 'Vessel departed Rotterdam Gateway Berth 4 after pilot disembarkation', location: 'Port of Rotterdam (NLRTM), Netherlands', completed: true },
      { time: '05 Sep · 18:20 UTC', event: 'Pre-lodged export customs clearance finalized; container sealed', location: 'Rotterdam Customs Authority', completed: true },
    ],
  },
  'MR-6190': {
    id: 'MR-6190',
    origin: 'Shanghai Yangshan Port (CNSHA), China',
    destination: 'Port of Los Angeles (USLAX), United States',
    mode: 'Trans-Pacific Ocean Liner — 40ft Standard (FCL)',
    carrier: 'MV Pacific Voyager (IMO 9718420)',
    container: 'MRDU 619033-1 · 40ST',
    cargo: 'Renewable Power Electronics',
    status: 'Berth Arrival',
    statusClass: 'status-cleared',
    progress: 96,
    currentLocation: 'Port of Los Angeles (Berth 100)',
    eta: '24 Sep · 18:00 PDT',
    telemetry: {
      temp: '+21.0°C (Ambient Dry)',
      humidity: '48% RH',
      shock: '0.08 G (Berthed)',
      seal: 'C-TPAT COMPLIANT HIGH-SECURITY',
      speed: '0.0 kts (Berthed alongside)',
      coordinates: '33°44\'N, 118°16\'W',
    },
    events: [
      { time: '24 Sep · 06:00 PDT', event: 'Vessel secured alongside Berth 100; gantry discharge initiated', location: 'Port of Los Angeles Terminal', completed: true },
      { time: '23 Sep · 21:30 PDT', event: 'US Customs Border Protection (CBP) pre-clearance granted', location: 'Los Angeles Automated Commercial System', completed: true },
      { time: '22 Sep · 18:00 PDT', event: 'Arrived at San Pedro Bay pilot boarding area', location: 'Southern California Vessel Traffic Service', completed: true },
      { time: '12 Sep · 04:00 CST', event: 'Departed Shanghai Yangshan Deep-Water Port', location: 'Shanghai Port Control, China', completed: true },
      { time: '10 Sep · 14:00 CST', event: 'Cargo consolidated and loaded aboard vessel', location: 'Yangshan Terminal Berth 2', completed: true },
    ],
  },
  'MR-3044': {
    id: 'MR-3044',
    origin: 'Frankfurt Airport (DEFRA), Germany',
    destination: 'Dubai World Central (AEDXB), UAE',
    mode: 'Priority Air Freight — Main-Deck Cargo',
    carrier: 'Meridian Air Flight MA-714 (Boeing 777F)',
    container: 'RAP e2 Reefer ULD Pallet (ISO Class)',
    cargo: 'Biopharmaceutical Vaccines (+4°C Strict Cold-Chain)',
    status: 'Cleared & Staged',
    statusClass: 'status-arrived',
    progress: 100,
    currentLocation: 'DWC Cargo Terminal · Cold Store 1',
    eta: 'Delivered to Vault',
    telemetry: {
      temp: '+4.2°C (Set Point +2°C to +8°C)',
      humidity: '45% RH (Monitored)',
      shock: '0.04 G (Air-Ride Tarmac Spec)',
      seal: 'TAMPER AUDIT OK · GDP VERIFIED',
      speed: 'Static Storage',
      coordinates: '24°53\'N, 55°10\'E',
    },
    events: [
      { time: '24 Sep · 10:15 GST', event: 'Transferred to DWC GDP-certified climate-controlled storage', location: 'Dubai World Central Free Zone', completed: true },
      { time: '24 Sep · 08:45 GST', event: 'UAE Customs import declaration finalized and approved', location: 'Dubai Customs Air Logistics Desk', completed: true },
      { time: '24 Sep · 06:20 GST', event: 'Flight MA-714 landed safely; ramp temperature check passed', location: 'DWC Runway 12R', completed: true },
      { time: '23 Sep · 23:50 CEST', event: 'Departed Frankfurt Airport air cargo gate', location: 'Frankfurt CargoCity South', completed: true },
      { time: '23 Sep · 18:00 CEST', event: 'Pharmaceutical cool-chain intake and sensor calibration complete', location: 'Frankfurt GDP Inspection Center', completed: true },
    ],
  },
};

export function Tracking() {
  const [searchInput, setSearchInput] = useState('MR-8402');
  const [activeId, setActiveId] = useState<string>('MR-8402');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { ref, inView } = useInView();

  const handleSearch = (idToSearch: string) => {
    const cleanId = idToSearch.trim().toUpperCase();
    if (demoShipments[cleanId]) {
      setActiveId(cleanId);
      setErrorMsg(null);
    } else {
      setErrorMsg(
        `Consignment "${cleanId}" not found in current operational batch. Try demonstration IDs: MR-8402, MR-6190, or MR-3044.`
      );
    }
  };

  const shipment = demoShipments[activeId] || demoShipments['MR-8402'];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="tracking"
      className="py-24 lg:py-32 section-light border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div
              className={`label-caps mb-4 flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Consignment Telemetry Workbench</span>
            </div>
            <h2
              className={`heading-xl text-[var(--text-primary)] ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Continuous visibility. Real telemetry.
            </h2>
          </div>
          <p
            className={`text-base text-[var(--text-secondary)] max-w-[480px] leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
          >
            Direct access to milestone event logs, marine AIS positioning, climate sensor readings, and customs clearance timestamps for active international consignments.
          </p>
        </div>

        {/* Tracking Console Search Bar */}
        <div
          className={`mb-8 p-4 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-sm shadow-sm ${inView ? 'anim-fade-up delay-250' : 'opacity-0'}`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchInput);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--text-muted)] shrink-0">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Consignment ID (e.g. MR-8402, MR-6190, MR-3044)"
                className="w-full bg-transparent text-sm font-mono-data text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none"
                aria-label="Shipment Tracking Number"
              />
            </div>
            <button
              type="submit"
              className="btn-primary text-xs font-semibold py-3 px-6 cursor-pointer"
            >
              Query Telemetry
              <svg className="btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>

          {/* Quick-Select Demo Consignments */}
          <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2 text-xs">
            <span className="font-mono-data text-[var(--text-muted)] text-[11px]">ACTIVE DEMO CARGO:</span>
            {Object.keys(demoShipments).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setSearchInput(id);
                  handleSearch(id);
                }}
                className={`px-2.5 py-1 rounded text-xs font-mono-data font-semibold transition-colors cursor-pointer ${
                  activeId === id
                    ? 'bg-[var(--brand-orange)] text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {id}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono-data rounded-sm">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Live Consignment Dossier (Two Columns) */}
        <div
          className={`grid lg:grid-cols-12 gap-8 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
        >
          {/* Left Column: Shipment Specs & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-sm shadow-sm space-y-6">
              {/* Header with Reference, ISO Container, and Status */}
              <div className="pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center justify-between mb-1">
                  <div className="label-caps text-[var(--text-muted)] text-[10px]">CONSIGNMENT REFERENCE</div>
                  <span className={`status-chip ${shipment.statusClass}`}>
                    {shipment.status}
                  </span>
                </div>
                <div className="text-2xl font-extrabold font-mono-data text-[var(--text-primary)] tracking-tight">
                  {shipment.id}
                </div>
                <div className="font-mono-data text-xs text-[var(--brand-blue)] font-semibold mt-1">
                  UNIT: {shipment.container}
                </div>
              </div>

              {/* Lane Info */}
              <div className="space-y-3 font-mono-data text-xs">
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase font-bold tracking-wider mb-0.5">ORIGIN DISPATCH GATEWAY</span>
                  <span className="font-bold text-[var(--text-primary)] text-sm">{shipment.origin}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase font-bold tracking-wider mb-0.5">DESTINATION TERMINAL</span>
                  <span className="font-bold text-[var(--text-primary)] text-sm">{shipment.destination}</span>
                </div>
              </div>

              {/* Prominent ETA Banner */}
              <div className="p-3 bg-[var(--bg-secondary)] border-l-2 border-[var(--brand-orange)] rounded-sm flex items-center justify-between font-mono-data text-xs">
                <span className="text-[var(--text-secondary)] font-semibold">SCHEDULED ARRIVAL (ETA):</span>
                <span className="text-sm font-bold text-[var(--brand-orange)]">{shipment.eta}</span>
              </div>

              {/* Progress Bar */}
              <div className="pt-1">
                <div className="flex justify-between items-center text-xs font-mono-data mb-2">
                  <span className="text-[var(--text-muted)]">CORRIDOR TRANSIT</span>
                  <span className="font-extrabold text-[var(--brand-orange)]">{shipment.progress}% COMPLETE</span>
                </div>
                <div className="h-2 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--brand-orange)] rounded-full transition-all duration-700"
                    style={{ width: `${shipment.progress}%` }}
                  />
                </div>
              </div>

              {/* Equipment & Telemetry Specs */}
              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2 font-mono-data text-xs">
                <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">SERVICE MODE</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.mode}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">CARRIER / CRAFT</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.carrier}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">CARGO CLASS</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.cargo}</span>
                </div>
              </div>

              {/* Environmental Telemetry Grid */}
              <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-sm font-mono-data text-[11px] space-y-2">
                <div className="label-caps text-[var(--text-muted)] mb-2 flex items-center justify-between">
                  <span>Active Sensor Telemetry</span>
                  <span className="text-emerald-500 font-bold">LIVE TELEMETRY STREAM</span>
                </div>
                {shipment.telemetry.temp && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>TEMP SENSOR:</span>
                    <span>{shipment.telemetry.temp}</span>
                  </div>
                )}
                {shipment.telemetry.humidity && (
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>RELATIVE HUMIDITY:</span>
                    <span className="font-semibold text-[var(--text-primary)]">{shipment.telemetry.humidity}</span>
                  </div>
                )}
                {shipment.telemetry.shock && (
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>IMPACT / SHOCK:</span>
                    <span className="font-semibold text-[var(--text-primary)]">{shipment.telemetry.shock}</span>
                  </div>
                )}
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>DIGITAL SEAL:</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.telemetry.seal}</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>GPS / AIS COORDS:</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.telemetry.coordinates}</span>
                </div>
                <div className="flex justify-between text-[var(--text-secondary)]">
                  <span>GROUND SPEED:</span>
                  <span className="font-semibold text-[var(--text-primary)]">{shipment.telemetry.speed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Audit Event Trail (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-sm shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="label-caps text-[var(--text-primary)] text-xs">Milestone Audit Log</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="font-mono-data text-xs text-[var(--text-muted)]">
                    {shipment.events.length} Verified Checkpoints
                  </span>
                </div>

                {/* Timeline Step Items */}
                <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-0.5 before:bg-[var(--border-subtle)]">
                  {shipment.events.map((ev, i) => (
                    <div key={i} className="flex gap-4 relative">
                      {/* Checkpoint Node */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 font-mono-data text-xs font-bold ${
                          i === 0
                            ? 'bg-[var(--brand-orange)] text-white shadow-sm'
                            : 'bg-[var(--bg-secondary)] border border-[var(--border-strong)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {i === 0 ? '✓' : ev.completed ? '•' : '○'}
                      </div>

                      {/* Event Detail */}
                      <div className="flex-1 pt-0.5 pb-2 border-b border-[var(--border-subtle)]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span
                            className={`text-sm font-bold tracking-tight ${
                              i === 0 ? 'text-[var(--brand-orange)]' : 'text-[var(--text-primary)]'
                            }`}
                          >
                            {ev.event}
                          </span>
                          <span className="font-mono-data text-[11px] text-[var(--text-muted)] shrink-0">
                            {ev.time}
                          </span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] font-mono-data flex items-center gap-1.5">
                          <span>LOCATION:</span>
                          <span className="font-semibold text-[var(--text-primary)]">{ev.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Broker Contact & Dispatch Assurance */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4 font-mono-data text-xs">
                <div className="text-[var(--text-muted)]">
                  DISPATCH DESK: <strong className="text-[var(--text-primary)]">Meridian Central Operations (24/7)</strong>
                </div>
                <a
                  href="#quote"
                  className="text-[var(--brand-orange)] font-bold hover:underline inline-flex items-center gap-1"
                >
                  Book Outbound Return Leg →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
