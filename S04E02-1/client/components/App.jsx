import React from 'react'

class App extends React.Component {
  state = {
    visible: true,
    colour: 'green'
  }

  toggleVisibility = () => {
    this.setState({
      visible: false,
      colour: 'blue'
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleVisibility}>HIDE ME</button>
        {this.state.visible && <div>MY APP</div>}
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  handleMouseMove = () => {
    console.log('THE MOUSE IS MOVING OVER THIS COMPONENT YIKES')
  }

  render () {
    return (
      <div onMouseMove={this.handleMouseMove}>
        Hi!
      </div>
    )
  }
}

export default App

