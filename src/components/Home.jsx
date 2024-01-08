import React from 'react'
import img from '../assets/img/hero-img.png'

const Home = () => {
  return (
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Creating websites that make you stop & stare</h1>
          <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
          <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>

  </section>
  )
}

export default Home
