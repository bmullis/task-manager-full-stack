const cron = require('node-cron')
const User = require('../models/user')
const Task = require('../models/task')
const Notification = require('../models/notification')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const checkOverdue = () => cron.schedule('00 15 * * *', () => {
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

        const msg = {
          to: user.email,
          from: 'taskapp@taskapp.io',
          subject: `${overdueAmount} Overdue Tasks`,
          text: `${user.firstName}, you have ${overdueAmount} over tasks! Make sure you get them done.`
        }
        sgMail.send(msg)
      }
    })
  })

  console.log('Ran cron for overdue tasks')
});

module.exports = checkOverdue
