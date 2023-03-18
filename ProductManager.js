let productos = [];

class ProductManager {
    constructor(){
        this.products = productos;
    }

    addProduct(newProduct){
        if(!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbail || !newProduct.code || !newProduct.stock){
            return 'Todos los campos son necesarios'
        }
        let product = this.products.find(prod => prod.code === newProduct.code);
        if(product){
            return 'Un producto con este code ya fue ingresado'
        }
        if(this.products.length === 0){
            this.products.push({id: 1, ...newProduct})
        }else{
            this.products.push({id: this.products[this.products.length -1].id + 1, ...newProduct})
        }
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        let product = this.products.find(prod => prod.id === id);
        if(!product){
            return 'Not Found';
        }else{
            return product;
        }
    }
}

const product = new ProductManager(); // Instanciar la clase

product.addProduct({
    title: 'Producto 1',
    description: 'esto es una descripcion',
    price: 1500,
    thumbail: 'link',
    code: 001,
    stock: 100
})

product.addProduct({
    title: 'Producto 2',
    description: 'esto es una descripcion',
    price: 1500,
    thumbail: 'link',
    code: 002,
    stock: 100
});

console.log(product.getProductById(3)); // Not found
console.log(product.getProducts()); // Todos los productos