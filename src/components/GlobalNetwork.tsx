import { useState } from 'react';
import { useInView } from './hooks';

const hubs = [
  { id: 'jed', label: 'Jeddah', country: 'Saudi Arabia', cx: 560, cy: 215, modes: 'Ocean · Air · Road', routes: 9 },
  { id: 'dxb', label: 'Dubai', country: 'UAE', cx: 600, cy: 202, modes: 'Ocean · Air · Road', routes: 12 },
  { id: 'kul', label: 'Kuala Lumpur', country: 'Malaysia', cx: 726, cy: 286, modes: 'Air · Road', routes: 7 },
  { id: 'sin', label: 'Singapore', country: 'Singapore', cx: 730, cy: 300, modes: 'Ocean · Air', routes: 11 },
  { id: 'jkt', label: 'Jakarta', country: 'Indonesia', cx: 736, cy: 316, modes: 'Ocean · Road', routes: 5 },
  { id: 'sha', label: 'Shanghai', country: 'China', cx: 805, cy: 180, modes: 'Ocean · Air · Road', routes: 14 },
  { id: 'rtm', label: 'Rotterdam', country: 'Netherlands', cx: 476, cy: 130, modes: 'Ocean · Road', routes: 10 },
];

const connections = [
  { from: 'rtm', to: 'jed', active: false },
  { from: 'rtm', to: 'sha', active: false },
  { from: 'jed', to: 'dxb', active: false },
  { from: 'dxb', to: 'sin', active: false },
  { from: 'dxb', to: 'sha', active: false },
  { from: 'sha', to: 'sin', active: false },
  { from: 'sin', to: 'kul', active: false },
  { from: 'sin', to: 'jkt', active: false },
];

function getHub(id: string) {
  return hubs.find((h) => h.id === id)!;
}

