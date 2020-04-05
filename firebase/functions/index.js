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

async function handleRequest(request, response) {
  const { name, email, message } = request.body
  const sender = `"jorgecalle.co 🤖"  <${functions.config().email.user}>`
  const receipt = "jorcalle11@gmail.com"
  const subject = `Message from ${name} - ${email}`

  try {
    console.log(`>${name} Sending message...`)
    await transporter.verify()
    const info = await transporter.sendMail({
      from: sender,
      to: receipt,
      subject,
      text: message,
    })
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
}

exports.contact = functions.https.onRequest(handleRequest)
