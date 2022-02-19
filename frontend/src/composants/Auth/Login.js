import React, { useState } from 'react';
import '../../index.css';
import axios from 'axios';

function Login() {
    const [LoginUsername, setLoginUsername] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");

    const AuthWithEmailPassword = ()  => {
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
      <div className="Login" style={{textAlign: 'center'}}>
          <div>
              <h1>Se connecter</h1>
              <input
                placeholder="email"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
               <input
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button onClick={AuthWithEmailPassword}> S'inscrire </button>
          </div>
      </div>
    );
}

export default Login