import { useEffect, useRef, useState, type FormEvent } from "react"

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function useModal(open: boolean) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog || !open) return
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"
    const keepFocusInDialog = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      const controls = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
        ),
      ).filter((element) => element.getClientRects().length > 0)
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    dialog.addEventListener("keydown", keepFocusInDialog)
    return () => {
      dialog.removeEventListener("keydown", keepFocusInDialog)
      dialog.close()
      document.body.style.overflow = overflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [open])
  return ref
}

export function Header({
  isDark,
  onToggleTheme,
  onQuote,
}: {
  isDark: boolean
  onToggleTheme: () => void
  onQuote: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useModal(menuOpen)
  const menuButton = useRef<HTMLButtonElement>(null)
  const links = [
    ["Services", "#services"],
    ["Network", "#network"],
    ["Company", "#company"],
    ["Track shipment", "#tracking"],
  ]
  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)")
    const closeOnDesktop = () => {
      if (query.matches) setMenuOpen(false)
    }
    query.addEventListener("change", closeOnDesktop)
    return () => query.removeEventListener("change", closeOnDesktop)
  }, [])
  function quoteFromMenu() {
    setMenuOpen(false)
    // Close this modal before opening the freight brief so focus restores correctly.
    requestAnimationFrame(() => {
      menuButton.current?.focus({ preventScroll: true })
      onQuote()
    })
  }
  return (
    <header className="meridian-header">
      <a className="meridian-brand" href="#top" aria-label="Meridian home">
        <svg
          width="33"
          height="30"
          viewBox="0 0 33 30"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 27V3l14.5 17L31 3v24M2 3l14.5 24L31 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="miter"
          />
        </svg>
        <span>
          MERIDIAN<span className="meridian-brand-sub">Global logistics</span>
        </span>
      </a>
      <nav className="meridian-desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="meridian-header-actions">
        <button
          className="meridian-rate-button"
          type="button"
          onClick={onQuote}
        >
          Request rate <Arrow diagonal />
        </button>
        <button
          className="meridian-icon-button theme-control"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? "Bright" : "Dark"} mode`}
        >
          {isDark ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
        <button
          ref={menuButton}
          className="meridian-icon-button meridian-menu-button"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <dialog
        ref={menu}
        className="meridian-mobile-menu"
        id="mobile-navigation"
        aria-label="Main navigation"
        onCancel={() => setMenuOpen(false)}
        onClose={() => setMenuOpen(false)}
      >
        <div className="meridian-menu-top">
          <span>Meridian</span>
          <button
            className="meridian-icon-button"
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span className="menu-index">0{index + 1}</span>
              {label}
              <Arrow diagonal />
            </a>
          ))}
        </nav>
        <button
          className="meridian-rate-button"
          type="button"
          onClick={quoteFromMenu}
        >
          Request freight rate <Arrow diagonal />
        </button>
        <p>Freight. People. Possibility.</p>
      </dialog>
    </header>
  )
}

export function RateDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const dialog = useModal(open)
  const [error, setError] = useState("")
  const [summary, setSummary] = useState("")
  const summaryHeading = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (open) {
      setSummary("")
      setError("")
    }
  }, [open])
  useEffect(() => {
    if (summary) summaryHeading.current?.focus()
  }, [summary])
  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) || "").trim()
    if (!value("origin") || !value("destination") || !value("company")) {
      setError("Enter an origin, destination and company name.")
      return
    }
    if (
      value("origin").toLocaleLowerCase() ===
      value("destination").toLocaleLowerCase()
    ) {
      setError("Choose a destination different from your origin.")
      return
    }
    setError("")
    setSummary(
      [
        "MERIDIAN / FREIGHT BRIEF",
        "",
        "Prepared locally. No request has been sent.",
        "",
        `Origin: ${value("origin")}`,
        `Destination: ${value("destination")}`,
        `Transport: ${value("transport")}`,
        `Cargo notes: ${value("cargo") || "Not provided"}`,
        "",
        `Company: ${value("company")}`,
        `Email: ${value("email")}`,
      ].join("\n"),
    )
  }
  return (
    <dialog
      ref={dialog}
      className="meridian-quote-dialog"
      aria-labelledby="rate-dialog-title"
      aria-describedby="rate-dialog-description"
      onCancel={onClose}
      onClose={onClose}
    >
      <button
        className="meridian-icon-button quote-close"
        type="button"
        onClick={onClose}
        aria-label="Close freight brief"
      >
        <CloseIcon />
      </button>
      <span className="quote-eyebrow">Your next move</span>
      <h2 id="rate-dialog-title">
        Start with
        <br />
        the essentials.
      </h2>
      <p id="rate-dialog-description">
        Prepare a freight brief. No request is sent from this preview.
      </p>
      {summary ? (
        <div className="quote-result">
          <h3 ref={summaryHeading} tabIndex={-1}>
            Your brief is ready.
          </h3>
          <p>
            Download a copy to share with your freight partner. Your details
            stay in this browser session.
          </p>
          <pre>{summary}</pre>
          <a
            className="meridian-rate-button"
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(summary)}`}
            download="meridian-freight-brief.txt"
          >
            Download freight brief <Arrow diagonal />
          </a>
          <button
            className="quote-back"
            type="button"
            onClick={() => setSummary("")}
          >
            Prepare another brief
          </button>
        </div>
      ) : (
        <form className="quote-form" onSubmit={prepareBrief}>
          <label>
            Origin
            <input
              autoFocus
              name="origin"
              placeholder="City or port"
              required
              maxLength={100}
              autoComplete="off"
            />
          </label>
          <label>
            Destination
            <input
              name="destination"
              placeholder="City or port"
              required
              maxLength={100}
              autoComplete="off"
            />
          </label>
          <label className="quote-full">
            Transport
            <select name="transport" defaultValue="Ocean freight">
              <option>Ocean freight</option>
              <option>Air freight</option>
              <option>Road freight</option>
              <option>Multimodal / advise me</option>
            </select>
          </label>
          <label className="quote-full">
            Cargo notes <span>(optional)</span>
            <textarea
              name="cargo"
              placeholder="Goods, approximate weight, dimensions and timing"
              maxLength={2000}
              rows={3}
            />
          </label>
          <label>
            Company
            <input
              name="company"
              required
              maxLength={150}
              autoComplete="organization"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
            />
          </label>
          {error && (
            <p className="quote-error quote-full" role="alert">
              {error}
            </p>
          )}
          <button className="meridian-rate-button quote-full" type="submit">
            Prepare freight brief <Arrow />
          </button>
        </form>
      )}
    </dialog>
  )
}

