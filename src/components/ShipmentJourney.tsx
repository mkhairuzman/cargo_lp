import { useState, useEffect, useRef } from 'react';
import { useInView } from './hooks';

const stages = [
  {
    num: '01',
    name: 'Booking',
    status: 'completed',
    description: 'Shipment confirmed and assigned to our European coordination team. Documents collected and pre-clearance initiated.',
    time: '14 Sep · 09:30',
    location: 'Rotterdam, Netherlands',
  },
  {
    num: '02',
    name: 'Pickup',
    status: 'completed',
    description: 'Cargo collected from shipper facility. Container sealed and verified against packing list. Weight confirmed.',
    time: '15 Sep · 11:15',
    location: 'Port of Rotterdam, NL',
  },
  {
    num: '03',
    name: 'Export Clearance',
    status: 'completed',
    description: 'Export declaration approved. Customs clearance completed. Vessel booking confirmed for container MRDU-940218.',
    time: '16 Sep · 14:00',
    location: 'Rotterdam Gateway Berth 4',
  },
  {
    num: '04',
    name: 'International Transit',
    status: 'active',
    description: 'Container loaded aboard MV Meridian Arrow. Vessel en route via Bay of Biscay. AIS tracking active.',
    time: '17 Sep · 06:45',
    location: 'Bay of Biscay — In Transit',
  },
  {
    num: '05',
    name: 'Import Clearance',
    status: 'pending',
    description: 'Documents pre-lodged with Singapore Customs. Clearance processing completed prior to arrival.',
    time: 'Est. 27 Sep · 08:00',
    location: 'Pasir Panjang, Singapore',
  },
  {
    num: '06',
    name: 'Final Delivery',
    status: 'pending',
    description: 'Last-mile transport arranged. Delivery appointment confirmed with consignee at Jurong logistics hub.',
    time: 'Est. 28 Sep · 14:20',
    location: 'Jurong Island, Singapore',
  },
];

function StepIcon({ status }: { status: string }) {
  if (status === 'completed') {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    );
  }
  if (status === 'active') {
    return <div className="w-2 h-2 rounded-full bg-white"/>;
  }
  return null;
}

export function ShipmentJourney() {
  const [activeStage, setActiveStage] = useState(3);
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-secondary py-28 lg:py-36"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div
              className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              Shipment Journey
            </div>
            <h2
              className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              From pickup
              <br />
              to final delivery.
            </h2>
          </div>
          <div>
            <p
              className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
              style={{ color: 'var(--text-secondary)' }}
            >
              Every shipment follows a documented, coordinated journey. Each stage is tracked, verified and communicated — so nothing moves without visibility.
            </p>
            <div
              className={`mt-4 flex items-center gap-6 ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
            >
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--brand-orange)' }}/>
                Completed
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: 'var(--brand-orange)', backgroundColor: 'transparent' }}/>
                Active
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: 'var(--border-strong)', backgroundColor: 'transparent' }}/>
                Upcoming
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className={`hidden lg:block ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}>
          {/* Progress track */}
          <div className="relative flex items-center mb-8">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px" style={{ backgroundColor: 'var(--border-strong)' }}/>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-700"
              style={{
                backgroundColor: 'var(--brand-orange)',
                width: `${((activeStage) / (stages.length - 1)) * 100}%`,
              }}
            />
            <div className="relative z-10 flex justify-between w-full">
              {stages.map((stage, i) => {
                const isCompleted = stage.status === 'completed';
                const isActive = stage.status === 'active';
                return (
                  <button
                    key={stage.num}
                    onClick={() => setActiveStage(i)}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                      style={{
                        backgroundColor: isCompleted || isActive ? 'var(--brand-orange)' : 'var(--bg-secondary)',
                        borderColor: isCompleted || isActive ? 'var(--brand-orange)' : 'var(--border-strong)',
                        boxShadow: isActive ? '0 0 0 4px rgba(255,90,31,0.2)' : 'none',
                      }}
                    >
                      <StepIcon status={stage.status}/>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage labels */}
          <div className="flex justify-between mb-10">
            {stages.map((stage, i) => (
              <div
                key={stage.num}
                className="flex flex-col items-center text-center cursor-pointer w-32"
                onClick={() => setActiveStage(i)}
              >
                <div
                  className="label-caps mb-1 transition-colors duration-200"
                  style={{ color: i === activeStage ? 'var(--brand-orange)' : 'var(--text-muted)' }}
                >
                  {stage.num}
                </div>
                <div
                  className="text-xs font-600 transition-colors duration-200"
                  style={{ color: i <= activeStage ? 'var(--text-primary)' : 'var(--text-muted)' }}
                >
                  {stage.name}
                </div>
              </div>
            ))}
          </div>

          {/* Active stage detail */}
          <div
            className="rounded-sm p-8 transition-all duration-400"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-subtle)' }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-700"
                    style={{ backgroundColor: 'var(--brand-orange)' }}
                  >
                    {stages[activeStage].num}
                  </div>
                  <h3 className="heading-md" style={{ color: 'var(--text-primary)' }}>
                    {stages[activeStage].name}
                  </h3>
                  {stages[activeStage].status === 'active' && (
                    <span className="status-chip status-transit">Active</span>
                  )}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {stages[activeStage].description}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="label-caps mb-1" style={{ color: 'var(--text-muted)' }}>Timestamp</div>
                  <div className="text-sm font-600" style={{ color: 'var(--text-primary)' }}>
                    {stages[activeStage].time}
                  </div>
                </div>
                <div>
                  <div className="label-caps mb-1" style={{ color: 'var(--text-muted)' }}>Location</div>
                  <div className="text-sm font-600" style={{ color: 'var(--text-primary)' }}>
                    {stages[activeStage].location}
                  </div>
                </div>
                <div>
                  <div className="label-caps mb-1" style={{ color: 'var(--text-muted)' }}>Shipment</div>
                  <div className="text-sm font-600" style={{ color: 'var(--text-primary)' }}>AF-2841</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-0">
          {stages.map((stage, i) => {
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';
            const isPending = stage.status === 'pending';
            return (
              <div key={stage.num} className="flex gap-4">
                {/* Left column: dot + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2"
                    style={{
                      backgroundColor: isCompleted || isActive ? 'var(--brand-orange)' : 'transparent',
                      borderColor: isCompleted || isActive ? 'var(--brand-orange)' : 'var(--border-strong)',
                    }}
                  >
                    <StepIcon status={stage.status}/>
                  </div>
                  {i < stages.length - 1 && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{
                        backgroundColor: isCompleted ? 'var(--brand-orange)' : 'var(--border-subtle)',
                        minHeight: '40px',
                      }}
                    />
                  )}
                </div>

                {/* Right column: content */}
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="label-caps" style={{ color: isCompleted || isActive ? 'var(--brand-orange)' : 'var(--text-muted)' }}>
                      {stage.num}
                    </span>
                    {isActive && <span className="status-chip status-transit">Active</span>}
                  </div>
                  <div
                    className="text-base font-700 mb-2"
                    style={{ color: isPending ? 'var(--text-muted)' : 'var(--text-primary)', letterSpacing: '-0.01em' }}
                  >
                    {stage.name}
                  </div>
                  {(isCompleted || isActive) && (
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {stage.description}
                    </p>
                  )}
                  <div className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    {stage.time} · {stage.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
