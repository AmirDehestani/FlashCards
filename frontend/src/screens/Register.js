import '../styles/Register.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import usersServices from '../services/users';

const Register = () => {
  const { createUser } = usersServices;

  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(newUser).then(() =>
      setNewUser({
        email: '',
        username: '',
        password: '',
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <form onSubmit={handleRegister}>
          <div className="inputs-wrapper">
            <div className="form-header">
              <h1>Register</h1>
            </div>
            <div className="input-section">
              <label htmlFor="email">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="username">Username</label>
              <input
                className="input-field"
                type="text"
                name="username"
                id="username"
                value={newUser.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-section">
              <label htmlFor="password">Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                id="password"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="submit-button">Submit</button>
            </div>
            <Link className="already-has-account" to={'/login'}>
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
