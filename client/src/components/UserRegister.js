import React from 'react'
import axios from 'axios'

import UserRegisterForm from './UserRegisterForm'

const UserLogin = (props) => {

  const handleUserRegistration = (user) => {
    console.log(user)
    axios.post('/user', user).then((res) => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/dashboard')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="user-form">
        <h3>Register</h3>
        <UserRegisterForm handleUserRegistration={handleUserRegistration} />
      </div>
    </div>
  )
}

export default UserLogin