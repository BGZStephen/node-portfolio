const cloudinary = require('cloudinary');
const config = require('api/config');
const router = require('express').Router();

cloudinary.config(config.cloudinarySettings);

async function uploadOne(req, res) {
	const cloudinaryFile = await cloudinary.uploader.upload(req.file.path);
	res.json(cloudinaryFile);
}

async function getAll(req, res) {
	const images = await cloudinary.v2.api.resources({ type: 'upload' });
	res.json({ images: images.resources });
}

router.get('/', rest.asyncwrap(getAll));
router.post(
	'/upload',
	multer({ dest: 'uploads/' }).single('image'),
	res.asyncwrap(uploadOne),
);

module.exports = router;
