import { useState } from 'react';
import { useInView } from './hooks';

interface Hub {
  id: string;
  code: string;
  locode: string;
  name: string;
  country: string;
  type: 'Ocean' | 'Air' | 'Multimodal';
  role: string;
  modes: string[];
  cx: number;
  cy: number;
  labelDx: number;
  labelDy: number;
  description: string;
  metrics: {
    transitExample: string;
    weeklyFrequency: string;
    carrierCapacity: string;
    clearanceSpeed: string;
  };
}

const hubs: Hub[] = [
  {
    id: 'rtm',
    code: 'RTM',
    locode: 'NLRTM',
    name: 'Rotterdam',
    country: 'Netherlands',
    type: 'Ocean',
    role: 'European Deep-Water Maritime Superhub',
    modes: ['Ocean FCL/LCL', 'Rhine Barge Feeders', 'Inland Block Trains'],
    cx: 470,
    cy: 118,
    labelDx: -28,
    labelDy: -12,
    description: 'Europe’s primary deep-water gateway accommodating 24,000+ TEU mega-vessels with direct automated rail transfer into the European hinterland.',
    metrics: {
      transitExample: '22 - 25d to Singapore (SGSIN)',
      weeklyFrequency: '14 Fixed-Day Ocean Loops',
      carrierCapacity: 'Dedicated Deep-Sea Berths',
      clearanceSpeed: 'Sub-4h Pre-Lodged EDI',
    },
  },
  {
    id: 'fra',
    code: 'FRA',
    locode: 'DEFRA',
    name: 'Frankfurt',
    country: 'Germany',
    type: 'Air',
    role: 'Central European Air Cargo Gateway',
    modes: ['Main-Deck Freighters', 'GDP Pharma Logistics', 'European Bonded Road Feeder'],
    cx: 512,
    cy: 132,
    labelDx: 34,
    labelDy: 4,
    description: 'Premier air cargo logistics center in continental Europe with temperature-controlled cool-chain facilities for pharmaceutical and high-tech industries.',
    metrics: {
      transitExample: '18 - 24h to Dubai (AEDXB)',
      weeklyFrequency: '38 Scheduled Freighters',
      carrierCapacity: 'Boeing 777F & 747-8F',
      clearanceSpeed: 'Pre-Arrival Ramp Release',
    },
  },
  {
    id: 'sin',
    code: 'SIN',
    locode: 'SGSIN',
    name: 'Singapore',
    country: 'Singapore',
    type: 'Multimodal',
    role: 'Southeast Asia Transshipment Gateway',
    modes: ['Transshipment FCL', 'Air Cargo Hub', 'Regional Coastal Feeders'],
    cx: 752,
    cy: 262,
    labelDx: 28,
    labelDy: 14,
    description: 'Global maritime crossroads connecting Trans-Pacific, Australasia, and Asia-Europe shipping lanes with unmatched transshipment speed.',
    metrics: {
      transitExample: '4 - 5d to Shanghai (CNSHA)',
      weeklyFrequency: '28 Regional Feeder Loops',
      carrierCapacity: 'Pasir Panjang & Tuas Megaport',
      clearanceSpeed: 'Automated Port Net Interchange',
    },
  },
  {
    id: 'sha',
    code: 'SHA',
    locode: 'CNSHA',
    name: 'Shanghai',
    country: 'China',
    type: 'Ocean',
    role: 'East Asia Industrial Export Gateway',
    modes: ['Ocean Container', 'Trans-Eurasia Block Trains', 'Air Cargo Charters'],
    cx: 818,
    cy: 168,
    labelDx: 28,
    labelDy: -10,
    description: 'The world’s highest-throughput container gateway serving Yangtze River Delta precision manufacturing clusters and cross-border rail bridges.',
    metrics: {
      transitExample: '14 - 16d to Los Angeles (USLAX)',
      weeklyFrequency: '22 Direct Ocean Loops',
      carrierCapacity: 'Yangshan Deep-Water Terminal',
      clearanceSpeed: 'Single-Window Customs EDI',
    },
  },
  {
    id: 'dxb',
    code: 'DXB',
    locode: 'AEDXB',
    name: 'Dubai',
    country: 'UAE',
    type: 'Multimodal',
    role: 'Intercontinental Sea-Air Crossway',
    modes: ['Sea-Air Rapid Transfer', 'Air Cargo Charters', 'GCC Cross-Border Road'],
    cx: 602,
    cy: 182,
    labelDx: 0,
    labelDy: -14,
    description: 'Strategic tri-continental hub facilitating synchronized sea-to-air transfer within 8 hours, connecting Asian ocean freight to European air cargo.',
    metrics: {
      transitExample: '8h Sea-to-Air Modal Switch',
      weeklyFrequency: 'Daily Intercontinental Charters',
      carrierCapacity: 'DWC Free Zone Bonded Storage',
      clearanceSpeed: 'Instant Free-Zone Release',
    },
  },
  {
    id: 'lax',
    code: 'LAX',
    locode: 'USLAX',
    name: 'Los Angeles',
    country: 'United States',
    type: 'Ocean',
    role: 'Trans-Pacific Ocean & Intermodal Gateway',
    modes: ['Trans-Pacific Ocean', 'Class I Intermodal Rail', 'Domestic Drayage'],
    cx: 172,
    cy: 154,
    labelDx: -28,
    labelDy: -12,
    description: 'Western hemisphere arrival gateway connecting Asian production with US Midwest railheads via on-dock intermodal rail transfer.',
    metrics: {
      transitExample: '4 - 5d Rail to Chicago (USORD)',
      weeklyFrequency: '12 Direct Pacific Loops',
      carrierCapacity: 'Berths 100-120 On-Dock Rail',
      clearanceSpeed: 'C-TPAT Priority Clearance',
    },
  },
  {
    id: 'ord',
    code: 'ORD',
    locode: 'USORD',
    name: 'Chicago',
    country: 'United States',
    type: 'Multimodal',
    role: 'North American Central Rail Hub',
    modes: ['Class I Rail Junction', 'Transcontinental Trucking', 'Air Cargo'],
    cx: 242,
    cy: 132,
    labelDx: 28,
    labelDy: -10,
    description: 'The continent’s central rail junction orchestrating freight exchanges between eastern and western railroads with direct connectivity to North Atlantic ports.',
    metrics: {
      transitExample: '2 - 3d Rail to New York / Montreal',
      weeklyFrequency: 'Continuous Scheduled Block Trains',
      carrierCapacity: '6 Class I Railroad Hubs',
      clearanceSpeed: 'Inland Port Bonded Clearance',
    },
  },
  {
    id: 'tyo',
    code: 'TYO',
    locode: 'JPTYO',
    name: 'Tokyo',
    country: 'Japan',
    type: 'Air',
    role: 'North-East Asia Air & Ocean Terminal',
    modes: ['Trans-Pacific Air', 'Ocean Feeder Services', 'Clean-Room Logistics'],
    cx: 870,
    cy: 152,
    labelDx: 26,
    labelDy: -10,
    description: 'Specialized aerospace, semiconductor, and robotics export terminal equipped with shock-monitored tarmac handling and vibration-damped storage.',
    metrics: {
      transitExample: '10 - 12h Flight to Frankfurt',
      weeklyFrequency: '18 Dedicated Air Freighters',
      carrierCapacity: 'Narita & Haneda Cargo Facilities',
      clearanceSpeed: 'NACCS Direct Customs Interface',
    },
  },
];

