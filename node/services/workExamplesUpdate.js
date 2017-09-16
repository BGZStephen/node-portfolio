const config = require('../config')
const mongoose = require('mongoose');
const workExample = require('../models/work-example')

function establishMongooseConnection() {
  // connect to mongodb
  mongoose.connect(config.database);

  // once connected
  mongoose.connection.on('connected', () => {
    console.log('Connected to database successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error: ' + err);
  });
}

function closeMongooseConnection() {
  mongoose.connection.close()
  .then(() => {
    console.log('Database connection closed')
  })
  .catch((error) => {
    console.log(error)
  })
}

async function processUpdates() {
  await establishMongooseConnection()
  await addContentSection()
  closeMongooseConnection()
}

async function addContentSection() {
  const workExamplesArray = await workExample.find()

  workExamplesArray.forEach(async function (workExample) {
    console.log(`Updating: ${workExample.title}`);
    workExample.content = []
    await workExample.save()
  })

  return('success')
}

processUpdates()
