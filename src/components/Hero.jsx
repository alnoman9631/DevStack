function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="hero-title-black">
              Build Your Ideal
            </span>

            <span className="hero-title-gradient">
              Development Stack
            </span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary-button">
              Explore Technologies
            </button>

            <button className="hero-secondary-button">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Illustration */}
        <div className="hero-image-wrapper">
          <img
            src="/assets/banner-stack.png"
            alt="Development Stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
