import PropertyList from "../components/PropertyList";
import { useState } from "react";
import propertiesData from "../data/properties.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchPage({ favourites = [], setFavourites }) {
  // Load properties from JSON
  const [properties] = useState(propertiesData);

  // Search criteria state
  const [searchCriteria, setSearchCriteria] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  // Filter logic
  const filteredProperties = properties.filter((property) => {
    // Type
    if (
      searchCriteria.type !== "Any" &&
      property.type !== searchCriteria.type
    ) {
      return false;
    }

    // Price
    if (searchCriteria.minPrice && property.price < searchCriteria.minPrice) {
      return false;
    }

    if (searchCriteria.maxPrice && property.price > searchCriteria.maxPrice) {
      return false;
    }

    // Bedrooms
    if (
      searchCriteria.minBedrooms &&
      property.bedrooms < searchCriteria.minBedrooms
    ) {
      return false;
    }

    if (
      searchCriteria.maxBedrooms &&
      property.bedrooms > searchCriteria.maxBedrooms
    ) {
      return false;
    }

    // Postcode
    if (
      searchCriteria.postcode &&
      !property.postcode
        .toLowerCase()
        .startsWith(searchCriteria.postcode.toLowerCase())
    ) {
      return false;
    }

    // 📅 DATE FILTER (NEW)
    const propertyDate = new Date(property.dateAdded);

    if (startDate && propertyDate < startDate) {
      return false;
    }

    if (endDate && propertyDate > endDate) {
      return false;
    }

    return true;
  });

  return (
    <div className="container">
      <h2>Search Properties</h2>

      {/* ================= FAVOURITES SECTION ================= */}
      <section className="section">
        <h3 className="section-title">Favourite Properties</h3>

        {favourites.length === 0 ? (
          <div className="favourites-empty">
            <p>You have no favourite properties yet.</p>
            <p>Add properties to favourites to see them here.</p>
          </div>
        ) : (
          <div className="property-list">
            {favourites.map((property) => (
              <div className="property-card" key={property.id}>
                <img
                  src={property.images[0]}
                  alt={property.shortDescription}
                  className="property-image"
                />

                <div className="property-content">
                  <h3>{property.shortDescription}</h3>
                  <p className="property-price">£{property.price}</p>
                  <p>
                    {property.bedrooms} bedrooms · {property.postcode}
                  </p>

                  <button
                    className="secondary-btn"
                    onClick={() =>
                      setFavourites(
                        favourites.filter((fav) => fav.id !== property.id)
                      )
                    }
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {favourites.length > 0 && (
          <button
            className="primary-btn"
            style={{ marginTop: "15px" }}
            onClick={() => setFavourites([])}
          >
            Clear All Favourites
          </button>
        )}
      </section>

      {/* ================= SEARCH CRITERIA ================= */}
      <section className="section">
        <h3 className="section-title">Search Criteria</h3>

        <form>
          <label>
            Property Type:
            <select
              name="type"
              value={searchCriteria.type}
              onChange={handleChange}
            >
              <option value="Any">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </label>

          <label>
            Min Price:
            <input
              type="number"
              name="minPrice"
              value={searchCriteria.minPrice}
              onChange={handleChange}
            />
          </label>

          <label>
            Max Price:
            <input
              type="number"
              name="maxPrice"
              value={searchCriteria.maxPrice}
              onChange={handleChange}
            />
          </label>

          <label>
            Min Bedrooms:
            <input
              type="number"
              name="minBedrooms"
              value={searchCriteria.minBedrooms}
              onChange={handleChange}
            />
          </label>

          <label>
            Max Bedrooms:
            <input
              type="number"
              name="maxBedrooms"
              value={searchCriteria.maxBedrooms}
              onChange={handleChange}
            />
          </label>

          <label>
            Postcode Area:
            <input
              type="text"
              name="postcode"
              placeholder="e.g. NW1"
              value={searchCriteria.postcode}
              onChange={handleChange}
            />
          </label>

          <label>
            Date Added From:
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start date"
              isClearable
            />
          </label>

          <label>
            Date Added To:
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select end date"
              isClearable
            />
          </label>
        </form>
      </section>

      {/* ================= SEARCH RESULTS ================= */}
      <section className="section">
        <h3 className="section-title">Search Results</h3>

        <p>Matching properties: {filteredProperties.length}</p>

        <PropertyList
          properties={filteredProperties}
          favourites={favourites}
          setFavourites={setFavourites}
        />

        <p style={{ marginTop: "10px" }}>
          Total properties available: {properties.length}
        </p>
      </section>
    </div>
  );
}

export default SearchPage;
