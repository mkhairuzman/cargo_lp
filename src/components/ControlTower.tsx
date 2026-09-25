import { useInView } from './hooks';

const alerts = [
  { id: 'AL-0441', type: 'DELAY', route: 'Rotterdam → Riyadh', detail: 'Port congestion — +18h delay', severity: 'warning' },
  { id: 'AL-0438', type: 'WEATHER', route: 'Shanghai → Singapore', detail: 'Storm advisory — Route rerouted', severity: 'info' },
  { id: 'AL-0435', type: 'DOCS', route: 'Dubai → Jakarta', detail: 'Missing HS code — Action required', severity: 'critical' },
];

const recentEvents = [
  { time: '16:42', event: 'AF-2841 arrived at Port Klang anchorage', type: 'arrival' },
  { time: '15:10', event: 'SA-9102 customs cleared — Rotterdam', type: 'clearance' },
  { time: '14:30', event: 'BK-7721 booking confirmed — Air freight', type: 'booking' },
  { time: '13:55', event: 'DX-3318 vessel departed Dubai Port', type: 'departure' },
  { time: '12:00', event: 'KL-8840 final delivery — Kuala Lumpur', type: 'delivery' },
];

const modeData = [
  { mode: 'Ocean', pct: 45, color: '#1976D2' },
  { mode: 'Air', pct: 30, color: '#FF5A1F' },
  { mode: 'Road', pct: 25, color: '#A3ADB6' },
];

function AlertItem({ alert }: { alert: typeof alerts[0] }) {
  const colors = {
    warning: { bg: 'rgba(255,193,7,0.10)', border: 'rgba(255,193,7,0.25)', text: '#F59E0B', dot: '#F59E0B' },
    info: { bg: 'rgba(74,155,232,0.10)', border: 'rgba(74,155,232,0.20)', text: '#4A9BE8', dot: '#4A9BE8' },
    critical: { bg: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.20)', text: '#EF4444', dot: '#EF4444' },
  };
  const c = colors[alert.severity as keyof typeof colors];

  return (
    <div
      className="flex items-start gap-3 p-3 rounded"
      style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
    >
      <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: c.dot }}/>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="label-caps" style={{ color: c.text }}>{alert.type}</span>
          <span className="text-xs" style={{ color: 'rgba(243,244,242,0.45)' }}>·</span>
          <span className="text-xs" style={{ color: 'rgba(243,244,242,0.50)' }}>{alert.id}</span>
        </div>
        <div className="text-xs font-600" style={{ color: 'rgba(243,244,242,0.85)' }}>{alert.route}</div>
        <div className="text-xs" style={{ color: 'rgba(243,244,242,0.50)' }}>{alert.detail}</div>
      </div>
    </div>
  );
}

export function ControlTower() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#071A2B' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div
              className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              Control Tower
            </div>
            <h2
              className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: '#F3F4F2' }}
            >
              One view.
              <br />
              Every movement.
            </h2>
          </div>
          <p
            className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'rgba(243,244,242,0.55)' }}
          >
            A live operational dashboard gives our teams and clients complete visibility — active shipments, route performance, critical exceptions and real-time updates.
          </p>
        </div>

        {/* Dashboard grid */}
        <div
          className={`grid lg:grid-cols-3 gap-4 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
        >
          {/* Top KPIs */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Active Shipments', value: '2,841', delta: '+12 today', color: '#F3F4F2' },
              { label: 'On-Time ETA', value: '98.7%', delta: '↑ 0.3% this week', color: '#22c55e' },
              { label: 'Critical Exceptions', value: '3', delta: 'Requires action', color: '#EF4444' },
              { label: 'Modes Active', value: '3 / 3', delta: 'Ocean · Air · Road', color: '#F3F4F2' },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-sm p-5"
                style={{ backgroundColor: '#0E141A', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="label-caps mb-2" style={{ color: 'rgba(243,244,242,0.40)' }}>{kpi.label}</div>
                <div
                  className="text-3xl font-800 mb-1"
                  style={{ color: kpi.color, letterSpacing: '-0.03em' }}
                >
                  {kpi.value}
                </div>
                <div className="text-xs" style={{ color: 'rgba(243,244,242,0.40)' }}>{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Freight mode distribution */}
          <div
            className="rounded-sm p-6"
            style={{ backgroundColor: '#0E141A', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="label-caps mb-4" style={{ color: 'rgba(243,244,242,0.40)' }}>
              Freight Mode Distribution
            </div>
            <div className="space-y-4">
              {modeData.map((m) => (
                <div key={m.mode}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-600" style={{ color: 'rgba(243,244,242,0.70)' }}>{m.mode}</span>
                    <span className="text-xs font-700" style={{ color: m.color }}>{m.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full progress-fill"
                      style={{ width: `${m.pct}%`, backgroundColor: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="label-caps mb-2" style={{ color: 'rgba(243,244,242,0.40)' }}>Total Cargo Volume</div>
              <div className="text-2xl font-800" style={{ color: '#F3F4F2', letterSpacing: '-0.03em' }}>84,200 TEU</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(243,244,242,0.35)' }}>Year to date</div>
            </div>
          </div>

          {/* Critical alerts */}
          <div
            className="rounded-sm p-6"
            style={{ backgroundColor: '#0E141A', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="label-caps" style={{ color: 'rgba(243,244,242,0.40)' }}>
                Active Alerts
              </div>
              <span
                className="text-xs font-700 px-2 py-0.5 rounded"
                style={{ backgroundColor: 'rgba(239,68,68,0.15)', color: '#EF4444' }}
              >
                3 open
              </span>
            </div>
            <div className="space-y-3">
              {alerts.map((a) => <AlertItem key={a.id} alert={a} />)}
            </div>
          </div>

          {/* Recent events */}
          <div
            className="rounded-sm p-6"
            style={{ backgroundColor: '#0E141A', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="label-caps mb-4" style={{ color: 'rgba(243,244,242,0.40)' }}>
              Recent Events
            </div>
            <div className="space-y-0">
              {recentEvents.map((ev, i) => (
                <div
                  key={i}
                  className="flex gap-3 py-3"
                  style={{ borderBottom: i < recentEvents.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <div className="text-xs w-10 shrink-0" style={{ color: 'rgba(243,244,242,0.35)' }}>{ev.time}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(243,244,242,0.65)' }}>{ev.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
