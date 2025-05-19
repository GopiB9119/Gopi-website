import React, { useState, useEffect } from "react";
import "./CompanyStory.css";
import comicPdf from "../assets/comic.pdf";

const CompanyStory = ({ isCompanyUser, chapterNumber, note, item }) => {
    const [viewMode, setViewMode] = useState('story');
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        // Load stories from localStorage
        const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');
        setStories(savedStories);
    }, []);

    const handleStoryClick = (story) => {
        setSelectedStory(story);
    };

    const handleCloseStory = () => {
        setSelectedStory(null);
    };

    return (
        <div className="companystory">
            <div className="header">
                <div className="header-content">
                    <h1>Celestial Dreams: A Journey Beyond</h1>
                    <div className="header-decoration">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>
            </div>
            {isCompanyUser ? (
                <div className="story-content">
                    <div className="view-toggle">
                        <button 
                            className={`toggle-btn ${viewMode === 'story' ? 'active' : ''}`}
                            onClick={() => setViewMode('story')}
                        >
                            <span className="btn-icon">📖</span>
                            Read Story
                        </button>
                        <button 
                            className={`toggle-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                            onClick={() => setViewMode('pdf')}
                        >
                            <span className="btn-icon">📄</span>
                            View PDF
                        </button>
                    </div>

                    {viewMode === 'pdf' ? (
                        <div className="pdf-viewer">
                            <div className="pdf-header">
                                <h3>Celestial Dreams Comic</h3>
                                <p>Scroll to explore the cosmic journey</p>
                            </div>
                            <iframe
                                src={comicPdf}
                                title="Celestial Dreams Comic"
                                className="pdf-iframe"
                            />
                        </div>
                    ) : (
                        <>
                            {selectedStory ? (
                                <div className="story-detail">
                                    <button className="close-btn" onClick={handleCloseStory}>×</button>
                                    <div className="story-detail-content">
                                        <h2>Chapter {selectedStory.chapterNumber}: {selectedStory.title}</h2>
                                        <p className="story-meta">
                                            <span className="story-type">{selectedStory.storyType}</span>
                                            <span className="story-date">{selectedStory.date}</span>
                                        </p>
                                        <div className="story-text">
                                            {selectedStory.content}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="stories-grid">
                                    {stories.map((story) => (
                                        <div 
                                            key={story.id} 
                                            className="story-card"
                                            onClick={() => handleStoryClick(story)}
                                        >
                                            <h3>Chapter {story.chapterNumber}</h3>
                                            <h4>{story.title}</h4>
                                            <p className="story-type">{story.storyType}</p>
                                            <p className="story-date">{story.date}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className="output-container">
                    <h2>Combined Output:</h2>
                    <h5>{chapterNumber}</h5>
                    <h4 style={{ textTransform: 'capitalize' }}>{note}</h4>
                    <h4 style={{ textTransform: 'capitalize' }}>{item}</h4>
                </div>
            )}
        </div>
    );
}

export default CompanyStory;
