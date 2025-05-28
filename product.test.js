const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});
// Test crear producto
describe('addProduct', () => {

    test("Should add a product", () => {
        expect(() => addProduct('', 0)).not.toThrow();
        expect(getProducts()).toEqual([{id:0, name: 'apple', price: 1}]);
        addProduct('pair', 2);
        expect(getProducts()).toEqual([{id:0, name: 'apple', price: 1}, {id:1, name: 'pair', price: 2}]);
    });

    it('should fail when adding a product with no name', () => {
        expect(() => addProduct(null, 3)).toThrow("Params undefined");
    });
    it('should fail when adding a product with no price', () => {
        expect(() => addProduct('banana', null)).toThrow("Params undefined");
    });

    it('should fail when adding a repeated product', () => {
        addProduct('apple', 1);
        expect(() => addProduct('apple', 1)).toThrow("Repeated product");
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