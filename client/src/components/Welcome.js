import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to TaskApp!</h1>
      <h4>Manage your todo list and get more things done</h4>
      <Link to="/login" className="btn btn-link">Get Started</Link>
    </div>
  )
}

export default Welcome