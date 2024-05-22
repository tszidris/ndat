import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
