export class Product {
  constructor(id, name, stock, price) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
  }
}

export class CartItem extends Product {
  constructor(product, quantity) {
    super(product.id, product.name, product.stock, product.price);
    this.quantity = quantity;
  }
}

export class Sale {
  constructor(id, date, items, total, customerName) {
    this.id = id;
    this.date = date;
    this.items = items;
    this.total = total;
    this.customerName = customerName;
  }
}