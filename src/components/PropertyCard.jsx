import { Link } from "react-router-dom";

function PropertyCard({ property, favourites, setFavourites }) {
  const isFavourite = favourites.some((fav) => fav.id === property.id);

  const toggleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((fav) => fav.id !== property.id));
    } else {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={property.images[0]}
        alt={property.shortDescription}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{property.shortDescription}</h3>

        <p style={{ fontWeight: "bold", color: "#5a7863" }}>
          £{property.price}
        </p>

        <p>
          {property.bedrooms} bedrooms · {property.postcode}
        </p>

        <p style={{ fontSize: "13px", opacity: 0.7 }}>
          Added on: {property.dateAdded}
        </p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <Link to={`/property/${property.id}`} className="secondary-btn">
            View Details
          </Link>

          <button className="primary-btn" onClick={toggleFavourite}>
            {isFavourite ? "Remove Favourite" : "Add to Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
