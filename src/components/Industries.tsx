import { useInView } from './hooks';

const industries = [
  {
    name: 'Manufacturing',
    copy: 'JIT supply chains and production-critical freight managed with precision scheduling.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&auto=format&q=80',
    size: 'large',
  },
  {
    name: 'Retail & E-Commerce',
    copy: 'High-volume, time-sensitive distribution across Southeast Asia and the Middle East.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop&auto=format&q=80',
    size: 'small',
  },
  {
    name: 'Automotive',
    copy: 'Component and finished-vehicle logistics with specialist handling and documentation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&auto=format&q=80',
    size: 'small',
  },
  {
    name: 'Healthcare',
    copy: 'Temperature-controlled pharmaceutical and medical device freight with GDP compliance.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&auto=format&q=80',
    size: 'medium',
  },
  {
    name: 'Industrial Equipment',
    copy: 'Heavy-lift, out-of-gauge and project cargo solutions for complex deployments.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=400&fit=crop&auto=format&q=80',
    size: 'small',
  },
  {
    name: 'Consumer Goods',
    copy: 'Seasonal stock coordination with flexible warehousing and last-mile integration.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=400&fit=crop&auto=format&q=80',
    size: 'small',
  },
];

export function Industries() {
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
              Industries
            </div>
            <h2
              className={`heading-xl ${inView ? 'anim-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}
            >
              Built for businesses
              <br />
              that cannot afford delays.
            </h2>
          </div>
          <p
            className={`text-base leading-relaxed ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}
            style={{ color: 'var(--text-secondary)' }}
          >
            We operate across sectors where precision matters. Our industry teams bring specialist knowledge to every freight movement.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 ${inView ? 'anim-fade-up delay-200' : 'opacity-0'}`}>
          {/* Large tile */}
          <div className="col-span-2 lg:col-span-1 lg:row-span-2 industry-tile rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', minHeight: '300px' }}>
            <div className="relative w-full h-full">
              <img
                src={industries[0].image}
                alt={industries[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,43,0.85) 0%, transparent 60%)' }} />
              <div
                className="tile-overlay absolute inset-0 opacity-0"
                style={{ background: 'rgba(255,90,31,0.08)' }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="heading-md text-white mb-2">{industries[0].name}</div>
                <p className="text-sm text-white opacity-70 leading-relaxed max-w-[260px]">{industries[0].copy}</p>
                <div className="tile-arrow mt-3 flex items-center gap-2 text-sm font-600" style={{ color: 'var(--brand-orange)' }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller tiles */}
          {industries.slice(1).map((ind) => (
            <div
              key={ind.name}
              className="industry-tile rounded-sm overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <div className="relative w-full h-full">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,43,0.80) 0%, transparent 60%)' }} />
                <div
                  className="tile-overlay absolute inset-0 opacity-0"
                  style={{ background: 'rgba(255,90,31,0.08)' }}
                />
                <div className="absolute bottom-0 left-0 p-4 lg:p-5">
                  <div className="text-sm lg:text-base font-700 text-white mb-1">{ind.name}</div>
                  <p className="hidden lg:block text-xs text-white opacity-60 leading-relaxed">{ind.copy}</p>
                  <div className="tile-arrow mt-2 flex items-center gap-1.5 text-xs font-600" style={{ color: 'var(--brand-orange)' }}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
