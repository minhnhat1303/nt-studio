import React from 'react'
import HeroSection from './container/HeroSection'
import AboutSection from './container/AboutSection'
import ProjectSection from './container/ProjectSection'
import ContactSection from './container/ContactSection'
import Footer from './container/Footer'

const Container = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Container