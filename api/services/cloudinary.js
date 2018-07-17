const cloudinary = require('cloudinary');
const config = require('api/config');

cloudinary.config(config.cloudinary);

async function uploadOne(file) {
	return await cloudinary.uploader.upload(file.path);
}

async function getAll() {
	return await cloudinary.v2.api.resources({ type: 'upload' });
}

module.exports = {
	uploadOne,
	getAll,
};
