import React from 'react'

import TaskItem from './TaskItem';

const TasksList = ({ tasks }) => {
  const renderTasks = (tasks) => {
    if (tasks.length > 0) {
      return (
        tasks.map((task) => {
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
        <div>Description</div>
        <div>Due Date</div>
        <div>Completed Date</div>
      </div>
      {renderTasks(tasks)}
    </div>
  )
}

export default TasksList