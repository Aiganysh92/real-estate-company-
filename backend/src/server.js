const express = require("express");
const cors = require("cors");
const propertiesRouter = require("./routes/properties");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/properties", propertiesRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Crestview Realty API listening on port ${PORT}`);
  });
}

module.exports = app;
