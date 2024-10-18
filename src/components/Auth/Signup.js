import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';  // Import your CSS for styling
import logo from '../../assets/images/logo.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');  // 'weak', 'medium', 'strong', 'very strong'
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  // For navigation

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change and validation
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

  // Handle password strength check
  const checkPasswordStrength = (value) => {
    let strength = '';
    if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value)) {
      strength = 'very-strong';  // Alphanumeric + Symbol
    } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/.test(value)) {
      strength = 'strong';  // Alphanumeric
    } else if (/^(?=.*[a-zA-Z])(?=.{6,})/.test(value)) {
      strength = 'medium';  // Only alphabets
    } else {
      strength = 'weak';  // Less than 6 characters
    }
    return strength;
  };

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const strength = checkPasswordStrength(value);
    setPasswordStrength(strength);

    if (value === confirmPassword) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }

    setIsFormValid(validateEmail(email) && value.length >= 8 && value === confirmPassword);
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value === password) {
      setIsPasswordMatch(true);
      setIsFormValid(validateEmail(email) && password.length >= 8 && value === password);
    } else {
      setIsPasswordMatch(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/signup', { email, password });  //register 
      console.log('Signup successful:', response.data);

      // Show success message
      alert('Account successfully created! Check your email for verification.');

      // Redirect to the verification page or homepage
      navigate('/verification-pending');  // Adjust the route as necessary
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-card">
     <img src={logo} alt="QuizMaster Logo" className="logo" />
     <h2>Create your account</h2>

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
          placeholder="Create Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className={`password-strength ${passwordStrength}`}></div> {/* Add classes for password strength */}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {!isPasswordMatch && <p className="error">Passwords do not match</p>}

        <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>

        <button type="submit" className="continue-btn" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Creating...' : 'Continue'}
        </button>
      </form>

      <p className="signup-prompt">
        Already have an account? <Link to="/login">Log in</Link>
      </p>

      <p className="terms">
        Our <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Signup;
