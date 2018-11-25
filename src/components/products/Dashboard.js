import React, { Component } from 'react'
import Table from './Table'
import { API_URL } from '../../config'
import Form from './Form'

export default class Dashboard extends Component {
  state = {
    order: [],
    categories: []
  }

  
  componentWillMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(`${API_URL}`)
    .then(res => res.json())
    .then(data => Object.entries(data['components']).map(schem => (
      // console.log(schem[1]['ColourDto']['properties'])
      {
        suburb: schem[1]['SuburbDto']['properties'],
        color: schem[1]['ColourDto']['properties'],
        material: schem[1]['MaterialDto']['properties']
       }
    )))
    .then(categories => this.setState({ categories }))
    .catch(err => {
      this.setState({
        error: err.errorMessage
      })
    })
  }

  render() {

    const { categories } = this.state 

    let colors = categories.map(cat =>{
      return Object.values(cat)[1]
    })

    let suburbs = categories.map(cat =>{
      return Object.values(cat)[0]
    })

    let materials = categories.map(cat => {
      return Object.values(cat)[2]
    })

    // console.log(colors[0])
    // console.log(suburbs[0])


    return (

      <React.Fragment>

        <Form suburbs={suburbs[0]} colors={colors[0]} materials={materials[0]} />

        <div className="top60">
          <h4>Curtains</h4>

          <Table />
        </div>

        <div className="row top60">
          <div className="col-sm">
            <button type="button" className="btn btn-outline-primary">Back</button>
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-outline-primary">Save All</button>
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-outline-primary">Add</button>
          </div>
        </div>

        
      </React.Fragment>
    )
  }
}
