const React = require('react')
const ReactDOM = require('react-dom')

function Hello (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>hello {props.name}</div>
      {props.showSuperButton ? <SuperButton /> : null}
      {props.showSuperButton && <SuperButton />}
    </div>
  )
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
