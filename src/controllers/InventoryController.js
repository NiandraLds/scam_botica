export class InventoryController {
  constructor() {
    this.products = [
      { id: '1', name: 'Paracetamol 500mg', stock: 100, price: 5.99 },
      { id: '2', name: 'Ibuprofeno 400mg', stock: 75, price: 7.50 },
      { id: '3', name: 'Amoxicilina 500mg', stock: 50, price: 12.99 },
    ];
  }

  getProducts() {
    return this.products;
  }

  updateStock(productId, quantity) {
    this.products = this.products.map(p =>
      p.id === productId ? { ...p, stock: p.stock + quantity } : p
    );
    return this.products;
  }

  findProduct(productId) {
    return this.products.find(p => p.id === productId);
  }

  filterProducts(searchTerm) {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}