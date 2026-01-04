import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Estate Agent Application</h2>
      <p>Welcome to the Home Page</p>

      <Link to="/search">
        <button>Search Properties</button>
      </Link>
    </div>
  );
}

export default HomePage;
