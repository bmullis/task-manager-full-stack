import React, { useContext } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { AuthContext } from '../helpers/AuthContext'

const Navigation = () => {
  const { auth, setAuth } = useContext(AuthContext)

  const handleUserSignOut = () => {
    setAuth({
      authed: false,
      token: ''
    })
  }

  if (!auth.authed) {
    return (
      <nav>
        <div className="container">
          <Link to="/"><h4>TaskApp</h4></Link>
  
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div className="container">
          <Link to="/"><h4>TaskApp</h4></Link>
    
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <span onClick={handleUserSignOut}>Sign Out</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation