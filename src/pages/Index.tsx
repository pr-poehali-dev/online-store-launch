import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [searchQuery, setSearchQuery] = useState("");

  // Моковые данные товаров
  const promotionalProducts = [
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

  const categories = ["Одежда", "Обувь", "Аксессуары"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">StyleShop</h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Поиск товаров, брендов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>
                      {authMode === "login" ? "Вход в аккаунт" : "Регистрация"}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Пароль" />
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      {authMode === "login" ? "Войти" : "Зарегистрироваться"}
                    </Button>

                    <div className="text-center">
                      <Button variant="link" className="text-sm text-gray-600">
                        Забыли пароль?
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">или</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Войти через Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        Войти через Facebook
                      </Button>
                    </div>

                    <div className="text-center text-sm">
                      {authMode === "login" ? (
                        <>
                          Нет аккаунта?{" "}
                          <Button
                            variant="link"
                            className="p-0 h-auto text-purple-600"
                            onClick={() => setAuthMode("register")}
                          >
                            Зарегистрироваться
                          </Button>
                        </>
                      ) : (
                        <>
                          Уже есть аккаунт?{" "}
                          <Button
                            variant="link"
                            className="p-0 h-auto text-purple-600"
                            onClick={() => setAuthMode("login")}
                          >
                            Войти
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

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
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-lg font-bold text-gray-900">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {product.oldPrice.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Добавить в корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
