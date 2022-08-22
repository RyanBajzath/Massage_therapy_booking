//Importing key from .env
require("dotenv").config();

// Connecting to MongoDB
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(MONGO_URI, options);
const db = client.db("finalproject");

//For profiles------------------------------------------------------------
//Create a profile and give it a _id in the body
const createProfile = async (req, res) => {
  try {
    const result = await db.collection("profiles").insertOne(req.body);
    return res.status(201).json({ status: 201, data: result });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};
//Read profile by its :_id param getProfileById
const getProfile = async (req, res) => {
  const _id = req.params._id;
  try {
    const result = await db.collection("profiles").findOne({ _id });
    result
      ? res.status(200).json({ status: 201, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

//get all profiles
const getProfiles = async (req, res) => {
  try {
    const result = await db.collection("profiles").find().toArray();
    result
      ? res.status(200).json({ status: 201, data: result })
      : res.status(404).json({ status: 404, data: "Not Found" });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};

//Patch a profile by its :_id param
const updateProfile = async (req, res) => {
  const _id = req.params._id;
  const query = { _id: _id };

  const newValues = { $set: { ...req.body } };
  try {
    const result = await db.collection("profiles").updateOne(query, newValues);
    result.matchedCount
      ? res
          .status(200)
          .json({ status: 200, message: "document updated", _id, ...req.body })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

//Delete profile by its :_id param
const deleteProfile = async (req, res) => {
  const _id = req.params._id;

  try {
    const result = await db.collection("profiles").deleteOne({ _id });
    result.deletedCount
      ? res.status(204).json({ status: 204, _id, data: null })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
  } catch (err) {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

//For Appointments------------------------------------------------------------------
//Create a getAppointmen and give it a _id in the body
const createAppointment = async (req, res) => {
  try {
    const result = await db.collection("appointments").insertOne(req.body);
    return res.status(201).json({ status: 201, data: result });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  }
};
//Read getAppointmen by its :_id param
const getAppointment = (req, res) => {};
//Patch a getAppointmen by its :_id param
const updateAppointment = (req, res) => {};
//Delete getAppointmen by its :_id param
const deleteAppointment = (req, res) => {};

//export handlers
module.exports = {
  getProfile,
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
