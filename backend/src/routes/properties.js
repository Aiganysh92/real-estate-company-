const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/cities", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT DISTINCT city FROM properties ORDER BY city"
    );
    res.json(result.rows.map(row => row.city));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { city, minPrice, maxPrice, bedrooms, type } = req.query;
    const conditions = [];
    const values = [];

    function addCondition(sql, value) {
      values.push(value);
      conditions.push(sql.replace("?", "$" + values.length));
    }

    if (city) addCondition("LOWER(city) = LOWER(?)", city);
    if (minPrice) addCondition("price >= ?::integer", minPrice);
    if (maxPrice) addCondition("price <= ?::integer", maxPrice);
    if (bedrooms) addCondition("bedrooms >= ?::integer", bedrooms);
    if (type) addCondition("LOWER(type) = LOWER(?)", type);

    const where = conditions.length
      ? " WHERE " + conditions.join(" AND ")
      : "";

    const result = await pool.query(
      "SELECT * FROM properties" + where + " ORDER BY id",
      values
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM properties WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
