import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const sectionsRef = useRef([]);
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const currentRefs = sectionsRef.current; // Create a local variable to store the current ref values

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.map((entry) => entry.isIntersecting);
        setIsVisible(visibleEntries);
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref); // Use the local variable in the cleanup
        }
      });
    };
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How QuizMaster Works</h2>
      <p className="how-it-works-subtitle">Create, play, and track quizzes effortlessly in just a few steps.</p>

      <div className="how-it-works-content">
        {/* Step 1 */}
        <div
          className={`how-it-works-step ${isVisible[0] ? 'visible left' : ''}`}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <img src="/path-to-image-1.jpg" alt="Create a Quiz" className="how-it-works-img" />
          <div className="how-it-works-details">
            <h3>Create or Generate a Quiz</h3>
            <p>
              Start by manually creating a quiz with your own questions or let AI generate a quiz for you in seconds.
              Choose from multiple question types, including MCQs, true/false, and short answers.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={`how-it-works-step ${isVisible[1] ? 'visible right' : ''}`}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <img src="/path-to-image-2.jpg" alt="Play Solo or with Friends" className="how-it-works-img" />
          <div className="how-it-works-details">
            <h3>Play Solo or with Friends</h3>
            <p>
              Play quizzes on your own for practice or invite others to join using a QR code, link, or pin. Compete with
              friends in real-time for added fun!
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`how-it-works-step ${isVisible[2] ? 'visible left' : ''}`}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <img src="/path-to-image-3.jpg" alt="Track Your Progress" className="how-it-works-img" />
          <div className="how-it-works-details">
            <h3>Track Your Progress</h3>
            <p>
              After the quiz, view your score, analyze your performance, and see where you rank on the leaderboard. Use
              flashcards to reinforce learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
