import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <i>
          <b>Spark</b>
        </i>
      </div>
      <div className="links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        {accessToken ? (
          <>
            <Link className="nav-link" onClick={handleLogout}>
              Log out
            </Link>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
