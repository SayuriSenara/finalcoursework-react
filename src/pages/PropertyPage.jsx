import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import propertiesData from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();

  // Find property by ID
  const property = propertiesData.find((item) => item.id === Number(id));

  // Image gallery state
  const [activeImage, setActiveImage] = useState(
    property ? property.images[0] : ""
  );

  // TAB STATE - (should be in right place)
  const [activeTab, setActiveTab] = useState("description");

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <Link to="/search">
        <button>← Back to Search</button>
      </Link>

      <h2>{property.shortDescription}</h2>
      <p>
        <strong>£{property.price}</strong> · {property.bedrooms} bedrooms ·{" "}
        {property.postcode}
      </p>

      {/* IMAGE GALLERY*/}

      <img src={activeImage} alt="Property" className="property-main-image" />

      <div className="thumbnail-row">
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className="thumbnail"
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>

      {/* TABS */}

      <div className="tabs">
        <button onClick={() => setActiveTab("description")}>Description</button>

        <button onClick={() => setActiveTab("floorplan")}>Floor Plan</button>

        <button onClick={() => setActiveTab("map")}>Map</button>
      </div>

      <div className="tab-content">
        {activeTab === "description" && <p>{property.longDescription}</p>}

        {activeTab === "floorplan" && (
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="floorplan-image"
          />
        )}

        {activeTab === "map" && (
          <iframe
            title="map"
            width="100%"
            height="300"
            loading="lazy"
            src={`https://www.google.com/maps?q=${property.location.lat},${property.location.lng}&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default PropertyPage;
