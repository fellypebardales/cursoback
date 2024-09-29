
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            throw Error('É necessário preencher todos os campos!');
        }
        const produto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(produto);
    }
}

(async () => {
    const manager = new ProductManager();

    try {
        // Adicionando um produto de teste
        await manager.addProduct(
            'Smartphone Samsung S21+',
            'Com memória de 124GB, 8GB RAM',
            4500,
            'Smartphone.jpg',
            '1245',
            15
        );

        // Imprimindo os produtos
        console.log(manager.products);
    } catch (error) {
        console.error(error.message);
    }
})();
