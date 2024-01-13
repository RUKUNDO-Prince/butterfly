import React from 'react'
import ClientsContainer from '../containers/ClientsContainer'
import { clientsData } from '../constants/data'

const Clients = () => {
  const clientsList = clientsData.map((item, index) => {
    return (
      <ClientsContainer key={index} {...item} />
    )
  })
  return (
    <section id="clients" className="clients">
      <div className="container">

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

          {/* <div className="col-lg-3 col-md-4 col-6">
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
          </div> */}

          {clientsList}

        </div>

      </div>
    </section>
  )
}

export default Clients
