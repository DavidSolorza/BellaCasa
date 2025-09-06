import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">CasaBella</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Tu tienda online de confianza para productos de hogar. Transformamos espacios 
              con diseño, calidad y atención personalizada desde 2020.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Ofertas especiales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Nuevos productos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Guía de estilos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-amber-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-amber-500" />
                <span className="text-sm">info@casabella.com</span>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-amber-500 flex-shrink-0" />
                <span className="text-sm">
                  Av. Principal 123<br />
                  Ciudad, Estado 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Envío gratuito</h4>
              <p className="text-sm text-gray-600">En pedidos superiores a $2.000.000</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Garantía extendida</h4>
              <p className="text-sm text-gray-600">Hasta 5 años en productos seleccionados</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h4>
              <p className="text-sm text-gray-600">Atención al cliente personalizada</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 CasaBella. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;