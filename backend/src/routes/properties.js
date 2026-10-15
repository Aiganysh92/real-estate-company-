const express = require("express");
const properties = require("../data/properties");

const router = express.Router();

router.get("/cities", (req, res) => {
  const cities = [...new Set(properties.map((p) => p.city))].sort();
  res.json(cities);
});

router.get("/", (req, res) => {
  const { city, minPrice, maxPrice, bedrooms, type } = req.query;

  let results = properties;

  if (city) {
    results = results.filter((p) => p.city.toLowerCase() === String(city).toLowerCase());
  }
  if (minPrice) {
    results = results.filter((p) => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    results = results.filter((p) => p.price <= Number(maxPrice));
  }
  if (bedrooms) {
    results = results.filter((p) => p.bedrooms >= Number(bedrooms));
  }
  if (type) {
    results = results.filter((p) => p.type.toLowerCase() === String(type).toLowerCase());
  }

  res.json(results);
});

router.get("/:id", (req, res) => {
  const property = properties.find((p) => p.id === Number(req.params.id));
  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }
  res.json(property);
});

module.exports = router;
