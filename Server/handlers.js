// this needed to use mongodp
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//logic for CRUD operations, creating handles.

//For profiles
//Create a profile and give it a _id in the body
const getProfileById = (req, res) => {};
//Read profile by its :_id param
const createProfile = (req, res) => {};
//Patch a profile by its :_id param
const updateProfile = (req, res) => {};
//Delete profile by its :_id param
const deleteProfile = (req, res) => {};

//export handlers
module.exports = {
  getProfileById,
  createProfile,
  deleteProfile,
  updateProfile,
};
