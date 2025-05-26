import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString()} ₽
            </span>
            <span className="text-sm text-gray-500 line-through">
              {product.oldPrice.toLocaleString()} ₽
            </span>
          </div>
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => onAddToCart?.(product)}
          >
            Добавить в корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
