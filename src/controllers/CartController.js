import { CartItem } from '../models/Product.js';

export class CartController {
  constructor(inventoryController) {
    this.cart = [];
    this.inventoryController = inventoryController;
  }

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    if (product.stock === 0) return this.cart;
    
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      this.cart = this.cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      this.cart = [...this.cart, new CartItem(product, 1)];
    }
    
    this.inventoryController.updateStock(product.id, -1);
    return this.cart;
  }

  removeFromCart(productId) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return this.cart;

    this.inventoryController.updateStock(productId, 1);

    if (item.quantity === 1) {
      this.cart = this.cart.filter(item => item.id !== productId);
    } else {
      this.cart = this.cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    return this.cart;
  }

  deleteFromCart(productId) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return this.cart;

    this.inventoryController.updateStock(productId, item.quantity);
    this.cart = this.cart.filter(item => item.id !== productId);
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}