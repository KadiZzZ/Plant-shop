import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заказ оформлен на имя: ${name}, время получения: ${pickupTime}`);
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ФИО:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Время получения:
          <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
        </label>
        <button type="submit">Завершить бронирование</button>
      </form>
    </div>
  );
}
