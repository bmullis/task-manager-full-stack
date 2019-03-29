import React, { useContext } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { AuthContext } from '../helpers/AuthContext';

import Navigation from './Navigation'
import Welcome from './Welcome'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'
import Dashboard from './Dashboard'

const App = () => {
  const { token } = useContext(AuthContext)
  
  console.log(token ? 'Yes: ' + token : 'No: ' + token)

  return (
    <Router>
      <Navigation />
      <div className="container">
        <Route exact path="/" render={(props) => ( <Welcome {...props} /> )} />
        <Route path="/login" render={(props) => ( token ? <Redirect to="/dashboard" /> : <UserLogin {...props} /> )} />
        <Route path="/register" render={(props) => ( <UserRegister {...props} /> )} />
        <Route path="/dashboard" render={(props) => ( token ? <Dashboard {...props} /> : <Redirect to="/login" /> )} />
      </div>
    </Router>
  )
}

export default App