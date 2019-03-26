var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brian.mullis09@gmail.com',
    pass: 'i9hLv3kp0bW3'
  }
});

module.exports = transporter