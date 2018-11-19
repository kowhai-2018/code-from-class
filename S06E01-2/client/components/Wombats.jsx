import React from 'react'

import Wombat from './Wombat'

function Wombats (props) {
  const wombats = props.wombats
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat, i) => <Wombat dispatch={props.dispatch} key={i} wombat={wombat} />)}
      </ul>
    </div>
  )
}

export default Wombats
