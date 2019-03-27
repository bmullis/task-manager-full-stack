import React from 'react'

import fetchResources from '../helpers/fetchResources'

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const user = fetchResources('user', token)
  const tasks = fetchResources('tasks', token)

  return (
    <div>
      <h3>Welcome back, {user.firstName}!</h3>

      <h4>Your Tasks</h4>
      <ul>
        {tasks.map((task) => {
          return <li key={task._id}>{task.description}</li>
        })}
      </ul>
    </div>
  )
}

export default Dashboard