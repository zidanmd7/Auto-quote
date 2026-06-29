import { useNavigate } from "react-router-dom";
import "../CSS/services.css";

const SERVICES = [
    {
        id: 1,
        num: "01",
        name: "Auto body repair",
        desc: "From minor dents and dings to full panel work — our technicians handle structural and cosmetic body damage with factory-matched results.",
        features: [
            "Dent and ding removal",
            "Panel realignment",
            "Full door and fender replacement",
            "Insurance claim assistance",
        ],
        img: "../src/assets/images/automotive-repair.jpg",
        alt: "Auto body repair",
    },
    {
        id: 2,
        num: "02",
        name: "Glass repair",
        desc: "Chips, cracks, and full windshield replacements done on your driveway. We use OEM-spec glass and industry-grade adhesives — safe to drive in 60 minutes.",
        features: [
            "Windshield chip and crack repair",
            "Full windshield replacement",
            "Side and rear window replacement",
            "ADAS recalibration after install",
        ],
        img: "../src/assets/images/bumper-repair.jpeg",
        alt: "Glass repair",
    },
    {
        id: 3,
        num: "03",
        name: "Bumper repair",
        desc: "Cracked, scuffed, or fully detached — we repair or replace bumpers on-site and blend the paint to match your vehicle's existing finish.",
        features: [
            "Crack and split repair",
            "Scuff and scratch removal",
            "Full bumper replacement",
            "Color-matched paint blending",
        ],
        img: "../src/assets/images/glass-repair.jpeg",
        alt: "Bumper repair",
    },
    {
        id: 4,
        num: "04",
        name: "Parts maintenance",
        desc: "Headlights, tail lights, mirrors, trim, and more — we source and install replacement parts directly at your location, with the same care as a dealership.",
        features: [
            "Headlight and tail light replacement",
            "Mirror replacement and adjustment",
            "Trim and molding repair",
            "Wiper and exterior accessory install",
        ],
        img: "../src/assets/images/car-maintenance.jpg",
        alt: "Parts maintenance",
    },
];

function ServiceRow({ service, flip }) {
    const navigate = useNavigate();

    return (
        <div className={`sv-service${flip ? " flip" : ""}`}>
            <div className="sv-img">
                <img src={service.img} alt={service.alt} />
            </div>
            <div className="sv-content">
                <span className="sv-num">{service.num}</span>
                <h2 className="sv-name">{service.name}</h2>
                <p className="sv-desc">{service.desc}</p>
                <ul className="sv-features">
                    {service.features.map((f) => (
                        <li key={f} className="sv-feat">
                            <span className="sv-dot" aria-hidden="true" />
                            {f}
                        </li>
                    ))}
                </ul>
                <button className="sv-cta" onClick={() => navigate("/quote")}>
                    Get a quote <span aria-hidden="true">&#8594;</span>
                </button>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section className="sv">
            <div className="sv-head">
                <p className="sv-eyebrow">What we do</p>
                <h1 className="sv-title">Professional mobile repair services</h1>
                <p className="sv-sub">
                    We bring the shop to you. Every service is performed on-site — no
                    towing, no rental car, no waiting rooms.
                </p>
            </div>

            <div className="sv-list">
                {SERVICES.map((s, i) => (
                    <ServiceRow key={s.id} service={s} flip={i % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}