const express = require('express')
const User = require('../models/user')
const Notification = require('../models/notification')
const auth = require('../middleware/auth')
const transporter = require('../helpers/mailer')
const router = new express.Router()

router.post('/user', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })

    const mailOptions = {
      from: 'brian.mullis09@gmail.com',
      to: user.email,
      subject: `Welcome to TaskApp, ${user.firstName}`,
      text: `Welcome, ${user.firstName}! Thank you for signing up.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      error ? console.log(error) : console.log('Email sent: ' + info.response)
    });

    const notification = new Notification({
      title: 'Welcome to TaskApp',
      message: 'Get started by adding tasks and then setting due dates for your tasks.',
      to_user: user._id
    })
    notification.save()
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (err) {
    res.status(400).send()
  }
})

router.post('/user/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    req.user.save()
    res.send()
  } catch (err) {
    res.status(500).send()
  }
})

router.post('/user/logout-all', auth, async (req, res) => {
  try {
    req.user.tokens = []
    req.user.save()
    res.send()
  } catch (err) {
    res.status(500).send()
  }
})

router.get('/user', auth, async (req, res) => {
  res.send(req.user)
})

router.patch('/user', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['firstName', 'lastName', 'email', 'password']
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' })
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/user', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (err) {
    res.status(500).send()
  }
})


module.exports = router