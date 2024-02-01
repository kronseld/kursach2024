import React from 'react';
import './Product.css';
const arrItems = 'todo items';
const data = JSON.parse(localStorage.getItem(arrItems)) || [];

function Product({header, image, price}) {
  return (
    <div className="Product">
      <img alt='Картинка' src={image}></img>
      <h1>{header}</h1>
      <p>{`${price} ₽`}</p>
      <button onClick={() => {
        const item = { header: `${header}`, price: `${price}`};
        data.push(item);
        localStorage.setItem(arrItems, JSON.stringify(data));
      }}>В корзину</button>
    </div>
  );
}
export default Product;
