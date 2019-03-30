import React, { useState } from 'react'

import TaskItem from './TaskItem';

import { sort } from '../helpers/sortTasks'

const TasksList = ({ tasks }) => {
  const [sortBy, setSortBy] = useState('due_at')
  const [sortOrder, setSortOrder] = useState('asc')

  const sortedTasks = sort(tasks, sortBy, sortOrder)

  const setNewSort = (newSortBy) => {
    setSortBy(newSortBy)

    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else {
      setSortOrder('asc')
    }
  }

  const renderTasks = (sortedTasks) => {
    if (sortedTasks.length > 0) {
      return (
        sortedTasks.map((task) => {
          return (
            <TaskItem key={task._id} task={task} />
          )
        })
      )
    } else {
      return (
        <div style={{ padding: '2rem 0.75rem'}}>
          <h5>You don't have any tasks yet. Create one to get started.</h5>
        </div>
      )
    }
  }
  return (
    <div className="task-list">
      <div className="task-list__header">
        <div onClick={() => setNewSort('description')}>
          Description <span role="img">↕</span>
        </div>
        <div onClick={() => setNewSort('due_at')}>
          Due Date <span role="img">↕</span>️
        </div>
        <div>Completed Date</div>
      </div>
      {renderTasks(sortedTasks)}
    </div>
  )
}

export default TasksList