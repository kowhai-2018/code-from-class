import React from 'react'

import * as api from '../api'

export default class EditWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null,
      name: '',
      price: '',
      manufacturer: '',
      stock: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.editWidget = this.editWidget.bind(this)
  }

  componentDidMount () {
    api.getWidget(this.props.widgetId)
      .then(widget => this.setState(widget))
      .catch(console.error)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editWidget (e) {
    api.updateWidget(this.state)
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
          <button type='button' onClick={this.editWidget}>Edit widget</button>
          {' '}
          <a href='#' onClick={this.props.refresh}>Cancel</a>
        </form>
      </div>
    )
  }
}
