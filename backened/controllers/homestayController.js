const homestays = require("../data/homestays");

const getAllHomestays = (req, res) => {
  res.status(200).json(homestays);
};

const getHomestayById = (req, res) => {
  const homestay = homestays.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  res.status(200).json(homestay);
};

const createHomestay = (req, res) => {
  const newHomestay = {
    id: homestays.length + 1,
    ...req.body
  };

  homestays.push(newHomestay);

  res.status(201).json(newHomestay);
};

const updateHomestay = (req, res) => {
  const homestay = homestays.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  Object.assign(homestay, req.body);

  res.status(200).json(homestay);
};

const deleteHomestay = (req, res) => {
  const index = homestays.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  homestays.splice(index, 1);

  res.status(200).json({
    message: "Homestay deleted"
  });
};

const searchHomestays = (req, res) => {
  const city = req.query.city;

  const result = homestays.filter(
    (item) => item.city.toLowerCase() === city.toLowerCase()
  );

  res.status(200).json(result);
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays
};