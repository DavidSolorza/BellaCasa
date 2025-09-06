import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/Product";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Jarra Metálica Scarlett 2L",
    price: 70800, // precio sugerido
    image: "../../public/images/cafetera.jpg",
    description:
      "Jarra eléctrica de acero inoxidable de 2L, con apagado automático, base giratoria 360° y diseño moderno en plateado y negro.",
    category: "Electrodomésticos / Cocina / Hervidores",
    specifications: {
      material: "Acero inoxidable grado alimentario",
      dimensions: "20 x 25 x 16 cm aprox",
      weight: "629g - 800g",
      color: "Plateado y negro",
    },
    features: [
      "Apagado automático cuando hierve el agua",
      "Protección contra ebullición en seco",
      "Base inalámbrica con rotación 360°",
      "Filtro removible y lavable",
      "Indicador LED de funcionamiento",
      "Tapa con bloqueo de seguridad",
      "Asa ergonómica antideslizante",
      "Libre de BPA",
    ],
    model3DPath: "/models/cafetera.glb",
  },

  {
    id: "2",
    name: "Purificador de Agua de Lujo para Grifo",
    price: 129900, // ejemplo de precio sugerido en COP
    image: "https://example.com/images/purificador-agua-lujo-grifo.jpg",
    description:
      "Purificador de agua avanzado con sistema de 7 niveles de filtración, conexión directa al grifo y diseño elegante en blanco con acabados cromados.",
    category: "Hogar / Cocina / Purificadores de Agua",
    specifications: {
      material: "Cerámica + fibra de aire",
      dimensions: "Tamaño compacto adaptable a grifos estándar",
      weight: "Aprox. 500g",
      color: "Blanco con detalles cromados",
    },
    features: [
      "7 etapas de purificación completa",
      "Filtro de cerámica y membrana de fibra de aire",
      "Precisión de filtración de 0.1 micras",
      "Elimina bacterias, óxido, sedimentos y cloro",
      "Incluye 5 adaptadores universales para grifos",
      "Vida útil del filtro de 3 a 6 meses",
      "Instalación sencilla sin plomería adicional",
      "Diseño elegante y duradero",
    ],
    model3DPath: "https://example.com/models/purificador-agua-lujo-grifo.glb",
  },

  {
    id: "1893274",
    name: "Licuadora Eléctrica Portátil Recargable Bluetooth",
    price: 159900, // precio sugerido en COP (ejemplo)
    image: "https://example.com/images/licuadora-portatil-bluetooth.jpg",
    description:
      "Licuadora portátil recargable de 350 ml con batería de larga duración, pantalla digital, cuchillas de acero inoxidable y diseño compacto para jugos y smoothies en cualquier lugar.",
    category: "Electrodomésticos / Cocina / Licuadoras Portátiles",
    specifications: {
      material: "Tritan transparente y acero inoxidable",
      dimensions: "350 ml - diseño compacto",
      weight: "Ultra liviano para transporte",
      color: "Blanco con base plateada",
    },
    features: [
      "Capacidad de 350 ml para porciones individuales",
      "Batería recargable de alta capacidad con 10-15 usos por carga",
      "Carga por USB tipo C y Micro USB (2-3 horas)",
      "Pantalla LCD digital con control de estado",
      "Velocidades variables y múltiples niveles de potencia",
      "Cuchillas de acero inoxidable de grado quirúrgico",
      "Función de auto-limpieza con agua",
      "Libre de BPA y materiales de grado alimenticio",
      "Sistema anti-derrame y sellado hermético para transporte",
      "Componentes desmontables y aptos para lavavajillas",
    ],
    model3DPath: "https://example.com/models/licuadora-portatil-bluetooth.glb",
  },

  {
    id: "c023",
    name: "Dispensador de Jabón Líquido para Lavaplatos con Soporte de Esponjilla",
    price: 19900, // precio sugerido al cliente en COP
    image: "https://example.com/images/dispensador-jabon-lavaplatos.jpg",
    description:
      "Dispensador de jabón líquido 2 en 1 con soporte para esponjilla. Diseño práctico que permite dosificar con una sola mano y mantener la cocina organizada e higiénica.",
    category: "Hogar / Cocina / Organizadores de Lavaplatos",
    specifications: {
      material: "Plástico resistente",
      dimensions: "Capacidad 350 ml (dimensiones ajustables al medir)",
      weight: "Ligero y portátil",
      color: "Disponible según stock",
    },
    features: [
      "Sistema de dosificación con una sola mano",
      "Incluye soporte con rejilla para escurrir la esponja",
      "Capacidad aproximada de 350 ml",
      "Diseño compacto y práctico para cocina",
      "Ideal para mantener el área de lavado organizada",
      "Disponible en múltiples colores según inventario",
    ],
    model3DPath: "https://example.com/models/dispensador-jabon-lavaplatos.glb",
  },
  {
    id: "5",
    name: "Estantería Industrial",
    price: 1799900,
    image: "https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg",
    description:
      "Estantería de estilo industrial con 5 niveles. Combina madera y metal para un look moderno y funcional.",
    category: "Almacenamiento",
    specifications: {
      material: "Madera MDF y estructura metálica",
      dimensions: "180cm x 80cm x 35cm",
      weight: "35kg",
      color: "Negro y madera natural",
    },
    features: [
      "Capacidad de 150kg por repisa",
      "Montaje fácil",
      "Diseño versátil",
      "Acabado anti-corrosión",
      "Ideal para cualquier espacio",
    ],
  },
  {
    id: "6",
    name: "Alfombra Geométrica",
    price: 799900,
    image: "https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg",
    description:
      "Alfombra con patrón geométrico contemporáneo. Tejida a mano con materiales de primera calidad.",
    category: "Decoración",
    specifications: {
      material: "Lana y algodón",
      dimensions: "200cm x 150cm",
      weight: "4kg",
      color: "Beige y gris",
    },
    features: [
      "Tejida a mano",
      "Materiales naturales",
      "Anti-deslizante",
      "Fácil limpieza",
      "Diseño exclusivo",
    ],
  },
];

interface FeaturedProductsProps {
  onProductSelect: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onProductSelect,
}) => {
  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Selección cuidadosa de productos que transformarán tu hogar
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => onProductSelect(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
