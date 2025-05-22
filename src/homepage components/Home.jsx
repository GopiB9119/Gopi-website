import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./Home.css";

const Home = () => {
    const currentYear = new Date().getFullYear();
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    const handleProfileClick = () => {
        if (user) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="home">
            {/* Floating Profile Button */}
            <button
                className="profile-fab"
                onClick={handleProfileClick}
                title={user ? 'Profile' : 'Login'}
            >
                <div className="profile-fab-avatar">
                    {user?.email?.charAt(0).toUpperCase() || <span role="img" aria-label="profile">👤</span>}
                </div>
            </button>
            <div className="container">
                <header className="title">
                    <h1>The Beauty of Dreams</h1>
                    <p className="subtitle">Where Dreams Come to Life</p>
                </header>
            </div>

            <div className="content">
                <section className="vision-section">
                    <div className="section-icon">✨</div>
                    <h2>Our Vision</h2>
                    <p>
                        Our vision is to create a world where everyone has the opportunity to achieve their dreams. 
                        We believe that everyone has the potential to achieve greatness, and we want to help you unlock that potential.
                    </p>
                </section>

                <section className="mission-section">
                    <div className="section-icon">🎯</div>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to help you achieve your dreams by providing you with the best resources and tools 
                        to help you grow and succeed in your career. We believe that everyone has the potential to achieve 
                        greatness, and we want to help you unlock that potential.
                    </p>
                </section>

                <section className="features-section">
                    <h2>Discover Dream Journal</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📝</div>
                            <h3>Record Dreams</h3>
                            <p>Capture your dreams in detail with our intuitive journaling system</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h3>Analyze Patterns</h3>
                            <p>Discover recurring themes and patterns in your dreams</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🤝</div>
                            <h3>Share Stories</h3>
                            <p>Connect with others and share your dream experiences</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📚</div>
                            <h3>Learn & Grow</h3>
                            <p>Explore the fascinating world of dreams and their meanings</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>Start Your Dream Journey Today</h2>
                    <p>Join our community of dreamers and begin your exploration of the subconscious mind.</p>
                </section>
            </div>

            <div className="footer">
                <Link 
                    to="/dreamcastel" 
                    className="btn"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <span>Share Your Story</span>
                    {isHovered && <span className="btn-arrow">→</span>}
                </Link>
                <Link to="/companystory" className="btn">
                    <span>Read Stories</span>
                </Link>
            </div>

            <div className="about1">
                <footer>
                    <p>&copy; Dream Journal {currentYear}</p>
                    <div className="footer-links">
                        <Link to="/about" className="about-link">
                            <span className="about-icon">✨</span>
                            About Us
                        </Link>
                        <Link to="/join-community" className="about-link">
                            <span className="about-icon">🤝</span>
                            Join Community
                        </Link>
                        <Link to="/subscribe" className="about-link">
                            <span className="about-icon">📬</span>
                            Subscribe
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
