import React from 'react'

const ClientsContainer = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-6">
        <div className="client-logo">
          <img src={props.img} className="img-fluid" alt="img" />
        </div>
    </div>
  )
}

export default ClientsContainer
