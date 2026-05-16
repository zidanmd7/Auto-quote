import React from "react";
import "../CSS/Appointment.css";

function Appointment() {
    return (
        <main className="appointment-page">
            <section className="appointment-card">
                {/* LEFT SIDE */}
                <div className="appointment-left">
                    <div className="appointment-logo-wrap">
                        <img src="/Images/logo.png" alt="The Mobile Body Shop Logo" className="appointment-logo" />
                        <span>THEMOBILEBODYSHOP</span>
                    </div>

                    <div className="appointment-left-content">
                        <h1>Book your mobile repair appointment.</h1>
                        <p>
                            Schedule a time for paint, body, or collision repair service.
                            We bring professional auto body work directly to you.
                        </p>
                    </div>

                    <div className="appointment-contact">
                        <div className="appointment-contact-row">
                            <span className="appointment-icon">☎</span>
                            <span>(402) 305-0098</span>
                        </div>

                        <div className="appointment-contact-row">
                            <span className="appointment-icon">✉</span>
                            <span>info@themobilebodyshop.com</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="appointment-right">
                    <h2>Book An Appointment</h2>

                    <form className="appointment-form">
                        <div className="form-grid">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />

                            <input type="email" placeholder="Email Address" />
                            <input type="tel" placeholder="Phone Number" />

                            <select defaultValue="">
                                <option value="" disabled>
                                    Select Service
                                </option>
                                <option>Paint Repair</option>
                                <option>Dent Repair</option>
                                <option>Bumper Repair</option>
                                <option>Collision Repair</option>
                                <option>Estimate / Inspection</option>
                            </select>

                            <input type="date" />
                        </div>

                        <select className="full-input" defaultValue="">
                            <option value="" disabled>
                                Select Timeslot
                            </option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                        </select>

                        <textarea
                            className="full-input"
                            placeholder="Additional Message"
                            rows="4"
                        ></textarea>

                        <button type="submit" className="appointment-submit">
                            Book Appointment
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Appointment;