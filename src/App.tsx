import { useEffect, useState } from "react"
import { Header, RateDialog, Tracking } from "./editorial/Interactions"
import { Services } from "./editorial/Services"
import { Journey, Network } from "./editorial/Network"

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}.webp`

export default function App() {
  const [isDark, setDark] = useState(() => {
    try {
      return localStorage.getItem("meridian-theme") === "dark"
    } catch {
      return false
    }
  })
  const [quoteOpen, setQuoteOpen] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    try {
      localStorage.setItem("meridian-theme", isDark ? "dark" : "light")
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }, [isDark])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll("[data-reveal]")
              .forEach((element) => {
                element.classList.add("is-visible")
              })
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 },
    )
    // Observe the unclipped container: a fully masked heading has no intersection area.
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.parentElement) observer.observe(element.parentElement)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        isDark={isDark}
        onToggleTheme={() => setDark((value) => !value)}
        onQuote={() => setQuoteOpen(true)}
      />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-masthead wrap">
            <p className="eyebrow">
              <span className="signal" /> International logistics. A clearer
              course.
            </p>
            <h1 id="hero-title">
              <span className="headline-mask">
                <span>Moving freight.</span>
              </span>
              <span className="headline-mask">
                <span>With absolute clarity.</span>
              </span>
            </h1>
            <div className="hero-intro">
              <p>
                Across oceans, borders and the unexpected.
                <br />
                Your cargo. One connected journey.
              </p>
              <div className="actions">
                <button
                  className="button primary"
                  onClick={() => setQuoteOpen(true)}
                >
                  Request Freight Rate
                </button>
                <a className="text-link" href="#tracking">
                  Track Shipment
                </a>
              </div>
            </div>
          </div>
          <figure className="hero-image">
            <img
              src={asset("hero")}
              alt="Container terminal with ships and cranes serving international freight"
              fetchPriority="high"
              width="2200"
              height="1467"
            />
            <figcaption>
              <span>
                Distance is a detail.
                <br />
                <strong>Connection is everything.</strong>
              </span>
              <span className="image-index">
                Ocean / Air / Road / Warehousing
              </span>
            </figcaption>
          </figure>
        </section>
        <section
          className="intro wrap section-space"
          aria-labelledby="intro-title"
        >
          <div className="section-label">01 / A connected operation</div>
          <div className="intro-body">
            <h2 id="intro-title" data-reveal>
              Big-picture thinking.
              <br />
              <span className="muted">Every-detail attention.</span>
            </h2>
            <div className="intro-bottom">
              <p>
                Freight doesn’t move in silos. Neither should your logistics.
                Meridian brings transport, storage and shipment visibility into
                one clear conversation.
              </p>
              <dl className="proof-numbers proof-capabilities">
                <div>
                  <dt>Multimodal</dt>
                  <dd>Ocean, air, road and storage</dd>
                </div>
                <div>
                  <dt>Gateway-led</dt>
                  <dd>Connected international corridors</dd>
                </div>
                <div>
                  <dt>One view</dt>
                  <dd>Milestones kept in context</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <Services onQuote={() => setQuoteOpen(true)} />
        <Journey />
        <section
          className="network-section section-space"
          id="network"
          aria-labelledby="network-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="section-label">04 / Network & visibility</p>
                <h2 id="network-title" data-reveal>
                  A world of movement.
                  <br />
                  <span className="muted">One clear view.</span>
                </h2>
              </div>
              <p className="section-intro">
                From the first mile to the final handover, keep the route and
                the next milestone in sight.
              </p>
            </div>
            <Network />
            <div className="visibility-layout">
              <div className="visibility-copy">
                <p className="eyebrow">Clarity travels with your cargo.</p>
                <h3>
                  Know where it is.
                  <br />
                  Know what comes next.
                </h3>
                <p>
                  A shipment reference connects the route, milestones and
                  estimated arrival. See how that looks with our illustrative
                  shipment.
                </p>
              </div>
              <Tracking />
            </div>
          </div>
        </section>
        <section
          className="advantage section-space wrap"
          id="company"
          aria-labelledby="advantage-title"
        >
          <p className="section-label">05 / The Meridian approach</p>
          <div className="advantage-grid">
            <div>
              <h2 id="advantage-title" data-reveal>
                When plans change,
                <br />
                <span className="muted">the focus doesn’t.</span>
              </h2>
              <p className="advantage-lead">
                Moving cargo is only part of the job. The other part is keeping
                people, decisions and documents moving with it.
              </p>
              <dl className="advantage-list">
                <div>
                  <dt>One point of view</dt>
                  <dd>
                    Transport and warehouse planning, considered together.
                  </dd>
                </div>
                <div>
                  <dt>Every handover matters</dt>
                  <dd>Clear milestones, accountable next steps.</dd>
                </div>
                <div>
                  <dt>Context before complexity</dt>
                  <dd>The information you need to make the next decision.</dd>
                </div>
              </dl>
            </div>
            <figure className="advantage-image" data-reveal>
              <img
                src={asset("warehouse")}
                alt="Warehouse aisles and storage infrastructure"
                loading="lazy"
                width="1200"
                height="800"
              />
              <figcaption>
                Behind every arrival, a coordinated operation.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="case-study" id="proof" aria-labelledby="case-title">
          <div className="case-photo">
            <picture>
              <source media="(min-width: 761px)" srcSet={asset("port")} />
              <img
                src={asset("ocean")}
                alt="Container freight and port infrastructure on an international shipping route"
                loading="lazy"
                width="1200"
                height="864"
              />
            </picture>
            <div className="case-photo-caption">
              Rotterdam <span aria-hidden="true">↗</span> Singapore
              <br />
              <span>Route study / Illustrative scenario</span>
            </div>
          </div>
          <div className="case-copy">
            <p className="section-label">06 / Complexity, handled</p>
            <h2 id="case-title" data-reveal>
              A change of route.
              <br />
              The same commitment.
            </h2>
            <p>
              A port delay needn’t become a lost conversation. Here’s how a
              coordinated response can keep a shipment moving.
            </p>
            <ol className="exception-story">
              <li>
                <span>01</span>
                <div>
                  <h3>Delay detected</h3>
                  <p>
                    A revised port window puts the onward connection at risk.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Alternative arranged</h3>
                  <p>
                    The next connection is assessed and customs documents
                    updated.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Everyone informed</h3>
                  <p>
                    The customer receives the revised plan before the next
                    handover.
                  </p>
                </div>
              </li>
            </ol>
            <div className="case-outcome">
              <span>The outcome</span>
              <strong>
                One plan.
                <br />
                Everyone on the same page.
              </strong>
            </div>
            <p className="fine-print">
              An example of the operating approach, not a reported customer
              result.
            </p>
          </div>
        </section>
        <section className="final-cta" id="quote" aria-labelledby="quote-title">
          <img
            src={asset("hero")}
            alt=""
            loading="lazy"
            width="2200"
            height="1467"
          />
          <div className="wrap final-content">
            <p className="eyebrow">The next move is yours.</p>
            <h2 id="quote-title" data-reveal>
              Ready to move
              <br />
              what matters?
            </h2>
            <div className="actions">
              <button
                className="button primary"
                onClick={() => setQuoteOpen(true)}
              >
                Request Freight Rate
              </button>
              <a className="text-link" href="#tracking">
                Track Shipment
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <a className="footer-brand" href="#top">
            Meridian<span>Logistics, in perspective.</span>
          </a>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#network">Network</a>
            <a href="#company">Company</a>
            <a href="#tracking">Track Shipment</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Meridian. Concept experience.
          </span>
          <span>Shipment data and routes are illustrative.</span>
          <a
            href={`${import.meta.env.BASE_URL}images/credits.txt`}
            target="_blank"
            rel="noreferrer"
          >
            Image credits
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <RateDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}
