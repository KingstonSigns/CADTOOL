import { Router } from 'express';
import { createExport } from '../controllers/exportsController.js';

const router = Router();

// placeholder: in phase 2, accept stl + metadata and store them
router.post('/', createExport);

export default router;
