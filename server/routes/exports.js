import { Router } from 'express';
import { createExport } from '../controllers/exportsController.js';

const router = Router();

// Placeholder: in phase 2, accept STL + metadata and store them
router.post('/', createExport);

export default router;
