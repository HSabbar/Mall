import React, { useState } from 'react';
import '../../index.css';
import axios from 'axios';
import './register.css'
import { Button } from '../Buttons/Button'
import { logo } from '../img/images'

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const add_new_user = () => {
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword
      },
      //      withCredentials: true,
      url: "http://localhost:5000/register"
    }).then((res) => console.log(res))
  };

  return (
    <div className="register" style={{ textAlign: 'center' }}>
      <div className="register-input-group">
        <h1 className="register-h1" >Inscription</h1>
        <input className="register-input"
          placeholder="email"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          className="register-input"
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <div className="btn-register">
          <Button buttonSize="btn--medium--large" buttonStyle="btn--primary" onClick={add_new_user}> S'inscrire </Button>
        </div>
      </div>
      <div className="imgp-register">
        <p className="p-register">Powered By</p>
        <img className="img-register" src={logo.img} alt={logo.alt}/>
      </div>
      
    </div>
  );
}

export default Register