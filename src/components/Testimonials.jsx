import React from 'react'
import testimonials1 from '../assets/img/testimonials/testimonials-1.jpg'
import testimonials2 from '../assets/img/testimonials/testimonials-2.jpg'
import testimonials3 from '../assets/img/testimonials/testimonials-3.jpg'
import testimonials4 from '../assets/img/testimonials/testimonials-4.jpg'
import testimonials5 from '../assets/img/testimonials/testimonials-5.jpg'
import { Icon } from '@iconify/react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <Icon icon="gridicons:quote" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <Icon icon="gridicons:quote" hFlip={true} vFlip={true} />
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials2} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <Icon icon="gridicons:quote" />
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <Icon icon="gridicons:quote" hFlip={true} vFlip={true} />
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials3} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <Icon icon="gridicons:quote" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <Icon icon="gridicons:quote" hFlip={true} vFlip={true} />
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials4} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <Icon icon="gridicons:quote" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <Icon icon="gridicons:quote" hFlip={true} vFlip={true} />
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={testimonials5} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <Icon icon="gridicons:quote" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <Icon icon="gridicons:quote" hFlip={true} vFlip={true} />
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
