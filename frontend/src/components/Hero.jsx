function Hero({ cities, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    onSearch(city);
  };

  return (
    <section className="relative overflow-hidden bg-crest-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/crestview-hero/1600/900')" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 py-24 sm:py-32">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-crest-200">
          Crestview Realty
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          Find a place that feels like home.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-crest-100">
          Browse curated homes, condos, and townhouses across the country's most
          sought-after neighborhoods.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row"
        >
          <select
            name="city"
            className="flex-1 rounded-xl border-0 bg-crest-50 px-4 py-3 text-crest-900 focus:outline-none focus:ring-2 focus:ring-crest-500"
            defaultValue=""
          >
            <option value="">Search by city...</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-xl bg-crest-600 px-6 py-3 font-semibold text-white transition hover:bg-crest-700"
          >
            Search Homes
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
