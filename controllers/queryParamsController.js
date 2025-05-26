import { startups } from "../data/data.js";

export const queryParamsController = (req, res) => {
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
};
