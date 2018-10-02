import { Router } from 'express';
import { onlyAuthenticated } from 'api/services/auth';
import userRoutes from './users';
import workExamplesRoutes from './work-examples'
import technologiesRoutes from './technologies';
import imagesRoutes from './images';

const router = Router();

router.all('/*', onlyAuthenticated);

router.use('/users', userRoutes);
router.use('/work-examples', workExamplesRoutes);
router.use('/technologies', technologiesRoutes);
router.use('/images', imagesRoutes);

export default router;
