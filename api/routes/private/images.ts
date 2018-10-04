import { Request, Response } from '../../interfaces';
import { Router } from 'express';
import cloudinary from '../../services/cloudinary';
import rest from '../../utils/rest';
import * as multer from 'multer';

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
