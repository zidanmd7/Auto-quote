import React from "react";
import "../CSS/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">Auto Repair</h2>

                    <button className="footer-call-btn" onClick={() => window.location.href = "/appointment"}>
                        Book an Appointment
                    </button>
                </div>

                <div className="footer-column">
                    <h4>SERVICES</h4>
                    <a href="#">Auto Body</a>
                    <a href="#">Auto Glass</a>
                    <a href="#">Bumper Repair</a>
                    <a href="#">Parts</a>
                </div>

                <div className="footer-column">
                    <h4>COMPANY</h4>
                    <a href="#">Join our Team</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Warranty Pledge</a>
                    <a href="#">FAQ</a>
                </div>

                <div className="footer-column">
                    <h4>FOLLOW US</h4>

                    <div className="footer-socials">
                        <a href="https://www.facebook.com/themobileautobody" aria-label="Facebook">
                            <svg viewBox="0 0 24 24">
                                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.1 5.66 21.28 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.9h-2.34V22C18.34 21.28 22 17.1 22 12.07Z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/themobilebodyshop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
                            <svg viewBox="0 0 24 24">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 3A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5.05-2.65a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05Z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="YouTube">
                            <svg viewBox="0 0 24 24">
                                <path d="M21.58 7.19a2.72 2.72 0 0 0-1.91-1.93C17.98 4.8 12 4.8 12 4.8s-5.98 0-7.67.46a2.72 2.72 0 0 0-1.91 1.93A28.32 28.32 0 0 0 2 12a28.32 28.32 0 0 0 .42 4.81 2.72 2.72 0 0 0 1.91 1.93c1.69.46 7.67.46 7.67.46s5.98 0 7.67-.46a2.72 2.72 0 0 0 1.91-1.93A28.32 28.32 0 0 0 22 12a28.32 28.32 0 0 0-.42-4.81ZM10 15.3V8.7l5.75 3.3L10 15.3Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <p className="footer-bottom">
                © 2016. ThemobilebodyshopLLC. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;