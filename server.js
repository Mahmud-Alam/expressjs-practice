import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

app.get("/api", (req, res) => {
  let filterData = startups;

  if (req.query) {
    Object.entries(req.query).forEach(([key, value]) => {
      filterData = filterData.filter((data) => {
        if (!(key in data)) return false;
        return String(data[key]).toLowerCase() === String(value).toLowerCase();
      });
    });
  }

  res.status(200).json(filterData);
});

app.get("/api/:key/:value", (req, res) => {
  let filterData = startups;
  const { key, value } = req.params;
  const allowedFields = ["country", "continent", "industry", "has_mvp"];
  const message = {
    code: "404",
    message:
      "Search field not allowed. Please use only 'country', 'continent', 'industry', 'has_mvp'",
  };

  if (allowedFields.includes(key)) {
    filterData = filterData.filter((data) => {
      return String(data[key]).toLowerCase() === String(value).toLowerCase();
    });
    res.status(200).json(filterData);
  } else {
    res.status(400).json(message);
  }
});
