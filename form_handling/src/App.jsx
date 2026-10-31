
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', pass);
  };

  return (
    <div className="page">
      <form className="login-card" onSubmit={submitHandler}>
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your account</p>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <p className="footer-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default App;
