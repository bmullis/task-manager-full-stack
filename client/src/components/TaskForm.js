import React from 'react'

const TaskForm = ({ prevTask, createNewTask}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    createNewTask({
      description: event.target.description.value
    })
  }

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <input type="text" name="description" placeholder="What do you need to get done?" />
      <button type="submit">Create Task</button>
    </form>
  )  
}

export default TaskForm