function routeBetween(a: { cx: number; cy: number }, b: { cx: number; cy: number }) {
  const mx = (a.cx + b.cx) / 2;
  const my = Math.min(a.cy, b.cy) - 60;
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`;
}

export function GlobalNetwork() {
  const [selectedHub, setSelectedHub] = useState<string | null>(null);
  const { ref, inView } = useInView();

  const selectedHubData = selectedHub ? hubs.find((h) => h.id === selectedHub) : null;

  const activeConnections = selectedHub
    ? connections.filter((c) => c.from === selectedHub || c.to === selectedHub)
    : connections;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#071A2B' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-[560px]">
          <div
            className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            style={{ color: 'var(--brand-orange)' }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
            Global Network
          </div>
          <h2
            className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            style={{ color: '#F3F4F2' }}
          >
            A network built
            <br />
            around your cargo.
          </h2>
          <p
            className={`mt-5 text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'rgba(243,244,242,0.55)' }}
          >
            Select a hub to explore active routes and capabilities.
          </p>
        </div>

        {/* Map area */}
        <div
          className={`relative rounded-sm overflow-hidden ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
          style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#0E141A' }}
        >
          <svg
            viewBox="0 0 1000 460"
            className="w-full"
            style={{ height: 'clamp(300px, 45vw, 460px)' }}
          >
            {/* Simplified continent paths */}
            <g fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5">
              {/* Europe */}
              <path d="M 450 105 L 480 95 L 520 98 L 545 112 L 548 135 L 525 155 L 500 158 L 472 145 L 455 128 Z"/>
              {/* Scandinavian peninsula */}
              <path d="M 480 95 L 495 70 L 510 65 L 515 85 L 505 105 L 490 110 Z"/>
              {/* British Isles */}
              <ellipse cx="452" cy="108" rx="12" ry="16"/>
              {/* Africa */}
              <path d="M 450 165 L 555 160 L 565 195 L 558 280 L 535 355 L 510 385 L 485 370 L 465 320 L 448 255 L 445 200 Z"/>
              {/* Arabian Peninsula */}
              <path d="M 548 160 L 620 155 L 630 185 L 615 215 L 580 220 L 555 200 Z"/>
              {/* Middle East */}
              <path d="M 545 130 L 620 130 L 625 158 L 550 162 Z"/>
              {/* South Asia */}
              <path d="M 640 150 L 720 140 L 740 170 L 735 230 L 700 260 L 660 250 L 638 210 Z"/>
              {/* Indian subcontinent */}
              <path d="M 660 250 L 700 260 L 695 295 L 680 310 L 660 280 Z"/>
              {/* SE Asia mainland */}
              <path d="M 720 200 L 760 190 L 770 240 L 750 270 L 720 265 L 708 230 Z"/>
              {/* SE Asia peninsula */}
              <path d="M 710 268 L 735 260 L 738 295 L 725 305 L 710 295 Z"/>
              {/* East Asia */}
              <path d="M 760 120 L 860 110 L 885 165 L 870 220 L 840 245 L 790 250 L 755 210 L 750 165 Z"/>
              {/* Japan */}
              <ellipse cx="870" cy="155" rx="18" ry="38" transform="rotate(-20 870 155)"/>
              {/* North America */}
              <path d="M 65 80 L 200 70 L 245 110 L 255 180 L 235 265 L 200 295 L 165 285 L 110 250 L 72 200 L 55 140 Z"/>
              {/* Central America */}
              <path d="M 200 295 L 235 268 L 220 315 L 195 320 Z"/>
              {/* South America */}
              <path d="M 155 325 L 225 300 L 240 360 L 230 425 L 205 448 L 172 440 L 148 395 L 140 355 Z"/>
              {/* Greenland */}
              <ellipse cx="330" cy="60" rx="55" ry="32"/>
              {/* Australia */}
              <path d="M 755 330 L 870 322 L 888 385 L 858 430 L 800 440 L 750 415 L 740 375 Z"/>
              {/* New Zealand */}
              <ellipse cx="912" cy="390" rx="12" ry="28" transform="rotate(10 912 390)"/>
            </g>

            {/* Ocean dots subtle texture */}
            {Array.from({ length: 20 }).map((_, i) => (
              <circle key={i} cx={100 + i * 40} cy={380} r="1" fill="rgba(255,255,255,0.03)"/>
            ))}

            {/* Route lines */}
            {activeConnections.map((conn) => {
              const a = getHub(conn.from);
              const b = getHub(conn.to);
              const isHighlighted = selectedHub &&
                (conn.from === selectedHub || conn.to === selectedHub);
              return (
                <path
                  key={`${conn.from}-${conn.to}`}
                  d={routeBetween(a, b)}
                  fill="none"
                  stroke={isHighlighted ? '#FF5A1F' : 'rgba(74,155,232,0.35)'}
                  strokeWidth={isHighlighted ? '1.5' : '1'}
                  strokeDasharray={inView ? '0' : '2000'}
                  strokeLinecap="round"
                  className={inView ? 'anim-draw' : ''}
                  style={{ animationDelay: '0.5s' }}
                />
              );
            })}

            {/* Hub nodes */}
            {hubs.map((hub) => {
              const isActive = selectedHub === hub.id;
              const isConnected = selectedHub
                ? connections.some(
                    (c) =>
                      (c.from === selectedHub && c.to === hub.id) ||
                      (c.to === selectedHub && c.from === hub.id)
                  )
                : false;

              return (
                <g
                  key={hub.id}
                  className="hub-dot"
                  onClick={() => setSelectedHub(selectedHub === hub.id ? null : hub.id)}
                >
                  {/* Pulse ring for active */}
                  {isActive && (
                    <circle
                      cx={hub.cx} cy={hub.cy} r="14"
                      fill="none"
                      stroke="rgba(255,90,31,0.4)"
                      strokeWidth="1"
                      style={{ animation: 'pulse-ring 2s ease-out infinite' }}
                    />
                  )}
                  {/* Outer ring */}
                  <circle
                    cx={hub.cx} cy={hub.cy} r="7"
                    fill={isActive ? 'rgba(255,90,31,0.2)' : isConnected ? 'rgba(74,155,232,0.15)' : 'rgba(255,255,255,0.06)'}
                    stroke={isActive ? '#FF5A1F' : isConnected ? '#4A9BE8' : 'rgba(255,255,255,0.3)'}
                    strokeWidth="1"
                  />
                  {/* Inner dot */}
                  <circle
                    cx={hub.cx} cy={hub.cy} r="3.5"
                    fill={isActive ? '#FF5A1F' : isConnected ? '#4A9BE8' : 'rgba(255,255,255,0.6)'}
                  />
                  {/* Label */}
                  <text
                    x={hub.cx}
                    y={hub.cy - 13}
                    textAnchor="middle"
                    fill={isActive ? '#FF5A1F' : 'rgba(243,244,242,0.70)'}
                    fontSize="9"
                    fontFamily="Manrope, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.04em"
                  >
                    {hub.label.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hub info panel */}
          {selectedHubData && (
            <div
              className="absolute bottom-4 left-4 rounded-lg p-5 min-w-[220px]"
              style={{
                backgroundColor: 'rgba(9,13,17,0.92)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div className="label-caps mb-3" style={{ color: 'rgba(243,244,242,0.45)' }}>
                Hub Profile
              </div>
              <div className="text-xl font-700 mb-0.5" style={{ color: '#F3F4F2', letterSpacing: '-0.02em' }}>
                {selectedHubData.label}
              </div>
              <div className="text-xs mb-3" style={{ color: 'rgba(243,244,242,0.5)' }}>
                {selectedHubData.country}
              </div>
              <div className="space-y-2" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '0.75rem' }}>
                <div className="flex justify-between text-xs">
                  <span style={{ color: 'rgba(243,244,242,0.5)' }}>Modes</span>
                  <span style={{ color: '#F3F4F2', fontWeight: 600 }}>{selectedHubData.modes}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span style={{ color: 'rgba(243,244,242,0.5)' }}>Active Routes</span>
                  <span style={{ color: 'var(--brand-orange)', fontWeight: 700 }}>{selectedHubData.routes}</span>
                </div>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-px" style={{ backgroundColor: 'rgba(74,155,232,0.6)' }}/>
              <span className="text-xs" style={{ color: 'rgba(243,244,242,0.40)' }}>Route</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-px" style={{ backgroundColor: '#FF5A1F' }}/>
              <span className="text-xs" style={{ color: 'rgba(243,244,242,0.40)' }}>Active</span>
            </div>
          </div>
        </div>

        {/* Hub grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {hubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => setSelectedHub(selectedHub === hub.id ? null : hub.id)}
              className="flex flex-col p-4 text-left transition-colors duration-200"
              style={{
                backgroundColor: selectedHub === hub.id ? 'rgba(255,90,31,0.10)' : '#0E141A',
              }}
            >
              <div
                className="label-caps mb-1"
                style={{ color: selectedHub === hub.id ? 'var(--brand-orange)' : 'rgba(243,244,242,0.35)' }}
              >
                {hub.id.toUpperCase()}
              </div>
              <div
                className="text-sm font-600"
                style={{ color: selectedHub === hub.id ? '#F3F4F2' : 'rgba(243,244,242,0.70)' }}
              >
                {hub.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
