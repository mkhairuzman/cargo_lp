const links = {
  Company: ['About', 'Leadership', 'Careers', 'Press', 'Partners'],
  Services: ['Ocean Freight', 'Air Freight', 'Road Freight', 'Warehousing', 'Customs Clearance', 'Last-Mile'],
  Industries: ['Manufacturing', 'Retail & E-Commerce', 'Automotive', 'Healthcare', 'Industrial Equipment'],
  Resources: ['Insights', 'Case Studies', 'Port Guides', 'Track Shipment', 'API Access'],
  Contact: ['Jeddah HQ', 'Dubai Office', 'Singapore Hub', 'Rotterdam Hub'],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#071A2B' }}>
      {/* Oversized watermark */}
      <div
        className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        <div
          className="text-[clamp(6rem,20vw,18rem)] font-800 leading-none"
          style={{
            color: 'rgba(255,255,255,0.028)',
            letterSpacing: '-0.04em',
            transform: 'translateY(12%)',
            whiteSpace: 'nowrap',
          }}
        >
          MERIDIAN
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-20 pb-8">
        {/* Top row: brand + CTA */}
        <div
          className="flex flex-wrap gap-8 items-start justify-between pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}
        >
          {/* Brand */}
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2 mb-4">
              <div style={{ color: 'var(--brand-orange)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="font-800 text-base" style={{ color: '#F3F4F2', letterSpacing: '-0.02em' }}>MERIDIAN</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(243,244,242,0.50)' }}>
              Integrated air, ocean and ground logistics across Asia, the Middle East and Europe. Built for certainty.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm" style={{ color: 'rgba(243,244,242,0.45)' }}>
              <div>logistics@meridian.co</div>
              <div>+966 11 200 3400</div>
              <div>King Fahd District, Jeddah, KSA</div>
            </div>
          </div>

          {/* Action group */}
          <div className="flex flex-col gap-3">
            <div className="label-caps mb-2" style={{ color: 'rgba(243,244,242,0.35)' }}>Quick Actions</div>
            <a href="#tracking" className="btn-primary">
              Track Shipment
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#quote" className="btn-secondary btn-secondary-white">
              Get a Quote
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="label-caps mb-5" style={{ color: 'rgba(243,244,242,0.40)' }}>
                {category}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ color: 'rgba(243,244,242,0.55)' }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#F3F4F2'; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(243,244,242,0.55)'; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <div className="text-xs" style={{ color: 'rgba(243,244,242,0.30)' }}>
            © 2026 Meridian Cargo Group. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-150"
                style={{ color: 'rgba(243,244,242,0.30)' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(243,244,242,0.60)'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(243,244,242,0.30)'; }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {['LinkedIn', 'X', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs transition-colors duration-150"
                style={{ color: 'rgba(243,244,242,0.30)' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(243,244,242,0.60)'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(243,244,242,0.30)'; }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
