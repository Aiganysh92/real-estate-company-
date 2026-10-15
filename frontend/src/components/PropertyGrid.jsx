import PropertyCard from "./PropertyCard.jsx";

function PropertyGrid({ properties, loading, error }) {
  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center text-crest-600">
        Loading properties...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center text-red-600">
        Something went wrong loading properties: {error}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center text-crest-600">
        No properties match your search. Try adjusting your filters.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyGrid;
