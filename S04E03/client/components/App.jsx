import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Users from './Users'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/users/:id' component={Users} />
      </div>
    </Router>
  )
}

export default App

