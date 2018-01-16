import express from 'express';
import path from 'path';
import request from 'request';
import apiRoutes from './api';

const router = express.Router();

router.use('/api', apiRoutes);

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

export default router;
