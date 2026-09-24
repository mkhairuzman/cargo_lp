import { useState } from 'react';
import { useInView } from './hooks';

const gatewayOptions = [
  { code: 'RTM', name: 'Rotterdam Gateway (Netherlands)' },
  { code: 'SIN', name: 'Singapore Strait (Singapore)' },
  { code: 'SHA', name: 'Shanghai Port (China)' },
  { code: 'DXB', name: 'Dubai Intercontinental (UAE)' },
  { code: 'FRA', name: 'Frankfurt Aviation Hub (Germany)' },
  { code: 'LAX', name: 'Port of Los Angeles (United States)' },
  { code: 'ANR', name: 'Antwerp Terminal (Belgium)' },
  { code: 'ORD', name: 'Chicago Intermodal (United States)' },
  { code: 'TYO', name: 'Tokyo Air/Ocean Gateway (Japan)' },
];

export function FinalCTA() {
  const [origin, setOrigin] = useState('RTM');
  const [destination, setDestination] = useState('SIN');
  const [mode, setMode] = useState('ocean-fcl');
  const [containerType, setContainerType] = useState('40hc');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [cargoNotes, setCargoNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const { ref, inView } = useInView();

  const calculateEstimate = () => {
    if (mode === 'air') return '2 - 3 Days (Expedited Flight Bridge)';
    if (mode === 'rail') return '14 - 16 Days (Trans-Eurasian Rail)';
    if (mode === 'ocean-lcl') return '26 - 32 Days (Consolidated Ocean)';
    return '20 - 25 Days (Direct Ocean Liner)';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const generatedRef = `RFQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketRef(generatedRef);
    setSubmitted(true);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="quote"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#07131F] text-white"
    >
      {/* Background Cinematic Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1800&h=1000&fit=crop&auto=format&q=85"
          alt="International container port terminal at twilight"
          className="w-full h-full object-cover object-[center_60%] opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #07131F 0%, rgba(7, 19, 31, 0.95) 50%, rgba(7, 19, 31, 0.85) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`label-caps flex items-center gap-3 text-[var(--brand-orange)] ${inView ? 'anim-fade-up' : 'opacity-0'}`}
            >
              <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
              <span>Direct Rate Dispatch</span>
            </div>

            <h2
              className={`heading-xl text-white ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
            >
              Enterprise freight.
              <br />
              Transparent rates.
            </h2>

            <p
              className={`text-base text-slate-300 leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            >
              Configure trade corridors, select transport equipment, and submit lane specifications directly to our dedicated commercial broker desks. Guaranteed rate responses within 60 minutes for container and charter freight.
            </p>

            <div
              className={`pt-6 border-t border-white/10 space-y-4 font-mono-data text-xs ${inView ? 'anim-fade-up delay-300' : 'opacity-0'}`}
            >
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>DIRECT COMMERCIAL DESK ACCESS (ROTTERDAM & SINGAPORE)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>INTEGRATED CUSTOMS PRE-LODGEMENT & TARIFF AUDIT</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ZERO COMMITMENT · BINDING CARRIER QUOTATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rate Consultation Suite (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`bg-[#0C1724] border border-white/12 p-8 sm:p-10 rounded-sm shadow-2xl backdrop-blur-md ${inView ? 'anim-fade-up delay-250' : 'opacity-0'}`}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono-data text-xs">
                    <span className="text-white font-bold">FREIGHT SPECIFICATION CONFIGURATOR</span>
                    <span className="status-chip status-transit text-[10px]">Active Desk</span>
                  </div>

                  {/* Origin & Destination Matrix */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Origin Gateway
                      </label>
                      <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full bg-[#111E2E] border border-white/12 text-white font-mono-data text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      >
                        {gatewayOptions.map((g) => (
                          <option key={g.code} value={g.code}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Destination Terminal
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-[#111E2E] border border-white/12 text-white font-mono-data text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      >
                        {gatewayOptions.map((g) => (
                          <option key={g.code} value={g.code}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mode & Equipment Selection */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Service Mode
                      </label>
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full bg-[#111E2E] border border-white/12 text-white font-mono-data text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      >
                        <option value="ocean-fcl">Ocean FCL (Full Container Load)</option>
                        <option value="ocean-lcl">Ocean LCL (Consolidation)</option>
                        <option value="air">Air Cargo Priority Charter</option>
                        <option value="rail">Trans-Eurasian Intermodal Rail</option>
                      </select>
                    </div>

                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Equipment Specification
                      </label>
                      <select
                        value={containerType}
                        onChange={(e) => setContainerType(e.target.value)}
                        className="w-full bg-[#111E2E] border border-white/12 text-white font-mono-data text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      >
                        <option value="40hc">40ft High-Cube (Dry Van)</option>
                        <option value="20gp">20ft Standard (General Purpose)</option>
                        <option value="reefer">40ft Climate-Controlled Reefer</option>
                        <option value="flatrack">40ft Flat Rack (Out-of-Gauge)</option>
                        <option value="air-uld">Aircraft Main-Deck Pallet (PMC/PAG)</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculated Lead Time Estimate Banner */}
                  <div className="p-4 bg-[#111E2E] border border-white/10 rounded-sm font-mono-data text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-slate-400 text-[11px]">CALCULATED TRANSIT WINDOW:</span>
                    <span className="text-[var(--brand-orange)] font-bold">{calculateEstimate()}</span>
                  </div>

                  {/* Contact Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Apex Global Engineering"
                        className="w-full bg-[#111E2E] border border-white/12 text-white text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      />
                    </div>
                    <div>
                      <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                        Commercial Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="logistics@company.com"
                        className="w-full bg-[#111E2E] border border-white/12 text-white text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-caps text-slate-400 block mb-2 text-[10px]">
                      Commodity Description & Special Handling (Optional)
                    </label>
                    <input
                      type="text"
                      value={cargoNotes}
                      onChange={(e) => setCargoNotes(e.target.value)}
                      placeholder="e.g. High-tech equipment, 18,200 kg gross weight, customs pre-clearance required"
                      className="w-full bg-[#111E2E] border border-white/12 text-white text-xs p-3 rounded-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3.5 text-sm font-bold cursor-pointer"
                  >
                    Generate Official Freight Quotation
                    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <div>
                    <div className="status-chip status-arrived text-xs mb-3">Quote Request Dispatched</div>
                    <h3 className="heading-md text-white mb-2 tracking-tight">
                      Quotation Dossier {ticketRef} Initiated
                    </h3>
                    <p className="text-xs text-slate-300 max-w-[460px] mx-auto leading-relaxed">
                      Your freight requirements for corridor <strong>{origin} → {destination}</strong> have been routed to our commercial desk. An enterprise logistics broker will transmit confirmed vessel slot pricing and departure schedules to <strong>{email}</strong> within 60 minutes.
                    </p>
                  </div>

                  <div className="p-4 bg-[#111E2E] border border-white/10 rounded-sm font-mono-data text-xs max-w-sm mx-auto space-y-2 text-left">
                    <div className="flex justify-between text-slate-400">
                      <span>ORIGIN:</span>
                      <span className="text-white font-bold">{origin}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>DESTINATION:</span>
                      <span className="text-white font-bold">{destination}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>EST. WINDOW:</span>
                      <span className="text-[var(--brand-orange)] font-bold">{calculateEstimate()}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setCompany('');
                      setEmail('');
                      setCargoNotes('');
                    }}
                    className="btn-secondary btn-secondary-white text-xs font-semibold py-2 px-6"
                  >
                    Configure Another Lane
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
