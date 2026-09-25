import { useInView } from './hooks';

const values = [
  {
    title: 'Operational Visibility',
    copy: 'Live tracking across every transportation mode. Know exactly where your cargo is and what happens next.',
    stat: '98.7%',
    statLabel: 'On-Time Performance',
  },
  {
    title: 'Dedicated Coordination',
    copy: 'A named coordinator manages your account — one contact, full accountability from booking to delivery.',
    stat: '12 min',
    statLabel: 'Avg. Response Time',
  },
  {
    title: 'Predictable Transit',
    copy: 'AI-assisted route planning and carrier reliability scoring give accurate, consistent transit estimates.',
    stat: '±1 day',
    statLabel: 'Transit Accuracy',
  },
  {
    title: 'Secure Handling',
    copy: 'Tamper-evident sealing, bonded storage and chain-of-custody documentation at every handoff point.',
    stat: '100%',
    statLabel: 'Cargo Insurance Coverage',
  },
  {
    title: 'Responsive Support',
    copy: 'Operations teams across multiple time zones ensure your shipments are never without a responsible contact.',
    stat: '24/7',
    statLabel: 'Global Support Coverage',
  },
];

export function OperationalValue() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-surface py-28 lg:py-36"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div
              className={`label-caps mb-5 flex items-center gap-3 ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ color: 'var(--brand-orange)' }}
            >
              <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--brand-orange)' }} />
              Why Meridian
            </div>
            <h2
              className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              Built for
              <br />
              certainty.
            </h2>
          </div>
          <p
            className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Logistics is not a commodity — it's a system of decisions, handoffs and communication. We build that system around your cargo, your timeline and your expectations.
          </p>
        </div>

        {/* Value items — alternating layout */}
        <div className="space-y-px" style={{ border: '1px solid var(--border-subtle)', borderRadius: '8px', overflow: 'hidden' }}>
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`grid lg:grid-cols-[1fr_auto] gap-8 items-center p-8 lg:p-10 ${
                i % 2 === 0 ? '' : 'lg:grid-cols-[auto_1fr]'
              } ${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${i * 80}ms`,
                backgroundColor: 'var(--surface)',
                borderBottom: i < values.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}
            >
              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div
                  className="text-xs font-700 mb-3"
                  style={{ color: 'var(--brand-orange)', letterSpacing: '0.05em' }}
                >
                  0{i + 1}
                </div>
                <h3 className="text-xl font-700 mb-3" style={{ color: 'var(--text-primary)', letterSpacing: '-0.015em' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-[480px]" style={{ color: 'var(--text-secondary)' }}>
                  {v.copy}
                </p>
              </div>

              {/* Stat */}
              <div
                className={`text-right ${i % 2 !== 0 ? 'lg:order-1 lg:text-left' : ''}`}
                style={{ minWidth: '160px' }}
              >
                <div
                  className="text-4xl font-800 mb-1"
                  style={{ color: 'var(--text-primary)', letterSpacing: '-0.04em' }}
                >
                  {v.stat}
                </div>
                <div className="label-caps" style={{ color: 'var(--text-muted)' }}>
                  {v.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
