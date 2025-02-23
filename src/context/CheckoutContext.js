// src/context/CheckoutContext.js
import React, { createContext, useState, useContext } from "react";

// 1. Создаем контекст
const CheckoutContext = createContext();

// 2. Хук для использования контекста в других компонентах
export const useCheckout = () => {
  return useContext(CheckoutContext);
};

// 3. Провайдер для оборачивания компонентов, которым нужно передавать данные
export const CheckoutProvider = ({ children }) => {
  // 4. Глобальное состояние для хранения информации о пользователе
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    pickupDate: "",
  });

  // 5. Функция для обновления данных пользователя
  const updateUserInfo = (newInfo) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...newInfo }));
  };

  // 6. Возвращаем провайдер, который оборачивает детей и передает данные в контекст
  return (
    <CheckoutContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </CheckoutContext.Provider>
  );
};
