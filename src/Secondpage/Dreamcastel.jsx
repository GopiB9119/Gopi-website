import React, { useState } from "react";
import "./Dreamcastel.css";
import { Link } from "react-router-dom";

const StoryCraft = () => {
    const [formData, setFormData] = useState({
        chapterNumber: "",
        title: "",
        content: "",
        storyType: "fantasy",
        date: new Date().toLocaleDateString()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Capitalize first letter if it's the title field
        if (name === 'title') {
            const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
            setFormData(prev => ({
                ...prev,
                [name]: capitalizedValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get existing stories from localStorage
        const existingStories = JSON.parse(localStorage.getItem('stories') || '[]');
        
        // Add new story
        const newStory = {
            ...formData,
            id: Date.now(), // Unique identifier
            date: new Date().toLocaleDateString()
        };
        
        // Save updated stories array
        localStorage.setItem('stories', JSON.stringify([...existingStories, newStory]));
        
        // Reset form
        setFormData({
            chapterNumber: "",
            title: "",
            content: "",
            storyType: "fantasy",
            date: new Date().toLocaleDateString()
        });

        alert("Your story has been saved successfully!");
    };

    return (
        <div className="dreamcastel">
            <div className="header">
                <div className="header-content">
                    <h1>StoryCraft</h1>
                    <div className="header-decoration">
                        <span className="star">✧</span>
                        <span className="star">✧</span>
                        <span className="star">✧</span>
                    </div>
                </div>
            </div>

            <div className="story-form-container">
                <form onSubmit={handleSubmit} className="story-form">
                    <div className="form-group">
                        <label htmlFor="chapterNumber">Chapter Number</label>
                        <input
                            type="number"
                            id="chapterNumber"
                            name="chapterNumber"
                            value={formData.chapterNumber}
                            onChange={handleChange}
                            required
                            min="1"
                            placeholder="Enter chapter number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Chapter Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            maxLength="100"
                            placeholder="Enter chapter title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="storyType">Story Type</label>
                        <select
                            id="storyType"
                            name="storyType"
                            value={formData.storyType}
                            onChange={handleChange}
                            required
                        >
                            <option value="fantasy">Fantasy</option>
                            <option value="adventure">Adventure</option>
                            <option value="mystery">Mystery</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Story Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows="8"
                            placeholder="Write your story here..."
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Save Story
                    </button>
                </form>

                <div className="preview-section">
                    <h2>Story Preview</h2>
                    <div className="preview-content">
                        <h3>Chapter {formData.chapterNumber}</h3>
                        <h4>{formData.title}</h4>
                        <p className="story-type">Type: {formData.storyType}</p>
                        <div className="story-content">
                            {formData.content || "Your story will appear here..."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryCraft;