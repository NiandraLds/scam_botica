import React from 'react';
import { ShoppingCart, Heart, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 uppercase">{product.category}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-600'}`}>
              {product.stock > 10 ? 'En Stock' : product.stock > 0 ? `Solo quedan ${product.stock}` : 'Agotado'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => onViewDetails(product)}
              className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <Info size={18} className="mr-1" />
              <span>Detalles</span>
            </button>
            <button
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 0}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                product.stock === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <ShoppingCart size={18} className="mr-1" />
              <span>Agregar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;