import React from 'react';
import { X, ShoppingCart, ArrowLeft, Star, Shield } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Cerrar</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="sm:flex sm:items-start">
            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left sm:flex-1">
              <button 
                onClick={onClose}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Volver a productos
              </button>
              
              <div className="sm:flex">
                <div className="sm:w-1/2 mb-6 sm:mb-0 sm:pr-6">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
                
                <div className="sm:w-1/2 sm:pl-6">
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Destacado
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">(24 reviews)</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  {product.dosage && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Dosis recomendada:</h4>
                      <p className="text-gray-700">{product.dosage}</p>
                    </div>
                  )}
                  
                  {product.sideEffects && product.sideEffects.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-1">Posibles efectos secundarios:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {product.sideEffects.map((effect, index) => (
                          <li key={index}>{effect}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <span className={`text-sm ${
                      product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-600'
                    }`}>
                      {product.stock > 10 ? 'En Stock' : product.stock > 0 ? `Solo quedan ${product.stock}` : 'Agotado'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        addToCart(product);
                        onClose();
                      }}
                      disabled={product.stock === 0}
                      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        product.stock === 0 
                          ? 'bg-gray-300 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      <ShoppingCart className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
                      Añadir a la cesta
                    </button>
                  </div>
                  
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Shield className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" />
                      Devoluciones gratuitas dentro de los 30 días.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;