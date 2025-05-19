import React, { useState } from 'react';
import './JoinCommunity.css';

const JoinCommunity = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interests: [],
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the data to your backend
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                interests: [],
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="join-community">
            <div className="header">
                <div className="header-content">
                    <h1>Join Our Community</h1>
                    <div className="header-decoration">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>

            <div className="community-content">
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="join-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Interests</label>
                            <div className="interests-grid">
                                {['Dream Journaling', 'Storytelling', 'Cosmic Exploration', 'Creative Writing'].map(interest => (
                                    <button
                                        key={interest}
                                        type="button"
                                        className={`interest-btn ${formData.interests.includes(interest) ? 'active' : ''}`}
                                        onClick={() => handleInterestChange(interest)}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about yourself and why you want to join"
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Join Community
                        </button>
                    </form>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">✨</div>
                        <h2>Welcome to the Community!</h2>
                        <p>Thank you for joining us. We're excited to have you on board!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JoinCommunity; 