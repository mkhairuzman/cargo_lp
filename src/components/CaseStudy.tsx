import { useState } from 'react';
import { useInView } from './hooks';

const industrySectors = [
  {
    id: 'aerospace',
    name: 'Aerospace & High-Tech',
    lead: 'Zero-tolerance shock monitoring and air-ride suspended delivery for high-value turbine components and semiconductor wafers.',
    metric: '100% Shock Compliance',
    lane: 'Frankfurt (FRA) → Tokyo (TYO)',
  },
  {
    id: 'pharma',
    name: 'Life Sciences & Pharma',
    lead: 'Temperature-validated active reefer and aircraft belly-hold transport under strict WHO Good Distribution Practice (GDP) protocols.',
    metric: '+2°C to +8°C Verified',
    lane: 'Rotterdam (RTM) → Singapore (SIN)',
  },
  {
    id: 'automotive',
    name: 'Automotive & JIT',
    lead: 'Time-critical inbound component consolidation and assembly plant delivery synchronized to 4-hour production staging windows.',
    metric: 'Sub-4h Staging Window',
    lane: 'Antwerp (ANR) → Chicago (ORD)',
  },
  {
    id: 'industrial',
    name: 'Industrial & Energy',
    lead: 'Heavy-lift engineering and out-of-gauge (OOG) breakbulk shipping for offshore wind nacelles, transformers, and mining equipment.',
    metric: 'Specialized Route Surveys',
    lane: 'Shanghai (SHA) → Rotterdam (RTM)',
  },
];

export function CaseStudy() {
  const [activeSector, setActiveSector] = useState(0);
  const { ref, inView } = useInView();

  const sector = industrySectors[activeSector];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="experience"
      className="py-24 lg:py-32 section-light border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div
              className={`label-caps mb-4 flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Operational Case in Point</span>
            </div>
            <h2
              className={`heading-xl text-[var(--text-primary)] ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Mission-critical execution in practice.
            </h2>
          </div>
          <p
            className={`text-base text-[var(--text-secondary)] max-w-[480px] leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
          >
            How MERIDIAN redesigned a transcontinental manufacturing supply chain to eliminate customs dwell time and guarantee zero-downtime delivery.
          </p>
        </div>

        {/* Featured Case Study Hero Banner */}
        <div
          className={`relative rounded-sm overflow-hidden border border-[var(--border-subtle)] bg-[#07131F] text-white shadow-xl mb-16 ${inView ? 'anim-fade-up delay-250' : 'opacity-0'}`}
          style={{ minHeight: '500px' }}
        >
          {/* Background Industrial Asset */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1600&h=900&fit=crop&auto=format&q=85"
              alt="Heavy container vessel navigating international shipping lane"
              className="w-full h-full object-cover opacity-35 object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, #07131F 0%, rgba(7, 19, 31, 0.95) 45%, rgba(7, 19, 31, 0.70) 80%, rgba(7, 19, 31, 0.35) 100%)',
              }}
            />
          </div>

          {/* Dossier Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-between h-full min-h-[500px]">
            <div className="max-w-[720px]">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="status-chip status-transit">AEROVANCE INDUSTRIAL</span>
                <span className="font-mono-data text-xs text-slate-400">
                  CORRIDOR: ROTTERDAM (RTM) → SINGAPORE (SIN)
                </span>
              </div>

              <h3 className="heading-lg text-white mb-6 tracking-tight">
                "Eliminating 4 days of transit variance on the Asia-Europe maritime corridor."
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-[620px]">
                By establishing automated pre-arrival customs declarations 72 hours prior to vessel arrival and synchronizing direct berth-to-rail feeder transfers at Rotterdam and Singapore, MERIDIAN reduced end-to-end turnaround time by 34% with zero demurrage incidence across 48 consecutive ocean sailings.
              </p>

              <div className="flex items-center gap-6 font-mono-data text-xs text-slate-400">
                <span>VGM VERIFIED: YES</span>
                <span>•</span>
                <span>AUDIT TRAIL: COMPLETE</span>
                <span>•</span>
                <span>CARRIER: MERIDIAN LINER</span>
              </div>
            </div>

            {/* Performance Outcomes Grid */}
            <div className="mt-12 pt-8 border-t border-white/12 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono-data">
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-[var(--brand-orange)] tracking-tight">
                  -34%
                </div>
                <div className="label-caps text-slate-400 text-[10px] mt-1">Lead Time Reduction</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  0 Days
                </div>
                <div className="label-caps text-slate-400 text-[10px] mt-1">Port Demurrage Dwell</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  99.6%
                </div>
                <div className="label-caps text-slate-400 text-[10px] mt-1">Schedule Punctuality</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-[var(--brand-blue)] tracking-tight">
                  100%
                </div>
                <div className="label-caps text-slate-400 text-[10px] mt-1">EDI Customs Pre-Cleared</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Sector Capabilities Section */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
            <div className="label-caps text-[var(--text-muted)]">Specialized Industry Sectors</div>
            <span className="font-mono-data text-xs text-[var(--brand-orange)] font-semibold">
              ENGINEERED FOR HIGH VALUE
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industrySectors.map((sec, idx) => {
              const isSelected = activeSector === idx;
              return (
                <div
                  key={sec.id}
                  onClick={() => setActiveSector(idx)}
                  className={`p-6 border rounded-sm transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[var(--surface)] border-[var(--brand-orange)] shadow-md'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveSector(idx);
                    }
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 font-mono-data text-xs">
                      <span className={isSelected ? 'text-[var(--brand-orange)] font-bold' : 'text-[var(--text-muted)]'}>
                        SEC // 0{idx + 1}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)]" />}
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                      {sec.name}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                      {sec.lead}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] font-mono-data text-[11px] space-y-1">
                    <div className="text-[var(--brand-orange)] font-bold">{sec.metric}</div>
                    <div className="text-[var(--text-muted)]">{sec.lane}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
