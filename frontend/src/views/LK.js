import React  from 'react';
import './LK.css';


function Lk() {
    const oldLogin = localStorage.getItem('login')
    let oldPass = localStorage.getItem('password')
    /*function getUser() {
        const api = 'http://localhost:9001/user'
        fetch(api)
        .then(result => result.json())
        .then(result => {
          const userData = result.data
          console.log(result.data)
        })
    }
    getUser()*/
    


    function Update() {
        
        let newPass = document.getElementById('password').value
        const data = {
            login: oldLogin,
            password: newPass
        }
        
        const api = 'http://localhost:9001/user/changePass'
        
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(result => result.json())
        .then(result => {
            console.log(result)
        })
        localStorage.setItem('password', newPass);
        document.location.reload()
    }
    

    return (
        <div className="LK">
        <h1>Личный кабинет</h1>
        <p>Ваш логин:</p>{oldLogin}
        <p>Ваш пароль:</p>{oldPass}
        <h3>Изменить данные</h3>
        <input id='password' type='password' placeholder='Пароль' />   
        <button onClick={Update}>Обновить пароль</button>
    </div>
  );
}

export default Lk;
