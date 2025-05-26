import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Header } from "@/components/layout/Header";
import { AuthModal } from "@/components/auth/AuthModal";
import { ProductCard } from "@/components/products/ProductCard";
import { promotionalProducts, categories } from "@/data/mockData";
import { Product } from "@/types";

const Index = () => {
  const handleAddToCart = (product: Product) => {
    console.log("Добавлен в корзину:", product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Categories Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3">
            <span className="text-sm font-medium text-gray-700">
              Категории:
            </span>
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-purple-600"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Скидки до 20% на все товары!
          </h2>
          <p className="text-xl mb-8">
            Успейте купить любимые бренды по выгодным ценам
          </p>
          <Button size="lg" variant="secondary">
            Посмотреть акции
          </Button>
        </div>
      </section>

      {/* Promotional Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Акционные товары
          </h3>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-1">
              {promotionalProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-1 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">StyleShop</h4>
              <p className="text-gray-400 text-sm">
                Современный интернет-магазин с широким ассортиментом товаров
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@styleshop.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Соцсети</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>VKontakte</p>
                <p>Instagram</p>
                <p>Telegram</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Политика конфиденциальности</p>
                <p>Условия использования</p>
                <p>Доставка и возврат</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 StyleShop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
