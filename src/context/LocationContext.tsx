import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LocationContextType {
  currentLocation: string;
  setLocation: (location: string) => void;
  getPriceMultiplier: () => number;
  getLocationInfo: () => {
    name: string;
    shippingCost: number;
    deliveryTime: string;
  };
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

interface LocationProviderProps {
  children: ReactNode;
}

const locationData = {
  'bogota': {
    name: 'Bogotá',
    multiplier: 1.0,
    shippingCost: 0,
    deliveryTime: '1-2 días hábiles'
  },
  'medellin': {
    name: 'Medellín',
    multiplier: 1.05,
    shippingCost: 25000,
    deliveryTime: '2-3 días hábiles'
  },
  'cali': {
    name: 'Cali',
    multiplier: 1.08,
    shippingCost: 30000,
    deliveryTime: '2-4 días hábiles'
  },
  'barranquilla': {
    name: 'Barranquilla',
    multiplier: 1.12,
    shippingCost: 35000,
    deliveryTime: '3-5 días hábiles'
  },
  'cartagena': {
    name: 'Cartagena',
    multiplier: 1.15,
    shippingCost: 40000,
    deliveryTime: '3-5 días hábiles'
  },
  'bucaramanga': {
    name: 'Bucaramanga',
    multiplier: 1.07,
    shippingCost: 28000,
    deliveryTime: '2-4 días hábiles'
  }
};

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('bogota');

  const setLocation = (location: string) => {
    setCurrentLocation(location);
  };

  const getPriceMultiplier = () => {
    return locationData[currentLocation as keyof typeof locationData]?.multiplier || 1.0;
  };

  const getLocationInfo = () => {
    const location = locationData[currentLocation as keyof typeof locationData];
    return {
      name: location?.name || 'Bogotá',
      shippingCost: location?.shippingCost || 0,
      deliveryTime: location?.deliveryTime || '1-2 días hábiles'
    };
  };

  return (
    <LocationContext.Provider value={{
      currentLocation,
      setLocation,
      getPriceMultiplier,
      getLocationInfo
    }}>
      {children}
    </LocationContext.Provider>
  );
};