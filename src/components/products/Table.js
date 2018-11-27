import React from 'react'

const Table = (props) => {

  const { orders, addOrders, handleDelete } = props

  let  onDelete = (id) =>{
    handleDelete(id)
  }

  let item = orders.map(o =>{
    return (
      <tr key={o.id}>
        <td>{ o.room }</td>
        <td>{ o.length }</td>
        <td>{ o.width }</td>
        <td>{ o.pleats }</td>
        <td>{ o.style }</td>
        <td>{ o.notes }</td>
        <td><button type="button" className="btn btn-sm btn-danger" onClick={onDelete.bind(o.id)}>X</button></td>
      </tr>
    )
  })

  return (
    <React.Fragment>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Room</th>
            <th scope="col">Lenght</th>
            <th scope="col">Width</th>
            <th scope="col">Pleats</th>
            <th scope="col">Style</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Living Room 1</td>
            <td>6.1 M</td>
            <td>7 M</td>
            <td>Single/ Double</td>
            <td>Curtain/blind</td>
            <td>In Rose And Red</td>
            <td></td>
          </tr>
          { item ? item : null}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button type="button" className="btn btn-sm btn-success" onClick={addOrders} > + </button></td>
          </tr>
        </tbody>
      </table>
      
    </React.Fragment>
  )
}


export default Table