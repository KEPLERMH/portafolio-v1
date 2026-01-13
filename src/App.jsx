import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import About from './sections/About'
// import './App.css'

function App() {

  return (
    <>
      <Hero>
        <Navbar />
        <HeroContent />
      </Hero>
      <About />
    </>
  )
}

export default App
