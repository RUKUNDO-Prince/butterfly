import React from 'react'
import GalleryContainer from '../containers/GalleryContainer'
import { galleryData } from '../constants/data'


const Gallery = () => {
  const galleryList = galleryData.map((item, index) => {
    return (
      <GalleryContainer key={index} img={item.img} />
    )
  })
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row no-gutters">

          {galleryList}

        </div>

      </div>
    </section>
  )
}

export default Gallery
