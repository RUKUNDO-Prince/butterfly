import React from 'react'
import { Icon } from '@iconify/react';

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:cash-stack" color="#ff689b" /></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:calendar4-week" color="#e9bf06" /></div>
              <h4 className="title"><a href="">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:chat-text" color="#3fcdc7" /></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:credit-card-2-front" color="#41cf2e" /></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:globe" color="#d6ff22" /></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="icon-box">
              <div className="icon"><Icon icon="bi:clock" color="#4680ff" width="7000" /></div>
              <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
