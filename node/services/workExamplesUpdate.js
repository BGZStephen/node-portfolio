const config = require('../config');
const mongoose = require('mongoose');
const workExample = require('../models/work-example');
const winston = require('winston');

function establishMongooseConnection() {
	// connect to mongodb
	mongoose.connect(config.database);

	// once connected
	mongoose.connection.on('connected', () => {
		winston.info('Connected to database successfully');
	});

	mongoose.connection.on('error', (error) => {
		winston.error(error);
	});
}

function closeMongooseConnection() {
	mongoose.connection.close()
		.then(() => {
			winston.info('Database connection closed');
		})
		.catch((error) => {
			winston.error(error);
		});
}

async function processUpdates() {
	await establishMongooseConnection();
	await addContentSection();
	closeMongooseConnection();
}

async function addContentSection() {
	const workExamplesArray = await workExample.find();

	workExamplesArray.forEach(async function (workExample) {
		winston.info(`Updating: ${workExample.title}`);
		workExample.content = [];
		await workExample.save();
	});

	return('success');
}

processUpdates();
