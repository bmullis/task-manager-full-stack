import React from 'react'

import fetchResources from '../helpers/fetchResources'
import TasksList from './TasksList';

const Dashboard = () => {
  const token = localStorage.getItem('token')
  const user = fetchResources('user', token)
  const tasks = fetchResources('tasks', token)

  return (
    <div className="dashboard">
      <h3>Welcome back, {user.firstName}!</h3>
      <hr />
      <h4>Your Tasks</h4>
      <TasksList tasks={tasks} />
    </div>
  )
}

export default Dashboard