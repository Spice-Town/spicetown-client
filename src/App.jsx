
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';

import About from './components/about'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Footer from './components/footer'
import Header from './components/header'
import Repairs from './components/repairs'
import Splash from './components/splash'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
