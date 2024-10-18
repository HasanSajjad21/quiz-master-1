import React from 'react';
import './Navbar.css';  // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="/assets/images/logo.png" alt="QuizMaster Logo" className="navbar-logo" />
          <span className="logo-text">QuizMaster</span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#blogs">Blogs</a></li>
      </ul>
      <div className="auth-buttons">
        <a href="#login" className="btn-login">Log In</a>
        <a href="#signup" className="btn-signup">Sign Up Free</a>
      </div>
    </nav>
  );
};

export default Navbar;
