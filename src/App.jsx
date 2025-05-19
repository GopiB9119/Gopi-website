import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './homepage components/Home'
import Dreamcastel from './Secondpage/Dreamcastel.jsx'
import About from './Secondpage/About.jsx' // Updated import path
import CompanyStory from './Secondpage/CompanyStory.jsx' // Import the CompanyStory component
import JoinCommunity from './Secondpage/JoinCommunity.jsx'
import Subscribe from './Secondpage/Subscribe.jsx'

function App() {
  const [count, setCount] = useState(0)
  const isCompanyUser = true; // Set this based on your authentication logic

  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/dreamcastel" element={<Dreamcastel />} />
        <Route path='/about' element={<About />} />
        <Route path='/companystory' element={<CompanyStory isCompanyUser={isCompanyUser} />} /> {/* Pass isCompanyUser prop */}
        <Route path='/join-community' element={<JoinCommunity />} />
        <Route path='/subscribe' element={<Subscribe />} />
      </Routes>
    </Router>
  )
}

export default App;
