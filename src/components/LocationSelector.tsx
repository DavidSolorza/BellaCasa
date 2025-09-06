import React, { useState } from 'react';
import { MapPin, ChevronDown, X } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const LocationSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLocation, setLocation, getLocationInfo } = useLocation();

  const locations = [
    { id: 'bogota', name: 'Bogotá', region: 'Cundinamarca' },
    { id: 'medellin', name: 'Medellín', region: 'Antioquia' },
    { id: 'cali', name: 'Cali', region: 'Valle del Cauca' },
    { id: 'barranquilla', name: 'Barranquilla', region: 'Atlántico' },
    { id: 'cartagena', name: 'Cartagena', region: 'Bolívar' },
    { id: 'bucaramanga', name: 'Bucaramanga', region: 'Santander' }
  ];

  const currentLocationInfo = getLocationInfo();

  const handleLocationSelect = (locationId: string) => {
    setLocation(locationId);
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Selecciona tu ubicación</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Los precios y tiempos de entrega pueden variar según tu ubicación
            </p>
            
            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.id)}
                  className={`w-full text-left p-3 rounded-md border transition-colors ${
                    currentLocation === location.id
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{location.name}</div>
                  <div className="text-sm text-gray-500">{location.region}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
    >
      <MapPin className="h-5 w-5 text-amber-500" />
      <span className="text-sm font-medium">{currentLocationInfo.name}</span>
      <ChevronDown className="h-4 w-4" />
    </button>
  );
};

export default LocationSelector;