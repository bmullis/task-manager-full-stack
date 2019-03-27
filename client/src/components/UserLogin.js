import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UserLoginForm from './UserLoginForm'

const UserLogin = (props) => {
  const [error, setError] = useState('')

  const handleUserLogin = (email, password) => {
    if (!email || !password) {
      return setError('Please enter an email and a password')
    } else {
      setError('')
    }

    axios.post('/user/login', {
      email,
      password
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/dashboard')
    }).catch((err) => {
      setError('Something went wrong, please try again')
    })
  }

  return (
    <div>
      <div className="user-form">
        <h3>Login</h3>
        <UserLoginForm handleUserLogin={handleUserLogin} />
        {error && <p className="alert-box alert-box__red">{error}</p>}
        <p>Don't have an account yet? Sign up for one <Link to="/register">here</Link>.</p>
      </div>
    </div>
  )
}

export default UserLogin