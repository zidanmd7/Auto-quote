import React from "react";
import { Link } from "react-router-dom";
import "../CSS/landing.css";

function Landing() {
    return (
        <section className="landing-page">
            <div className="landing-main">
                <div className="landing-left">
                    <div className="brand-row">
                        <img
                            src="/Images/logo.png"
                            alt="THEMOBILEBODYSHOP logo"
                            className="brand-logo"
                        />
                        <span className="brand-name">THEMOBILEBODYSHOP</span>
                    </div>

                    <div className="hero-content">
                        <h1>
                            Mobile body shop service
                            <br />
                            at your home or office
                        </h1>

                        <p className="hero-copy-subtext">
                            Repairs done in hours, not days. Fast mobile dent,
                            <br />
                            scratch, paint, and bumper repair without the shop visit.
                        </p>

                        <div className="hero-actions desktop-hero-actions">
                            <button className="hero-btn primary-btn">
                                <span>Get a Quote</span>
                                <span className="btn-arrow">→</span>
                            </button>

                            <Link to="/appointment" className="hero-btn secondary-btn">
                                <span>make an appointment</span>
                                <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="landing-right">
                    <img
                        src="/Images/shop-hero.png"
                        alt="Auto body shop garage"
                        className="hero-shop-img"
                    />

                    <div className="mobile-image-overlay">
                        <p>
                            Repairs done in hours, not days. Fast mobile dent, scratch, paint,
                            and bumper repair without the shop visit.
                        </p>

                        <div className="hero-actions mobile-hero-actions">
                            <button className="hero-btn primary-btn">
                                <span>Get a Quote</span>
                                <span className="btn-arrow">→</span>
                            </button>

                            <Link to="/appointment" className="hero-btn secondary-btn">
                                <span>Make an appointment</span>
                                <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-info-row">
                <div className="info-box">
                    <span className="info-icon">★</span>
                    <span>Rating</span>
                </div>

                <div className="info-box">
                    <span className="info-icon">◷</span>
                    <span>As soon as possible</span>
                </div>

                <div className="info-box">
                    <span className="info-icon">⚲</span>
                    <span>In your home</span>
                </div>
            </div>
        </section>
    );
}

export default Landing;