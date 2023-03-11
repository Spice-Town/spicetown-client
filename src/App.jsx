
import './App.css'
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import About from './components/about'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Footer from './components/footer'
import Header from './components/header'
import Repairs from './components/repairs'
import Splash from './components/splash'
import SignIn from './components/signIn';
import Upload from './components/upload';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/gallery" element={<Gallery loggedIn={loggedIn}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signin"
          element={<SignIn onLogin={(loggedIn) => setLoggedIn(loggedIn)} />}
        />
        <Route
          path="/upload"
          element={
            loggedIn ? (
              <Upload />
            ) : (
              <Navigate to="/SignIn" />
            )
          }
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
