import React from 'react'

const Table = () => {

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
            <td><button type="button" className="btn btn-sm btn-danger">X</button></td>
          </tr>
        </tbody>
      </table>
      
    </React.Fragment>
  )
}


export default Table