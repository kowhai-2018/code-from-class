import React from 'react'
import { Link } from 'react-router-dom'

export default class Users extends React.Component {
  render () {
    const { match } = this.props
    const { id } = match.params

    return (
      <div>
        <h2>Users</h2>
        <p>The user id was: {id}</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
