import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.images[0]}
        alt={property.shortDescription}
        className="property-image"
      />

      <div className="property-info">
        <h4>{property.shortDescription}</h4>
        <p>
          <strong>£{property.price}</strong>
        </p>
        <p>
          {property.bedrooms} bedrooms · {property.postcode}
        </p>

        <Link to={`/property/${property.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
