import React from 'react'

import * as api from '../api'

export default class AddWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      manufacturer: '',
      stock: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    api.appendWidget(this.state)
      .then(this.props.refresh)
      .catch(console.error)
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='manufacturer'
            onChange={this.handleChange}
            value={this.state.manufacturer}
          /></p>
          <p><input placeholder='In stock' name='stock'
            onChange={this.handleChange}
            value={this.state.stock}
          /></p>
          <button type='button' onClick={this.addWidget}>Add widget</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
