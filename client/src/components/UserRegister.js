import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../helpers/AuthContext'

import UserRegisterForm from './UserRegisterForm'

const UserRegister = (props) => {
  const [error, setError] = useState('')
  const {setAuth} = useContext(AuthContext)

  const handleUserRegistration = async (user) => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return setError('Please fill in all fields')
    } else {
      setError('')
    }

    try {
      const response = await axios.post('/user', user)

      setAuth({
        authed: true,
        token: response.data.token
      })
  
      props.history.push('/dashboard')
    } catch (err) {
      setError('Something went wrong, please try again')
    } 
  }

  return (
    <div>
      <div className="user-form">
        <h3>Register</h3>
        <UserRegisterForm handleUserRegistration={handleUserRegistration} />
        {error && <p className="alert-box alert-box__red">{error}</p>}
        <p>Already have an account? Sign in <Link to="/login">here</Link>.</p>
      </div>
    </div>
  )
}

export default UserRegister