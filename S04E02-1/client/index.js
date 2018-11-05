import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App prop1="foo" prop2="bar" />,
    document.getElementById('app')
  )
})
