const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">
          <div className="hero-badge">
            🚀 Build. Learn. Create.
          </div>

          <h1>
            Build Your
            <span className="gradient-text"> Developer Stack</span>
          </h1>

          <p>
            Discover the technologies, frameworks and tools you need
            to build modern, scalable and professional web applications.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies →
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>15+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Developer Focused</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
            alt="Modern technology workspace"
            className="hero-image"
          />

          <div className="floating-card floating-card-one">
            <span>⚡</span>
            <div>
              <strong>Modern Stack</strong>
              <small>Build faster</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>✓</span>
            <div>
              <strong>Ready to Build</strong>
              <small>15 technologies</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;