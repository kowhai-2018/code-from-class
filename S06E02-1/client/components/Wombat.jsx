import React from 'react'
import { connect } from 'react-redux'

import { updateWombat } from '../actions'

class Wombat extends React.Component {
  state = {
    editing: false,
    wombat: this.props.wombat
  }

  editWombat = () => this.setState({ editing: true })

  changeHandler = e => {
    this.setState({
      wombat: e.target.value
    })
  }

  submitHandler = () => {
    this.props.updateWombat(this.props.wombat, this.state.wombat)
    this.setState({ editing: false })
  }

  render () {
    return (
      <li>
        {this.state.editing
          ? <React.Fragment>
            <input type='text' value={this.state.wombat} onChange={this.changeHandler} />
            <button onClick={this.submitHandler}>UPDATE</button>
          </React.Fragment>
          : <span onClick={this.editWombat}>{this.props.wombat}</span>}
        <button onClick={() => this.props.dispatch({ type: 'DEL_WOMBAT', wombat: this.props.wombat })}>DEL</button>
      </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateWombat: (wombatName, change) => dispatch(updateWombat(wombatName, change))
  }
}

export default connect(null, mapDispatchToProps)(Wombat)
