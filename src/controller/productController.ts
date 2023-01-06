import { Request, Response } from 'express';
import { nodeModuleNameResolver } from 'typescript';
import Product from '../model/productSchema';
import APIFeatures from '../utils/apiQuery';
 

export const createProduct = async (req: Request, res: Response) => { 
    
}

export const getAllProducts = async (req: Request, res: Response) => { 
    
    const features = new APIFeatures(Product.find(), req.query).filter().sort().limitFields().paginate();
    const product = await features.query;
    res.status(200).json({
        data: {
            product,
            nbHits: product.length,
        }
    });
}

export const getAllProductStats = async (req: Request, res: Response) => { 
    const product = await Product.find({}).sort('-name  price');

    res.status(200).json({
        data: {
            product,
            nbHits: product.length,
            message: 'hello from getAllProductStats'
        }
    });
}