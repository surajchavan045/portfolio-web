import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}

export default App
