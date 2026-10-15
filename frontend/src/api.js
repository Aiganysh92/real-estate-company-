const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

async function handleResponse(res) {
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
}

export async function fetchProperties(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== "" && value !== undefined && value !== null) {
      params.append(key, value);
    }
  });
  const query = params.toString();
  const res = await fetch(`${API_BASE}/properties${query ? `?${query}` : ""}`);
  return handleResponse(res);
}

export async function fetchPropertyById(id) {
  const res = await fetch(`${API_BASE}/properties/${id}`);
  return handleResponse(res);
}

export async function fetchCities() {
  const res = await fetch(`${API_BASE}/properties/cities`);
  return handleResponse(res);
}
