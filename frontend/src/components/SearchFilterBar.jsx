function SearchFilterBar({ cities, filters, onChange, onReset, resultCount }) {
  const handleInput = (field) => (e) => {
    onChange({ ...filters, [field]: e.target.value });
  };

  return (
    <div
      id="listings"
      className="mx-auto -mt-10 max-w-7xl rounded-2xl border border-crest-100 bg-white px-6 py-6 shadow-lg sm:px-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-crest-700">
            City
          </label>
          <select
            value={filters.city}
            onChange={handleInput("city")}
            className="w-full rounded-lg border border-crest-200 px-3 py-2 text-crest-900 focus:outline-none focus:ring-2 focus:ring-crest-500"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-crest-700">
            Min Price
          </label>
          <select
            value={filters.minPrice}
            onChange={handleInput("minPrice")}
            className="w-full rounded-lg border border-crest-200 px-3 py-2 text-crest-900 focus:outline-none focus:ring-2 focus:ring-crest-500"
          >
            <option value="">No Min</option>
            {[300000, 400000, 500000, 600000, 700000, 800000].map((v) => (
              <option key={v} value={v}>
                ${v.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-crest-700">
            Max Price
          </label>
          <select
            value={filters.maxPrice}
            onChange={handleInput("maxPrice")}
            className="w-full rounded-lg border border-crest-200 px-3 py-2 text-crest-900 focus:outline-none focus:ring-2 focus:ring-crest-500"
          >
            <option value="">No Max</option>
            {[500000, 600000, 700000, 800000, 900000, 1200000].map((v) => (
              <option key={v} value={v}>
                ${v.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-crest-700">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms}
            onChange={handleInput("bedrooms")}
            className="w-full rounded-lg border border-crest-200 px-3 py-2 text-crest-900 focus:outline-none focus:ring-2 focus:ring-crest-500"
          >
            <option value="">Any</option>
            {[1, 2, 3, 4, 5].map((v) => (
              <option key={v} value={v}>
                {v}+ beds
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={onReset}
            className="w-full rounded-lg border border-crest-300 px-4 py-2 font-semibold text-crest-700 transition hover:bg-crest-50"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-crest-600">
        {resultCount} {resultCount === 1 ? "property" : "properties"} found
      </p>
    </div>
  );
}

export default SearchFilterBar;
