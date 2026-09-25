import { useState } from 'react';
import { useInView } from './hooks';

const events = [
  { time: '22 Sep · 16:42', event: 'Vessel departed Port Klang — Final leg to berth', location: 'Port Klang, Malaysia', icon: '🚢', done: false },
  { time: '21 Sep · 09:15', event: 'Import customs clearance approved', location: 'Port Klang, Malaysia', icon: '✓', done: true },
  { time: '20 Sep · 23:00', event: 'Vessel arrived at Port Klang anchorage', location: 'Strait of Malacca', icon: '⚓', done: true },
  { time: '17 Sep · 06:45', event: 'Container loaded, vessel departed Jeddah', location: 'Jeddah Port, KSA', icon: '✓', done: true },
  { time: '16 Sep · 14:00', event: 'Export clearance completed — Docs approved', location: 'Jeddah, Saudi Arabia', icon: '✓', done: true },
  { time: '15 Sep · 11:15', event: 'Cargo picked up from shipper warehouse', location: 'Jeddah, Saudi Arabia', icon: '✓', done: true },
];

export function Tracking() {
  const [trackingId, setTrackingId] = useState('AF-2841');
  const [searched, setSearched] = useState(true);
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="tracking"
      className="section-light py-28 lg:py-36"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-[560px]">
          <div
            className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            style={{ color: 'var(--brand-orange)' }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
            Real-Time Visibility
          </div>
          <h2
            className={`heading-xl mb-5 ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            style={{ color: 'var(--text-primary)' }}
          >
            Know where your
            <br />
            cargo is. At every stage.
          </h2>
          <p
            className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Live shipment tracking with stage-by-stage event logs, real-time vessel position, and predictive ETA — all in one view.
          </p>
        </div>

        {/* Search bar */}
        <div
          className={`mb-10 flex flex-wrap gap-3 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
        >
          <div
            className="flex items-center flex-1 min-w-[280px] rounded-md px-4 gap-3"
            style={{
              border: '1.5px solid var(--border-strong)',
              backgroundColor: 'var(--surface)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter shipment ID or container number"
              className="flex-1 py-3 text-sm bg-transparent outline-none"
              style={{ color: 'var(--text-primary)' }}
            />
          </div>
          <button
            className="btn-primary"
            onClick={() => setSearched(true)}
          >
            Track Shipment
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Tracking result */}
        {searched && (
          <div
            className={`grid lg:grid-cols-3 gap-6 ${inView ? 'anim-fade-up delay-400' : 'opacity-0'}`}
          >
            {/* Left: shipment details */}
            <div
              className="lg:col-span-1 rounded-sm p-6 space-y-4"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-subtle)' }}
            >
              <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div className="label-caps mb-1" style={{ color: 'var(--text-muted)' }}>Shipment ID</div>
                  <div className="text-xl font-800" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>AF-2841</div>
                </div>
                <span className="status-chip status-transit">In Transit</span>
              </div>

              {[
                { label: 'Origin', value: 'Jeddah, Saudi Arabia' },
                { label: 'Destination', value: 'Kuala Lumpur, Malaysia' },
                { label: 'Current Location', value: 'Port Klang, Malaysia' },
                { label: 'ETA', value: '24 Sep · 14:20 MYT' },
                { label: 'Container', value: 'MSCU 284125' },
                { label: 'Mode', value: 'Ocean Freight — FCL 20FT' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <div className="label-caps" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                  <div className="text-sm font-600" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                </div>
              ))}

              {/* Progress bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="label-caps" style={{ color: 'var(--text-muted)' }}>Journey Progress</span>
                  <span className="text-xs font-700" style={{ color: 'var(--brand-orange)' }}>67%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div
                    className="h-full rounded-full progress-fill"
                    style={{ width: '67%', backgroundColor: 'var(--brand-orange)' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: events */}
            <div
              className="lg:col-span-2 rounded-sm overflow-hidden"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-subtle)' }}
            >
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <div className="text-sm font-700" style={{ color: 'var(--text-primary)' }}>Event Log</div>
                <div className="label-caps" style={{ color: 'var(--text-muted)' }}>Jeddah → Kuala Lumpur</div>
              </div>

              <div className="divide-y" style={{ borderColor: 'var(--border-subtle)' }}>
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className="flex gap-4 px-6 py-4"
                    style={{ backgroundColor: i === 0 ? 'rgba(255,90,31,0.04)' : 'transparent' }}
                  >
                    {/* Icon */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5"
                      style={{
                        backgroundColor: i === 0 ? 'rgba(255,90,31,0.15)' : 'var(--bg-secondary)',
                        color: i === 0 ? 'var(--brand-orange)' : 'var(--text-muted)',
                      }}
                    >
                      {ev.done ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-orange)' }}/>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-600 mb-0.5"
                        style={{ color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      >
                        {ev.event}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {ev.location}
                      </div>
                    </div>
                    <div className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                      {ev.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
