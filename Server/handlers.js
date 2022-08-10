// this needed to use mongodp
const { MongoClient, ObjectId } = require("mongodb");

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
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("finalproject");
    const result = await db.collection("profiles").insertOne(req.body);
    return res.status(201).json({ status: 201, data: result });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};
//Read profile by its :_id param getProfileById
const getProfile = async (req, res) => {
  const _id = req.params._id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("finalproject");
    const result = await db.collection("profiles").findOne({ _id });
    result
      ? res.status(200).json({ status: 201, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
  } catch (err) {
    return res.status(500).json({ status: 500, message: err.message });
  } finally {
    client.close();
  }
};
//Patch a profile by its :_id param
const updateProfile = async (req, res) => {
  const _id = req.params._id;
  const query = { _id };
  const client = new MongoClient(MONGO_URI, options);
  const newValues = { $set: { ...req.body } };
  try {
    await client.connect();
    const db = client.db("finalproject");
    const result = await db.collection("profiles").updateOne(query, newValues);
    if (result.matchedCount === result.modifiedCount) {
      res
        .status(200)
        .json({ status: 200, message: "document updated", _id, ...req.body });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  } finally {
    client.close();
  }
};
//Delete profile by its :_id param
const deleteProfile = async (req, res) => {
  const _id = req.params._id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("finalproject");
    const result = await db.collection("profiles").deleteOne({ _id });
    return res.status(204).json({ status: 204 });
  } catch {
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  } finally {
    client.close();
  }
};

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
