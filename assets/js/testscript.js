const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const msg = {
  to: 'sain.sajix@gmail.com', // Change to your recipient
  from: 'sain.sajix@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })