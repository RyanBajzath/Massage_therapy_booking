// import the needed node_modules.
const express = require("express");
const app = express();
const port = 8000;

// const cors = require("cors");

// app.use(cors());

// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:3000/",
//     changeOrigin: true,
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//       proxyRes.headers["Access-Control-Allow-Origin"] = "*";
//     },
//   })
// );

//import logic from handlers (destructure)
const {
  getProfile,
  getProfiles,
  getAllAppointments,
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
  .get("/profiles", getProfiles)
  .get("/appointments", getAllAppointments)
  .patch("/profiles/:_id", updateProfile)
  .delete("/profiles/:_id", deleteProfile)

  //endpoints CRUD for Appointments
  .post(`/appointment`, createAppointment)
  .get(`/appointment/:_id`, getAppointment)
  .patch("/appointment/:_id", updateAppointment)
  .delete("/appointment/:_id", deleteAppointment)

  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
