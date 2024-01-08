import React from 'react'
import portfolio1 from '../assets/img/portfolio/portfolio-1.jpg'
import portfolio2 from '../assets/img/portfolio/portfolio-2.jpg'
import portfolio3 from '../assets/img/portfolio/portfolio-3.jpg'
import portfolio4 from '../assets/img/portfolio/portfolio-4.jpg'
import portfolio5 from '../assets/img/portfolio/portfolio-5.jpg'
import portfolio6 from '../assets/img/portfolio/portfolio-6.jpg'
import portfolio7 from '../assets/img/portfolio/portfolio-7.jpg'
import portfolio8 from '../assets/img/portfolio/portfolio-8.jpg'
import portfolio9 from '../assets/img/portfolio/portfolio-9.jpg'
import { Icon } from '@iconify/react';

const Portfolio = () => {
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

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio3}className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio5}data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio7} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio7} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio8} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio8} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio9} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio9} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><Icon icon="bx:plus" /></a>
                  <a href="" aria-disabled title="More Details"><Icon icon="bx:link" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Portfolio
