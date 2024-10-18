import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../../assets/images/heroimg.png';  // Correct image import

const Hero = () => {
  const rotatingTexts = ["Create", "Play", "Learn", "Share"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
}, [rotatingTexts.length]); 

  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;

      counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
          const count = +counter.innerText;
          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    };

    const handleScroll = () => {
      const statsSection = document.querySelector('.stats');
      const sectionPosition = statsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">AI-Generated Quizzes in Seconds</p>
        <h1 className="hero-title">
          Unleash Your Inner QuizMaster <span className="highlighted-text">{rotatingTexts[currentTextIndex]}</span>
        </h1>
        <p className="hero-description">
          Create, play, and share quizzes effortlessly with AI-powered tools.
        </p>
        <p className="hero-loved">Loved by 50,000+ Students & Teachers.</p>
        <div className="rating">⭐⭐⭐⭐⭐</div>

        <div className="cta-buttons">
          <a href="#create-quiz" className="btn-create">Create Quiz</a>
          <a href="#video" className="btn-video">Video</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero GIF" className="img-gif" />
      </div>

      <div className="stats">
        <div className="stat-item">
          <span className="counter" data-target="50000">0</span>+ Users
        </div>
        <div className="stat-item">
          <span className="counter" data-target="100000">0</span>+ Quizzes
        </div>
        <div className="stat-item">
          <span className="counter" data-target="10000000">0</span> Questions Answered
        </div>
        <div className="stat-item">
          <span className="counter" data-target="4.8">0</span>/5 Rating
        </div>
        <div className="stat-item">
          <span className="counter" data-target="50000">0</span>+ Multiplayer Games
        </div>
      </div>
    </section>
  );
};

export default Hero;
