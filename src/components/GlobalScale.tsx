import { useInView, useCounter } from './hooks';
import { useRef } from 'react';

const metrics = [
  { value: 45, suffix: 'K+', label: 'Shipments Managed', detail: 'Annually across all modes' },
  { value: 32, suffix: '+', label: 'Countries Connected', detail: 'Global trade corridors' },
  { value: 987, suffix: '', label: 'On-Time Performance', detail: 'Industry-leading reliability', prefix: '', display: '98.7%' },
  { value: 24, suffix: '/7', label: 'Control Tower', detail: 'Operational support, always on' },
];

function MetricItem({ metric, start }: { metric: typeof metrics[0]; start: boolean }) {
  const counted = useCounter(metric.value, 1200, start);

  return (
    <div className="relative py-10 px-8 flex flex-col justify-between" style={{ borderRight: '1px solid var(--border-subtle)' }}>
      <div
        className="text-5xl lg:text-6xl font-800 mb-3 leading-none"
        style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
      >
        {metric.display
          ? metric.display
          : `${metric.prefix ?? ''}${counted}${metric.suffix}`}
      </div>
      <div>
        <div className="text-sm font-700 mb-1" style={{ color: 'var(--text-primary)' }}>
          {metric.label}
        </div>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {metric.detail}
        </div>
      </div>

      {/* Accent line */}
      {start && (
        <div
          className="absolute top-0 left-8 h-px w-12 progress-fill"
          style={{ backgroundColor: 'var(--brand-orange)' }}
        />
      )}
    </div>
  );
}

export function GlobalScale() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-secondary py-0"
      style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`${inView ? 'anim-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <MetricItem metric={m} start={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
