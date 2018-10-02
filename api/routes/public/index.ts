import { Router } from 'express';
import userRoutes from './users';
import workExamplesRoutes from './work-examples';
const router = Router()

router.use('/users', userRoutes);
router.use('/work-examples', workExamplesRoutes);

export default router;
