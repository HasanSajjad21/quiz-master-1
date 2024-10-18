import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewPassword.css';  // Import your CSS file for styling
import logo from '../../assets/images/auth_icon.png';


const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);  // Add state for showing/hiding password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Add state for confirm password
  const navigate = useNavigate();

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

  // Handle password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const strength = checkPasswordStrength(value);
    setPasswordStrength(strength);

    // Check password match
    if (value === confirmPassword) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }

    setIsFormValid(value.length >= 8 && value === confirmPassword);
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value === password) {
      setIsPasswordMatch(true);
      setIsFormValid(password.length >= 8 && value === password);
    } else {
      setIsPasswordMatch(false);
    }
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/reset-password', { password });
      console.log('Password reset successful:', response.data);

      // Show success message or redirect to home
      alert('Password successfully updated!');

      // Redirect to homepage
      navigate('/');
    } catch (error) {
      console.error('Password reset failed:', error.response.data.message);
      alert('Failed to update password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="new-password-card">
     <img src={logo} alt="QuizMaster Logo" className="logo" />
     <h2>Set Your New Password</h2>

      <form onSubmit={handleSubmit}>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="button" className="toggle-password-btn" onClick={toggleShowPassword}>
            {showPassword ? '🙈' : '👁️'}  {/* Eye icon for toggling */}
          </button>
        </div>
        <div className={`password-strength ${passwordStrength}`}></div>  {/* Password strength bar */}

        <div className="password-input-wrapper">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="button" className="toggle-password-btn" onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? '🙈' : '👁️'}  {/* Eye icon for toggling */}
          </button>
        </div>
        {!isPasswordMatch && <p className="error">Passwords do not match</p>}

        <button type="submit" className="save-password-btn" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Saving...' : 'Save New Password'}
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
