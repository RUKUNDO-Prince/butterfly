import React from 'react';
import { Home, About, Services, Portfolio, Team, Contact, Header, Footer } from './components/index.js';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
