import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default app
