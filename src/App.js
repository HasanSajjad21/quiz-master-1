import React from 'react';
import Navbar from './components/Navbar/Navbar';  // Correct path to Navbar component
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Add the Navbar */}
      <div className="body-content"> {/* Add this wrapper */}
        <Hero />
        <Features />
        <HowItWorks />
        <Blog />
      </div>  {/* Closing div for body-content */}
      <Footer /> {/* Footer outside the body-content */}
    </div>
  );
}

export default App;
