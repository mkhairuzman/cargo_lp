import { useEffect, useRef, useState } from "react"
const stages = [
  ["Booked", "The plan is in place.", "Rotterdam"],
  ["Picked up", "Cargo meets its connection.", "Origin warehouse"],
  ["Export", "Documents travel with it.", "Port of Rotterdam"],
  ["Transit", "Across the next horizon.", "At sea"],
  ["Customs", "Ready for the next border.", "Singapore"],
  ["Delivered", "The final handover.", "Destination"],
]
export function Journey() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("stage-visible")
        }),
      { threshold: 0.8, rootMargin: "0px 0px -8% 0px" },
    )
    ref.current?.querySelectorAll("li").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section
      id="journey"
      className="journey section-space"
      ref={ref}
      aria-labelledby="journey-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">03 / From here to there</p>
            <h2 id="journey-title" data-reveal>
              One shipment.
              <br />A story that keeps moving.
            </h2>
          </div>
          <p className="section-intro">
            Each handover is a chapter.
            <br />
            The whole journey stays connected.
          </p>
        </div>
        <div className="journey-meta">
          <span className="mono">MR-8402</span>
          <span>Rotterdam → Singapore</span>
          <span>Illustrative shipment journey</span>
        </div>
        <ol className="journey-route">
          {stages.map(([title, text, location], index) => (
            <li
              key={title}
              style={
                { "--stage-delay": `${index * 90}ms` } as React.CSSProperties
              }
            >
              <div className="route-mark">
                <span />
              </div>
              <span className="stage-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="stage-location">{location}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
// Coordinates are calibrated to the supplied world.svg contours, not a
// longitude/latitude grid. Singapore sits just off the peninsula's southern tip.
const hubs = [
  {
    name: "Rotterdam",
    x: 1009,
    y: 171,
    labelX: -18,
    labelY: -22,
    anchor: "end",
    group: "primary",
  },
  {
    name: "Frankfurt",
    x: 1031,
    y: 182,
    labelX: -16,
    labelY: 29,
    anchor: "end",
    group: "secondary",
  },
  {
    name: "Dubai",
    x: 1290,
    y: 342,
    labelX: 15,
    labelY: -13,
    anchor: "start",
    group: "secondary",
  },
  {
    name: "Jeddah",
    x: 1209,
    y: 368,
    labelX: -16,
    labelY: 25,
    anchor: "end",
    group: "secondary",
  },
  {
    name: "Singapore",
    x: 1578,
    y: 494,
    labelX: -18,
    labelY: 30,
    anchor: "end",
    group: "primary",
  },
  {
    name: "Shanghai",
    x: 1640,
    y: 305,
    labelX: 15,
    labelY: -16,
    anchor: "start",
    group: "primary",
  },
  {
    name: "Kuala Lumpur",
    x: 1565,
    y: 479,
    labelX: -20,
    labelY: -21,
    anchor: "end",
    group: "secondary",
  },
  {
    name: "Jakarta",
    x: 1591,
    y: 543,
    labelX: 18,
    labelY: 24,
    anchor: "start",
    group: "secondary",
  },
] as const
const routes = [
  {
    name: "Rotterdam to Singapore",
    path: "M1009 171 Q1370 80 1578 494",
    endpoints: ["Rotterdam", "Singapore"],
    note: "Europe to Southeast Asia",
  },
  {
    name: "Rotterdam to Dubai",
    path: "M1009 171 Q1190 135 1290 342",
    endpoints: ["Rotterdam", "Dubai"],
    note: "Europe to the Gulf",
  },
  {
    name: "Singapore to Shanghai",
    path: "M1578 494 Q1730 423 1640 305",
    endpoints: ["Singapore", "Shanghai"],
    note: "Southeast Asia to East Asia",
  },
]
export function Network() {
  const [route, setRoute] = useState(0)
  return (
    <div className="network-visual">
      <div className="map-canvas" data-reveal>
        <svg
          viewBox="750 70 1120 580"
          role="img"
          aria-labelledby="map-title map-description"
        >
          <title id="map-title">Selected international gateways</title>
          <desc id="map-description">
            Illustrative network connecting Rotterdam, Frankfurt, Dubai, Jeddah,
            Singapore, Shanghai, Kuala Lumpur and Jakarta. Selected route:{" "}
            {routes[route].name}.
          </desc>
          <image
            href={`${import.meta.env.BASE_URL}images/world.svg`}
            width="2000"
            height="857"
            className="map-base"
          />
          {routes.map((item, index) => (
            <path
              key={item.name}
              d={item.path}
              className={
                route === index ? "map-route active-route" : "map-route"
              }
              pathLength="1"
            />
          ))}
          {hubs.map((hub) => (
            <g
              key={hub.name}
              className={`map-hub ${
                routes[route].endpoints.includes(hub.name)
                  ? "primary"
                  : hub.group
              }`}
              transform={`translate(${hub.x} ${hub.y})`}
            >
              <circle r="5" />
              <text x={hub.labelX} y={hub.labelY} textAnchor={hub.anchor}>
                {hub.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="map-footer">
        <div className="route-selector" aria-label="Illustrative routes">
          {routes.map((item, index) => (
            <button
              key={item.name}
              aria-pressed={route === index}
              className={route === index ? "active" : ""}
              onClick={() => setRoute(index)}
            >
              {item.name.replace(" to ", " → ")}
            </button>
          ))}
        </div>
        <p aria-live="polite">
          {routes[route].note}
          <span>Selected gateways · Illustrative routes</span>
        </p>
      </div>
    </div>
  )
}
