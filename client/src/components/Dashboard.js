import React from 'react'

import fetchResources from '../helpers/fetchResources'

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const user = fetchResources('user', token)

  console.log(user)
  return (
    <div>
      <h3>Welcome back, {user.firstName}!</h3>
    </div>
  )
}

export default Dashboard