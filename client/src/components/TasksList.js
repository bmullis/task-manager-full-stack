import React from 'react'
import moment from 'moment'

const TasksList = ({ tasks }) => {
  return (
    <div className="task-list">
      <div className="task-list__header">
        <div>Description</div>
        <div>Due Date</div>
        <div>Completed Date</div>
      </div>
      {tasks.map((task) => {
        return (
          <div className="task-list__item" key={task._id}>
            <div>{task.description}</div>
            <div>{task.due_at ? moment(task.due_at).format('MMMM Do YYYY') : <button>Set Due Date</button>}</div>
            <div>{task.completed_at ? moment(task.completed_at).format('MMMM Do YYYY') : '-'}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList