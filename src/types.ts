export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  dosage?: string;
  sideEffects?: string[];
  featured?: boolean;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CategoryType = {
  id: string;
  name: string;
  icon: string;
};