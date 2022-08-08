// import the needed node_modules.
const express = require("express");
const port = 8000;
const app = express();

express();
app.get(`/`, (req, res) => {
  res.status(200).json({ status: 200, message: "hello!" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
