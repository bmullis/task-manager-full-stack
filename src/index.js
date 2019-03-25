const express = require('express')
const cron = require('node-cron')
const transporter = require('./config/mailer')
const cors = require('cors')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors());
app.use(userRouter)
app.use(taskRouter)
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

// cron.schedule('* * * * *', () => {
//   User.find({}).then((users) => {
//     users.forEach((user) => {
//       if (user.email === 'brian.mullis09@gmail.com') {
//         const mailOptions = {
//           from: 'brian.mullis09@gmail.com',
//           to: user.email,
//           subject: `Sending an Email to You, ${user.firstName}`,
//           text: `${user.firstName}, thanks for being a member!`
//         };
    
//         transporter.sendMail(mailOptions, (error, info) => {
//           error ? console.log(error) : console.log('Email sent: ' + info.response)
//         });
//       }
//     })
//   })
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})