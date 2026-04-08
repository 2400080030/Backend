import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <span className="logo-v">V</span>
        <span className="logo-text">OTEFORCHANGE</span>
      </div>
      
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button className="search-btn">
          <Search size={18} />
        </button>
      </div>

      <div className="navbar-links">
        <a href="#" className="nav-link" onClick={() => navigate('/')}>Home</a>
        <a href="#" className="nav-link" onClick={() => navigate('/about')}>About Us</a>
        <a href="#" className="nav-link" onClick={() => navigate('/features')}>Features</a>
        <a href="#" className="nav-link" onClick={() => navigate('/contact')}>Contact Us</a>
        <a href="#" className="nav-link" onClick={() => navigate('/admin')}>Admin</a>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
