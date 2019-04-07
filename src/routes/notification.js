const express = require('express')
const Notification = require('../models/notification')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/notifications', auth, async (req, res) => {
  try {
    await req.user.populate('notifications').execPopulate()
    res.send(req.user.notifications)
  } catch(err) {
    res.status(500).send()
  }
})

router.get('/notifications/:id', auth, async (req, res) => {
  const _id = req.params.id

  try {
    const notification = await Notification.findOne({ _id, to_user: req.user._id })

    if (!notification) {
      return res.status(404).send()
    }

    res.status(200).send(notification)
  } catch(err) {
    res.status(500).send()
  }
})

router.patch('/notifications/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = 'is_read'
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    const notification = await Notification.findOne({ _id: req.params.id, to_user: req.user._id })
    
    if (!notification) {
      res.status(404).send()
    }

    updates.forEach((update) => notification[update] = req.body[update])
    await notification.save()
    res.send(notification)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/notifications/:id', auth, async (req, res) => {
  try {
    const notification = await Notification.findOneAndDelete({ _id: req.params.id, to_user: req.user._id })

    if (!notification) {
      res.status(404).send()
    }

    res.send(notification)
  } catch (err) {
    res.status(500).send()
  }
})

module.exports = router