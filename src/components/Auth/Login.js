import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Use Link for navigation and useNavigate for redirect
import axios from 'axios';  // To send data to the backend
import './Login.css';  // Add your CSS for styling
import logo from '../../assets/images/auth_icon.png';  // Adjust the path based on your folder structure
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  // To navigate to another page after login

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Check if the email is valid
    if (validateEmail(value)) {
      setEmailError('');
      setIsFormValid(true);
    } else {
      setEmailError('Please enter a valid email.');
      setIsFormValid(false);
    }
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check if password length is at least 6 characters
    if (value.length >= 6) {
      setPasswordError('');
      setIsFormValid(true);
    } else {
      setPasswordError('Password must be at least 6 characters.');
      setIsFormValid(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setEmailError('Invalid email format.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/login`, { email, password });
      console.log('Login successful:', response.data);

      // Navigate to the dashboard or another page after login
      navigate('/dashboard');  // Change '/dashboard' to your desired route
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setPasswordError('Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-card">
     <img src={logo} alt="QuizMaster Logo" className="logo" />
     {/* Add your logo */}
      <h2>Log In to QuizMaster</h2>

      <button className="google-login-btn">
        <span>G</span> Create with Google
      </button>

      <div className="divider">or</div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>

        <button type="submit" className="login-btn" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <p className="signup-prompt">
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
