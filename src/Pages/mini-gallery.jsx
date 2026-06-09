import { useState, useEffect, useRef } from "react";
import "./mini_gallery.css";

const ITEMS = [
    { id: 1, label: "Bumper respray",        tag: "Paint",  img: "/images/gallery/bumper-respray.jpg" },
    { id: 2, label: "Door dent removal",     tag: "Body",   img: "/images/gallery/door-dent.jpg" },
    { id: 3, label: "Full panel repaint",    tag: "Paint",  img: "/images/gallery/panel-repaint.jpg" },
    { id: 4, label: "Scratch & chip repair", tag: "Finish", img: "/images/gallery/scratch-repair.jpg" },
    { id: 5, label: "Hail damage restore",   tag: "Body",   img: "/images/gallery/hail-damage.jpg" },
    { id: 6, label: "Side mirror replace",   tag: "Parts",  img: "/images/gallery/mirror-replace.jpg" },
];

const OFFSETS = [-2, -1, 0, 1, 2];

const POSITION_MAP = {
    "-2": { xPct: -0.18 * 2, scale: 0.62, rotate: -14, opacity: 0.45, z: 1 },
    "-1": { xPct: -0.18,     scale: 0.78, rotate:  -7, opacity: 0.70, z: 2 },
    "0": { xPct:  0,        scale: 1.00, rotate:   0, opacity: 1.00, z: 5 },
    "1": { xPct:  0.18,     scale: 0.78, rotate:   7, opacity: 0.70, z: 2 },
    "2": { xPct:  0.18 * 2, scale: 0.62, rotate:  14, opacity: 0.45, z: 1 },
};

const CARD_SIZE = {
    "-2": { w: 165, h: 195 },
    "-1": { w: 210, h: 245 },
    "0": { w: 260, h: 300 },
    "1": { w: 210, h: 245 },
    "2": { w: 165, h: 195 },
};

export default function MiniGallery() {
    const [current, setCurrent] = useState(0);
    const total = ITEMS.length;
    const stageRef = useRef(null);
    const [stageW, setStageW] = useState(600);

    useEffect(() => {
        const obs = new ResizeObserver(([e]) => setStageW(e.contentRect.width));
        if (stageRef.current) obs.observe(stageRef.current);
        return () => obs.disconnect();
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    return (
        <section className="mg-section">
            <div className="mg-header">
                <p className="mg-eyebrow">Our work</p>
                <h2 className="mg-title">Before &amp; after transformations</h2>
                <p className="mg-sub">Real repairs. Real results. Delivered to your door.</p>
            </div>

            <div className="mg-stage" ref={stageRef}>
                {OFFSETS.map((off) => {
                    const idx = (current + off + total) % total;
                    const item = ITEMS[idx];
                    const p = POSITION_MAP[String(off)];
                    const s = CARD_SIZE[String(off)];
                    const centerX = stageW / 2;
                    const left = centerX - s.w / 2 + p.xPct * stageW;
                    const top = (300 - s.h) / 2;

                    return (
                        <div
                            key={`${off}-${idx}`}
                            className={`mg-card${off === 0 ? " mg-card--active" : ""}`}
                            style={{
                                width: s.w,
                                height: s.h,
                                left,
                                top,
                                transform: `scale(${p.scale}) rotate(${p.rotate}deg)`,
                                opacity: p.opacity,
                                zIndex: p.z,
                            }}
                            onClick={() => {
                                if (off !== 0) setCurrent((current + off + total) % total);
                            }}
                        >
                            <img src={item.img} alt={item.label} draggable={false} />
                            <div className="mg-card-label">
                                <span className="mg-card-tag">{item.tag}</span>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mg-footer">
                <div className="mg-controls">
                    <button className="mg-arrow" onClick={prev} aria-label="Previous">&#8592;</button>
                    <div className="mg-dots">
                        {ITEMS.map((_, i) => (
                            <button
                                key={i}
                                className={`mg-dot${i === current ? " mg-dot--active" : ""}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button className="mg-arrow" onClick={next} aria-label="Next">&#8594;</button>
                </div>

                <button className="mg-see-more">See all work &rarr;</button>
            </div>
        </section>
    );
}