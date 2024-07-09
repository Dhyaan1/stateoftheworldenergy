const express = require("express");

const router = express.Router();

const countryData = require("shared/countries.json");

router.get("/", async (req, res) => {
  try {
    const response = {};
    response.countries = countryData.reduce((acc, curr) => {
      acc[curr.code] = curr["2020wind"];
      return acc;
    }, {});
    response.min = Math.min(...Object.values(response.countries));
    response.max = Math.max(...Object.values(response.countries));
    response.countries.global = 2100;

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
});

module.exports = router;
