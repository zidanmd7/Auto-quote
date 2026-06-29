import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/mini-gallery.css";

const SLIDES = [
    { id: 1, tag: "Paint",  label: "Bumper respray",        img: "src/assets/images/eugenia-pan-kiv-Vno9rNyyzxo-unsplash.jpg" },
    { id: 2, tag: "Body",   label: "Door dent removal",     img: "src/assets/Images/florian-olivo-e_7fMjpdAgw-unsplash.jpg" },
    { id: 3, tag: "Finish", label: "Scratch & chip repair", img: "src/assets/Images/kc-shum-Hv_gKPOXmwE-unsplash.jpg" },
    { id: 4, tag: "Body",   label: "Hail restoration",      img: "src/assets/Images/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg" },
];

const AUTOPLAY_MS = 3500;

export default function MiniGallery() {
    const [cur, setCur] = useState(0);
    const timerRef = useRef(null);
    const navigate = useNavigate();
    const total = SLIDES.length;

    function go(idx) {
        setCur((idx + total) % total);
    }

    function startTimer() {
        timerRef.current = setInterval(() => setCur(c => (c + 1) % total), AUTOPLAY_MS);
    }

    function stopTimer() {
        clearInterval(timerRef.current);
    }

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, []);

    return (
        <section className="mg">
            <div className="mg-head">
                <p className="mg-eyebrow">Our work</p>
                <h2 className="mg-title">Before &amp; after transformations</h2>
                <p className="mg-sub">Real repairs. Real results. Delivered to your door.</p>
            </div>

            {/* stage */}
            <div className="mg-stage" onMouseEnter={stopTimer} onMouseLeave={startTimer}>
                {SLIDES.map((s, i) => (
                    <div key={s.id} className={`mg-slide${i === cur ? " on" : ""}`}>
                        <img src={s.img} alt={s.label} draggable={false} />
                        <div className="mg-slide-overlay">
                            <div className="mg-slide-info">
                                <span className="mg-slide-tag">{s.tag}</span>
                                <p className="mg-slide-label">{s.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="mg-arr mg-arr-left" onClick={() => go(cur - 1)} aria-label="Previous">&#8592;</button>
                <button className="mg-arr mg-arr-right" onClick={() => go(cur + 1)} aria-label="Next">&#8594;</button>
                <span className="mg-counter">{cur + 1} / {total}</span>
            </div>

            {/* dots */}
            <div className="mg-dots">
                {SLIDES.map((_, i) => (
                    <button key={i} className={`mg-dot${i === cur ? " on" : ""}`} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
                ))}
            </div>

            {/* thumbnails */}
            <div className="mg-thumbs">
                {SLIDES.map((s, i) => (
                    <div key={s.id} className={`mg-thumb${i === cur ? " on" : ""}`} onClick={() => go(i)}>
                        <img src={s.img} alt={s.label} draggable={false} />
                    </div>
                ))}
            </div>

            {/* see full gallery */}
            <div className="mg-footer">
                <button className="mg-see-all" onClick={() => navigate("/gallery")}>
                    See full gallery &rarr;
                </button>
            </div>
        </section>
    );
}