export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
}

export type AuthMode = "login" | "register";
