import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UserRegisterForm from './UserRegisterForm'

const UserLogin = (props) => {

  const [error, setError] = useState('')

  const handleUserRegistration = (user) => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return setError('Please fill in all fields')
    } else {
      setError('')
    }

    console.log(user)
    axios.post('/user', user).then((res) => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/dashboard')
    }).catch((err) => {
      console.log(err)
      setError(err.toString())
    })
  }

  return (
    <div>
      <div className="user-form">
        <h3>Register</h3>
        <UserRegisterForm handleUserRegistration={handleUserRegistration} />
        {error && <p className="alert-box alert-box__red">{error}</p>}
        <p>Already have an account yet? Sign in <Link to="/login">here</Link>.</p>
      </div>
    </div>
  )
}

export default UserLogin