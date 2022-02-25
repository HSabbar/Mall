import React, { useState } from 'react';
import '../../index.css';
import axios from 'axios';
import './register.css'
import { Button } from '../Buttons/Button'
import { logo } from '../img/image'

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const add_new_user = () => {
    axios({
      method: "post",
      data: {
        email: registerUsername,
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
        <input
          className="register-input"
          placeholder="Nom"
        />
                <input
          className="register-input"
          placeholder="Prénom"
        />
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
        <div className="pp-register">
        <p className="ppp-register">Vous avez déjà un compte ?</p>
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