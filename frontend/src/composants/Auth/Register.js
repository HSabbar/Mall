import React, { useState } from 'react';
import '../../index.css';
import axios from 'axios';

function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const add_new_user = () => {
        try{
            axios({
                method: "POST",
                data: {
                    username: registerUsername,
                    password: registerPassword
                },
                withCredentials: true,
                url: "http://localhost:5000/register"
            }).then((res) => console.log(res))
        } catch {

        }
        
    };

    return (
      <div className="Register" style={{textAlign: 'center'}}>
              <h1>S'inscrire</h1>
              <input
                placeholder="email"
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
              <input
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <button onClick={add_new_user}> S'inscrire </button>
      </div>
    );
}

export default Register