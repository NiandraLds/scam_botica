export class SalesController {
  constructor() {
    this.sales = [
      {
        id: '1',
        date: '2024-03-10 09:30',
        items: [
          { id: '1', name: 'Paracetamol 500mg', stock: 100, price: 5.99, quantity: 2 },
          { id: '2', name: 'Ibuprofeno 400mg', stock: 75, price: 7.50, quantity: 1 }
        ],
        total: 19.48,
        customerName: 'Juan Pérez'
      },
      {
        id: '2',
        date: '2024-03-10 10:15',
        items: [
          { id: '3', name: 'Amoxicilina 500mg', stock: 50, price: 12.99, quantity: 1 }
        ],
        total: 12.99,
        customerName: 'María García'
      }
    ];
  }

  getSales() {
    return this.sales;
  }

  addSale(sale) {
    this.sales = [sale, ...this.sales];
    return this.sales;
  }

  calculateTotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}