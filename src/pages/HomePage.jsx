import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1>Estate Agent Property Finder</h1>

      <p className="home-intro">
        Welcome to the Estate Agent Property Finder application. Use this system
        to search, view, and save properties that match your preferences.
      </p>

      <div className="home-actions">
        <Link to="/search">
          <button className="primary-btn">Search Properties</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
