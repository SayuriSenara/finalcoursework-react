import PropertyList from "../components/PropertyList";
import { useState } from "react";
import propertiesData from "../data/properties.json";

function SearchPage({ favourites }) {
  //load properties from json
  const [properties] = useState(propertiesData);

  <h3>Favourites</h3>;

  {
    favourites.length === 0 && <p>No favourites yet.</p>;
  }

  <ul>
    {favourites.map((fav) => (
      <li key={fav.id}>
        {fav.shortDescription} – £{fav.price}
      </li>
    ))}
  </ul>;

  //search criteria
  const [searchCriteria, setSearchCriteria] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
  });

  //Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  //filter logic
  const filteredProperties = properties.filter((property) => {
    if (
      searchCriteria.type !== "Any" &&
      property.type !== searchCriteria.type
    ) {
      return false;
    }

    if (searchCriteria.minPrice && property.price < searchCriteria.minPrice) {
      return false;
    }

    if (searchCriteria.maxPrice && property.price > searchCriteria.maxPrice) {
      return false;
    }

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

    if (
      searchCriteria.postcode &&
      !property.postcode
        .toLowerCase()
        .startsWith(searchCriteria.postcode.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <h2>Search Properties</h2>

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

        <br />
        <br />

        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={searchCriteria.minPrice}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={searchCriteria.maxPrice}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Min Bedrooms:
          <input
            type="number"
            name="minBedrooms"
            value={searchCriteria.minBedrooms}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Max Bedrooms:
          <input
            type="number"
            name="maxBedrooms"
            value={searchCriteria.maxBedrooms}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

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
      </form>

      <hr />

      {/* Results */}
      <h3>Search Results</h3>
      <p>Matching properties: {filteredProperties.length}</p>

      <PropertyList properties={filteredProperties} />

      <p>Total properties available: {properties.length}</p>
    </div>
  );
}

export default SearchPage;
