import React from 'react'

const UserRegisterForm = ({ handleUserRegistration }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleUserRegistration({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value
    })
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="text" name="email" placeholder="Email Address" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  )
}

export default UserRegisterForm