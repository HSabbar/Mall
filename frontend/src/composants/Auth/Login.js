import React, { useState } from 'react';
import '../../index.css';
import './login.css'
import axios from 'axios';
import { Button } from '../Buttons/Button'
import { logo } from '../img/images'

function Login() {
  const [LoginUsername, setLoginUsername] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const AuthWithEmailPassword = () => {
    axios({
      method: "POST",
      data: {
        username: LoginUsername,
        password: LoginPassword
      },
      withCredentials: true,
      url: "http://localhost:5000/login"
    }).then((res) => {if(res.data.user) window.location.replace("http://localhost:3000/");})
  };

  return (
    <div className="login" style={{ textAlign: 'center' }}>
      <div className="login-input-group">
        <h1 className="login-h1" >Se connecter</h1>
        <input className="login-input"
          placeholder="email"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          className="login-input"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <a className="mdp" href="#">Mot de passe oublié ?</a>
        <div className="btn-login">
          <Button buttonSize="btn--medium--large" buttonStyle="btn--secondary" onClick={AuthWithEmailPassword}> Se connecter </Button>
        </div>
      </div>
      <div className="imgp-login">
        <p className="p-login">Powered By</p>
        <img className="img-login" src={logo.img} alt={logo.alt}/>
      </div>
      
    </div>
  );
}

export default Login