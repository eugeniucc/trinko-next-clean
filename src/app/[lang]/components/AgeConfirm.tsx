"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const AgeConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnder, setisUnder] = useState(false);

  const handleConfirmAge = () => {
    sessionStorage.setItem("ageConfirmed", "true");
    setIsOpen(false);
  };

  const handleUnder = () => {
    setisUnder(true);
    sessionStorage.setItem("ageConfirmed", "false");
    setIsOpen(true);
  };

  useEffect(() => {
    const ageConfirmed = sessionStorage.getItem("ageConfirmed");
    if (!ageConfirmed) {
      setIsOpen(true);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isUnder ? "Вам должно быть 18 лет" : "Подтвердите возраст"}
          </DialogTitle>
          <DialogDescription>
            {isUnder
              ? "Вы должны быть старше 18 лет, чтобы посетить этот сайт."
              : "Выберите, пожалуйста, свой возраст."}
          </DialogDescription>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Button onClick={handleConfirmAge}>Мне 18 или больше</Button>
            <Button onClick={handleUnder}>Нет, мне меньше 18</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
