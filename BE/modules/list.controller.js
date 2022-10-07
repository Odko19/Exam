const listService = require("./list.service");

const getAllList = async (req, res) => {
  try {
    const data = await listService.getAllLists(req, res);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
const createList = async (req, res) => {
  try {
    const data = await listService.createLists(req, res);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};




const getAllById = async (req, res) => {
  try {
    const data = await listService.getAllById(req);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

module.exports = { getAllList, createList, getAllById };
