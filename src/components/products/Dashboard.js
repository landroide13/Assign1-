import React, { Component } from 'react'
import { API_URL } from '../../config'
import Form from './Form'

export default class Dashboard extends Component {
  state = {
    order: [],
    categories: [],
    customer: []
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

  handleItem = (item) =>{
    let customer = this.state.customer
    customer.push(item)
    this.setState({ customer })
    // console.log('custumer' + this.state.customer )
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

    // let item = customer.map(c =>{
    //   console.log(c ? c : null)
      
    // })

    return (

      <React.Fragment>

        <Form suburbs={suburbs[0]} colors={colors[0]} materials={materials[0]} 
               addCustomer={this.handleItem} />

      </React.Fragment>
    )
  }
}
