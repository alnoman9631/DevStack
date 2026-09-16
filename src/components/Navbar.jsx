import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <a href="#home" className="brand">
          <span className="brand-icon">&lt;/&gt;</span>
          <span className="gradient-text">Dev Stack</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "show-mobile-menu" : ""}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="auth-buttons">
          <button className="signin-button">Sign In</button>
          <button className="signup-button">Sign Up</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;