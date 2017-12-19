const bodyParser = require('body-parser')
const express = require('express')
const contacts = require('./contact-route')

const app = express()
app.use(bodyParser.json())
app.use('/contacts', contacts)

module.exports = app