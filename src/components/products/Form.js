import React, { Component } from 'react'
import Table from './Table'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      customer: []
    }
  }

  // onChange = e => {
  //   this.setState({ [e.target.id]: e.targe.value })
  // }

  // handleClick = () =>{
  //   this.handleSubmit()
  //   // this.props.addCustomer(this.state.customer)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.refs.name.value === ''){
      console.log('You must includ a valid name..')
    }else{
      this.setState({
        customer:{
          name: this.refs.name.value,
          suburb: this.refs.suburb.value,
          material: this.refs.material.value,
          color: this.refs.color.value,
        }
      }, () => {
        this.props.addCustomer(this.state.customer)
        console.log(this.state.customer)
      })
    }
  }


  render() {

    const { suburbs, materials,  colors } = this.props

    // console.log(colors)

    let color = colors ? Object.keys(colors) : null

    let material = materials ? Object.keys(materials) : null

    let suburb = suburbs ? Object.keys(suburbs) : null

    // console.log(material)

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
          </div>

          <div className="top60">
            <h4>Curtains</h4>
            <Table />
          </div>

          <div className="row top60">
            <div className="col-sm">
              <button type="button" className="btn btn-outline-primary">Back</button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-outline-success">Save All</button>
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
