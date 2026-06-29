import { useState } from "react";
import "../CSS/gallery.css";
import MiniGallery from "./mini-gallery";

const ALL_ITEMS = [
    { id:  1, label: "Bumper respray",      tag: "Paint",  img: "src/assets/Images/eugenia-pan-kiv-Vno9rNyyzxo-unsplash.jpg" },
    { id:  2, label: "Door dent removal",   tag: "Body",   img: "src/assets/Images/florian-olivo-e_7fMjpdAgw-unsplash.jpg" },
    { id:  3, label: "Hood repaint",        tag: "Paint",  img: "src/assets/Images/kc-shum-Hv_gKPOXmwE-unsplash.jpg" },
    { id:  4, label: "Scratch repair",      tag: "Finish", img: "src/assets/Images/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg" },
    { id:  5, label: "Hail restoration",    tag: "Body",   img: "src/assets/Images/mehmet-talha-onuk-rU_bvNfr8pQ-unsplash.jpg" },
    { id:  6, label: "Mirror replacement",  tag: "Parts",  img: "src/assets/Images/omar-ramadan-hm9fUlGCyAg-unsplash.jpg" },
    { id:  7, label: "Full detail",         tag: "Detail", img: "src/assets/Images/sten-rademaker-UZUzvJEvKnI-unsplash.jpg" },
    { id:  8, label: "Panel repaint",       tag: "Paint",  img: "src/assets/Images/ronni-ventura-7NICZxXk7C8-unsplash.jpg" },
    { id:  9, label: "Rim refinish",        tag: "Parts",  img: "/images/gallery/rim-refinish.jpg" },
    { id: 10, label: "Rust repair",         tag: "Body",   img: "/images/gallery/rust-repair.jpg" },
    { id: 11, label: "Ceramic coating",     tag: "Detail", img: "/images/gallery/ceramic-coat.jpg" },
    { id: 12, label: "Chip touch-up",       tag: "Finish", img: "/images/gallery/chip-touchup.jpg" },
    { id: 13, label: "Fender respray",      tag: "Paint",  img: "/images/gallery/fender-respray.jpg" },
    { id: 14, label: "Bumper dent fix",     tag: "Body",   img: "/images/gallery/bumper-dent.jpg" },
    { id: 15, label: "Window tint removal", tag: "Finish", img: "/images/gallery/tint-removal.jpg" },
];

const PAGE_SIZE = 9;

function GalleryItem({ item }) {

    return (
        <div className="gal-item">
            <img src={item.img} alt={item.label} draggable={false} />
            <div className="gal-overlay">
                <div className="gal-actions">
                    <button className="gal-action" title="Like" aria-label="Like">&#9825;</button>
                    <button className="gal-action" title="Download" aria-label="Download">&#8595;</button>
                </div>
                <div className="gal-info">
                    <p className="gal-label">{item.label}</p>
                    <span className="gal-tag">{item.tag}</span>
                </div>
            </div>
        </div>
    );
}

export default function Gallery() {
    const [visible, setVisible] = useState(PAGE_SIZE);
    const items = ALL_ITEMS.slice(0, visible);

    const col0 = items.filter((_, i) => i % 3 === 0);
    const col1 = items.filter((_, i) => i % 3 === 1);
    const col2 = items.filter((_, i) => i % 3 === 2);

    return (
        <section className="gal">
            <div className="gal-head">
                <p className="gal-eyebrow">Our work</p>
                <h2 className="gal-title">Before &amp; after transformations</h2>
                <p className="gal-sub">Real repairs. Real results. Delivered to your door.</p>
            </div>

            <div className="gal-cols">
                {[col0, col1, col2].map((col, ci) => (
                    <div key={ci} className="gal-col">
                        {col.map(item => <GalleryItem key={item.id} item={item} />)}
                    </div>
                ))}
            </div>

            <div className="gal-footer">
                {visible < ALL_ITEMS.length && (
                    <button className="gal-load-btn" onClick={() => setVisible(v => v + PAGE_SIZE)}>
                        Load more
                    </button>
                )}
                <p className="gal-count">
                    Showing {Math.min(visible, ALL_ITEMS.length)} of {ALL_ITEMS.length}
                </p>
            </div>
        </section>
    );
}