const corridors = [
  { from: 'rtm', to: 'sin', name: 'Asia-Europe Maritime Trunk', mode: 'Ocean', via: 'via Suez & Bab el Mandeb' },
  { from: 'sha', to: 'rtm', name: 'Trans-Eurasia Rail Corridor', mode: 'Rail', via: 'Direct Inland Block Train' },
  { from: 'fra', to: 'dxb', name: 'Euro-Gulf Aviation Bridge', mode: 'Air', via: 'Direct Main-Deck Charter' },
  { from: 'sha', to: 'lax', name: 'Trans-Pacific Ocean Express', mode: 'Ocean', via: 'Great Circle North Pacific' },
  { from: 'lax', to: 'ord', name: 'US Inland Rail Corridor', mode: 'Rail', via: 'BNSF / Union Pacific Intermodal' },
  { from: 'ord', to: 'rtm', name: 'Trans-Atlantic Gateway Loop', mode: 'Ocean', via: 'North Atlantic Ocean Liner' },
  { from: 'dxb', to: 'sin', name: 'Indian Ocean Feeder Lane', mode: 'Ocean', via: 'Malacca Strait Feeder' },
  { from: 'sha', to: 'sin', name: 'Intra-Asia Maritime Link', mode: 'Ocean', via: 'South China Sea Corridor' },
  { from: 'tyo', to: 'lax', name: 'Pacific Air Cargo Bridge', mode: 'Air', via: 'Trans-Pacific Jet Stream' },
];

