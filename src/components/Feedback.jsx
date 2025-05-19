import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the feedback to your backend
        setTimeout(() => {
            setSubmitted(false);
            setFeedback('');
            setRating(0);
        }, 3000);
    };

    return (
        <div className="feedback-container">
            <div className="feedback-card">
                <h2>Share Your Experience</h2>
                <p>Help us improve by sharing your thoughts</p>
                
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="rating-container">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`star-button ${star <= (hoveredRating || rating) ? 'active' : ''}`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        
                        <div className="feedback-input">
                            <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Tell us what you think..."
                                required
                            />
                        </div>
                        
                        <button type="submit" className="submit-feedback">
                            Submit Feedback
                        </button>
                    </form>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>Thank You!</h3>
                        <p>Your feedback has been submitted successfully.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Feedback; 