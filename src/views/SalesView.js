import React from 'react';
import { Calendar, User, Receipt } from 'lucide-react';

export function SalesView({ sales }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Historial de Ventas</h2>
        <p className="text-gray-600">Registro de todas las transacciones</p>
      </div>
      
      <div className="space-y-6">
        {sales.map(sale => (
          <div key={sale.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{sale.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{sale.customerName}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-lg">S/. {sale.total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {sale.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm text-gray-600 border-t pt-2">
                  <span>{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span>Cantidad: {item.quantity}</span>
                    <span>S/. {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}