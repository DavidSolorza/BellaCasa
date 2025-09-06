import React, { useState } from 'react';
import { User, X, LogIn, UserPlus, Settings, Heart, Package, HelpCircle } from 'lucide-react';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {isLoggedIn ? 'Mi cuenta' : 'Iniciar sesión'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {!isLoggedIn ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Iniciar sesión
                </button>
                <div className="text-center">
                  <button className="text-sm text-amber-600 hover:text-amber-700">
                    ¿No tienes cuenta? Regístrate
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Juan Pérez</p>
                    <p className="text-sm text-gray-500">juan@email.com</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md">
                    <Package className="h-5 w-5 text-gray-400" />
                    <span>Mis pedidos</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md">
                    <Heart className="h-5 w-5 text-gray-400" />
                    <span>Lista de deseos</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md">
                    <Settings className="h-5 w-5 text-gray-400" />
                    <span>Configuración</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md">
                    <HelpCircle className="h-5 w-5 text-gray-400" />
                    <span>Ayuda</span>
                  </button>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-700 px-3 py-2"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative"
    >
      <User className="h-6 w-6" />
      {isLoggedIn && (
        <span className="absolute -top-1 -right-1 bg-amber-500 w-3 h-3 rounded-full"></span>
      )}
    </button>
  );
};

export default UserMenu;