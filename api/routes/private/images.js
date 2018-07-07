const Cloudinary = require('api/services/cloudinary');
const router = require('express').Router();
const multer = require('multer');
const rest = require('api/utils/rest');

async function uploadOne(req, res) {
	const cloudinaryFile = await Cloudinary.uploadOne(req.file);
	res.json(cloudinaryFile);
}

async function getAll(req, res) {
	const images = await Cloudinary.getAll();
	res.json({ images: images.resources });
}

router.get('/', rest.asyncwrap(getAll));
router.post('/upload', multer({ dest: 'uploads/' }).single('image'), rest.asyncwrap(uploadOne));

module.exports = router;
