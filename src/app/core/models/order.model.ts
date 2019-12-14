import { Product } from './product.model';

export interface Order {
  userId: string;
  // cartId: string;
  totalPrice: number;
  // createdAt: Date;

  products: Product[];
}
