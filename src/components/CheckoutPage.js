import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext"; // Импортируем хук для работы с контекстом

export default function CheckoutPage() {
  const { userInfo, updateUserInfo } = useCheckout(); // Получаем данные из контекста
  const [name, setName] = useState(userInfo.firstName); // Инициализируем состояние из контекста
  const [surname, setSurname] = useState(userInfo.lastName);
  const [pickupDate, setPickupDate] = useState(userInfo.pickupDate);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo({ firstName: name, lastName: surname, pickupDate }); // Обновляем контекст с новыми данными
    alert(`Заказ оформлен на имя: ${name} ${surname}, дата получения: ${pickupDate}`);
    navigate("/"); // Переход на главную страницу после оформления
  };

  return (
    <div className="checkout-container">
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            required
          />
        </div>
        <div className="name-input">
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Фамилия"
            required
          />
        </div>
        <div className="date-input">
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Завершить бронирование</button>
      </form>
    </div>
  );
}