export function Tracking() {
  const [reference, setReference] = useState("MR-8402")
  const [found, setFound] = useState(true)
  const [message, setMessage] = useState("")
  function lookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const matches = reference.trim().toUpperCase() === "MR-8402"
    setFound(matches)
    setMessage(
      matches
        ? "Illustrative shipment MR-8402 shown below."
        : "No demo shipment found. Try MR-8402 to view the illustrative journey.",
    )
  }
  return (
    <section
      id="tracking"
      className="meridian-tracking"
      aria-labelledby="tracking-heading"
    >
      <h3 id="tracking-heading" className="tracking-title">
        Your shipment, at a glance.
      </h3>
      <form className="tracking-lookup" onSubmit={lookup}>
        <label htmlFor="shipment-reference">Shipment reference</label>
        <div>
          <input
            id="shipment-reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            placeholder="Try MR-8402"
            required
            maxLength={40}
            autoComplete="off"
            spellCheck={false}
          />
          <button type="submit" aria-label="Look up shipment">
            <Arrow />
          </button>
        </div>
      </form>
      <p className="tracking-disclosure">
        Illustrative shipment · No live tracking connection
      </p>
      <p className="tracking-feedback" role="status">
        {message}
      </p>
      {found && (
        <div className="tracking-shipment">
          <div className="tracking-reference">
            <span>MR-8402</span>
            <span>
              <i aria-hidden="true" />
              In transit
            </span>
          </div>
          <div className="tracking-route">
            <span>Rotterdam</span>
            <Arrow />
            <span>Singapore</span>
          </div>
          <div className="tracking-progress-label">
            <span>Journey progress</span>
            <strong>
              84<span>%</span>
            </strong>
          </div>
          <div
            className="tracking-progress"
            role="progressbar"
            aria-label="Illustrative journey progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={84}
          >
            <span />
          </div>
          <div className="tracking-eta">
            <span>Estimated arrival</span>
            <span>27 Sep · 04:00 UTC</span>
          </div>
          <ol className="tracking-events">
            <li>
              <span className="tracking-event-dot" />
              <div>
                <strong>Departed Rotterdam</strong>
                <span>Export cleared. Vessel underway.</span>
              </div>
              <time>06 Sep</time>
            </li>
            <li>
              <span className="tracking-event-dot" />
              <div>
                <strong>Indian Ocean transit</strong>
                <span>Continuing toward Singapore.</span>
              </div>
              <time>23 Sep</time>
            </li>
            <li className="tracking-event-next">
              <span className="tracking-event-dot" />
              <div>
                <strong>Arrival in Singapore</strong>
                <span>Next planned milestone.</span>
              </div>
              <time>27 Sep</time>
            </li>
          </ol>
        </div>
      )}
    </section>
  )
}
