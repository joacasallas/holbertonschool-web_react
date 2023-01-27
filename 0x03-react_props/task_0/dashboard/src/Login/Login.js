import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"></input>
      <label htmlFor="pass">Password:</label>
      <input type="password" id="pass" name="password" required></input>
      <button>OK</button>
    </div>
  );
}

export default Login;
