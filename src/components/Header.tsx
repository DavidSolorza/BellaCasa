import React from 'react';
import { Search, ShoppingCart, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import LocationSelector from './LocationSelector';
import SearchModal from './SearchModal';
import UserMenu from './UserMenu';
import CartModal from './CartModal';

const Header: React.FC = () => {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Home className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">CasaBella</span>
            </div>

            {/* Location Selector */}
            <div className="hidden md:block">
              <LocationSelector />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-left text-gray-500 hover:border-amber-500 transition-colors sm:text-sm"
                  placeholder="Buscar productos para el hogar..."
                >
                  Buscar productos para el hogar...
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <UserMenu />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;