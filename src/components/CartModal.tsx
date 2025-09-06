import React, { useState } from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLocation } from '../context/LocationContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, getCartTotal, addToCart } = useCart();
  const { getLocationInfo, getPriceMultiplier } = useLocation();
  const locationInfo = getLocationInfo();
  const priceMultiplier = getPriceMultiplier();

  const adjustedTotal = getCartTotal() * priceMultiplier;
  const shippingCost = locationInfo.shippingCost;
  const finalTotal = adjustedTotal + shippingCost;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito de compras ({items.length})
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-96 p-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                <button
                  onClick={onClose}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const adjustedPrice = item.price * priceMultiplier;
                  return (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          ${adjustedPrice.toLocaleString('es-CO')} COP
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              // Aquí podrías implementar decrementar cantidad
                            }
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 text-gray-400 hover:text-gray-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${adjustedTotal.toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Envío a {locationInfo.name}:</span>
                  <span>
                    {shippingCost === 0 ? 'Gratis' : `$${shippingCost.toLocaleString('es-CO')} COP`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${finalTotal.toLocaleString('es-CO')} COP</span>
                </div>
                <p className="text-xs text-gray-500">
                  Entrega estimada: {locationInfo.deliveryTime}
                </p>
              </div>
              
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-md font-semibold transition-colors">
                Proceder al pago
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;