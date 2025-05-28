const products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error("Params undefined");
    };
    if (products.find((element) => element.name === name)) {
        throw new Error("Repeated product");
    };
    const product = { name, price, id: id++ };
    products.push(product);
    return products;
};
function removeProduct(id) {
    
};
function getProducts() {
   return products; 
};
function updateProduct(id, name, price) {
    
};
function getProduct(params) {
    
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}; 