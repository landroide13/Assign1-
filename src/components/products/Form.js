import React, { Component } from 'react'

export default class Form extends Component {

  onChange = () => {

  }

  onSubmit = e => {
    e.preventdefault()
    // console.log(this.state)
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

        <form>
          <div className="row">
            <div className="form-group col-md-2">
              <label>Customer</label>
              <input type="text" className="form-control" ref="name" placeholder="Name" />
            </div>
            <div className="form-group col-md-2">
              <label>Suburb</label>
              <select id="inputState" className="form-control" ref="suburb">
                { optionSuburb ? optionSuburb : null }
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Material</label>
              <select id="inputState" className="form-control" ref="material">
                { optionMaterial ? optionMaterial : null }
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Color</label>
              <select id="inputState" className="form-control" ref="color">
                { optionColor ? optionColor : null }
              </select>
            </div>
          </div>
        </form>
        
      </React.Fragment>
    )
  }
}
