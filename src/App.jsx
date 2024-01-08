import React from 'react';
import './App.css'
import { Home, About, Services, Portfolio, Team, Contact, Header, Footer, Counts, Clients, Testimonials, Gallery } from './components/index.js';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Counts />
      <Clients />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
