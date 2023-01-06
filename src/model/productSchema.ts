
import mongoose from "mongoose";

export interface ProoductInterface {
    name: string;
    price: number;
    rating: number;
    featured: boolean;
    company: string;
    createdAt: Date;
   

}


const productSchema = new mongoose.Schema<ProoductInterface>({
    name:{
    type: String,
    required: [true, 'A product must have a name'],
     
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price'],

    },
    rating: {
        type: Number,
        default: 4.5,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported}'
        }
    }
})

const Product = mongoose.model<ProoductInterface>('Product', productSchema);

export default Product;