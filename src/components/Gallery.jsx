import React from 'react'
import gallery1 from '../assets/img/gallery/gallery-1.jpg'
import gallery2 from '../assets/img/gallery/gallery-2.jpg'
import gallery3 from '../assets/img/gallery/gallery-3.jpg'
import gallery4 from '../assets/img/gallery/gallery-4.jpg'
import gallery5 from '../assets/img/gallery/gallery-5.jpg'
import gallery6 from '../assets/img/gallery/gallery-6.jpg'
import gallery7 from '../assets/img/gallery/gallery-7.jpg'
import gallery8 from '../assets/img/gallery/gallery-8.jpg'

const Gallery = () => {
  return (
    <section id="gallery" class="gallery">
      <div class="container">

        <div class="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row no-gutters">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery1} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery1} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery2} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery2} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery3} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery3} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery4} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery4} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery5} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery5} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery6}class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery6}alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery7}class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery7}alt="" class="img-fluid" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery8} class="galleery-lightbox" data-gallery="gallery-item">
                <img src={gallery8} alt="" class="img-fluid" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Gallery
