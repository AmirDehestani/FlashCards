import '../styles/Register.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="register-container">
        <form>
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
              />
            </div>
            <div className="input-section">
              <label htmlFor="username">Username</label>
              <input
                className="input-field"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="input-section">
              <label htmlFor="password">Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="input-section">
              <label htmlFor="password">Verify Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                id="password"
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

export default Login;
