import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
    const [formData, setFormData] = useState({
        email: '',
        preferences: {
            stories: true,
            updates: true,
            events: false
        }
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePreferenceChange = (preference) => {
        setFormData(prev => ({
            ...prev,
            preferences: {
                ...prev.preferences,
                [preference]: !prev.preferences[preference]
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the data to your backend
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                email: '',
                preferences: {
                    stories: true,
                    updates: true,
                    events: false
                }
            });
        }, 3000);
    };

    return (
        <div className="subscribe">
            <div className="header">
                <div className="header-content">
                    <h1>Subscribe to Updates</h1>
                    <div className="header-decoration">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>

            <div className="subscribe-content">
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="subscribe-form">
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
                            <label>Update Preferences</label>
                            <div className="preferences-grid">
                                <label className="preference-item">
                                    <input
                                        type="checkbox"
                                        checked={formData.preferences.stories}
                                        onChange={() => handlePreferenceChange('stories')}
                                    />
                                    <span>New Stories</span>
                                </label>
                                <label className="preference-item">
                                    <input
                                        type="checkbox"
                                        checked={formData.preferences.updates}
                                        onChange={() => handlePreferenceChange('updates')}
                                    />
                                    <span>Community Updates</span>
                                </label>
                                <label className="preference-item">
                                    <input
                                        type="checkbox"
                                        checked={formData.preferences.events}
                                        onChange={() => handlePreferenceChange('events')}
                                    />
                                    <span>Events & Workshops</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">✨</div>
                        <h2>Subscribed Successfully!</h2>
                        <p>Thank you for subscribing. You'll receive updates based on your preferences.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Subscribe; 