import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

const app = express();

// get APIs
app.get('/',(req, res)=>{
    res.send('APIs are running here!!!');
});
app.get('/api/products',(req,res)=>{
    res.json(products);
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find((item)=> req.params.id === item._id);
    res.json(product);
})

// start the server
app.listen(port, () => {
    console.log(`Server started  on port ${port}`);
});