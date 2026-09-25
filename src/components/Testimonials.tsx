import { useState } from 'react';
import { useInView } from './hooks';

const testimonials = [
  {
    quote: 'Meridian gives our teams visibility across every shipment without adding operational complexity. That combination is rare in freight logistics.',
    name: 'Khalid Al-Mansouri',
    role: 'VP Supply Chain',
    company: 'Petrosynth Industrial',
    initial: 'K',
  },
  {
    quote: 'We moved a 12-country distribution network onto Meridian in eight weeks. The transition was managed with discipline we had not seen from a freight provider before.',
    name: 'Sarah Lim',
    role: 'Head of Logistics, APAC',
    company: 'Vantara Retail Group',
    initial: 'S',
  },
  {
    quote: 'The pre-clearance process they built for our pharmaceutical shipments has eliminated border delays that used to cost us days. The compliance documentation is handled without us asking.',
    name: 'Arjun Mehta',
    role: 'Chief Operations Officer',
    company: 'MedCore Distribitution',
    initial: 'A',
  },
];

const logos = [
  'PETROSYNTH', 'VANTARA', 'MEDCORE', 'INFRATECH', 'STEELMARK', 'NOVAPORT',
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  const t = testimonials[active];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-secondary py-28 lg:py-36"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div
          className={`label-caps mb-16 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
          style={{ color: 'var(--brand-orange)' }}
        >
          <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
          Customer Trust
        </div>

        {/* Featured testimonial */}
        <div className={`max-w-[860px] mb-16 ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}>
          <svg
            width="36" height="28" viewBox="0 0 36 28" fill="var(--brand-orange)" className="mb-6 opacity-60"
          >
            <path d="M0 28V16C0 7.163 5.837 1.837 17.51 0L19 3.49C13.49 5 10.747 8.49 10.163 14H16V28H0zm20 0V16C20 7.163 25.837 1.837 37.51 0L39 3.49C33.49 5 30.747 8.49 30.163 14H36V28H20z"/>
          </svg>

          <p
            className="heading-md mb-8 leading-snug"
            style={{ color: 'var(--text-primary)', maxWidth: '780px' }}
          >
            "{t.quote}"
          </p>

          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-700 text-white"
              style={{ backgroundColor: 'var(--brand-orange)' }}
            >
              {t.initial}
            </div>
            <div>
              <div className="text-sm font-700" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role} · {t.company}</div>
            </div>

            {/* Selector */}
            <div className="ml-auto flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{ backgroundColor: i === active ? 'var(--brand-orange)' : 'var(--border-strong)' }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div
          className={`pt-12 ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div className="label-caps mb-6" style={{ color: 'var(--text-muted)' }}>
            Trusted by
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-xs font-800 tracking-widest"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.15em', opacity: 0.5 }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
