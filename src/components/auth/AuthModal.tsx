import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuthMode } from "@/types";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onOpenChange,
  trigger,
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
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
  );
};
