import React from 'react'

export default function Item(props) {

  const { items } = props

  console.log(items)
  
  return (
    <React.Fragment>

      <div className="card">
        <h5 className="text-center">Order</h5>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">Customer Name: {items.name}</li>
          <li className="list-group-item">Suburb: {items.suburb}</li>
          <li className="list-group-item">Material: {items.material}</li>
          <li className="list-group-item">Color: {items.color}</li>
        </ul>
      </div>
      

    </React.Fragment>
  )
}
