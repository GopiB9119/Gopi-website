import React, { useState, useEffect } from "react";
import "./CompanyStory.css";
import comicPdf from "../assets/comic.pdf";

const CompanyStory = ({ isCompanyUser }) => {
    const [viewMode, setViewMode] = useState('story');
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [sortOrder, setSortOrder] = useState('newest');
    const [timeFilter, setTimeFilter] = useState('all'); // 'all' or 'yesterday'

    useEffect(() => {
        const loadStories = () => {
            const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');

            let filteredStories = savedStories;
            if (timeFilter === 'yesterday') {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toLocaleDateString();

                filteredStories = savedStories.filter(story => story.date === yesterdayStr);
            }

            const sortedStories = filteredStories.sort((a, b) => {
                return sortOrder === 'newest'
                    ? b.chapterNumber - a.chapterNumber
                    : a.chapterNumber - b.chapterNumber;
            });

            setStories(sortedStories);
        };

        loadStories();
        window.addEventListener('storage', loadStories);
        return () => window.removeEventListener('storage', loadStories);
    }, [sortOrder, timeFilter]);

    const handleStoryClick = (story) => {
        setSelectedStory(story);
    };

    const handleCloseStory = () => {
        setSelectedStory(null);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    const handleTimeFilterChange = (filter) => {
        setTimeFilter(filter);
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

            <div className="story-content">
                <div className="view-toggle">
                    <button 
                        className={`toggle-btn ${viewMode === 'story' ? 'active' : ''}`}
                        onClick={() => setViewMode('story')}
                    >
                        <span className="btn-icon">📖</span> Read Story
                    </button>
                    <button 
                        className={`toggle-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                        onClick={() => setViewMode('pdf')}
                    >
                        <span className="btn-icon">📄</span> View PDF
                    </button>
                </div>

                {viewMode === 'pdf' ? (
                    <div className="pdf-viewer">
                        <iframe
                            src={comicPdf}
                            title="Celestial Dreams Comic"
                            className="pdf-iframe"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        />
                    </div>
                ) : selectedStory ? (
                    <div className="story-detail">
                        <button className="close-btn" onClick={handleCloseStory}>×</button>
                        <div className="story-detail-content">
                            <h2>Chapter {selectedStory.chapterNumber}: {selectedStory.title}</h2>
                            <p className="story-meta">
                                <span className="story-type">{selectedStory.storyType}</span>
                                <span className="story-date">{selectedStory.date}</span>
                            </p>
                            <div className="story-text">{selectedStory.content}</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="stories-controls">
                            <div className="filter-group">
                                <div className="sort-buttons">
                                    <button 
                                        className={`sort-btn ${sortOrder === 'newest' ? 'active' : ''}`}
                                        onClick={() => handleSortChange('newest')}
                                    >
                                        Newest First
                                    </button>
                                    <button 
                                        className={`sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
                                        onClick={() => handleSortChange('oldest')}
                                    >
                                        Oldest First
                                    </button>
                                </div>
                                <div className="time-filter">
                                    <button 
                                        className={`time-btn ${timeFilter === 'all' ? 'active' : ''}`}
                                        onClick={() => handleTimeFilterChange('all')}
                                    >
                                        All Stories
                                    </button>
                                    {/* Uncomment if you want to enable 'yesterday' filter
                                    <button 
                                        className={`time-btn ${timeFilter === 'yesterday' ? 'active' : ''}`}
                                        onClick={() => handleTimeFilterChange('yesterday')}
                                    >
                                        Yesterday's Stories
                                    </button> 
                                    */}
                                </div>
                            </div>
                            <div className="stories-count">
                                Total Stories: {stories.length}
                            </div>
                        </div>

                        <div className="stories-grid">
                            {stories.length > 0 ? (
                                stories.map((story) => (
                                    <div 
                                        key={story.id} 
                                        className="story-card"
                                        onClick={() => handleStoryClick(story)}
                                    >
                                        <h3>Chapter {story.chapterNumber}</h3>
                                        <h4>{story.title}</h4>
                                        <p className="story-type">{story.storyType}</p>
                                        <p className="story-date">{story.date}</p>
                                        <div className="story-preview">
                                            {story.content.slice(0, 100)}...
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-stories">
                                    <p>
                                        {timeFilter === 'yesterday' 
                                            ? "No stories from yesterday. Be the first to share one!" 
                                            : "No stories available yet. Be the first to share your story!"}
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CompanyStory;