function getHub(id: string): Hub {
  return hubs.find((h) => h.id === id) || hubs[0];
}

function calculateArc(a: Hub, b: Hub): string {
  const mx = (a.cx + b.cx) / 2;
  const dist = Math.hypot(b.cx - a.cx, b.cy - a.cy);
  const my = Math.min(a.cy, b.cy) - dist * 0.16;
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`;
}

export function GlobalNetwork() {
  const [selectedHubId, setSelectedHubId] = useState<string>('rtm');
  const { ref, inView } = useInView();

  const activeHub = getHub(selectedHubId);
  const activeLanes = corridors.filter(
    (c) => c.from === selectedHubId || c.to === selectedHubId
  );

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="network"
      className="py-24 lg:py-32 section-dark relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div
              className={`label-caps mb-4 flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Trade Corridors & Port Infrastructure</span>
            </div>
            <h2
              className={`heading-xl text-white ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Global network. Sovereign gateways.
            </h2>
          </div>
          <p
            className={`text-base text-slate-300 max-w-[480px] leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
          >
            Operating across Tier-1 deep-sea berths, bonded aviation ramps, and transcontinental freight rail junctions. Select any gateway to inspect its terminal specs and connecting trade trunks.
          </p>
        </div>

        {/* Map Visualization Container */}
        <div
          className={`bg-[#0A121A] border border-white/12 rounded-sm overflow-hidden mb-8 shadow-2xl ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
        >
          {/* Top Status & Legend Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-white/10 bg-[#070D14] text-xs font-mono-data">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-orange)]" />
                <span className="text-slate-300">
                  SELECTED GATEWAY: <strong className="text-white">{activeHub.name.toUpperCase()} ({activeHub.locode})</strong>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <span>CONNECTING:</span>
                <span className="text-[var(--brand-blue)] font-bold">{activeLanes.length} TRUNK LANES</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[var(--brand-orange)]" />
                <span>Active Trunk Line</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-sky-500/40" />
                <span>Scheduled Network Route</span>
              </div>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative p-2 sm:p-4">
            <svg
              viewBox="0 0 1000 440"
              className="w-full h-auto"
              style={{ maxHeight: '520px' }}
              role="img"
              aria-label="Global freight network map and route corridors"
            >
              {/* Latitude and Longitude Graticules */}
              <g stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" strokeDasharray="3 3">
                <line x1="0" y1="110" x2="1000" y2="110" />
                <line x1="0" y1="220" x2="1000" y2="220" />
                <line x1="0" y1="330" x2="1000" y2="330" />
                <line x1="250" y1="0" x2="250" y2="440" />
                <line x1="500" y1="0" x2="500" y2="440" />
                <line x1="750" y1="0" x2="750" y2="440" />
              </g>

              {/* Refined Continental Coastline Vectors */}
              <g fill="#101B27" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8">
                {/* Europe */}
                <path d="M 435 110 L 445 92 L 485 86 L 530 92 L 558 116 L 542 144 L 512 152 L 480 148 L 448 132 L 435 110 Z" />
                {/* British Isles */}
                <path d="M 444 88 L 456 82 L 460 98 L 450 108 L 442 100 Z" />
                {/* Scandinavia */}
                <path d="M 478 84 L 508 52 L 522 62 L 514 94 Z" />
                {/* Eurasia & Asia Mainland */}
                <path d="M 530 92 L 710 74 L 848 84 L 898 132 L 878 190 L 828 228 L 782 232 L 738 212 L 678 196 L 610 158 L 558 116 Z" />
                {/* Japan Archipelago */}
                <path d="M 865 136 L 880 146 L 874 168 L 860 154 Z" />
                {/* Africa */}
                <path d="M 444 158 L 548 152 L 568 188 L 558 268 L 528 348 L 488 372 L 458 318 L 438 238 Z" />
                {/* Arabian Peninsula & Red Sea */}
                <path d="M 574 158 L 628 158 L 634 192 L 608 218 L 574 192 Z" />
                {/* Indian Subcontinent */}
                <path d="M 658 194 L 718 194 L 712 248 L 688 278 L 662 238 Z" />
                {/* Southeast Asia Mainland & Peninsula */}
                <path d="M 738 208 L 782 208 L 772 258 L 752 284 L 732 244 Z" />
                {/* Maritime Southeast Asia Islands */}
                <ellipse cx="762" cy="296" rx="34" ry="10" />
                <ellipse cx="818" cy="296" rx="22" ry="12" />
                {/* North America */}
                <path d="M 88 74 L 208 64 L 264 104 L 274 174 L 248 254 L 208 278 L 158 264 L 108 224 L 78 144 Z" />
                {/* Central & South America */}
                <path d="M 188 284 L 244 284 L 264 338 L 248 408 L 214 424 L 184 374 L 174 324 Z" />
                {/* Australia */}
                <path d="M 778 318 L 878 314 L 894 374 L 858 414 L 798 414 L 764 368 Z" />
              </g>

              {/* Inactive Scheduled Corridors (Muted background arcs) */}
              <g fill="none">
                {corridors.map((c) => {
                  const a = getHub(c.from);
                  const b = getHub(c.to);
                  const isDirect = c.from === selectedHubId || c.to === selectedHubId;
                  if (isDirect) return null;
                  return (
                    <path
                      key={`${c.from}-${c.to}-base`}
                      d={calculateArc(a, b)}
                      stroke="rgba(56, 189, 248, 0.22)"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                    />
                  );
                })}
              </g>

              {/* Active Highlighted Corridors */}
              <g fill="none">
                {activeLanes.map((c) => {
                  const a = getHub(c.from);
                  const b = getHub(c.to);
                  return (
                    <g key={`${c.from}-${c.to}-active`}>
                      {/* Glow halo */}
                      <path
                        d={calculateArc(a, b)}
                        stroke="rgba(255, 90, 31, 0.22)"
                        strokeWidth="5"
                      />
                      {/* Animated dash line */}
                      <path
                        d={calculateArc(a, b)}
                        stroke="var(--brand-orange)"
                        strokeWidth="2.2"
                        className="route-arc"
                      />
                    </g>
                  );
                })}
              </g>

              {/* Gateway Nodes (Cleanly separated coordinates & labels) */}
              {hubs.map((hub) => {
                const isSelected = hub.id === selectedHubId;
                const isConnected = activeLanes.some(
                  (l) => l.from === hub.id || l.to === hub.id
                );

                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedHubId(hub.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select ${hub.name} (${hub.locode}) gateway`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedHubId(hub.id);
                      }
                    }}
                  >
                    {/* Pulsing ring on selected node */}
                    {isSelected && (
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r="16"
                        fill="none"
                        stroke="var(--brand-orange)"
                        strokeWidth="1.5"
                        style={{ animation: 'pulse-ring 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite' }}
                      />
                    )}

                    {/* Outer concentric ring */}
                    <circle
                      cx={hub.cx}
                      cy={hub.cy}
                      r="7.5"
                      fill={
                        isSelected
                          ? 'rgba(255, 90, 31, 0.25)'
                          : isConnected
                          ? 'rgba(56, 189, 248, 0.22)'
                          : 'rgba(255, 255, 255, 0.08)'
                      }
                      stroke={
                        isSelected
                          ? 'var(--brand-orange)'
                          : isConnected
                          ? 'var(--brand-blue)'
                          : 'rgba(255, 255, 255, 0.45)'
                      }
                      strokeWidth={isSelected ? '2' : '1'}
                    />

                    {/* Inner core dot */}
                    <circle
                      cx={hub.cx}
                      cy={hub.cy}
                      r="3.5"
                      fill={isSelected ? '#FFFFFF' : isConnected ? 'var(--brand-blue)' : '#CBD5E1'}
                    />

                    {/* Dedicated Non-Colliding Label with contrast backing plate */}
                    <g transform={`translate(${hub.cx + hub.labelDx}, ${hub.cy + hub.labelDy})`}>
                      <rect
                        x="-18"
                        y="-8"
                        width="36"
                        height="14"
                        rx="2"
                        fill="rgba(7, 13, 20, 0.85)"
                        stroke={isSelected ? 'var(--brand-orange)' : 'rgba(255, 255, 255, 0.15)'}
                        strokeWidth="0.5"
                      />
                      <text
                        x="0"
                        y="2.5"
                        textAnchor="middle"
                        fill={isSelected ? 'var(--brand-orange)' : '#F1F5F9'}
                        fontSize="8.5"
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight={isSelected ? '800' : '600'}
                        letterSpacing="0.04em"
                      >
                        {hub.code}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Gateway Operational Inspector */}
          <div className="p-6 bg-[#070D14] border-t border-white/10 grid lg:grid-cols-12 gap-6 items-center">
            {/* Identity & Role (4 cols) */}
            <div className="lg:col-span-4 space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-xl font-bold text-white tracking-tight">
                  {activeHub.name} ({activeHub.locode})
                </span>
                <span className="status-chip status-transit text-[10px]">{activeHub.country}</span>
              </div>
              <div className="text-xs text-[var(--brand-blue)] font-mono-data font-semibold">
                {activeHub.role}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {activeHub.description}
              </p>
            </div>

            {/* Terminal Metrics & Modal Performance (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6 grid sm:grid-cols-2 gap-4 font-mono-data text-xs">
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                <div className="label-caps text-slate-400 text-[10px] mb-1">TRANSIT BENCHMARK</div>
                <div className="text-white font-bold">{activeHub.metrics.transitExample}</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                <div className="label-caps text-slate-400 text-[10px] mb-1">SCHEDULE FREQUENCY</div>
                <div className="text-white font-bold">{activeHub.metrics.weeklyFrequency}</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                <div className="label-caps text-slate-400 text-[10px] mb-1">TERMINAL INFRASTRUCTURE</div>
                <div className="text-white font-bold">{activeHub.metrics.carrierCapacity}</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                <div className="label-caps text-slate-400 text-[10px] mb-1">REGULATORY TURNAROUND</div>
                <div className="text-[var(--brand-orange)] font-bold">{activeHub.metrics.clearanceSpeed}</div>
              </div>
            </div>

            {/* Direct Inbound / Outbound CTAs (3 cols) */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6 flex flex-col justify-center space-y-2">
              <div className="label-caps text-slate-400 text-[10px]">Active Connected Trunks</div>
              <div className="text-2xl font-extrabold text-[var(--brand-orange)] font-mono-data">
                {activeLanes.length} Dedicated Corridors
              </div>
              <a
                href="#quote"
                className="mt-2 text-xs font-bold text-white hover:text-[var(--brand-orange)] inline-flex items-center gap-1.5 transition-colors"
              >
                Inquire Rates for {activeHub.code} →
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Gateway Selector Pill Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {hubs.map((hub) => {
            const isSelected = hub.id === selectedHubId;
            return (
              <button
                key={hub.id}
                onClick={() => setSelectedHubId(hub.id)}
                className={`p-3 text-left border rounded-sm transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--brand-orange)]/15 border-[var(--brand-orange)] text-white shadow-sm'
                    : 'bg-[#0A121A] border-white/10 hover:border-white/20 text-slate-400 hover:text-white'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-1 font-mono-data text-xs font-bold">
                  <span>{hub.code}</span>
                  <span className="text-[10px] opacity-75">{hub.type}</span>
                </div>
                <div className="text-xs truncate font-medium text-slate-300">{hub.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
