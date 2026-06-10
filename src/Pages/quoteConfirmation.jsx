import "../CSS/quoteConfirmation.css";

const STEPS = [
    {
        num: 1,
        title: "Review",
        body: "We look over your photos and damage description to prepare an accurate quote.",
    },
    {
        num: 2,
        title: "Quote sent",
        body: "You'll receive a detailed quote by email — no hidden fees.",
    },
    {
        num: 3,
        title: "We come to you",
        body: "Schedule a time and we'll bring the repair directly to your door.",
    },
];

export default function QuoteConfirmation({ onHome, onResubmit }) {
    return (
        <main className="qc">
            <div className="qc-card">
                <div className="qc-icon-ring">
                    <span className="qc-check">&#10003;</span>
                </div>

                <div className="qc-heading">
                    <p className="qc-eyebrow">Request received</p>
                    <h1 className="qc-title">We've got your quote request!</h1>
                </div>

                <p className="qc-body">
                    Thanks for reaching out to The Mobile Body Shop. One of our
                    technicians will review your details and get back to you within{" "}
                    <strong>1–2 business hours</strong>.
                </p>

                <hr className="qc-divider" />

                <div className="qc-steps">
                    {STEPS.map(({ num, title, body }) => (
                        <div key={num} className="qc-step">
                            <div className="qc-step-num">{num}</div>
                            <div className="qc-step-text">
                                <strong>{title}</strong>
                                {body}
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="qc-divider" />

                <button className="qc-btn" onClick={onHome}>
                    Back to home
                </button>
                <button className="qc-back" onClick={onResubmit}>
                    Submit another request
                </button>
            </div>
        </main>
    );
}