import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest Articles</h2>
        <p className="blog-subtitle">Stay updated with the latest insights and news</p>

        <div className="blog-posts">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <img src="/path-to-image-1.jpg" alt="Blog Post 1" className="blog-img" />
            <div className="blog-content">
              <h3 className="blog-post-title">Understanding AI-Powered Quizzes</h3>
              <p className="blog-post-text">
                Discover how AI is transforming the way we create quizzes. Learn about the benefits and the technology behind AI-generated questions.
              </p>
              <a href="/blog-post-1" className="blog-read-more">Read More</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <img src="/path-to-image-2.jpg" alt="Blog Post 2" className="blog-img" />
            <div className="blog-content">
              <h3 className="blog-post-title">Engaging with Multiplayer Quizzes</h3>
              <p className="blog-post-text">
                Multiplayer quizzes are a great way to bring people together. Discover the features that make multiplayer quizzes so engaging.
              </p>
              <a href="/blog-post-2" className="blog-read-more">Read More</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-post">
            <img src="/path-to-image-3.jpg" alt="Blog Post 3" className="blog-img" />
            <div className="blog-content">
              <h3 className="blog-post-title">Tracking Progress with Real-Time Scoring</h3>
              <p className="blog-post-text">
                Learn how real-time scoring in quizzes can help track progress and enhance learning. Explore the tools to monitor performance.
              </p>
              <a href="/blog-post-3" className="blog-read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
