import '../styles/Register.css';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="sign-in-container">
        <form>
          <div className="inputs-wrapper">
            <div className="form-header">
              <h1>Sign In</h1>
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
            <div>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
