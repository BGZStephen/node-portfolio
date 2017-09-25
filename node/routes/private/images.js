const cloudinary = require('cloudinary');

async function uploadOne(req, res) {
  try {
    const cloudinaryFile = await cloudinary.uploader.upload(req.file.path);
    res.json(cloudinaryFile);
  } catch(error) {
    res.status(500).send(error);
  }
}

async function getAll(req, res) {
  const images = await cloudinary.v2.api.resources({type: 'upload'});
  res.json({images: images.resources});
}

module.exports = {
  uploadOne,
  getAll
};
