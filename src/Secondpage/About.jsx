import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="header">
                <div className="header-content">
                    <h1>About Celestial Dreams</h1>
                    <div className="header-decoration">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <div className="section-icon">🌌</div>
                    <h2>Our Vision</h2>
                    <p>
                        At Celestial Dreams, we believe in the power of imagination and the endless possibilities of the cosmos. 
                        Our journey began with a simple dream: to create stories that transport readers beyond the stars and into 
                        realms of wonder and discovery.
                    </p>
                </section>

                <section className="about-section">
                    <div className="section-icon">✨</div>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2024, Celestial Dreams emerged from a passion for storytelling and a fascination with the 
                        mysteries of the universe. We combine cutting-edge technology with timeless narrative traditions to 
                        create immersive experiences that inspire and captivate.
                    </p>
                </section>

                <section className="about-section">
                    <div className="section-icon">🚀</div>
                    <h2>Our Mission</h2>
                    <p>
                        We're dedicated to crafting stories that bridge the gap between science and fantasy, reality and 
                        imagination. Through our interactive platform, we invite readers to become part of the narrative, 
                        exploring cosmic adventures that challenge perceptions and expand horizons.
                    </p>
                </section>

                <section className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">👨‍🚀</div>
                            <h3>Vamshi</h3>
                            <p>Founder & Creative Director</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">👩‍🚀</div>
                            <h3>Gopi </h3>
                            <p>Lead Storyteller</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">👨‍💻</div>
                            <h3>Kalyan Kumar</h3>
                            <p>Technical Architect</p>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Join Our Journey</h2>
                    <p>
                        Ready to explore the cosmos with us? Connect with our community and be part of the next chapter 
                        in our celestial adventure.
                    </p>
                    <div className="contact-buttons">
                        <button className="contact-btn">Join Community</button>
                        <button className="contact-btn">Subscribe to Updates</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About; 