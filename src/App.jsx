import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './homepage components/Home'
import Dreamcastel from './Secondpage/Dreamcastel.jsx'
import About from './Secondpage/About.jsx'
import CompanyStory from './Secondpage/CompanyStory.jsx'
import JoinCommunity from './Secondpage/JoinCommunity.jsx'
import Subscribe from './Secondpage/Subscribe.jsx'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Navigation from './components/Navigation'
import SplashScreen from './components/SplashScreen'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // The navigation to login will be handled by the Routes
  };

  return (
    <AuthProvider>
      <Router>
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <>
            <Navigation />
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/edit-profile" element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              } />
              <Route path="/dreamcastel" element={
                <ProtectedRoute>
                  <Dreamcastel />
                </ProtectedRoute>
              } />
              <Route path='/about' element={<About />} />
              <Route path='/companystory' element={
                <ProtectedRoute>
                  <CompanyStory />
                </ProtectedRoute>
              } />
              <Route path='/join-community' element={
                <ProtectedRoute>
                  <JoinCommunity />
                </ProtectedRoute>
              } />
              <Route path='/subscribe' element={
                <ProtectedRoute>
                  <Subscribe />
                </ProtectedRoute>
              } />
            </Routes>
          </>
        )}
      </Router>
    </AuthProvider>
  )
}

export default App;
