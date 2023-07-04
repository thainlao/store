import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [navigate, setIsLoggedIn]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    if (storedUsername && storedEmail) {
      setUsername(storedUsername);
      setEmail(storedEmail);
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    if (storedEmail === email) {
      setModalMessage('Данный email уже используется');
      setIsSuccess(false);
    } else {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setModalMessage('Success registration');
      setUsername('');
      setEmail('');
      setPassword('');
      setIsSuccess(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && storedPassword === password) {
      setModalMessage('Вы успешно зашли в свой аккаунт');
      setIsSuccess(true);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      setModalMessage('Не правильный логин или пароль');
      setIsSuccess(false);
    }
  };

  const closeModal = () => {
    setModalMessage('');
    setIsSuccess(false);
  };

  return (
    <div className='flex justify-center items-center min-h-screen py-60 lg:py-1 md:py-1 loginbg'>
      <div className="main1">
        <input className='input1' type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignUp}>
            <label
              className='label1'
              htmlFor="chk"
              aria-hidden="true"
            >
              Регистрация
            </label>
            <input
              className='input1'
              type="text"
              name="txt"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className='input1'
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className='input1'
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='button1'>Регистрация</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label className='label1' htmlFor="chk" aria-hidden="true">Логин</label>
            <input
              className='input1'
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className='input1'
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='button1'>Логин</button>
          </form>
        </div>
      </div>
      {modalMessage && (
        <div className={`modal ${isSuccess ? 'success' : 'error'}`}>
          <div className="modal-content">
            {isSuccess ? (
              <React.Fragment>
                <div className="icon">&#10004;</div>
                <h3 className="success">{modalMessage}</h3>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="icon">&#10060;</div>
                <h3 className="error">{modalMessage}</h3>
              </React.Fragment>
            )}
            <button className="button" onClick={closeModal}>Okey!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
