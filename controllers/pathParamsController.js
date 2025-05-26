import { startups } from "../data/data.js";

export const pathParamsController = (req, res) => {
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
};
