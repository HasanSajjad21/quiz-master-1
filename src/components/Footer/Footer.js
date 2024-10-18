import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section about">
          <h2>QuizMaster</h2>
          <p>QuizMaster is the ultimate platform for creating, sharing, and playing quizzes. Enhance your learning experience with real-time scoring, AI-generated quizzes, and multiplayer modes.</p>
        </div>

        {/* Useful Links */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@quizmaster.com</p>
          <p>Phone: +1 800 123 456</p>
          <p>Address: 123 Quiz Street, Knowledge City, 12345</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 QuizMaster | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
