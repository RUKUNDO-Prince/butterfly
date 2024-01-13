import React from 'react'
import { Icon } from '@iconify/react';
import ServicesContainer from '../containers/ServicesContainer';
import { servicesData } from '../constants/data';

const Services = () => {
  const servicesList = servicesData.map((item, index) => {
    return (
      <ServicesContainer key={index} icon={item.icon} color={item.color} title={item.title} desc={item.desc} />
    )
  })
  return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          {servicesList}
        </div>

      </div>
    </section>
  )
}

export default Services
