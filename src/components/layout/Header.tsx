import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthModal } from "@/components/auth/AuthModal";

export const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">StyleShop</h1>
          </div>

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

          <div className="flex items-center space-x-4">
            <AuthModal
              isOpen={isAuthModalOpen}
              onOpenChange={setIsAuthModalOpen}
              trigger={
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Войти
                </Button>
              }
            />

            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
