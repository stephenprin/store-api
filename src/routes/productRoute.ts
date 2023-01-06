import express, { NextFunction, Request, Response } from 'express';

import { getAllProducts, getAllProductStats ,createProduct } from '../controller/productController';
import { upload } from '../controller/uploadController';

const router = express.Router();


router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/stats', getAllProductStats);

//upload
 router.post('/upload', upload);

export default router;