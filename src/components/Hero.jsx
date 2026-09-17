function Hero() {
  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero">

      <div className="hero-container">

        {/* Hero Content */}
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

            <button
              type="button"
              className="hero-primary-button"
              onClick={scrollToTechnologies}
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="hero-secondary-button"
              onClick={scrollToTechnologies}
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Hero Illustration */}
        <div className="hero-image-wrapper">

          <img
            src="/assets/banner-stack.png"
            alt="Development Stack illustration"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
