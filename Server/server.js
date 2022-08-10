// import the needed node_modules.
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
//import logic from handlers (destructure)
const {
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require(`./handlers`);

app
  .use(express.json())
  //endpoints CRUD for profiles
  .post(`/profiles`, createProfile)
  .get(`/profiles/:_id`, getProfile)
  .patch("/profiles/:_id", updateProfile)
  .delete("/profiles/:_id", deleteProfile)

  //endpoints CRUD for Appointments
  .post(`/Appointments`, getAppointment)
  .get(`/Appointments/:_id`, createAppointment)
  .patch("/Appointments/:_id", updateAppointment)
  .delete("/Appointments/:_id", deleteAppointment)

  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
