import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">PropertyFinder</Link>
        </div>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/search" onClick={() => setMenuOpen(false)}>
            Search
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
