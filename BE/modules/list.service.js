const Lists = require("./list.module");

const getAllLists = async (req, res) => {
  const data = await Lists.find();
  return data;
};
const createLists = async (req, res) => {
  const data = new Lists(req.body);
  return data.save();
};

const getAllById = async (req) => {
  const { id } = req.params;
  const data = await Lists.findById(id);
  return data;
};

module.exports = { getAllLists, createLists, getAllById };