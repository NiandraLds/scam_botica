import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';

export function CartView({ cart, total, onAdd, onRemove, onDelete, onCompleteSale }) {
  return (
    <div className="w-96 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Carrito de Compras</h2>
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                S/. {item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onRemove(item.id)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-medium">{item.quantity}</span>
              <button
                onClick={() => onAdd(item)}
                className="p-1 rounded-md hover:bg-gray-100"
                disabled={item.stock === 0}
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="p-1 rounded-md hover:bg-gray-100 text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">S/. {total.toFixed(2)}</span>
        </div>
        <button
          onClick={onCompleteSale}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={cart.length === 0}
        >
          Completar Venta
        </button>
      </div>
    </div>
  );
}