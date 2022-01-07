const express = require('express');
const app  = express.Router();
const productcontroller = require('../controllers/productController');



//
app.get("/",productcontroller.getProducts);
//
app.get("/:id",productcontroller.getProductsById);
//
app.get("/name/:name",productcontroller.getProductsByName);
//
app.get("/pric/:pric",productcontroller.addProductsByPrice);
//
app.post("/",productcontroller.addProducts);
//
app.put("/:id",productcontroller.editProductsById);

app.patch("/:id",productcontroller.editProduct);
//
app.delete("/:id",productcontroller.deleteProduct);

//
module.exports = app;