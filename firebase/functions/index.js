"use strict"

const functions = require("firebase-functions")
const nodemailer = require("nodemailer")
const unified = require("unified")
const markdown = require("remark-parse")
const remark2rehype = require("remark-rehype")
const doc = require("rehype-document")
const format = require("rehype-format")
const html = require("rehype-stringify")
const cors = require("cors")({ origin: true })
const ow = require("ow")

function markdownToHtml(markdownString) {
  return unified()
    .use(markdown)
    .use(remark2rehype)
    .use(doc)
    .use(html)
    .use(format)
    .process(markdownString)
    .then(res => res.contents)
}

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password,
  },
})

function validateInputs(input = {}) {
  ow(input.name, "Name is too short", ow.string.minLength(1))
  ow(input.name, "Name is too long", ow.string.maxLength(60))

  const isEmail = ow.string.is(e => /^.+@.+\..+$/.test(e))
  ow(input.email, "Email is invalid", isEmail)

  ow(input.message, "Message is too short", ow.string.minLength(10))
  ow(input.message, "Message is too long", ow.string.maxLength(1001))
}

function handleRequest(request, response) {
  return cors(request, response, async () => {
    try {
      validateInputs(request.body)
    } catch (error) {
      console.log("> Validation failed", error.message)
      response.status(400).send({
        statusCode: 400,
        message: error.message,
      })
      return
    }

    const { name, email, message } = request.body
    const sender = `"jorgecalle.co 🤖"  <${functions.config().email.user}>`
    const receipt = '"Jorge" <jorcalle11@gmail.com>'
    const subject = `Message of ${name}`
    const originalSender = `"${name}" <${email}>`

    try {
      const html = await markdownToHtml(message)
      await transporter.verify()

      console.log(`>${name} Sending message...`)
      const info = await transporter.sendMail({
        from: sender,
        to: receipt,
        cc: originalSender,
        subject,
        html,
      })

      console.log("> Message sent: %s", info.messageId)
      response.send({
        statusCode: 200,
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
}

exports.contact = functions.https.onRequest(handleRequest)
