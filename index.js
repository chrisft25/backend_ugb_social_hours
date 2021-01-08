
(process.env.NODE_ENV=="development") && require('dotenv').config()

const express = require('express')
const bodyParser= require('body-parser')
const cors = require("cors")
const app = express()
const address = require("./routes/address")
require("./config/database").connect()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/address", address)

app.listen(process.env.PORT || 80, function () {
    console.log(`Listening on port ${process.env.PORT}`)
  });