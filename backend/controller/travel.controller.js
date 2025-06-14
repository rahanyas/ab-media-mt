import {indianDestinations} from '../destination.js'


export const destination = (req, res) => {
  const page = parseInt(req.query.page) || 0;  // current page number
  const limit = parseInt(req.query.limit) || 6; // items per page

  const startIndex = page * limit;
  const endIndex = startIndex + limit;

  const paginatedData = indianDestinations.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedData,
    total: indianDestinations.length, // total count
  });
};


export const topSelling = (req, res) => {
     res.status(200).send(indianDestinations.slice(-6))
}