import React from 'react'
import axios from 'axios'

import UserLoginForm from './UserLoginForm'

const UserLogin = (props) => {

  const handleUserLogin = (email, password) => {
    axios.post('/user/login', {
      email,
      password
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/dashboard')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="user-form">
        <h3>Login</h3>
        <UserLoginForm handleUserLogin={handleUserLogin} />
      </div>
    </div>
  )
}

export default UserLogin