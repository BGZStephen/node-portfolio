const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config')

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database successfully");
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err);
})

const app = express()

// middleware

// cross origin resource sharing setup
app.use(cors())

// static folder for public views
app.use(express.static(path.join(__dirname, '../public')))

// body partser initialize
app.use(bodyParser.json())

// routing
const PUBLIC_ROUTES = require("./routes/public")
const PRIVATE_ROUTES= require("./routes/private")

app.use('/', PUBLIC_ROUTES)
app.use('/', PRIVATE_ROUTES)


// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// define port
const port = 9000

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})
