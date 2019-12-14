export interface Cart {
  id: string;
  userId: string;
  createdAt: string;
  products: [];

  status: Number;
  totalCartPrice: Number;
}
