import "../CSS/getQuote.css"
import {useState} from "react";
import QuoteConfirmation from "./quoteConfirmation";



function GetQuote() {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <QuoteConfirmation
                onHome={() => window.location.href = "/"}
                onResubmit={() => setSubmitted(false)}
            />
        );
    }
    return (
        <main className="gq-page">
            <div className="gq-grid">

                {/* LEFT PANEL — Personal info, car, location */}
                <div className="gq-left">
                    <h2 className="gq-panel-title">Personal information</h2>

                    <div className="gq-row2">
                        <div className="gq-field">
                            <input type="text" placeholder="Full name" />
                        </div>
                        <div className="gq-field">
                            <input type="email" placeholder="Email address" />
                        </div>
                    </div>

                    <div className="gq-field">
                        <input type="text" placeholder="Zip code" className="gq-zip" />
                    </div>

                    <p className="gq-sec-label">Car make and model</p>
                    <div className="gq-row2">
                        <div className="gq-field">
                            <select>
                                <option value="">Year</option>
                                {Array.from({ length: 32 }, (_, i) => 2026 - i).map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="gq-field">
                            <input type="text" placeholder="Make and model (e.g. Ford Mustang)" />
                        </div>
                    </div>

                    <p className="gq-sec-label">Repair location preference</p>
                    {[
                        { value: "house",     label: "House (driveway / garage)" },
                        { value: "apartment", label: "Apartment (private parking)" },
                        { value: "office",    label: "Office (private parking)" },
                        { value: "suggest",   label: "Suggest a location" },
                    ].map(({ value, label }) => (
                        <label key={value} className="gq-radio-opt">
                            <input type="radio" name="repair-location" value={value} />
                            {label}
                        </label>
                    ))}

                    {/* Mobile-only: upload + description inline after the form */}
                    <div className="gq-mobile-extra">
                        <p className="gq-sec-label" style={{ marginTop: '24px' }}>Photos &amp; details</p>

                        <div className="gq-upload-zone">
                            <div className="gq-upload-icon">&#8679;</div>
                            <p className="gq-upload-label">Drop photos here</p>
                            <p className="gq-upload-sub">
                                <span>Browse files</span> — JPG, PNG up to 10 MB
                            </p>
                        </div>

                        <textarea
                            className="gq-desc"
                            placeholder="Describe the damage — location on car, how it happened, anything that helps us give you an accurate quote…"
                        />

                        <p className="gq-disclaimer">
                            By submitting you agree to our terms and allow us to contact you regarding your quote.
                            We never share your information with third parties.
                        </p>

                        <button className="gq-btn">Get my quote</button>
                    </div>
                </div>

                {/* RIGHT PANEL — desktop only */}
                <div className="gq-right">
                    <div className="gq-right-inner">
                        <p className="gq-panel-title">Upload photos &amp; details</p>

                        <div className="gq-upload-zone">
                            <div className="gq-upload-icon">&#8679;</div>
                            <p className="gq-upload-label">Drop photos here</p>
                            <p className="gq-upload-sub">
                                <span>Browse files</span> — JPG, PNG up to 10 MB
                            </p>
                        </div>

                        <textarea
                            className="gq-desc"
                            placeholder="Describe the damage — location on car, how it happened, anything that helps us give you an accurate quote…"
                        />

                        <p className="gq-disclaimer">
                            By submitting you agree to our terms and allow us to contact you regarding your quote.
                            We never share your information with third parties.
                        </p>

                        <button className="gq-btn" onClick={() => setSubmitted(true)}>
                            Get my quote
                        </button>                    </div>
                </div>

            </div>
        </main>
    );
}

export default GetQuote;