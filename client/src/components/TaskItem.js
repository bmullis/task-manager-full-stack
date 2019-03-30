import React, { useState, useContext } from 'react'
import moment from 'moment'
import axios from 'axios'
import DayPicker from 'react-day-picker'

import { AuthContext } from '../helpers/AuthContext'

import 'react-day-picker/lib/style.css';

const TaskItem = ({ task }) => {
  const {auth} = useContext(AuthContext)
  const [pickerIsOpen, setPickerIsOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(moment(task.due_at).toDate())

  const toggleDatePicker = () => {
    setPickerIsOpen(pickerIsOpen ? false : true)
  }

  const handleDayClick = async (day) => {
    try {
      const response = await axios.patch(`/tasks/${task._id}`, { due_at: day }, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      console.log(response)

      task.due_at = day
      setSelectedDay(day)
      toggleDatePicker()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="task-list__item">
      <div>{task.description}</div>
      <div>
        {task.due_at ? (
          <div>
            <div onClick={toggleDatePicker}>{moment(task.due_at).format('MMMM Do YYYY')}</div>
            {pickerIsOpen &&
            <DayPicker 
              onDayClick={handleDayClick} 
              selectedDays={selectedDay} 
              initialMonth={moment(task.due_at).toDate()}
            />}
          </div>
        ) : (
          <div>
            <button onClick={toggleDatePicker}>
              Set Due Date
            </button>
            {pickerIsOpen && 
            <DayPicker 
              onDayClick={handleDayClick} 
              selectedDays={selectedDay} 
            />}
          </div>
        )}
      </div>
      <div>{task.completed_at ? moment(task.completed_at).format('MMMM Do YYYY') : '-'}</div>
    </div>
  )
}

export default TaskItem