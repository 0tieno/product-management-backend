import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import Product from './models/product.model.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

//middleware
app.use(express.json()); //allows to accept json data in the body

app.get('/api/products', async (req, res) => {
   try {
       const data = await Product.find({});
       res.status(200).json({success: true, products_data:data})
   } catch (error) {
        res.status(404).json({success: false, message: "products not found"})
   }
})

app.post('/api/products', async (req, res) => {
    const product = req.body; //coming from user req body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            successs: false,
            message: "Please provide all fields"
        })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        console.log("Error in create product: ", error.message);
        res.status(500).json({
            success: false,
            message: "server error"
        })
    }
})

app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message:"product not found"})
    }

    try {
       const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({ success: true, message:"product updated successfully", updateProduct})
    } catch (error) {
        res.status(500).json({success:false, message:"server error, try again"})
    }
})

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'product deleted successfully'})
    } catch (error) {
        res.status(404).json({ success: false, message: "product not found"})
    }
})

app.listen(3000, () => {
    connectDB();
    console.log("server running on localhost:3000");
})