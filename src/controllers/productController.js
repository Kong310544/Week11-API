exports.getProducts = async (req,res)=>{
    res.send(`Product All `);
};
//

exports.getProductsById = async (req,res)=>{
    res.send(`get product from ${req.params.id}`);
};
//
exports.getProductsByName = async (req,res)=>{
    res.send(`get product by name ${req.params.name}`);
};
//
exports.addProductsByPrice = async (req,res)=>{
    res.send(`get product by Pric ${req.params.pric}`);
};
//
exports.addProducts = async (req,res)=>{
    res.send(`add a product id ${req.body.id} , name ${req.body.name}`);
};
//
exports.editProductsById = async (req,res)=>{
    res.send(`edit product by ${req.params.id}`);
};
//
exports.editProduct = async (req,res)=>{
    res.send(`edit product by id ${req.params.id}`);
};
//
exports.deleteProduct = async (req,res)=>{
    res.send(`delete product by id: ${req.params.id}`);
};