import React from 'react';
import './Basket.css';

const container = document.getElementsByClassName("container");
let cartItems = JSON.parse(localStorage.getItem("todo items")) || [];

function Basket() {
for (let i = 0; i < cartItems.length; i++) {
  container.innerHTML = `<p>${cartItems.header}</p><span>${cartItems.price}</span>`;
}
  
  return (
    <div className="Basket">
        <h1>Корзина</h1>
        <div className='container'>
        
        </div>
    </div>
  );
}
export default Basket;
