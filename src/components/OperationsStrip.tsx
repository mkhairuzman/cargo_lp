const routes = [
  { from: 'JEDDAH', to: 'KUALA LUMPUR', status: 'IN TRANSIT', statusClass: 'status-transit' },
  { from: 'SHANGHAI', to: 'JAKARTA', status: 'CUSTOMS CLEARED', statusClass: 'status-cleared' },
  { from: 'DUBAI', to: 'SINGAPORE', status: 'ARRIVING TODAY', statusClass: 'status-arrived' },
  { from: 'ROTTERDAM', to: 'RIYADH', status: 'BOOKED', statusClass: 'status-booked' },
  { from: 'SINGAPORE', to: 'ROTTERDAM', status: 'IN TRANSIT', statusClass: 'status-transit' },
  { from: 'KUALA LUMPUR', to: 'DUBAI', status: 'CUSTOMS CLEARED', statusClass: 'status-cleared' },
  { from: 'JAKARTA', to: 'JEDDAH', status: 'BOOKED', statusClass: 'status-booked' },
  { from: 'RIYADH', to: 'SHANGHAI', status: 'IN TRANSIT', statusClass: 'status-transit' },
];

function RouteItem({ route }: { route: (typeof routes)[number] }) {
  return (
    <div
      className="flex items-center gap-5 px-8 shrink-0"
      style={{ borderRight: '1px solid var(--border-subtle)' }}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-700" style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          {route.from}
        </span>
        <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="shrink-0">
          <path d="M0 5h24M19 1l5 4-5 4" stroke="var(--brand-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-700" style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          {route.to}
        </span>
      </div>
      <span className={`status-chip ${route.statusClass}`}>{route.status}</span>
    </div>
  );
}

export function OperationsStrip() {
  const doubled = [...routes, ...routes];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }}
      />

      <div className="flex ticker-track" style={{ width: 'max-content' }}>
        {doubled.map((route, i) => (
          <RouteItem key={i} route={route} />
        ))}
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }}
      />
    </div>
  );
}
