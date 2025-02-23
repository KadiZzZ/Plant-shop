import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Логируем данные перед отправкой, чтобы увидеть, что мы отправляем
    console.log("Отправляем данные:", {
      firstName: name,
      lastName: surname,
      pickupDate: pickupDate,
    });

    fetch('http://localhost:5000/submit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: name,
        lastName: surname,
        pickupDate: pickupDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ответ от сервера:", data);
        alert('Заказ оформлен успешно!');
        navigate("/"); // Перенаправляем на главную страницу
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        alert('Ошибка при оформлении заказа');
      });
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

