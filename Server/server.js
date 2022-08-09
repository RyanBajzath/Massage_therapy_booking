// import the needed node_modules.
const express = require("express");
const app = express();
const port = 8000;

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

express();

//endpoints CRUD for profiles
app.post(`/profiles`, createProfile);
app.get(`/profiles/:_id`, getProfile);
app.patch("/profiles/:_id", updateProfile);
app.delete("/profiles/:_id", deleteProfile);

//endpoints CRUD for Appointments
app.post(`/Appointments`, getAppointment);
app.get(`/Appointments/:_id`, createAppointment);
app.patch("/Appointments/:_id", updateAppointment);
app.delete("/Appointments/:_id", deleteAppointment);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
