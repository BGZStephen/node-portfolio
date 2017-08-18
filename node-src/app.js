const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express()

// middleware

// cross origin resource sharing setup
app.use(cors())

// body partser initialize
app.use(bodyParser.json())

// define port
const port = 3000

app.listen(port, () => {
  console.log("Server started, listening on port " + port)
})
