import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Login.css';
import { useState } from 'react';
import usersServices from '../services/users';

const Login = () => {
  const { loginUser } = usersServices;

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(user).then(() =>
      setUser({
        username: '',
        password: '',
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="sign-in-container">
        <form onSubmit={handleLogin}>
          <div className="inputs-wrapper">
            <div className="form-header">
              <h1>Sign In</h1>
            </div>
            <div className="input-section">
              <label htmlFor="username">Username</label>
              <input
                className="input-field"
                type="text"
                name="username"
                id="username"
                onChange={handleInputChange}
                value={user.username}
              />
            </div>
            <div className="input-section">
              <label htmlFor="password">Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                value={user.password}
              />
            </div>
            <div>
              <button className="submit-button">Submit</button>
            </div>
            <Link className="no-account" to={'/register'}>
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
