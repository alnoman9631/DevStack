function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <button
            type="button"
            className="footer-logo"
            onClick={scrollToTop}
          >
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
            />
          </button>

          <p>
            Build your ideal development stack by exploring
            technologies, comparing options, and choosing the
            right tools for your next project.
          </p>

          {/* Social Links */}
          <div className="footer-socials">

            <a
              href="#"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              in
            </a>

          </div>

        </div>

        {/* Product */}
        <div className="footer-column">

          <h3>Product</h3>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#stack">
            Your Stack
          </a>

        </div>

        {/* Company */}
        <div className="footer-column">

          <h3>Company</h3>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#">
            Careers
          </a>

        </div>

        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms of Service
          </a>

          <a href="#">
            Cookie Policy
          </a>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy
          </a>

          <a href="#">
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;