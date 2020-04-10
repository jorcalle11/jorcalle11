"use strict"

const functions = require("firebase-functions")
const nodemailer = require("nodemailer")
const unified = require("unified")
const markdown = require("remark-parse")
const remark2rehype = require("remark-rehype")
const doc = require("rehype-document")
const format = require("rehype-format")
const html = require("rehype-stringify")

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

function isAvalidRequest(request) {
  const { hostname } = request
  const whiteList = ["jorgecalle.co", "console.cloud.google.com"]

  if (whiteList.includes(hostname) || hostname.includes("jorcalle11.now.sh")) {
    return true
  } else {
    return false
  }
}

async function handleRequest(request, response) {
  response.set("Access-Control-Allow-Origin", "*")

  if (!isAvalidRequest(request)) {
    response.status(403).send({
      statusCode: 403,
      message: "Unacceptable request",
    })
    return
  }

  if (request.method === "OPTIONS") {
    // Send response to OPTIONS requests
    response.set("Access-Control-Allow-Methods", "GET,POST")
    response.set("Access-Control-Allow-Headers", "Content-Type")
    response.send({
      statusCode: 200,
      message: "CORS ok",
    })
    return
  }

  const { name, email, message } = request.body
  const sender = `"jorgecalle.co 🤖"  <${functions.config().email.user}>`
  const receipt = "jorcalle11@gmail.com"
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
}

exports.contact = functions.https.onRequest(handleRequest)
