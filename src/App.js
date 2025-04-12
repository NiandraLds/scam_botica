import React, { useState } from 'react';
import { Pill, ShoppingCart, Package, Users } from 'lucide-react';
import { InventoryController } from './controllers/InventoryController';
import { SalesController } from './controllers/SalesController';
import { CartController } from './controllers/CartController';
import { InventoryView } from './views/InventoryView';
import { CartView } from './views/CartView';
import { SalesView } from './views/SalesView';

function App() {
  const [activeTab, setActiveTab] = useState('inventory');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize controllers
  const inventoryController = new InventoryController();
  const salesController = new SalesController();
  const cartController = new CartController(inventoryController);

  // Event handlers
  const handleAddToCart = (product) => {
    cartController.addToCart(product);
    // Force re-render
    setSearchTerm(searchTerm);
  };

  const handleRemoveFromCart = (productId) => {
    cartController.removeFromCart(productId);
    // Force re-render
    setSearchTerm(searchTerm);
  };

  const handleDeleteFromCart = (productId) => {
    cartController.deleteFromCart(productId);
    // Force re-render
    setSearchTerm(searchTerm);
  };

  const handleCompleteSale = () => {
    if (cartController.getCart().length === 0) return;

    const newSale = {
      id: (salesController.getSales().length + 1).toString(),
      date: new Date().toLocaleString(),
      items: cartController.getCart(),
      total: cartController.getTotal(),
      customerName: 'Cliente General'
    };

    salesController.addSale(newSale);
    cartController.clearCart();
    // Force re-render
    setSearchTerm(searchTerm);
  };

  const renderInventoryView = () => (
    <div className="flex gap-6">
      <InventoryView
        products={inventoryController.filterProducts(searchTerm)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddToCart={handleAddToCart}
      />
      <CartView
        cart={cartController.getCart()}
        total={cartController.getTotal()}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onDelete={handleDeleteFromCart}
        onCompleteSale={handleCompleteSale}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Pill className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Farmacia Sistema</h1>
            </div>
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'inventory'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Package className="inline-block h-5 w-5 mr-2" />
                Inventario
              </button>
              <button
                onClick={() => setActiveTab('sales')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'sales'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ShoppingCart className="inline-block h-5 w-5 mr-2" />
                Ventas
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'customers'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="inline-block h-5 w-5 mr-2" />
                Clientes
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'inventory' && renderInventoryView()}
        {activeTab === 'sales' && <SalesView sales={salesController.getSales()} />}
      </main>
    </div>
  );
}

export default App;