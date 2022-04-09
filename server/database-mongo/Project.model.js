const mongoose = require("mongoose");
const db = require("./index.js");

const projectSchema = new mongoose.Schema({
  name:String,
  description: String,
  
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;