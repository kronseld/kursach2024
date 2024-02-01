import React from 'react';
import './Header.css';
import Profile from './Profile';

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
      <img className='logo' src='https://papik.pro/uploads/posts/2022-01/1643611858_8-papik-pro-p-logotip-krossovok-8.jpg'></img>
      <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('Basket')}>Корзина</li>
        <li  onClick={() => {
          if(localStorage.getItem('login')){
            setPage('LK')
          } else {
            alert('Войдите в систему')
          }
          }}>Личный кабинет</li>
      </ul>
      <Profile setModalBox={setModalBox}/>
    </div>
  );
}

export default Header;
