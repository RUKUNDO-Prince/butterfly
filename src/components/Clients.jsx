import React from 'react'
import client1 from '../assets/img/clients/client-1.png'
import client2 from '../assets/img/clients/client-2.png'
import client3 from '../assets/img/clients/client-3.png'
import client4 from '../assets/img/clients/client-4.png'
import client5 from '../assets/img/clients/client-5.png'
import client6 from '../assets/img/clients/client-6.png'
import client7 from '../assets/img/clients/client-7.png'
import client8 from '../assets/img/clients/client-8.png'

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client1} className="img-fluid" alt="client1" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client3} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client6} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client7} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={client8} className="img-fluid" alt="" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Clients
