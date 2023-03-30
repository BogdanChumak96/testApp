export interface Product {
  id: string;
  name?: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  stock: number;
  images: string[];
  title: string;
}

export interface CartProps {
  products: Product[];
}

export interface ItemListProps {
  products: Product[];
  isSuccess: boolean;
  key?: string;
}

export interface CartItemProps {
  key: string;
  product: Product;
}

export interface FormValues {
  id?: number;
  category: string;
  description?: string;
  url: string;
  price: number;
  rating: number;
  stock: number;
  title: string;
}

export type ProductProps = Pick<
  Product,
  | "id"
  | "name"
  | "description"
  | "price"
  | "rating"
  | "category"
  | "images"
  | "stock"
  | "title"
> & {
  product: Product;
  key?: string;
};

export type ProductResponse = {
  data: Product[];
};
