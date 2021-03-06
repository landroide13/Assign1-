import React from 'react'

export default function Item(props) {

  const { items } = props

  // let onDelete = (id) =>{
  //   deleteCustomer(id)
  // }

  let added = (item) =>{
    alert('Checking out Order for Mr/Ms: ' + items.name)
  }

  // console.log(items)
  
  return (
    <React.Fragment>

      <div className="card">
        <div className="card-header text-center">
          Order
        </div>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">Customer Name: {items.name}</li>
          <li className="list-group-item">Suburb: {items.suburb}</li>
          <li className="list-group-item">Material: {items.material}</li>
          <li className="list-group-item">Color: {items.color}</li>
        </ul>
        <div className="card-body text-center">
          <a href="/" className="btn btn-sm btn-success" onClick={added}>Check out</a>
        </div>
      </div>
      

    </React.Fragment>
  )
}
