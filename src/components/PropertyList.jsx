import PropertyCard from "./PropertyCard";

function PropertyList({ properties, favourites, setFavourites }) {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ))}
    </div>
  );
}

export default PropertyList;
