export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  priority?: boolean;
  sizes?: string[];
  colors?: {
    name: string;
    hex: string;
    image: string;
  }[];
}
