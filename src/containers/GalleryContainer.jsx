import React from 'react'

const GalleryContainer = (props) => {
  return (
    <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href={props.img} className="galleery-lightbox" data-gallery="gallery-item">
            <img src={props.img} alt="img" className="img-fluid" />
        </a>
        </div>
    </div>
  )
}

export default GalleryContainer
