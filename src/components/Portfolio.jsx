import React from 'react'
import { Icon } from '@iconify/react';
import PortfoliosContainer from '../containers/PortfoliosContainer';
import { portfoliosData } from '../constants/data';

const Portfolio = () => {
  const portfoliosList = portfoliosData.map((item, index) => (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
      <PortfoliosContainer img={item.img} desc={item.desc} site={item.site} title={item.title} />
    </div>
  ))
  

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

          {portfoliosList}

        </div>

      </div>
    </section>
  )
}

export default Portfolio
