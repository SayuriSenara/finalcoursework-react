import { Link } from "react-router-dom";

function PropertyCard({ property, favourites = [], setFavourites }) {
  const isFavourite = favourites.some((fav) => fav.id === property.id);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((fav) => fav.id !== property.id));
    } else {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="property-card"
      style={{
        cursor: "grab",
      }}
    >
      <img
        src={property.images?.[0]}
        alt={property.shortDescription}
        className="property-image"
      />

      <div className="property-content">
        <h3>{property.shortDescription}</h3>

        <p className="property-price">£{property.price}</p>

        <p>
          {property.bedrooms} bedrooms · {property.postcode}
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
