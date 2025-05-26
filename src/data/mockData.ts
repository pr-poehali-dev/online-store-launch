import { Product } from "@/types";

export const promotionalProducts: Product[] = [
  {
    id: 1,
    name: "Классическая футболка",
    price: 1990,
    oldPrice: 2490,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Джинсы Slim Fit",
    price: 3990,
    oldPrice: 4990,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Кроссовки спортивные",
    price: 5990,
    oldPrice: 7490,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Толстовка с капюшоном",
    price: 2990,
    oldPrice: 3740,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Платье летнее",
    price: 2490,
    oldPrice: 3115,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
  },
];

export const categories = ["Одежда", "Обувь", "Аксессуары"];
