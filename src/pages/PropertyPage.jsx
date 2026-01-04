import { useParams, Link } from "react-router-dom";

function PropertyPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Property Page</h2>
      <p>Property ID: {id}</p>

      <Link to="/search">
        <button>Back to Search</button>
      </Link>
    </div>
  );
}

export default PropertyPage;
