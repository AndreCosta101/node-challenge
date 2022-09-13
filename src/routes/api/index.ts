import { Router } from 'express';
import { postRoutes } from './posts';
import { userRoutes } from './users';


const router = Router();

router.use('/api', userRoutes);
router.use('/api', postRoutes);


export {router}