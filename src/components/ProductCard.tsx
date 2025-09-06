import React from 'react';
import { Product } from '../types/Product';
import { useLocation } from '../context/LocationContext';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { getPriceMultiplier } = useLocation();
  const adjustedPrice = product.price * getPriceMultiplier();

  return (
    <div className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${adjustedPrice.toLocaleString('es-CO')} COP
          </span>
          <button
            onClick={onSelect}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;