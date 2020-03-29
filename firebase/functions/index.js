"use strict"

const functions = require("firebase-functions")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password,
  },
})

exports.contact = functions.https.onRequest(async (request, response) => {
  const { name, email, text } = request.body
  const sender = `${name} - <${email}>`
  const receipt = "jorcalle11@gmail.com"
  const subject = `Message of ${name} from jorgecalle.co`
  const message = {
    from: sender,
    to: receipt,
    subject,
    text,
  }

  try {
    console.log(`>${name} Sending message...`)
    await transporter.verify()
    const info = await transporter.sendMail(message)
    console.log("> Message sent: %s", info.messageId)

    response.send({
      statusCode: 200,
      code: "Ok",
      message: `message sent ${info.messageId}`,
    })
  } catch (error) {
    console.log("> Send failure!", error.message)

    response.status(500).send({
      statusCode: 500,
      message: error.message,
    })
  }
})
