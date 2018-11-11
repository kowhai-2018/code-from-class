import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    message: ''
  }

  componentDidMount () {
    request
      .get('/message')
      .then(res => {
        // We can only use the API data here
        this.setState({ message: res.body.message })
      })
      .catch(err => {
        // Error messages will be available here
        console.error(err)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>The message was:</h1>
        <p>{this.state.message}</p>
      </React.Fragment>
    )
  }
}

export default App

