const supabase = require("../config/supabase");

// GET ALL
const getAllHomestays = async (req, res) => {
  const { data, error } = await supabase
    .from("homestays")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.status(200).json(data);
};

// GET BY ID
const getHomestayById = async (req, res) => {
  const { data, error } = await supabase
    .from("homestays")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(200).json(data);
};

// CREATE
const createHomestay = async (req, res) => {
  const { data, error } = await supabase
    .from("homestays")
    .insert([req.body])
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.status(201).json(data);
};

// UPDATE
const updateHomestay = async (req, res) => {
  const { data, error } = await supabase
    .from("homestays")
    .update(req.body)
    .eq("id", req.params.id)
    .select();

  if (error) {
    return res.status(500).json(error);
  }

  res.status(200).json(data);
};

// DELETE
const deleteHomestay = async (req, res) => {
  const { error } = await supabase
    .from("homestays")
    .delete()
    .eq("id", req.params.id);

  if (error) {
    return res.status(500).json(error);
  }

  res.status(200).json({
    message: "Homestay deleted",
  });
};

// SEARCH
const searchHomestays = async (req, res) => {
  const location = req.query.location;

  const { data, error } = await supabase
    .from("homestays")
    .select("*")
    .ilike("location", `%${location}%`);

  if (error) {
    return res.status(500).json(error);
  }

  res.status(200).json(data);
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};