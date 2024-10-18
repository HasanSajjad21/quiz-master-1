import React from 'react';
import './Navbar.css';  // Import the CSS for styling
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from '../../assets/images/logo.png';  // Import the logo from the assets folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Use the imported logo */}
        <Link to="/">  {/* Use Link instead of a tag */}
          <img src={logo} alt="QuizMaster Logo" className="navbar-logo" />
          <span className="logo-text">QuizMaster</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>  {/* Link to the home route */}
        <li><Link to="/features">Features</Link></li>  {/* Link to the features route */}
        <li><Link to="/how-it-works">How It Works</Link></li>  {/* Link to the how-it-works route */}
        <li><Link to="/blog">Blog</Link></li>  {/* Link to the blog route */}
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="btn-login">Log In</Link>  {/* Link to the login route */}
        <Link to="/signup" className="btn-signup">Sign Up Free</Link>  {/* Link to the signup route */}
      </div>
    </nav>
  );
};

export default Navbar;
