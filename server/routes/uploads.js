import { Router } from 'express';
import { uploadImage } from '../controllers/uploadsController.js';

const router = Router();

// Placeholder: in phase 2, add multipart handling and storage
router.post('/', uploadImage);

export default router;
