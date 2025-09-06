import React from "react";
import { X, ShoppingCart, Heart } from "lucide-react";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import { useLocation } from "../context/LocationContext";
import ThreeDViewer from "./ThreeDViewer";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { getPriceMultiplier, getLocationInfo } = useLocation();
  const adjustedPrice = product.price * getPriceMultiplier();
  const locationInfo = getLocationInfo();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* Fondo clic para cerrar */}
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Contenedor principal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] overflow-hidden">
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-100 text-gray-600 rounded-full p-2 hover:bg-gray-200 shadow-lg z-50"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Columna izquierda → Info del producto */}
        <div className="overflow-y-auto p-6 space-y-8 border-r border-gray-200">
          <div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>

          {/* Especificaciones */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-600">
              Especificaciones
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <span className="font-medium text-gray-500">Material:</span>
                <p>{product.specifications.material}</p>
              </div>
              <div>
                <span className="font-medium text-gray-500">Dimensiones:</span>
                <p>{product.specifications.dimensions}</p>
              </div>
              <div>
                <span className="font-medium text-gray-500">Peso:</span>
                <p>{product.specifications.weight}</p>
              </div>
              <div>
                <span className="font-medium text-gray-500">Color:</span>
                <p>{product.specifications.color}</p>
              </div>
            </div>
          </div>

          {/* Características */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-600">
              Características
            </h3>
            <ul className="space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centro → Visor 3D con fondo de la imagen */}
        <div className="relative flex items-center justify-center bg-gray-50 p-4">
          {/* Imagen de fondo translúcida */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          {/* Overlay suave para no opacar el visor */}
          <div className="absolute inset-0 bg-white/40"></div>

          {/* Visor 3D */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <ThreeDViewer modelPath={product.model3DPath} />
          </div>
        </div>

        {/* Columna derecha → Precio y acciones */}
        <div className="flex flex-col justify-between p-8 border-l border-gray-200">
          {/* Precio destacado */}
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-amber-600">
              ${adjustedPrice.toLocaleString("es-CO")} COP
            </span>
          </div>

          {/* Botones */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center transition-colors text-lg"
            >
              <ShoppingCart className="h-6 w-6 mr-2" />
              Comprar ahora
            </button>

            <button className="w-full bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-4 rounded-xl font-semibold flex items-center justify-center transition-colors text-lg">
              <Heart className="h-6 w-6 mr-2" />
              Agregar a favoritos
            </button>
          </div>

          {/* Info de envío */}
          <div className="text-center text-sm text-gray-600">
            {locationInfo.shippingCost === 0
              ? `Envío gratuito a ${locationInfo.name}`
              : `Envío a ${locationInfo.name}: $${locationInfo.shippingCost.toLocaleString(
                  "es-CO"
                )} COP`}
            <br />
            <span className="block mt-1">
              Entrega estimada: {locationInfo.deliveryTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
