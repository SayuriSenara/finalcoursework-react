import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import propertiesData from "../data/properties.json";

function PropertyPage({ favourites, setFavourites }) {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === Number(id));

  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(property?.images?.[0]);

  if (!property) {
    return <p>Property not found.</p>;
  }

  const isFavourite = favourites.some((fav) => fav.id === property.id);

  const toggleFavourite = () => {
    if (isFavourite) {
      setFavourites(favourites.filter((fav) => fav.id !== property.id));
    } else {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <div className="container property-page">
      <Link to="/search" className="secondary-btn">
        ← Back to Search
      </Link>

      <h2>{property.shortDescription}</h2>
      <p className="property-price">
        £{property.price} · {property.bedrooms} bedrooms · {property.postcode}
      </p>

      <button className="primary-btn" onClick={toggleFavourite}>
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>

      {/* MAIN IMAGE */}
      <div style={{ marginTop: "20px" }}>
        <img
          src={mainImage}
          alt="Property"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "420px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* THUMBNAILS */}
      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        {property.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            style={{
              width: "90px",
              height: "65px",
              objectFit: "cover",
              borderRadius: "6px",
              cursor: "pointer",
              border: "2px solid #5a7863",
            }}
          />
        ))}
      </div>

      {/* TABS */}
      <div className="tabs">
        <div className="tab-buttons">
          <button
            className="secondary-btn"
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className="secondary-btn"
            onClick={() => setActiveTab("floorplan")}
          >
            Floor Plan
          </button>
          <button className="secondary-btn" onClick={() => setActiveTab("map")}>
            Map
          </button>
        </div>

        <div style={{ marginTop: "15px" }}>
          {activeTab === "description" && <p>{property.longDescription}</p>}
          {activeTab === "floorplan" && (
            <div>
              <h3>Floor Plan</h3>
              <img
                src={property.floorPlan}
                alt="Floor plan"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              />
            </div>
          )}

          {activeTab === "map" && (
            <div>
              <h3>Location</h3>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Property location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${property.location.lat},${property.location.lng}&output=embed`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
