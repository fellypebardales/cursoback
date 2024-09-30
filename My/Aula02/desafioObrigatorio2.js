const fs = require("fs").promises;

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  // Método carregar os produtos do arquivo
  loadProducts = async () => {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        this.products = [];
      } else {
        throw error;
      }
    }
  };

  saveProducts = async () => {
    try {
      await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
    } catch (error) {
      throw new Error("Erro ao salvar produtos no arquivo.");
    }
  };

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    if (
      !title ||
      !description ||
      !price ||
      !thumbnail ||
      !code ||
      stock === undefined
    ) {
      throw Error("É necessário preencher todos os campos!");
    }

    const existingProduct = this.products.find(
      (product) => product.code === code
    );
    if (existingProduct) {
      throw Error("Já existe um produto com esse código!");
    }

    const product = {
      id: this.products.length
        ? this.products[this.products.length - 1].id + 1
        : 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    await this.saveProducts();
  };

  getProductById = async (id) => {
    await this.loadProducts();
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw Error("Produto não encontrado!");
    }
    return product;
  };

  updateProduct = async (id, updates) => {
    await this.loadProducts();
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw Error("Produto não encontrado!");
    }

    this.products[index] = { ...this.products[index], ...updates };
    await this.saveProducts();
  };

  deleteProduct = async (id) => {
    await this.loadProducts();
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw Error("Produto não encontrado!");
    }

    this.products.splice(index, 1);
    await this.saveProducts();
  };
}

(async () => {
  const manager = new ProductManager("products.json");

  try {
    await manager.addProduct(
      "Smartphone Samsung S21+",
      "Com memória de 124GB, 8GB RAM",
      4500,
      "Smartphone.jpg",
      "1245",
      15
    );

    const product = await manager.getProductById(1);
    console.log("Produto encontrado:", product);

    await manager.updateProduct(1, { price: 4200 });
    console.log("Produto atualizado:", await manager.getProductById(1));

    await manager.deleteProduct(1);
    console.log("Produto deletado:", await manager.getProductById(1));
  } catch (error) {
    console.error("Erro:", error.message);
  }
})();
