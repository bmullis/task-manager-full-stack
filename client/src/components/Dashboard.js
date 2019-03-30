import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'

import TasksList from './TasksList'
import TaskForm from './TaskForm'

import { AuthContext } from '../helpers/AuthContext'
import fetchResources from '../helpers/fetchResources'

Modal.setAppElement('#root')

const Dashboard = () => {
  const {auth} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const user = fetchResources('user', auth.token)
  const tasks = fetchResources('tasks', auth.token)

  const createNewTask = async (task) => {
    if (!task.description) {
      return setError('Please describe this task')
    } else {
      setError('')
    }

    try {
      const response = await axios.post('/tasks', task, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })
      tasks.push(response.data)
      setModalIsOpen(false)
    } catch (err) {
      setError('Something went wrong, please try again')
    } 
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const afterOpenModal = () => {

  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="dashboard">
      <h3>Welcome back, {user.firstName}!</h3>
      <hr />
      <h4>Your Tasks</h4>
      <TasksList tasks={tasks} />
      <button onClick={openModal}>Add Task +</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Create a New Task"
      >
        <button onClick={closeModal}>X</button>
        <div className="user-form">
          <h3>Create a New Task</h3>
          <TaskForm createNewTask={createNewTask} />
          {error && <p className="alert-box alert-box__red">{error}</p>}
        </div>
      </Modal>
    </div>
  )
}

export default Dashboard