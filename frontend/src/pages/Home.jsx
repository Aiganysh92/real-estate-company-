import { useEffect, useState, useCallback } from "react";
import Hero from "../components/Hero.jsx";
import SearchFilterBar from "../components/SearchFilterBar.jsx";
import PropertyGrid from "../components/PropertyGrid.jsx";
import { fetchProperties, fetchCities } from "../api.js";

const DEFAULT_FILTERS = { city: "", minPrice: "", maxPrice: "", bedrooms: "" };

function Home() {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCities().then(setCities).catch(() => setCities([]));
  }, []);

  const loadProperties = useCallback(async (activeFilters) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProperties(activeFilters);
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProperties(filters);
  }, [filters, loadProperties]);

  const handleHeroSearch = (city) => {
    setFilters((prev) => ({ ...prev, city }));
  };

  const handleReset = () => setFilters(DEFAULT_FILTERS);

  return (
    <div>
      <Hero cities={cities} onSearch={handleHeroSearch} />
      <SearchFilterBar
        cities={cities}
        filters={filters}
        onChange={setFilters}
        onReset={handleReset}
        resultCount={properties.length}
      />
      <PropertyGrid properties={properties} loading={loading} error={error} />
    </div>
  );
}

export default Home;
