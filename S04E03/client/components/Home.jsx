import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>HOME</h1>
        <Link to='/users'>Users page</Link>
        <hr />
      </div>
    )
  }
}
