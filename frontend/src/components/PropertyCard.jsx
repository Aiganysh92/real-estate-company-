import { Link } from "react-router-dom";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);

function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-crest-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-crest-900/80 px-3 py-1 text-xs font-semibold text-white">
          {property.type}
        </span>
      </div>
      <div className="p-5">
        <p className="font-display text-2xl font-bold text-crest-900">
          {formatPrice(property.price)}
        </p>
        <h3 className="mt-1 truncate text-base font-semibold text-crest-800">
          {property.title}
        </h3>
        <p className="mt-1 truncate text-sm text-crest-600">
          {property.address}, {property.city}, {property.state}
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-crest-700">
          <span>{property.bedrooms} bd</span>
          <span>{property.bathrooms} ba</span>
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
