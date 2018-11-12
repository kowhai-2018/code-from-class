import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    message: ''
  }

  componentDidMount () {
    request
      .post('http://localhost:3000')
      .send({
        greeting: 'Hi, please accept my POST request!'
      })
      .then(res => {
        this.setState({ message: res.body.message })
      })
      .catch(err => {
        this.setState({ message: err.message })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>The server said:</h1>
        <h2>{this.state.message}</h2>
      </React.Fragment>
    )
  }
}

export default App

