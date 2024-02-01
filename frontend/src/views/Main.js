import React, { useState, useEffect } from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/item.jpg'
import LK from './LK'

function Main() {
  const[products, setProducts] = useState([])
  useEffect(() => {
    const api = 'http://localhost:9001/products'
    fetch(api)
    .then(result => result.json())
    .then(result => {
      console.log(result)
      setProducts(result.data)
    })

  }, [])
    
    /*const[users, setUsers] = useState([])
    useEffect(() => {
      const api = 'http://localhost:9001/user'
      fetch(api)
      .then(result => result.json())
      .then(result => {
        console.log(result)
        setUsers(result.data)
      })
  
    }, [])*/
    return (
      <div className="Main">
      {products.map((item) => <Product key={item._id} header={item.header} image={item.image}  price={item.price}/>)}
    </div>
  );
}

export default Main;
