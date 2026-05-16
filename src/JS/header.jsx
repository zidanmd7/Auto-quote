import { navigation } from "./assets.js";
import "../CSS/index.css";

function Header() {
    return (
        <header className="header">
            {/* LEFT: LOGO */}
            <div className="header-left">
                <h1 className="logo">LOGO</h1>
            </div>

            {/* CENTER: NAV */}
            <nav className="nav-menu">
                {/* optional nav later */}
            </nav>

            {/* RIGHT: CTA */}
            <div className="header-right">
                <button className="quote-btn">QUOTE</button>
            </div>
        </header>
    );
}

export default Header;