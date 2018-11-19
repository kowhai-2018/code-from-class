import React from 'react'
import { connect } from 'react-redux'

import Wombat from './Wombat'

class Wombats extends React.Component {
  render () {
    const wombats = this.props.wombats

    return (
      <div>
        <h1>Wombats</h1>
        <ul>
          {wombats.map((wombat, i) => <Wombat key={i} wombat={wombat} />)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    wombats: store.wombats
  }
}

export default connect(mapStateToProps)(Wombats)
