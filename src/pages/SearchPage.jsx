import { Link } from "react-router-dom";

function SearchPage() {
  return (
    <div>
      <h2>Search Page</h2>
      <p>Search form will go here</p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default SearchPage;
