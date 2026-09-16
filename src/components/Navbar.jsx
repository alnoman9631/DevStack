import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <img src="/assets/hamburger.png" alt="Menu" />
        </button>

        {/* Logo */}
        <a href="#" className="navbar-logo">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              className={link === "Home" ? "active" : ""}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="navbar-auth">
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
