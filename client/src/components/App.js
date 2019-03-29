import React, { useContext } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { AuthContext } from '../helpers/AuthContext';

import Navigation from './Navigation'
import Welcome from './Welcome'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Dashboard from './Dashboard'

const App = () => {
  const { auth } = useContext(AuthContext)

  return (
    <Router>
      <Navigation />
      <div className="container">
        <Route exact path="/" render={(props) => ( <Welcome {...props} /> )} />
        <Route path="/login" render={(props) => ( auth.authed ? <Redirect to="/dashboard" /> : <UserLogin {...props} /> )} />
        <Route path="/register" render={(props) => ( auth.authed ? <Redirect to="/dashboard" /> : <UserRegister {...props} /> )} />
        <Route path="/dashboard" render={(props) => ( auth.authed ? <Dashboard {...props} /> : <Redirect to="/login" /> )} />
      </div>
    </Router>
  )
}

export default App