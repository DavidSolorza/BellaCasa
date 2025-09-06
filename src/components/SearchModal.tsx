import React, { useState } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    'Sofá moderno',
    'Mesa de centro',
    'Lámpara de pie',
    'Cojines decorativos'
  ];

  const trendingSearches = [
    'Muebles minimalistas',
    'Decoración nórdica',
    'Iluminación LED',
    'Alfombras geométricas',
    'Estanterías industriales'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center pt-16">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Buscar productos</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="¿Qué estás buscando para tu hogar?"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <h4 className="text-sm font-medium text-gray-900">Búsquedas recientes</h4>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 py-1"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                  <h4 className="text-sm font-medium text-gray-900">Tendencias</h4>
                </div>
                <div className="space-y-2">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 py-1"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Presiona Enter para buscar o selecciona una sugerencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;