const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  todoList: {
    type: String,
    unique:true
  },
  
});

const Lists = mongoose.model("Lists", ListSchema);
module.exports = Lists;