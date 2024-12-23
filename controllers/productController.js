const Product = require("../models/productModel");

exports.getAllProducts = async (req,res) => {
    try{
        const products = await Product.getAll();
        title = "List product"
        res.render('index',{products,title});
    
    }catch(err){
        res.status(500).send("Error fetching products");
    }
};