import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'

import Welcome from './Welcome'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Dashboard from './Dashboard'

const App = () => (
  <Router>
    <Navigation />
    <div className="container">
      <Route exact path="/" render={(props) => ( <Welcome {...props} /> )} />
      <Route path="/login" render={(props) => ( <UserLogin {...props} /> )} />
      <Route path="/register" render={(props) => ( <UserRegister {...props} /> )} />
      <Route path="/dashboard" render={(props) => ( <Dashboard {...props} /> )} />
    </div>
  </Router>
)


export default App