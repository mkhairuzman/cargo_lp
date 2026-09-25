import { useState } from "react"
const services = [
  {
    name: "Ocean freight",
    short: "Ocean",
    image: "ocean",
    title: "Big horizons. Considered connections.",
    copy: "Containerised cargo, connected from port to destination. Build the route around what your shipment needs.",
    details: [
      "Full & part container loads",
      "Port-to-door coordination",
      "Import & export documentation",
    ],
    alt: "Cargo vessel transporting freight across open water",
  },
  {
    name: "Air freight",
    short: "Air",
    image: "air",
    title: "When the next day matters.",
    copy: "A focused route for time-sensitive freight. Keep the flight, ground handling and onward connection in one plan.",
    details: [
      "Time-sensitive shipments",
      "Airport-to-door coordination",
      "Freight documentation",
    ],
    alt: "Cargo aircraft on an airport runway",
  },
  {
    name: "Road freight",
    short: "Road",
    image: "road",
    title: "The connection between every connection.",
    copy: "From the terminal gate to the receiving dock. Road transport closes the distance between your cargo and its destination.",
    details: [
      "Full & part truck loads",
      "Port & airport transfers",
      "Regional distribution",
    ],
    alt: "Freight truck travelling on a road",
  },
  {
    name: "Warehousing",
    short: "Warehousing",
    image: "warehouse",
    title: "A pause in transit. A step forward.",
    copy: "Space to receive, consolidate and prepare your next move. Storage planned as part of the journey.",
    details: [
      "Storage & consolidation",
      "Order preparation",
      "Distribution coordination",
    ],
    alt: "Warehouse with organised racks and storage aisles",
  },
]
export function Services({ onQuote }: { onQuote: () => void }) {
  const [active, setActive] = useState(0)
  return (
    <section
      className="services section-space"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / Our capabilities</p>
            <h2 id="services-title" data-reveal>
              Different modes.
              <br />
              <span className="muted">A shared direction.</span>
            </h2>
          </div>
          <p className="section-intro">
            By sea, sky and road. At every stage, the right connection for your
            cargo.
          </p>
        </div>
        <div className="service-explorer">
          <div className="service-menu" aria-label="Freight services">
            {services.map((service, index) => (
              <button
                key={service.short}
                aria-label={service.name}
                aria-expanded={index === active}
                aria-controls={`service-${index}`}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span className="service-number">0{index + 1}</span>
                <span>{service.short}</span>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
            <p>
              Four disciplines.
              <br />
              One connected perspective.
            </p>
          </div>
          <div className="service-panels">
            {services.map((service, index) => (
              <article
                id={`service-${index}`}
                className={`service-panel ${index === active ? "active" : ""}`}
                key={service.short}
                aria-label={service.name}
              >
                <div className="mobile-service-title">
                  <span>0{index + 1}</span>
                  <h3>{service.short}</h3>
                </div>
                <div className="service-photo">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${service.image}.webp`}
                    alt={service.alt}
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
                <div className="service-detail">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                  <div>
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <button className="text-link" onClick={onQuote}>
                      Discuss your shipment <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
