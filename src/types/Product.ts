export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    color: string;
  };
  features: string[];
  model3DPath?: string; // Ruta opcional al modelo 3D
}