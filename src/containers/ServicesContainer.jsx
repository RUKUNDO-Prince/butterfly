import { Icon } from '@iconify/react'
import React from 'react'

const ServicesContainer = (props) => {
  return (
    <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
        <div className="icon-box">
            <div className="icon"><Icon icon={props.icon} color={props.color} className='icon icon-item' /></div>
            <h4 className="title"><a href="">{props.title}</a></h4>
            <p className="description">{props.desc}</p>
        </div>
    </div>
  )
}

export default ServicesContainer
