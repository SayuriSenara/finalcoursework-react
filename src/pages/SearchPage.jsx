import { useState } from "react";
import propertiesData from "../data/properties.json";

function SearchPage() {
  const [properties] = useState(propertiesData);

  const [searchCriteria, setSearchCriteria] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
  });

  return (
    <div>
      <h2>Search Properties</h2>

      <form>
        <label>
          Property Type:
          <select>
            <option value="Any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          Min Price:
          <input type="number" />
        </label>

        <br />
        <br />

        <label>
          Max Price:
          <input type="number" />
        </label>

        <br />
        <br />

        <label>
          Min Bedrooms:
          <input type="number" />
        </label>

        <br />
        <br />

        <label>
          Max Bedrooms:
          <input type="number" />
        </label>

        <br />
        <br />

        <label>
          Postcode Area:
          <input type="text" placeholder="e.g. NW1" />
        </label>
      </form>

      <p>Total properties available: {properties.length}</p>
    </div>
  );
}

export default SearchPage;
