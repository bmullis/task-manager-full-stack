const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  created_at: {
    type: Date,
    required: true
  },
  due_at: {
    type: Date,
    default: null
  },
  completed_at: {
    type: Date,
    default: null
  }
})

module.exports = Task