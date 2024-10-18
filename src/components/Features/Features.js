import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current; // Create a local variable to store the current ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local variable in the cleanup
      }
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <section ref={sectionRef} className={`features-section ${isVisible ? 'visible' : ''}`}>
      <div className="features-content">
        <div className="features-left">
          <h2>Explore Our Powerful Features</h2>
          <p>From AI-powered quiz creation to multiplayer challenges, QuizMaster has everything you need to create, play, and learn.</p>
          <a href="#create-now" className="btn-create-now">Create Now</a>
        </div>

        <div className="features-right">
          {/* Feature 1 */}
          <div className="feature-box">
            <div className="feature-icon">
              {/* Placeholder for GIF/Icon */}
            </div>
            <div className="feature-details">
              <h3>AI Quiz Creation</h3>
              <p>Easily create quizzes with the help of AI. Generate questions on any topic in seconds, saving time and allowing for quick customization.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-box">
            <div className="feature-icon">
              {/* Placeholder for GIF/Icon */}
            </div>
            <div className="feature-details">
              <h3>Multiplayer Mode</h3>
              <p>Engage your friends in quiz battles! Host or join a quiz using a QR code, link, or pin, and experience real-time multiplayer competition.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-box">
            <div className="feature-icon">
              {/* Placeholder for GIF/Icon */}
            </div>
            <div className="feature-details">
              <h3>Flashcards for Learning</h3>
              <p>Enhance your learning experience with flashcards. Review key concepts from your quizzes to strengthen memory and improve retention.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-box">
            <div className="feature-icon">
              {/* Placeholder for GIF/Icon */}
            </div>
            <div className="feature-details">
              <h3>Real-Time Scoring</h3>
              <p>Get instant feedback on your performance! Track scores in real-time, view leaderboards, and challenge yourself to reach the top.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
