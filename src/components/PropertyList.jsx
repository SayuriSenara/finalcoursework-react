import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  if (properties.length === 0) {
    return <p>No properties match your search.</p>;
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
