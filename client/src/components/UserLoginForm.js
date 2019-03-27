import React from 'react'

const UserLoginForm = ({ handleUserLogin }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleUserLogin(event.target.email.value, event.target.password.value)
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