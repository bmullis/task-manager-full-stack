const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URI

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})