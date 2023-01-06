import {connectDB} from "./db/db";
import dotenv, { config } from "dotenv";
dotenv.config();
import Product from "./model/productSchema";

import { productData } from "./product";
const connectDb = connectDB;


const start = async () => {

try {
    await connectDb(process.env.DATABASE_URL!);
    await Product.deleteMany({});
    await Product.create(productData);
    console.log('Connected to Database');
    process.exit(0);
} catch (error) {
    console.log(error)
    process.exit(1)
}
}
 
start();
