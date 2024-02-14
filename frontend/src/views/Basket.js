import React from 'react';
import './Basket.css';

let cartItems = JSON.parse(localStorage.getItem("todo items")) || [];
let clearBasket = function () {
  localStorage.removeItem('todo items')
  document.location.reload()
}

function Basket() {

  
  return (
    <div className="Basket">
        <h1>Корзина</h1>
        <div className='container'>
          {cartItems.map((item) => (
            <div className='item'>
              <p>{item.header}</p>
              <span>{item.price}$</span>
            </div>
          ))}
        </div>
        <button onClick={clearBasket}>Очистить корзину</button>
        <button onClick={() => prompt('Укажите номер телефона или почту и мы свяжемся с вами для оформления заказа')}>Оформить заказ</button>
    </div>
  );
}
export default Basket;
