import React from 'react'
import { Icon } from '@iconify/react';

const Portfolio = () => {

  const portfolios = [
      { title: "Elissa-DI", simpleDescription: 'Unrivaled Gym. Unparalleled Training Fitness Classes. ', website: 'https://fitpulse1.netlify.app/', pic: 'https://fitpulse1.netlify.app/assets/HomePageGraphic-JlZ3Ss5z.png'},
      { title: "AI Visuage", simpleDescription: 'AI Visuage', website: 'https://ai-visuage.netlify.app/', pic: 'https://ai-visuage.netlify.app/assets/logo-3d2a5717.png'},
      { title: "Family Plan", simpleDescription: 'Family Plan', website: 'https://traileress.vercel.app/', pic: 'https://image.tmdb.org/t/p/w500/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg'},
      { title: "Teamate", simpleDescription: 'Hire super Humans', website: 'https://teammate-xh9u.vercel.app/', pic: 'https://teammate-xh9u.vercel.app/images/superHumans.png'},
      { title: "Games Hub", simpleDescription: 'Games Hub', website: 'https://game-hub-rho-ochre.vercel.app/', pic: 'https://game-hub-rho-ochre.vercel.app/assets/logo-ff4914e6.webp'},
      { title: "World Cities Chi", simpleDescription: 'World Cities Chi', website: 'https://world-cities-chi.vercel.app/', pic: 'https://world-cities-chi.vercel.app/Images/tokyo.jpg'},
      { title: "Dani International", simpleDescription: 'Dani International', website: 'https://daniint.com/', pic: 'https://codinghustler.com/assets/project/project-one.png'},
      { title: "Floor Range", simpleDescription: 'Think, Choose & we will Decor it.', website: 'https://www.floorrange.com/', pic: 'https://codinghustler.com/assets/project/project-two.png'},
      { title: "ZUMIAS", simpleDescription: 'ZUMIAS', website: 'https://zumias.netlify.app/', pic: 'https://codinghustler.com/assets/project/project-three.png'},
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          {portfolios.map((item, index) => (
              <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
                <div className="portfolio-wrap">
                  <img src={item.pic} className="img-fluid cover" alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.simpleDescription}</p>
                    <div className="portfolio-links">
                      <a href={item.pic} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><Icon icon="bx:plus" /></a>
                      <a href={item.website} aria-disabled title="More Details" target="_blank"><Icon icon="bx:link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              ))}

        </div>

      </div>
    </section>
  )
}

export default Portfolio
