import React from 'react'

const MIN_USERNAME_LENGTH = 5

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    message: '',
    password: '',
    username: ''
  }

  changeHandler = e => {
    let message = ''
    if (e.target.name === 'username' && e.target.value.length < MIN_USERNAME_LENGTH) {
      message = 'That username is too short!'
    }
    this.setState({
      [ e.target.name ]: e.target.value,
      message
    })
  }

  submitHandler = e => {
    e.preventDefault()

    // Final validation before submitting to server
    console.log('SUBMITTED:', this.state.username, this.state.password)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            value={this.state.username}
            onChange={this.changeHandler}
            placeholder='Username'
            name='username' />
          <input
            type='password'
            value={this.state.password}
            onChange={this.changeHandler}
            placeholder='Password'
            name='password' />
          <input
            type='submit'
            value='Log in!' />
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App

