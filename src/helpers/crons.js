const cron = require('node-cron')
const moment = require('moment')
const User = require('../models/user')
const Task = require('../models/task')
const Notification = require('../models/notification')

const checkOverdue = () => cron.schedule('40 6 * * *', () => {
  User.find({}).then((users) => {
    users.forEach(async function(user) {
      const tasks = await Task.find({ created_by: user._id })
      let overdueAmount = 0
  
      tasks.map((task) => {
        if (task.due_at && task.due_at < new Date()) {
          overdueAmount = overdueAmount + 1
        }
      })
  
      if (overdueAmount > 0) {
        const notification = new Notification({
          title: 'Overdue Tasks',
          message: `You have ${overdueAmount} overdue tasks. You can reschedule these tasks, or get them finished!`,
          to_user: user._id
        })
    
        notification.save()
      }
    })
  })
  console.log('Cron ran for overdue tasks')
});

module.exports = checkOverdue
