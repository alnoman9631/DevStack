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

  const handleHomeClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <img
            src="/assets/hamburger.png"
            alt=""
          />
        </button>

        {/* Logo */}
        <a
          href="#"
          className="navbar-logo"
          onClick={handleHomeClick}
          aria-label="Dev Stack Home"
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => {
            const href =
              link === "Home"
                ? "#"
                : `#${link.toLowerCase()}`;

            return (
              <a
                href={href}
                key={link}
                className={link === "Home" ? "active" : ""}
                onClick={
                  link === "Home"
                    ? handleHomeClick
                    : undefined
                }
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* Authentication Buttons */}
        <div className="navbar-auth">
          <button
            type="button"
            className="sign-in-button"
          >
            Sign In
          </button>

          <button
            type="button"
            className="sign-up-button"
          >
            Sign Up
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-menu">

          {navLinks.map((link) => {
            const href =
              link === "Home"
                ? "#"
                : `#${link.toLowerCase()}`;

            return (
              <a
                href={href}
                key={link}
                onClick={
                  link === "Home"
                    ? handleHomeClick
                    : () => setMenuOpen(false)
                }
              >
                {link}
              </a>
            );
          })}

        </nav>
      )}
    </header>
  );
}

export default Navbar;