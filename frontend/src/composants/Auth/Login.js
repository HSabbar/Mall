import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../../index.css';
import './login.css'
import axios from 'axios';
import { Button } from '../Buttons/Button'
import { logo } from '../img/images'

const Login = (props) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      data: {
        username: state.email,
        password: state.password
      },
      withCredentials: true,
      url: "http://localhost:5000/login"
    }).then((res) => {
      if(res.data.user) {
        props.history.push({
          pathname: '/home',
          state
        });
        console.log(res.data.user);
        //var location = useLocation()
//        <Navigate to={"/home/" + res.data.user._id } state={{ user: res.data.user  }} replace />
 //       window.location.replace("http://localhost:3000/home/" + res.data.user._id);
 
      }  else {
        console.log(res);
      }
    
  })
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

// function Login() {
//   const [LoginId, setLoginId] = useState("");
//   const [LoginUsername, setLoginUsername] = useState("");
//   const [LoginPassword, setLoginPassword] = useState("");
  

  const AuthWithEmailPassword = (event) => {
    axios({
      method: "POST",
      data: {
        username: '',
        password: ""
      },
      withCredentials: true,
      url: "http://localhost:5000/login"
    }).then((res) => {
      if(res.data.user) {

        console.log(res.data.user);
        //var location = useLocation()
//        <Navigate to={"/home/" + res.data.user._id } state={{ user: res.data.user  }} replace />
 //       window.location.replace("http://localhost:3000/home/" + res.data.user._id);
 
      }  else {
        console.log(res);
      }
  });
}

  return (
    <Form className="register-form" onSubmit={handleOnSubmit}>
    <div className="login" style={{ textAlign: 'center' }}>
      <div className="login-input-group">
        <h1 className="login-h1" >Se connecter</h1>
        <input className="login-input"
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          name="password"
          className="login-input"
          placeholder="password"
          onChange={handleInputChange}
        />
        <a className="mdp" href="#">Mot de passe oublié ?</a>
        <div className="btn-login">
          <Button buttonSize="btn--medium--large" buttonStyle="btn--secondary" type="submit"> Se connecter </Button>
        </div>
      </div>
      <div className="imgp-login">
        <p className="p-login">Powered By</p>
        <img className="img-login" src={logo.img} alt={logo.alt}/>
      </div>
      
    </div>
    </Form>
  );
}

export default Login