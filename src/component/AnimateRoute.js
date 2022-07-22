import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Portfolio from '../Pages/Portfolio'
import { Routes, Route, useLocation } from "react-router-dom"


const AnimateRoute = () => {
    // use location for animation purpose(motion.framer)
    const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
  )
}

export default AnimateRoute