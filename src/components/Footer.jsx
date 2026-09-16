function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img src="/assets/logo-text.png" alt="Dev Stack" />
          </a>

          <p>
            Build your ideal development stack by exploring
            technologies, comparing options, and choosing the
            right tools for your next project.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="GitHub">
              Git
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Your Stack</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
