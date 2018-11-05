const React = require('react')
const ReactDOM = require('react-dom')

// function Hello (props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div>hello {props.name}</div>
//       {props.showSuperButton ? <SuperButton /> : null}
//       {props.showSuperButton && <SuperButton />}
//     </div>
//   )
// }

class Hello extends React.Component {
  constructor (props) {
    super(props)
  }

  showPic () {
    return (
      <div>
        {this.showCat()}
        <img src="http://www.placepuppy.net/400/250" />
      </div>
    )
  }

showCat = () => <img src="https://placekitten.com/200/300" />

render () {
  return (
    <div>
      <h1>{this.props.title}</h1>
      <div>hello {this.props.name}</div>
      {this.props.showSuperButton ? <SuperButton /> : null}
      {this.props.showSuperButton && <SuperButton />}
      {this.showPic()}
    </div>
  )
}
}

function SuperButton (props) {
  return (
    <div>
      <button>PRESS THIS BUTTON</button>
    </div>
  )
}

const data = {
  name: 'wombats',
  title: 'REACT FTW',
  showSuperButton: true
}

ReactDOM.render(
  <Hello {...data} />,
  document.getElementById('aardvark')
)
