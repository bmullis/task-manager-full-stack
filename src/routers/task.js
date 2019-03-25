const express = require('express')
const moment = require('moment')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    created_by: req.user._id,
    created_at: moment()
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch(err) {
    res.status(400).send()
  }
})

router.get('/tasks', auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate()
    res.send(req.user.tasks)
  } catch(err) {
    res.status(500).send()
  }
})

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findOne({ _id, created_by: req.user._id })

    if (!task) {
      return res.status(404).send()
    }

    res.status(200).send(task)
  } catch(err) {
    res.status(500).send()
  }
})

router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed_at', 'due_at']
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    const task = await Task.findOne({ _id: req.params.id, created_by: req.user._id })
    
    if (!task) {
      res.status(404).send()
    }

    updates.forEach((update) => task[update] = req.body[update])
    await task.save()
    res.send(task)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, created_by: req.user._id })

    if (!task) {
      res.status(404).send()
    }

    res.send(task)
  } catch (err) {
    res.status(500).send()
  }
})

module.exports = router