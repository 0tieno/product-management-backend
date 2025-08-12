import mongoose from "mongoose";


//first we need a schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,

    },
    image: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    });

//now that we have a schema, we need to create a model based on our schema

const Product = mongoose.model('Product', productSchema);//create a collection called 'Product'

export default Product;

