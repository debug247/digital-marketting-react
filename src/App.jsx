import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Counter from './components/Counter'
import Pricing from './components/Pricing'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Counter />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App