export interface Product {
  _id: string;
  name: string;
  price: number;
  categoryId: string;
  imageURL: string;

  quantity: number;
  size: string;
}