import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Order from "./Order";

const showOrders = (props, navigate) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Оформить заказ
      </button>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <header>
      <div>
        <span className="logo">Green House</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Кабинет</li>
        </ul>
        <FiShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props, navigate) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
