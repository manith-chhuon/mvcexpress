require('dotenv').config()
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');

const PORT = process.env.PORT || 3000;

app.use('/product',productRoutes);

app.listen(PORT,()=>{
    console.log("server is running on port "+PORT);
});