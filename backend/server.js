import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); //allows to accept json data in the body

app.use('/api/products', productRoutes)

app.listen(3000, () => {
    connectDB();
    console.log(`server running on localhost:${PORT}`);
})