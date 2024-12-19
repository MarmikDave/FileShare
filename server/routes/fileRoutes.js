import express from 'express';
import { uploads } from '../middleware/upload.js';
import { uploadFile, downloadFile } from '../controllers/fileController.js';

const router = express.Router();

// File Upload Route
router.post('/upload', uploads.single('file'), uploadFile);

// File Download Route
router.get('/file/:id', downloadFile);

export default router;