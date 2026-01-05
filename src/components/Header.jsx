import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-logo">
          <img
            src="/assets/images/properties/logo.png"
            alt="PropertyFinder Logo"
            className="navbar-logo-img"
          />
          <span>PropertyFinder</span>
        </Link>

        {/* Navigation links */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
