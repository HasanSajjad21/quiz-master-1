import React from 'react';
import Navbar from './components/Navbar/Navbar';  // Correct path to Navbar component
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Blog from './components/Blog/Blog';






function App() {
  return (
    <div className="App">
      <Navbar />  {/* Add the Navbar */}
      <Hero />
      <Features />
      <HowItWorks />
      <Blog />
      {/* You can add more sections like Hero, Footer, etc. here */}
    </div>
  );
}

export default App;
