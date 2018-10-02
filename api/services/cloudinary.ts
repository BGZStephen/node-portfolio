import * as cloudinary from 'cloudinary';
import config from 'api/config';

cloudinary.config(config.cloudinary);

async function uploadOne(file) {
	return await cloudinary.uploader.upload(file.path);
}

async function getAll() {
	return await cloudinary.v2.api.resources({type: 'upload'});
}

export default {
	uploadOne,
	getAll,
};
