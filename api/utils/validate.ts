import * as validate from 'validate.js';

function process(object, constraints, options = { single: true }) {
	const validationErrors = validate(object, constraints);

	if (!validationErrors) {
		return false;
	}

	if (!options.array && !options.single) {
		options.single = true;
	}

	if (options.array) {
		return generateErrorsArray(validationErrors, options);
	}

	if (options.single) {
		return generateSingleError(validationErrors, options);
	}
}

function generateErrorsArray(validationErrors, options) {
	if (options.customFrontEndMessages) {
		let errors = [];
		for (const key of Object.keys(validationErrors)) {
			if (options.customFrontEndMessages[key]) {
				errors.push(options.customFrontEndMessages[key]);
			} else {
				errors.push(validationErrors[key]);
			}
		}

		return errors;
	}

	let errors = [];

	for (const key of Object.keys(validationErrors)) {
		errors.push(validationErrors[key]);
	}

	return errors;
}

function generateSingleError(validationErrors, options) {
	if (options.customFrontEndMessages) {
		let errors = [];
		for (const key of Object.keys(validationErrors)) {
			if (options.customFrontEndMessages[key]) {
				errors.push(options.customFrontEndMessages[key]);
			} else {
				errors.push(validationErrors[key]);
			}
		}

		return errors[0];
	}

	let errors = [];

	for (const key of Object.keys(validationErrors)) {
		errors.push(validationErrors[key]);
	}

	return errors[0];
}

export default process;
