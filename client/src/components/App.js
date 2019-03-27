import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'

import Welcome from './Welcome'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

const App = () => (
  <Router>
    <Navigation />
    <div className="container">
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={UserLogin} />
      <Route path="/register" component={UserRegister} />
    </div>
  </Router>
)


export default App