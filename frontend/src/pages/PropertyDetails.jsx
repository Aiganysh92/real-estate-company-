import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPropertyById } from "../api.js";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPropertyById(id)
      .then((data) => {
        setProperty(data);
        setActiveImage(0);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="mx-auto max-w-5xl px-6 py-16 text-center text-crest-600">Loading...</div>;
  }

  if (error || !property) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center text-crest-600">
        <p>Property not found.</p>
        <Link to="/" className="mt-4 inline-block font-semibold text-crest-600 underline">
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/" className="mb-6 inline-block text-sm font-semibold text-crest-600 hover:underline">
        ← Back to listings
      </Link>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={property.gallery[activeImage]}
          alt={property.title}
          className="h-96 w-full object-cover"
        />
      </div>
      <div className="mt-3 flex gap-3">
        {property.gallery.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActiveImage(idx)}
            className={`h-20 w-28 overflow-hidden rounded-lg border-2 ${
              idx === activeImage ? "border-crest-600" : "border-transparent"
            }`}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="font-display text-3xl font-bold text-crest-900">{property.title}</h1>
          <p className="mt-1 text-crest-600">
            {property.address}, {property.city}, {property.state}
          </p>
        </div>
        <p className="font-display text-3xl font-bold text-crest-900">
          {formatPrice(property.price)}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-crest-100 bg-white p-6 sm:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-crest-500">Bedrooms</p>
          <p className="text-lg font-semibold text-crest-900">{property.bedrooms}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-crest-500">Bathrooms</p>
          <p className="text-lg font-semibold text-crest-900">{property.bathrooms}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-crest-500">Square Feet</p>
          <p className="text-lg font-semibold text-crest-900">{property.sqft.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-crest-500">Year Built</p>
          <p className="text-lg font-semibold text-crest-900">{property.yearBuilt}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-xl font-bold text-crest-900">About this home</h2>
        <p className="mt-2 leading-relaxed text-crest-700">{property.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-xl font-bold text-crest-900">Features</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {property.features.map((feature) => (
            <li
              key={feature}
              className="rounded-lg bg-crest-50 px-3 py-2 text-sm font-medium text-crest-700"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-crest-900 p-8 text-center text-white">
        <h2 className="font-display text-2xl font-bold">Interested in this home?</h2>
        <p className="mt-2 text-crest-200">
          Reach out to our team to schedule a tour or ask a question.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-full bg-white px-6 py-3 font-semibold text-crest-900"
        >
          Contact an Agent
        </a>
      </div>
    </div>
  );
}

export default PropertyDetails;
