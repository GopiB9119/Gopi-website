import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="loading-spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="title">
          <h1>Profile</h1>
        </div>
        <div className="subtitle">Welcome to your personal space</div>
      </div>

      <div className="content">
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" />
              ) : (
                <div className="avatar-placeholder">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="profile-info">
              <h2>{user?.displayName || 'User'}</h2>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-card">
              <h3>Account Information</h3>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{user?.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Account Created</span>
                <span className="detail-value">
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : 'N/A'}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Sign In</span>
                <span className="detail-value">
                  {user?.metadata?.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                    : 'N/A'}
                </span>
              </div>
            </div>

            <div className="detail-card">
              <h3>Account Security</h3>
              <div className="detail-item">
                <span className="detail-label">Email Verification</span>
                <span className="detail-value">
                  {user?.emailVerified ? 'Verified' : 'Not Verified'}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Two-Factor Auth</span>
                <span className="detail-value">Not Enabled</span>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="action-button primary" onClick={() => navigate('/edit-profile')}>
              Edit Profile
            </button>
            <button className="action-button secondary" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 