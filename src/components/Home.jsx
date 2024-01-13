import React from 'react'
import img from '../assets/img/hero-img.png'

const Home = () => {
  return (
    // eslint-disable-next-line no-undef
    <section id="hero" className="d-flex align-items-center" >

    <div className="container" >
      <div className="row">
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Bring Your Business Online With IT Company Services</h1>
          {/* <h2>Empower your business with cutting-edge IT solutions tailored to elevate performance, amplify innovation, and drive digital transformation. 
            <br />From bespoke software development to seamless cloud integration, we're your partner in building a future-ready foundation for success.</h2> */}
          <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
        </div>
        {/* <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={img} className="img-fluid" alt="" />
        </div> */}
      </div>
    </div>

  </section>
  )
}

export default Home
