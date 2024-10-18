import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route instead of Switch
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import NewPassword from './components/Auth/NewPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar stays on all pages */}
        <div className="body-content">
          {/* Replace Switch with Routes */}
          <Routes>
            {/* Define each route */}
            <Route path="/" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/blog" element={<Blog />} />

            {/* Authentication pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password" element={<NewPassword />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />  {/* Footer stays on all pages */}
      </div>
    </Router>
  );
}

export default App;
