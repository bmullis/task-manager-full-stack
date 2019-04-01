const express = require('express')
const cors = require('cors')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const notificationRouter = require('./routes/notification')
const checkOverdue = require('./helpers/crons')

const moment = require('moment')
const User = require('./models/user')
const Task = require('./models/task')
const Notification = require('./models/notification')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors());
app.use(userRouter)
app.use(taskRouter)
app.use(notificationRouter)
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

checkOverdue()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})