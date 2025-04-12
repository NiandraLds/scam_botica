import React from 'react';
import { Search, Plus } from 'lucide-react';

export function InventoryView({ products, searchTerm, onSearchChange, onAddToCart }) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {products.map(product => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
          >
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              <p className="text-sm font-medium text-blue-600">S/. {product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 0}
              className={`px-4 py-2 rounded-md ${
                product.stock === 0
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}