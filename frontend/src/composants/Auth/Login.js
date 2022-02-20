import React, { useState } from 'react';
import '../../index.css';
import './login.css'
import axios from 'axios';
import { Button } from '../Buttons/Button'

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
    }).then((res) => console.log(res))
  };

  return (
    <div className="login" style={{ textAlign: 'center' }}>
      <div className="login-input-group">
        <h1>Se connecter</h1>
        <input className="login-input"
          placeholder="email"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          className="login-input"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <div className="btn-login">
          <Button onClick={AuthWithEmailPassword}> Se connecter </Button>
        </div>

      </div>
    </div>
  );
}

export default Login