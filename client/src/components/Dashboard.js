import React, { useContext } from 'react'

import { AuthContext } from '../helpers/AuthContext'

import fetchResources from '../helpers/fetchResources'
import TasksList from './TasksList';

const Dashboard = () => {
  const { auth } = useContext(AuthContext)
  
  const user = fetchResources('user', auth.token)
  const tasks = fetchResources('tasks', auth.token)

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