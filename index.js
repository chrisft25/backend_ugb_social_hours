
//ENV Variables for local testing
(process.env.NODE_ENV=="development") && require('dotenv').config()

//Initializing Express
const express = require('express')
const app = express()

//Middlewares
const bodyParser= require('body-parser')
const cors = require("cors")
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Database connection
require("./config/database").connect()

//Declaring routes
const address = require("./routes/address"),
about = require("./routes/about"),
cards = require("./routes/cards"),
contacts = require("./routes/contacts"),
hero = require("./routes/hero")

app.use("/api/address", address)
app.use("/api/about", about)
app.use("/api/cards", cards)
app.use("/api/hero", hero)
app.use("/api/contacts", contacts)

app.listen(process.env.PORT || 80, function () {
    console.log(`Listening on port ${process.env.PORT}`)
  });