import React from 'react';
import './Profile.css';

function Profile({setModalBox}) {
  return (
    <div className="Profile">
        <button onClick={() => setModalBox('Login')}>Вход</button>
        <button onClick={() => setModalBox('Registration')}>Регистрация</button>
    </div>
  );
}

export default Profile;
