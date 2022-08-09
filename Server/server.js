// import the needed node_modules.
const express = require("express");
const app = express();
const port = 8000;

//import from handlers (destructure)
const {
  getProfileById,
  createProfile,
  deleteProfile,
  updateProfile,
} = require(`./handlers`);

express();

//endpoints CRUD for profiles
app.post(`/profiles`, createProfile);
app.get(`/profiles/:_id`, getProfileById);
app.patch("/profiles/:_id", updateProfile);
app.delete("/profiles/:_id", deleteProfile);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
