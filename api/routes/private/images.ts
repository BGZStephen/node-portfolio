import { Router, Request, Response } from 'express';
import * as cloudinary from 'api/services/cloudinary';
import * as multer from 'multer';
import rest from 'api/utils/rest';

const router = Router();

async function uploadOne(req: Request, res: Response): Promise<any> {
	const cloudinaryFile = await cloudinary.uploadOne(req.file);
	res.json(cloudinaryFile);
}

async function getAll(req: Request, res: Response): Promise<any> {
	const images = await cloudinary.getAll();
	res.json({ images: images.resources });
}

router.get('/', rest.asyncwrap(getAll));
router.post('/upload', multer({ dest: 'uploads/' }).single('image'), rest.asyncwrap(uploadOne));

export default router;
