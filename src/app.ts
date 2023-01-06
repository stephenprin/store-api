import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from 'morgan';
import  { connectDB } from './db/db';

dotenv.config();
const app= express();
app.use(express.json());

const connectDb = connectDB;


//routes
import productRoute from './routes/productRoute';


app.use('/api/v1/product', productRoute);

//error handling
app.all('*', (req: Request, res: Response) => { 
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
  
})




 
//connecting too database and server
const PORT = process.env.PORT || 3500;

const start = async () => { 
    try {
        await connectDb(process.env.DATABASE_URL!);
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
        console.log('Connected to Database');
    } catch (err) {
        console.log(err);
    }
}

start();
