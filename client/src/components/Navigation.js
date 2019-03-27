import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Navigation = () => {
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
}

export default Navigation