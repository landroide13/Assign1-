import React, { Component } from 'react'
import uuid from 'uuid'
import Table from './Table'
import Item from './Item'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      newCustomer: [],
      orders: [],
      order: {id: uuid.v4(), room: 'Master Room', length: '1,2 M', width: '5 M', pleats: 'Double', style: 'Blind', notes: 'Pinky and Black' }
    }
  }


  handleOrders = () =>{
    let orders = this.state.orders
    const order = this.state.order
    orders.push(order)
    this.setState({ orders })
  }

  handleDelete = (id) =>{
    let orders = this.state.orders
    let idx = orders.findIndex(ix => ix.id === id)
    orders.splice(idx, 1)
    this.setState({ orders })
  }

  // deleteCustomer = (id) =>{
  //   this.props.deleteCustomer(id)
  // }

  
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.refs.name.value === ''){
      // console.log('You must includ a valid name..')
      alert('You must include a valid Customer name..')
    }else{
      this.setState({
        newCustomer:
        {
          id: uuid.v4(),
          name: this.refs.name.value,
          suburb: this.refs.suburb.value,
          material: this.refs.material.value,
          color: this.refs.color.value,
        }
      
      }, () => {
        this.props.addCustomer(this.state.newCustomer)
        // console.log(this.state.customer)
      })
    }
  }


  render() {

    const { suburbs, materials,  colors } = this.props

    const { newCustomer, orders } = this.state

    let color = colors ? Object.keys(colors) : null

    let material = materials ? Object.keys(materials) : null

    let suburb = suburbs ? Object.keys(suburbs) : null


    let optionColor = color ? color.map(c =>{
      return <option key={c} value={ c }>{ c }</option>
    }) : null

    let optionMaterial = material ? material.map(m =>{
      return <option key={m} value={ m }>{ m }</option>
    }) : null

    let optionSuburb = suburb ? suburb.map(s =>{
      return <option key={ s } value={ s }>{ s }</option>
    }) : null


    return (
      <React.Fragment>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-md-2">
              <label>Customer</label>
              <input type="text" className="form-control" ref="name" placeholder="Name" />
            </div>
            <div className="form-group col-md-2">
              <label>Suburb</label>
              <select className="form-control" ref="suburb">
                { optionSuburb }
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Material</label>
              <select className="form-control" ref="material">
                { optionMaterial }
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Color</label>
              <select className="form-control" ref="color">
                { optionColor }
              </select>
            </div>

             { newCustomer != '' ?
                <div className="top32 col-md-4">
                  <Item items={newCustomer}  />
                </div> 
                : null
              }
          </div>

          <div className="top60">
            <h4>Curtains</h4>
            <Table orders={orders} addOrders={this.handleOrders} handleDelete={this.handleDelete} />
          </div>

          <div className="row top60">
            <div className="col-sm">
              <button type="button" className="btn btn-outline-primary">Back</button>
            </div>
            <div className="col-sm">
              <button type="button" href="/" className="btn btn-outline-success">Save All</button>
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-outline-primary">Add</button>
            </div>
          </div>

        </form>
        
      </React.Fragment>
    )
  }
}
