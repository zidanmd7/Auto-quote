import { useEffect, useRef, useState } from "react";
import "../CSS/cornernav.css";

function CornerNav() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const navLinks = [
        { name: "home", href: "#home", className: "nav-home" },
        { name: "contact", href: "#contact", className: "nav-contact" },
        { name: "about", href: "#about", className: "nav-about" },
        { name: "services", href: "#services", className: "nav-services" },
        { name: "quote", href: "#quote", className: "nav-quote" },
    ];

    useEffect(() => {
        function handleOutsideClick(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <nav className={`corner-nav ${isOpen ? "open" : ""}`} ref={navRef}>
            {/* Desktop radial menu */}
            <div className="corner-menu desktop-radial-menu">
                <button
                    className="corner-trigger"
                    aria-label="Open navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="wrench-icon">🔧</span>
                    <span className="menu-text">MENU</span>
                </button>

                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`corner-link ${link.className}`}
                        onClick={() => setIsOpen(false)}
                    >
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>

            {/* Mobile menu button */}
            <button
                className="phone-nav-button"
                aria-label="Open mobile menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="phone-nav-icon">🔧</span>
                <span className="phone-nav-text">MENU</span>
            </button>

            {/* Mobile bottom sheet */}
            <div className="phone-nav-sheet">
                <button
                    className="phone-nav-close"
                    aria-label="Close mobile menu"
                    onClick={() => setIsOpen(false)}
                >
                    ×
                </button>

                <div className="phone-nav-grid">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="phone-nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default CornerNav;