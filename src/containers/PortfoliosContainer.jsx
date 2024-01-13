import { Icon } from '@iconify/react'
import React from 'react'

const PortfoliosContainer = (props) => {
  return (
    <div className="portfolio-wrap">
        <img src={props.img} className="img-fluid cover" alt="img" />
        <div className="portfolio-info">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
          <div className="portfolio-links">
            <a href={props.img} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><Icon icon="bx:plus" /></a>
            <a href={props.site} aria-disabled title="More Details" target="_blank"><Icon icon="bx:link" /></a>
          </div>
        </div>
      </div>
  )
}

export default PortfoliosContainer
