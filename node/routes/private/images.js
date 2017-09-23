const cloudinary = require('cloudinary');
const mongoose = require('mongoose');
const WorkExample = mongoose.model('WorkExample');

const associationFunctions = {
  workExample: workExampleImageUpload,
};

async function uploadOne(req, res) {
  const params = req.body || {};
  params.file = req.file;
  if(params.association) {
    return res.json(await associationFunctions[params.association](params));
  } else {
    try {
      await cloudinary.uploader.upload(params.file.path);
      res.sendStatus(200);
    } catch(error) {
      res.status(500).send(error);
    }
  }
}

async function workExampleImageUpload(params) {
  const workExample = await WorkExample.getOne(params.id);
  const cloudinaryFile = await cloudinary.uploader.upload(params.file.path);
  workExample.images.push(cloudinaryFile.secure_url);
	workExample.markModified('images');
	return await workExample.save();
}

module.exports = {
  uploadOne
};
