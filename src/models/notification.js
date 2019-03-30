const mongoose = require('mongoose')

const Notification = mongoose.model('Notification', {
  title: {
    type: String,
    trim: true,
    required: true
  },
  message: {
    type:String,
    trim: true,
    required: true
  },
  is_read: {
    type: Boolean,
    required: true,
    default: false
  },
  to_user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

module.exports = Notification