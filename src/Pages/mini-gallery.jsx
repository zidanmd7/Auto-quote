import "../CSS/mini-gallery.css";

const ITEMS = [
    { id: 1, tag: "Paint",  label: "Full bumper respray",     img: "/images/gallery/bumper-respray.jpg",   wide: true },
    { id: 2, tag: "Body",   label: "Door dent removal",       img: "/images/gallery/door-dent.jpg" },
    { id: 3, tag: "Finish", label: "Scratch & chip repair",   img: "/images/gallery/scratch-repair.jpg" },
    { id: 4, tag: "Body",   label: "Hail damage restoration", img: "/images/gallery/hail-damage.jpg" },
    { id: 5, tag: "Paint",  label: "Full panel repaint",      img: "/images/gallery/panel-repaint.jpg" },
    { id: 6, tag: "Parts",  label: "Side mirror replacement", img: "/images/gallery/mirror-replace.jpg" },
];

export default function MiniGallery() {
    return (
        <section className="mg">
            <div className="mg-head">
                <p className="mg-eyebrow">Our work</p>
                <h2 className="mg-title">Before &amp; after transformations</h2>
                <p className="mg-sub">Real repairs. Real results. Delivered to your door.</p>
            </div>

            <div className="mg-grid">
                {ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className={`mg-item${item.wide ? " mg-item--wide" : ""}`}
                    >
                        <img src={item.img} alt={item.label} draggable={false} />
                        <div className="mg-overlay">
                            <div className="mg-info">
                                <span className="mg-tag">{item.tag}</span>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mg-footer">
                <button className="mg-btn">See all work &rarr;</button>
            </div>
        </section>
    );
}