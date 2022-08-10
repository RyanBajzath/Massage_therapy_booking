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
const createProfile = async (req, res) => {
  console.log("req.body ", req.body);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("finalproject");
    const result = await db.collection("profiles").insertOne(req.body);
    res.status(201).json({ status: 201, data: result });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, message: err.message });
  }
};
//Read profile by its :_id param getProfileById
const getProfile = (req, res) => {};
//Patch a profile by its :_id param
const updateProfile = (req, res) => {};
//Delete profile by its :_id param
const deleteProfile = (req, res) => {};

//For Appointments
//Create a getAppointmen and give it a _id in the body
const getAppointment = (req, res) => {};
//Read getAppointmen by its :_id param
const createAppointment = (req, res) => {};
//Patch a getAppointmen by its :_id param
const updateAppointment = (req, res) => {};
//Delete getAppointmen by its :_id param
const deleteAppointment = (req, res) => {};

//export handlers
module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
