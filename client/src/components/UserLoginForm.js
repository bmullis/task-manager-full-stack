import React from 'react'
import axios from 'axios'

const UserLoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    console.log(event.target.email.value)
    axios.post('/user/login', {
      email: event.target.email.value,
      password: event.target.password.value
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default UserLoginForm