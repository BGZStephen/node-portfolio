const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database')

// connect to mongodb
mongoose.connect(config.database)

// once connected
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database)
})

// in case of error
mongoose.connection.on('error', (err) => {
  console.log('Error: ' + err)
})

const app = express()

// middleware

// cross origin resource sharing setup
app.use(cors())

// static folder for public views
app.use(express.static(path.join(__dirname, 'public')))

// body partser initialize
app.use(bodyParser.json())

// routing
const users = require("./routes/users")
const workExamples = require("./routes/work-examples")
const technologies = require("./routes/technologies")

app.use('/users', users)
app.use('/work-examples', workExamples)
app.use('/technologies', technologies)


// default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// define port
const port = 9000

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})
