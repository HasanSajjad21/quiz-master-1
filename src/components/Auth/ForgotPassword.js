import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgotPassword.css'; // Assuming you have a CSS file for styling
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBackToLogin = () => {
    navigate('/login'); // Navigate back to login page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the email to your API to check if it's registered
      const response = await axios.post(`${apiBaseUrl}/forgot-password`, { email });

      if (response.data.success) {
        // If the email is found, show success message and clear the error
        setSuccessMessage('A reset link has been sent to your email.');
        setErrorMessage('');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // If email is not found, show an error message
        setErrorMessage('No account found with this email.');
        setSuccessMessage('');
      } else {
        setErrorMessage('Something went wrong, please try again.');
      }
    }
  };

  return (
    <div className="forgot-password-card">
      <button className="back-button" onClick={handleBackToLogin}>
        ← {/* Back icon */}
      </button>
      <img src="/path-to-logo.png" alt="QuizMaster Logo" className="logo" />
      <h2>Forgot Your Password?</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your registered email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <button type="submit" className="reset-link-btn" disabled={!email}>
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
