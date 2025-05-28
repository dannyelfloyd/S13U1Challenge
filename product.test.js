const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});
// Test crear producto
describe('addProduct', () => {
    test("Should add a product", () => {
        expect(addProduct('', 0)).not.toThrow();
    });
});
afterEach(() => {
    resetProducts();
});

// Test eliminar producto
describe('removeProduct',()=>{});
afterEach(() => {
    resetProducts();
});

// Test obtener producto
describe('getProduct',()=>{});
afterEach(() => {
    resetProducts();
});

// Test actualizar producto 
describe('updateProduct',()=>{});